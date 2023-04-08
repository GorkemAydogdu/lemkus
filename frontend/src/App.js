import { useState, useEffect, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import UIContext from "./context/ui-context";
// import MenuContext from "./context/menu-context";

//Components
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import MenuMobile from "./components/Menu/MenuMobile";
import Backdrop from "./components/UI/Backdrop";
import Cart from "./components/cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";

//Pages
import Home from "./pages/home";
import Faq from "./pages/faq";
import PrivacyPolicy from "./pages/privacy-policy";
import TsCs from "./pages/terms-and-conditions";
import Contact from "./pages/contact";
import About from "./pages/about";
import Search from "./pages/search";
import Account from "./pages/account";
import Brands from "./pages/brands";
import News from "./pages/news";
import NewsDetail from "./pages/newsDetail";
import Launches from "./pages/launches";
import Collection from "./pages/collection";
import CollectionDetail from "./pages/collectionDetail";
import Payment from "./pages/payment";

import gsap from "gsap";

//styles
import "./styles/App.scss";

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
  { path: "/search", name: "Search", Component: Search },
  { path: "/account", name: "Account", Component: Account },
];

function App() {
  //CART CONTINUE SHOP TIKLANDIĞINDA KAPATILACAK
  //PROPS ILE DAGITILACAK HER YERDE MEVCUT
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [buttonInnerHTML, setButtonInnerHTML] = useState("");
  const [categories, setCategories] = useState([]);

  const location = useLocation();
  const uiCtx = useContext(UIContext);

  const clickedButtonHandler = (data) => {
    setButtonInnerHTML(data);
  };

  async function getMenu() {
    try {
      const res = await fetch("http://localhost:5000/menu");
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getMenu();
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
  }, [location, dimensions, uiCtx]);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {location.pathname !== "/checkouts" && (
        <Header categories={categories} clickedButton={clickedButtonHandler} />
      )}

      {categories
        .filter((item) => item.name === buttonInnerHTML)
        .map((item) => (
          <Menu className="menu menu--active" key={item._id} item={item} />
        ))}
      <Routes>
        <Route path="/collections/:categoryName" element={<Collection />} />
        <Route
          path={`/collections/:categoryName/:productName`}
          element={<CollectionDetail />}
        />
        <Route path={`/products/:productName`} element={<CollectionDetail />} />

        <Route path="/blogs/news" element={<News />} />
        <Route path="/blogs/news/:id" element={<NewsDetail />} />

        <Route path="/" element={<Home />} />
        <Route path="/pages/launches" element={<Launches />} />
        <Route path="/pages/brands" element={<Brands />} />

        <Route path="/checkouts" element={<Payment />} />

        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>

      <Cart />
      {dimensions.width < 1025 && <MenuMobile />}
      <Wishlist />

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
          const cart = document.querySelector(".cart");
          cart.style.transform = "translateX(100%)";

          gsap.to(".backdrop--cart", {
            opacity: 0,
            display: "none",
            ease: "Expo.easeInOut",
          });
          gsap.to("body", {
            overflow: "visible",
          });
        }}
        className="backdrop backdrop--cart"
      />
    </>
  );
}

export default App;
