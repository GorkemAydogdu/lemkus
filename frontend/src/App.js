import { useState, useEffect, useCallback, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import UIContext from "./context/ui-context";
//Components
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import MenuMobile from "./components/Menu/MenuMobile";
import Backdrop from "./components/UI/Backdrop";
import Cart from "./components/cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
//Pages
import Home from "./pages/home/home";
import Faq from "./pages/faq";
import PrivacyPolicy from "./pages/privacy-policy";
import TsCs from "./pages/terms-and-conditions";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import Search from "./pages/search/search";
import Account from "./pages/account/account";
import Brands from "./pages/brands/brands";
import News from "./pages/news/news";
import NewsDetail from "./pages/newsDetail/newsDetail";
import Launches from "./pages/launches/launches";
import Collection from "./pages/collection/collection";
import CollectionDetail from "./pages/collectionDetail/collectionDetail";
import Payment from "./pages/payment";
import gsap from "gsap";
//styles
import "./styles/App.scss";

import { useAuth0 } from "@auth0/auth0-react";

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const routes = [
  { path: "/pages/faq", name: "faq", Component: Faq },
  {
    path: "/pages/privacy-policy",
    name: "Privacy Policy",
    Component: PrivacyPolicy,
  },
  { path: "/pages/terms-and-conditions", name: "TsCs", Component: TsCs },
  { path: "/pages/contact", name: "Contact", Component: Contact },
  { path: "/pages/about", name: "About", Component: About },
  // { path: "/search", name: "Search", Component: Search },
  { path: "/account", name: "Account", Component: Account },
  { path: "/checkouts", name: "Payment", Component: Payment },
  { path: "/pages/brands", name: "Brands", Component: Brands },
  // {
  //   path: "/collections/:categoryName",
  //   name: "Collection",
  //   Component: Collection,
  // },
];

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [buttonInnerHTML, setButtonInnerHTML] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [news, setNews] = useState([]);

  const location = useLocation();
  const uiCtx = useContext(UIContext);

  const clickedButtonHandler = (data) => {
    setButtonInnerHTML(data);
  };

  async function getMenu() {
    try {
      const res = await fetch("https://lemkus-backend.onrender.com/menu");
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function getProducts() {
    try {
      const res = await fetch("https://lemkus-backend.onrender.com/product");
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function getNews() {
    try {
      const res = await fetch("https://lemkus-backend.onrender.com/news");
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      const data = await res.json();
      setNews(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  const { isAuthenticated, user } = useAuth0();

  const getWishlist = useCallback(async () => {
    if (isAuthenticated) {
      const res = await fetch("https://lemkus-backend.onrender.com/wishlist");
      const data = await res.json();

      setWishlist(data.filter((filtered) => filtered.userName === user.name));
    }
  }, [user, isAuthenticated]);

  useEffect(() => {
    getMenu();
    getProducts();
    getNews();
  }, []);
  useEffect(() => {
    getWishlist();
  }, [getWishlist]);

  useEffect(() => {
    const debounceHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debounceHandleResize);
    return () => {
      window.removeEventListener("resize", debounceHandleResize);
    };
  }, []);

  useEffect(() => {
    if (
      location.pathname === "/pages/contact" ||
      location.pathname === "/pages/about" ||
      location.pathname === "/blogs/news"
    ) {
      uiCtx.onChanged();
      document.body.style.backgroundColor = "#191919";
    } else {
      uiCtx.onUnChanged();
      document.body.style.backgroundColor = "#fff";
    }
  }, [location, uiCtx]);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {location.pathname !== "/checkouts" && (
        <Header
          categories={categories}
          dimensions={dimensions}
          clickedButton={clickedButtonHandler}
        />
      )}

      {categories
        .filter((item) => item.name === buttonInnerHTML)
        .map((item) => (
          <Menu className="menu menu--active" key={item._id} item={item} />
        ))}
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="/" element={<Home products={products} news={news} />} />
        <Route path="/search" element={<Search products={products} />} />
        <Route
          path="/pages/launches"
          element={<Launches products={products} news={news} />}
        />
        <Route path="/blogs/news" element={<News news={news} />} />
        <Route path="/blogs/news/:id" element={<NewsDetail news={news} />} />
        <Route
          path="/collections/:categoryName"
          element={<Collection products={products} />}
        />
        <Route
          path="/collections/:categoryName/:productName"
          element={<CollectionDetail news={news} />}
        />
        <Route
          path="/products/:productName"
          element={<CollectionDetail news={news} />}
        />
      </Routes>

      <Cart data={products} />
      <Wishlist wishlist={wishlist} />
      {dimensions.width < 1025 && <MenuMobile menu={categories} />}

      {dimensions.width > 1024 && (
        <Backdrop
          onClick={() => {
            const activeHeaderButton = document.querySelector(
              ".header__button--active"
            );
            activeHeaderButton.classList.remove("header__button--active");
            setButtonInnerHTML("");
            gsap.to(".backdrop--menu", {
              opacity: 0,
              display: "none",
              ease: "Expo.easeInOut",
            });
            gsap.to("body", {
              overflow: "visible",
            });
          }}
          className="backdrop backdrop--menu"
        />
      )}
      <Backdrop
        className="backdrop backdrop--wishlist"
        onClick={() => {
          uiCtx.toggleWishlist();
        }}
      />
      <Backdrop
        onClick={() => {
          uiCtx.toggleCart();
        }}
        className="backdrop backdrop--cart"
      />
    </>
  );
}

export default App;
