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
import Login from "./pages/login";
import Register from "./pages/register";
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

const DUMMY_DATA = {
  menu: [
    {
      id: 1,
      name: "Sneakers",
      links: [
        {
          id: 1,
          category: "Collections",
          items: [
            { id: 1, pathname: "/sneakers", name: "All Sneakers" },
            { id: 2, pathname: "/sneakers?gender=mens", name: "Mens" },
            { id: 3, pathname: "/sneakers?gender=womens", name: "Womens" },
            {
              id: 4,
              pathname: "/sneakers?gender=grade-school",
              name: "Grade School",
            },
          ],
        },
        {
          id: 2,
          category: "Brands",
          items: [
            { id: 1, pathname: "/sneakers?category=nike", name: "Nike" },
            {
              id: 2,
              pathname: "/sneakers?category=air-jordan",
              name: "Air Jordan",
            },
            {
              id: 3,
              pathname: "/sneakers?category=new-balance",
              name: "New Balance",
            },
            {
              id: 4,
              pathname: "/sneakers?category=adidas",
              name: "Adidas",
            },
            {
              id: 5,
              pathname: "/sneakers?category=converse",
              name: "Converse",
            },
            { id: 6, pathname: "/sneakers?category=reebook", name: "Reebok" },
            { id: 7, pathname: "/sneakers?category=puma", name: "Puma" },
            { id: 8, pathname: "/sneakers?category=crocs", name: "Crocs" },
            {
              id: 9,
              pathname: "/sneakers?category=ewing-athletics",
              name: "Ewing Athletics",
            },
            { id: 10, pathname: "/sneakers?category=asics", name: "Asics" },
          ],
        },
      ],
      featured: {
        name: "Featured",
        items: [
          {
            id: 1,
            name: "Air Max 90 QS",
            pathname: "/sneakers?category=air-max-90",
            image:
              "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/AM90-Sneakers-Featured-Dropdown_Images_556x508_40cd2b3a-c299-440b-b9f5-0b6125e26508.png?v=1628241321",
          },
          {
            id: 2,
            pathname: "/sneakers?category=blazer",
            name: "Nike Blazer",
            image:
              "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/Blazer-Dropdown_Images_556x508_06428b80-5d44-4a2a-8cf2-2b64f899ef7c.jpg?v=1627726517",
          },
          {
            id: 3,
            pathname: "/sneakers?category=chuck-70",
            name: "Chuck 70",
            image:
              "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/Chuck-70--Dropdown_Images_556x508_174a36f1-11b3-4acc-b099-36ed7dfb65ad.jpg?v=1627726533",
          },
        ],
      },
    },
    {
      id: 2,
      name: "Apparel",
      links: [
        {
          id: 1,
          category: "Collections",
          items: [
            { id: 1, pathname: "/apparel", name: "All Apparel" },
            { id: 2, pathname: "/apparel?gender=mens", name: "Mens" },
            { id: 3, pathname: "/apparel?gender=womens", name: "Womens" },
          ],
        },
        {
          id: 2,
          category: "Mens",
          gender: "Mens",
          items: [
            {
              id: 1,
              pathname: "/apparel?category=t-shirts/tops&gender=mens",
              name: "T-shirts/Tops",
            },
            {
              id: 2,
              pathname: "/apparel?category=sweatshirts&gender=mens",
              name: "Sweatshirts",
            },
            {
              id: 3,
              pathname: "/apparel?category=outerwear&gender=mens",
              name: "Outerwear",
            },
            {
              id: 4,
              pathname: "/apparel?category=bottoms&mens=mens",
              name: "Bottoms",
            },
            {
              id: 5,
              pathname: "/apparel?category=team-sportswear&gender=mens",
              name: "Team Sportswear",
            },
          ],
        },
        {
          id: 3,
          category: "Womens",
          gender: "Womens",
          items: [
            {
              id: 1,
              pathname: "/apparel?category=t-shirts/tops&gender=womens",
              name: "T-shirts/Tops",
            },
            {
              id: 2,
              pathname: "/apparel?category=sweatshirts&gender=womens",
              name: "Sweatshirts",
            },
            {
              id: 3,
              pathname: "/apparel?category=outerwear&gender=womens",
              name: "Outerwear",
            },
            {
              id: 4,
              pathname: "/apparel?category=bottoms&gender=womens",
              name: "Bottoms",
            },
          ],
        },
      ],
      featured: {
        name: "Featured",
        items: [
          {
            id: 1,
            name: "PARIS SAINT-GERMAIN LOGO T-SHIRT",
            pathname: "/apparel/paris-saint-germain-logo-t-shirt?id=12",
            image:
              "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/PSG-Apparel-Featured-Dropdown_Images_556x508-Mens-Apparel.png?v=1631001892",
          },
          {
            id: 2,
            pathname: "/apparel/nsw-icon-gx-hoodie-w?id=13",

            name: "Nsw Icon GX Hoodie",
            image:
              "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/Apparel-Featured-Dropdown_Images_556x508-Wmns-Apparel.png?v=1627889788",
          },
        ],
      },
    },
    {
      id: 3,
      name: "Kids",
      links: [
        {
          id: 1,
          category: "Collections",
          items: [
            {
              id: 1,
              pathname: "/kids",
              name: "All Kids",
            },
            {
              id: 2,
              pathname: "/kids?category=sneakers",
              name: "All Kids Sneakers",
            },
            {
              id: 3,
              pathname: "/kids?category=apparel",
              name: "All Kids Apparel",
            },
          ],
        },
        {
          id: 2,
          category: "Brands",
          items: [
            {
              id: 1,
              pathname: "/kids?category=nike",
              name: "Nike",
            },
            {
              id: 2,
              pathname: "/kids?category=air-jordan",
              name: "Air Jordan",
            },
            {
              id: 3,
              pathname: "/kids?category=adidas",
              name: "Adidas",
            },
            {
              id: 4,
              pathname: "/kids?category=converse",
              name: "Converse",
            },
            {
              id: 5,
              pathname: "/kids?category=crocs",
              name: "Crocs",
            },
            {
              id: 6,
              pathname: "/kids?category=new-balance",
              name: "New Balance",
            },
          ],
        },
        {
          id: 3,
          category: "Apparel",
          items: [
            {
              id: 1,
              pathname: "/kids?category=t-shirts/tops",
              name: "T-shirts/Tops",
            },
            {
              id: 2,
              pathname: "/kids?category=sweatshirts",
              name: "Sweatshirts",
            },
            {
              id: 3,
              pathname: "/kids?category=outerwear",
              name: "Outerwear",
            },
            {
              id: 4,
              pathname: "/kids?category=bottoms",
              name: "Bottoms",
            },
            {
              id: 5,
              pathname: "/kids?category=infant-sets",
              name: "Infant Sets",
            },
            {
              id: 6,
              pathname: "/kids?category=team-sportswear",
              name: "Team Sportswear",
            },
          ],
        },
      ],
      featured: {
        name: "Featured",
        items: [
          {
            id: 1,
            name: "Air Max 1 QS (TD)",
            image:
              "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/Kids-Featured-Dropdown_Images_556x508-1.jpg?v=1627890516",
          },
          {
            id: 2,
            name: "Crocs x Paw Patrol",
            image:
              "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/Kids-Featured-Dropdown_Images_556x508-2.png?v=1627890527",
          },
        ],
      },
    },
    {
      id: 4,
      name: "Accessories",
      links: [
        {
          id: 1,
          category: "Collections",
          items: [{ id: 1, pathname: "/accessories", name: "All Accessories" }],
        },
        {
          id: 2,
          category: "Types",
          items: [
            {
              id: 1,
              pathname: "/accessories?category=headwear",
              name: "Headwear",
            },
            { id: 2, pathname: "/accessories?category=socks", name: "Socks" },
            { id: 3, pathname: "/accessories?category=bags", name: "Bags" },
            {
              id: 4,
              pathname: "/accessories?category=sneaker-care",
              name: "Sneaker Care",
            },
            {
              id: 5,
              pathname: "/accessories?=crocs-jibbitz",
              name: "Crocs Jibbitz",
            },
            { id: 6, pathname: "/accessories?=sunglasses", name: "Sunglasses" },
          ],
        },
      ],
      featured: {
        name: "Featured",
        items: [
          {
            id: 1,
            name: "The North Face Headwear",
            image:
              "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/Accessories-Featured-Dropdown_Images_556x508-1.png?v=1627892249",
          },
          {
            id: 2,
            name: "Nike Nsw Crossbody",
            image:
              "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/Accessories-Featured-Dropdown_Images_556x508-2.png?v=1627892249",
          },
          {
            id: 3,
            name: "Nike NSW Everyday Crew",
            image:
              "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/Accessories-Featured-Dropdown_Images_556x508-3.png?v=1627892835",
          },
        ],
      },
    },
  ],
  launches: [
    {
      id: 1,
      name: "Air Jordan 2 Retro",
      price: 3699.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Air_Jordan_2x_abada9df-a5b5-4f3b-92e0-e189743df31f_200x.png?v=1629719248",
      sizes: [6, 7, 8, 9, 10, 11, 12],
      details:
        "1 pair per customer only. Orders with duplicate details including contact details, shipping address and banking details will be cancelled. All release dates and mechanisms are subject to change as per Lemkus or the relevant brands discretion should it be needed.",
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DX2454-106-1.png?v=1671455949",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DX2454-106-2.png?v=1671455949",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DX2454-106-3.png?v=1671455949",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DX2454-106-4.png?v=1671455949",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DX2454-106-5.png?v=1671455949",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DX2454-106-6.png?v=1671455949",
        },
      ],
    },
    {
      id: 2,
      name: "Air Jordan 1 Retro Hi OG [W]",
      price: 3399.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Air_Jordan_2x_abada9df-a5b5-4f3b-92e0-e189743df31f_200x.png?v=1629719248",
      sizes: [3, 4, 5, 6, 7, 8],
      details:
        "1 Pair Per Customer only. Orders with duplicate details including contact details, shipping address and banking details will be cancelled. All release dates and mechanisms are subject to change as per Lemkus or the relevant brands discretion should it be needed.",
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DZ2523-001-1.png?v=1671354786",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DZ2523-001-2.png?v=1671354786",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DZ2523-001-3.png?v=1671354786",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DZ2523-001-4.png?v=1671354786",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DZ2523-001-5.png?v=1671354786",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DZ2523-001-6.png?v=1671354786",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DZ2523-001-7.png?v=1671354786",
        },
      ],
    },
    {
      id: 3,
      name: "Air Jordan 1 Zoom Cmft 2 Sp [W]",
      price: 3399.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Air_Jordan_2x_abada9df-a5b5-4f3b-92e0-e189743df31f_200x.png?v=1629719248",
      sizes: [3, 4, 5, 6, 3.5, 4.5, 5.5, 6.5, 7, 8],
      details:
        "Releasing in-store and online 09 February 2023. 1 Pair Per Customer only. Orders with duplicate details including contact details, shipping address and banking details will be cancelled. All release dates and mechanisms are subject to change as per Lemkus or the relevant brands discretion should it be needed.",
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV1304-106-1.png?v=1675771173",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV1304-106-2.png?v=1675771173",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV1304-106-3.png?v=1675771173",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV1304-106-4.png?v=1675771173",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV1304-106-5.png?v=1675771173",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV1304-106-6.png?v=1675771173",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV1304-106-7.png?v=1675771173",
        },
        {
          id: 8,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV1304-106-8.png?v=1675771173",
        },
      ],
    },
    {
      id: 4,
      name: "SKY JORDAN 1 (PS)",
      price: 1299.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Air_Jordan_2x_abada9df-a5b5-4f3b-92e0-e189743df31f_200x.png?v=1629719248",
      sizes: [1, 1.5, 2, 2.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5],
      details:
        "Inspired by the AJ1, the Sky Jordan 1 is equal parts iconic and adorable. It has soft foam cushioning, rubber traction and a hook-and-loop strap for easy on and off.",
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/BQ7197-016-1.png?v=1676557696",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/BQ7197-016-2.png?v=1676557696",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/BQ7197-016-2.png?v=1676557696",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/BQ7197-016-4.png?v=1676557696",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/BQ7197-016-5.png?v=1676557696",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/BQ7197-016-6.png?v=1676557696",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/BQ7197-016-7.png?v=1676557696",
        },
        {
          id: 8,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/BQ7197-016-8.png?v=1676557696",
        },
      ],
    },
    {
      id: 5,
      name: "AIR JORDAN 1 LOW",
      price: 2299.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Air_Jordan_2x_abada9df-a5b5-4f3b-92e0-e189743df31f_200x.png?v=1629719248",
      sizes: [6, 7, 8, 9, 10, 11, 12],
      details:
        "Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that's familiar yet always fresh. With an iconic design that pairs perfectly with any 'fit, these kicks ensure you'll always be on point.",
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/553558-215-1.png?v=1675772520",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/553558-215-2.png?v=1675772520",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/553558-215-3.png?v=1675772520",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/553558-215-4.png?v=1675772520",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/553558-215-5.png?v=1675772520",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/553558-215-6.png?v=1675772520",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/553558-215-7.png?v=1675772520",
        },
      ],
    },
    {
      id: 6,
      name: "AIR JORDAN 1 MID",
      price: 2399.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Air_Jordan_2x_abada9df-a5b5-4f3b-92e0-e189743df31f_200x.png?v=1629719248",
      sizes: [6, 7, 8, 9, 10, 11, 12],
      details:
        "You ready for your moment in the sun? Every time the AJ1 gets a remake you get the classic sneaker in new colors and textures for a fresh look with a familiar feel. Premium materials and accents give modern expression to an all-time favorite. Get out there and shine.",
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FD1029-400-1.png?v=1675844504",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FD1029-400-2.png?v=1675844504",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FD1029-400-3.png?v=1675844504",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FD1029-400-4.png?v=1675844504",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FD1029-400-5.png?v=1675844504",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FD1029-400-6.png?v=1675844504",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FD1029-400-7.png?v=1675844504",
        },
      ],
    },
    {
      id: 7,
      name: "AIR MORE UPTEMPO '96",
      price: 3399.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Nike_2x_d319ed79-6a55-4f30-a769-88431ed60091_200x.png?v=1625832579",
      sizes: [6, 7, 8, 9, 10, 11, 6.5, 7.5, 8.5, 9.5, 10.5, 12],
      details:
        "Bring original hoops style back to the streets with the Air More Uptempo. Classic black and white leather and energetic iridescent accents put a fashion forward twist on the '90s icon whose graffiti-styled graphics have always been an off-court fave. Full-length, visible Air cushioning delivers the comfort you need, while elastic straps over the tongue keep your style sharp whether you rock them laced or unlaced.",
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0819-001-1.png?v=1675856297",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0819-001-2.png?v=1675856297",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0819-001-3.png?v=1675856297",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0819-001-4.png?v=1675856297",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0819-001-5.png?v=1675856297",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0819-001-6.png?v=1675856297",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0819-001-7.png?v=1675856297",
        },
      ],
    },
    {
      id: 8,
      name: "AIR ZOOM FLIGHT 95",
      price: 3399.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Nike_2x_d319ed79-6a55-4f30-a769-88431ed60091_200x.png?v=1625832579",
      sizes: [6, 7, 8, 9, 10, 11],
      details:
        "Have you ever had déjà shoe? Flash back to one of the first shoes to popularize Zoom Air technology and relive the hoops revolution. With its flowing lines, patent leather accents and futuristic 'bug eye' detailing, the Air Zoom Flight 95 is no dream—it's your ticket to turn heads.",
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0820-100-1.png?v=1675952388",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0820-100-2.png?v=1675952388",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0820-100-3.png?v=1675952388",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0820-100-4.png?v=1675952388",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0820-100-5.png?v=1675952388",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0820-100-6.png?v=1675952388",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0820-100-7.png?v=1675952388",
        },
      ],
    },
    {
      id: 9,
      name: "AIR FOAMPOSITE ONE",
      price: 4699.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Nike_2x_d319ed79-6a55-4f30-a769-88431ed60091_200x.png?v=1625832579",
      sizes: [6, 7, 8, 9, 10, 11, 6.5, 7.5, 8.5, 9.5, 10.5],
      details:
        "Cross between b-ball greatness and rare off-court style in the Nike Air Foamposite 1. From the liquid look of its Foamposite upper to the signature '1 Cent' logo and low-profile cushioning, it lets you bridge past, present and future. It's game time.",
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0815-100-1.png?v=1675856996",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0815-100-2.png?v=1675856996",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0815-100-3.png?v=1675856996",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0815-100-4.png?v=1675856996",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0815-100-5.png?v=1675856996",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0815-100-6.png?v=1675856996",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0815-100-7.png?v=1675856996",
        },
      ],
    },
    {
      id: 10,
      name: "AIR PENNY II",
      price: 3599.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Nike_2x_d319ed79-6a55-4f30-a769-88431ed60091_200x.png?v=1625832579",
      sizes: [5.5, 6, 7, 8, 9, 10, 11, 12],
      details:
        "Flash back to '96 in the Air Penny 2. Bold and unmistakable, it was the first Air Penny to combine Max and Zoom Air technology. Now, the daring design comes wrapped in patent leather, while the signature “1 Cent” logo on the side and wavy design lines keep the coveted off-court appeal strong.",
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0817-100-1.png?v=1675944088",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0817-100-2.png?v=1675944088",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0817-100-3.png?v=1675944088",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0817-100-4.png?v=1675944088",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0817-100-5.png?v=1675944088",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0817-100-6.png?v=1675944088",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0817-100-7.png?v=1675944088",
        },
      ],
    },
  ],
  products: [
    {
      id: 1,
      name: "MARKET x PUMA",
      items: [
        {
          id: 1,
          name: "Slipstream Market",
          price: 2999.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Puma_2x_653bb449-61b7-403b-b776-f19b9033a582_200x.png?v=1625832674",
          sizes: [6, 7, 8, 9, 10, 11],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/385592-02-1.png?v=1669883169",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/385592-02-2.png?v=1669883169",
            },
          ],
        },
        {
          id: 2,
          name: "Slipstream Market",
          price: 2999.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Puma_2x_653bb449-61b7-403b-b776-f19b9033a582_200x.png?v=1625832674",
          sizes: [6, 7, 8, 9, 10, 11],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/38559201-1.png?v=1669883279",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/38559201-2.png?v=1669883279",
            },
          ],
        },
        {
          id: 3,
          name: "Puma x Market Relaxed T-shirt",
          price: 799.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Puma_2x_653bb449-61b7-403b-b776-f19b9033a582_200x.png?v=1625832674",
          sizes: ["S", "M", "L", "XL"],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/537396_85-1.png?v=1669884473",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/537396_85-2.png?v=1669884473",
            },
          ],
        },
        {
          id: 4,
          name: "Puma x Market Relaxed Hoodie",
          price: 2499.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Puma_2x_653bb449-61b7-403b-b776-f19b9033a582_200x.png?v=1625832674",
          sizes: ["S", "M", "L", "XL"],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/535083_64-1.png?v=1669884366",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/535083_64-2.png?v=1669884366",
            },
          ],
        },
        {
          id: 5,
          name: "Puma x Market Relaxed Pants",
          price: 2199.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Puma_2x_653bb449-61b7-403b-b776-f19b9033a582_200x.png?v=1625832674",
          sizes: ["S", "M", "L", "XL"],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/535086_01-1.png?v=1669890120",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/535086_01-2.png?v=1669890120",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "KIDS",
      items: [
        {
          id: 1,
          name: "Jordan 11 cmft Low (TD)",
          price: 999.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Air_Jordan_2x_abada9df-a5b5-4f3b-92e0-e189743df31f_200x.png?v=1629719248",
          sizes: [1.5, 2.5, 3.5, 4.5, 6.5, 8.5],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/CZ0906-102-1.png?v=1665051316",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/CZ0906-102-2.png?v=1665051316",
            },
          ],
        },
        {
          id: 2,
          name: "Future Rider Splash (TD)",
          price: 999.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Puma_2x_653bb449-61b7-403b-b776-f19b9033a582_200x.png?v=1625832674",
          sizes: [4, 5, 6, 7, 8, 9],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/381856_09-1.png?v=1669883596",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/381856_09-2.png?v=1669883596",
            },
          ],
        },
        {
          id: 3,
          name: "NMD 360 (PS)",
          price: 999.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/adidas-logo-1_200x.png?v=1625832639",
          sizes: [10, 11, 12, 13, 1, 2, 2.5],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GX3315_1.png?v=1669203730",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GX3315_2.png?v=1669203730",
            },
          ],
        },
        {
          id: 4,
          name: "Chuck '70 (ps)",
          price: 999.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Converse_2x_27950166-1070-4c68-83bb-182e8200ee7d_200x.png?v=1625832601",
          sizes: [10, 11, 12, 13, 1, 2],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/368983C-1.png?v=1662111454",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/368983C-2.png?v=1662111454",
            },
          ],
        },
        {
          id: 5,
          name: "Jordan 11 cmft Low (ps)",
          price: 1199.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Air_Jordan_2x_abada9df-a5b5-4f3b-92e0-e189743df31f_200x.png?v=1629719248",
          sizes: [10, 13, 1.5, 2, 2.5],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/CZ0905-071-1.png?v=1667818550",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/CZ0905-071-2.png?v=1667818550",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "AIR FORCE 1",
      items: [
        {
          id: 1,
          name: "Air force 1 '07",
          price: 2599.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Nike_2x_d319ed79-6a55-4f30-a769-88431ed60091_200x.png?v=1625832579",
          sizes: [6, 7, 8, 9, 10, 11],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DZ4493-700-1.png?v=1669112582",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DZ4493-700-2.png?v=1669112582",
            },
          ],
        },
        {
          id: 2,
          name: "Air Force 1 Plt.AF.ORM (W)",
          price: 2299.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Nike_2x_d319ed79-6a55-4f30-a769-88431ed60091_200x.png?v=1625832579",
          sizes: [3, 4, 5, 6],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DJ9946-603-1.png?v=1667566817",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DJ9946-603-2.png?v=1667566817",
            },
          ],
        },
        {
          id: 3,
          name: "Lunar Force 1 Duckboot",
          price: 3399.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Nike_2x_d319ed79-6a55-4f30-a769-88431ed60091_200x.png?v=1625832579",
          sizes: [6, 7, 8, 9, 10, 11],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/805899-202-1.png?v=1665648236",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/805899-202-2.png?v=1665648236",
            },
          ],
        },
        {
          id: 4,
          name: "Air Force 1 mid '07 LV8",
          price: 2599.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Nike_2x_d319ed79-6a55-4f30-a769-88431ed60091_200x.png?v=1625832579",
          sizes: [6, 7, 8, 9, 10, 11],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DR9513-100-1.png?v=1669121801",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DR9513-100-2.png?v=1669121801",
            },
          ],
        },
        {
          id: 5,
          name: "Air force 1 '07 PRM",
          price: 2599.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Nike_2x_d319ed79-6a55-4f30-a769-88431ed60091_200x.png?v=1625832579",
          sizes: [6, 7, 8, 9, 10, 11],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DQ7664-600-1.png?v=1667902942",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DQ7664-600-2.png?v=1667902942",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "NEW BALANCE",
      items: [
        {
          id: 1,
          name: "574 Lifestyle",
          price: 1699.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/New_Balance_2x_ed8e9aca-d511-4f34-bce6-323df64ca48e_200x.png?v=1625833403",
          sizes: [6, 7, 8, 9, 10],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/ML574EVM-1.png?v=1661329795",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/ML574EVM-2.png?v=1661329795",
            },
          ],
        },
        {
          id: 2,
          name: "Xc-72 Lifestyle",
          price: 2099.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/New_Balance_2x_ed8e9aca-d511-4f34-bce6-323df64ca48e_200x.png?v=1625833403",
          sizes: [4, 5, 8, 9],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/uxc72ia_1.png?v=1657016814",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/uxc72ia_2.png?v=1657016814",
            },
          ],
        },
        {
          id: 3,
          name: "RC30 Lifestyle",
          price: 2199.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/New_Balance_2x_ed8e9aca-d511-4f34-bce6-323df64ca48e_200x.png?v=1625833403",
          sizes: [6, 7, 8, 9, 10, 11],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/URC30RD-1.png?v=1669621835",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/URC30RD-2.png?v=1669621835",
            },
          ],
        },
        {
          id: 4,
          name: "RC30 Lifestyle",
          price: 2199.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/New_Balance_2x_ed8e9aca-d511-4f34-bce6-323df64ca48e_200x.png?v=1625833403",
          sizes: [6, 7, 8, 9],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/URC30MA-1.png?v=1669620886",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/URC30MA-2.png?v=1669620886",
            },
          ],
        },
        {
          id: 5,
          name: "550 Lifestyle",
          price: 2399.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/New_Balance_2x_ed8e9aca-d511-4f34-bce6-323df64ca48e_200x.png?v=1625833403",
          sizes: [8, 9, 10, 11],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/BB550PLB-1.png?v=1669620588",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/BB550PLB-2.png?v=1669620588",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "ADIDAS",
      items: [
        {
          id: 1,
          name: "Adilette Ayoon",
          price: 749.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/adidas-logo-1_200x.png?v=1625832639",
          sizes: [3, 4, 5, 6, 7, 8, 9, 10],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GX1978_2.png?v=1660140724",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GX1978_1.png?v=1660140724",
            },
          ],
        },
        {
          id: 2,
          name: "Adilette Ayoon",
          price: 749.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/adidas-logo-1_200x.png?v=1625832639",
          sizes: [3, 4, 5, 6, 7, 8, 9, 10, 11],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GX1979_02.png?v=1660118657",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GX1979_01.png?v=1660118657",
            },
          ],
        },
        {
          id: 3,
          name: "Forum 84 LG",
          price: 2599.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/adidas-logo-1_200x.png?v=1625832639",
          sizes: [6, 7, 8, 9, 10, 11],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GZ1893_1.png?v=1659007388",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GZ1893_2.png?v=1659007388",
            },
          ],
        },
        {
          id: 4,
          name: "Forum 84 HI",
          price: 2399.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/adidas-logo-1_200x.png?v=1625832639",
          sizes: [6, 7, 8, 9, 10, 11],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GW5924_1.png?v=1652365281",
            },
            {
              id: 2,
              url: "	https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GW5924_2.png?v=1652365281",
            },
          ],
        },
        {
          id: 5,
          name: "Forum mid Parley",
          price: 2399.0,
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/adidas-logo-1_200x.png?v=1625832639",
          sizes: [6, 7, 8, 9, 10],
          image: [
            {
              id: 1,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GV7616_1.png?v=1650361288",
            },
            {
              id: 2,
              url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GV7616_2.png?v=1650361288",
            },
          ],
        },
      ],
    },
  ],
  cart: [
    {
      id: 1,
      name: "CREP ULTIMATE TUBE",
      price: 899.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Crep_2x_0b83b184-421f-4102-a1eb-3ec443c46f35_200x.png?v=1625833041",
      image:
        "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/SPG715-1.png?v=1645624535",
    },
    {
      id: 2,
      name: "CREP CURE",
      price: 399.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Crep_2x_0b83b184-421f-4102-a1eb-3ec443c46f35_200x.png?v=1625833041",
      image:
        "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/7518_6108fe72421f74.09231456_SPG706.png?v=1637651920",
    },
    {
      id: 3,
      name: "CREP ULTIMATE SHOE CARE PACK",
      price: 799.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Crep_2x_0b83b184-421f-4102-a1eb-3ec443c46f35_200x.png?v=1625833041",
      image:
        "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/7520_6108fde25f6173.48031833_SPG710.png?v=1637651912",
    },
    {
      id: 4,
      name: "CREP PROTECT",
      price: 299.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Crep_2x_0b83b184-421f-4102-a1eb-3ec443c46f35_200x.png?v=1625833041",
      image:
        "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/7516_6108fe11abde32.90077137_SPG704_1b8c89b0-a131-43ca-ad46-a3d05a1e0430.png?v=1637651923",
    },
    {
      id: 5,
      name: "CREP CURE REFILL",
      price: 219.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Crep_2x_0b83b184-421f-4102-a1eb-3ec443c46f35_200x.png?v=1625833041",
      image:
        "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/7519_6108fe441cf786.95248695_SPG709.png?v=1637651917",
    },
  ],
  pages: [
    {
      id: 1,
      name: "Blazer Mid Victory [W]",
      gender: "Womens",
      brand: "Nike",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/t/1/assets/nike_200x.png",
      categoryName: "Sneakers",
      type: "Blazer",
      details:
        "With a carefully crafted aesthetic, your tried-and-true wardrobe staple gets elevated with an expressive outdoorsy vibe. Updated details like the just-right lift adds a sophisticated mountain town edge. Concealed laces streamline your outfit. The classic Blazer design does the rest of the talking.",
      sizes: [3, 4, 5, 6],
      price: 2299.0,
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DR2948-200-1.png?v=1674122077",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DR2948-200-2.png?v=1674122077",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DR2948-200-3.png?v=1674122077",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DR2948-200-4.png?v=1674122077",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DR2948-200-5.png?v=1674122077",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DR2948-200-6.png?v=1674122077",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DR2948-200-7.png?v=1674122077",
        },
      ],
    },
    {
      id: 2,
      name: "Blazer Low Platform [W]",
      gender: "Womens",
      brand: "Nike",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/t/1/assets/nike_200x.png",
      categoryName: "Sneakers",
      type: "Blazer",
      details:
        "Praised for its classic simplicity and comfort, the Nike Blazer Low Platform elevates the hoops icon. The lifted midsole/outsole lets you step confidently while the upper keeps the proportions you loved from the original.",
      sizes: [3, 4, 5, 6],
      price: 1899.0,
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DJ0292-200-1.png?v=1667568139",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DJ0292-200-2.png?v=1667568139",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DJ0292-200-3.png?v=1667568139",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DJ0292-200-4.png?v=1667568139",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DJ0292-200-5.png?v=1667568139",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DJ0292-200-6.png?v=1667568139",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DJ0292-200-7.png?v=1667568139",
        },
      ],
    },
    {
      id: 3,
      name: "Lebron XX",
      gender: "Mens",
      brand: "Nike",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/t/1/assets/nike_200x.png",
      categoryName: "Sneakers",
      type: "Lebron",
      details:
        "Revisiting the iconic lineup of the King’s Christmas Day kicks, this design’s festive array of graphics and colors creates a mash-up of Christmas’ past. From dimes to dunks, this is no ugly sweater—its lightweight, low-to-the-ground and ultra-cushioned design is fresher than pine and cozier than a cup of cocoa by the fireside. Hope you’ve been nice.",
      sizes: [6, 7, 8, 9, 10, 11, 12],
      price: 3699.0,
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FJ4955-300-1.png?v=1674121735",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FJ4955-300-2.png?v=1674121735",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FJ4955-300-3.png?v=1674121735",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FJ4955-300-4.png?v=1674121735",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FJ4955-300-5.png?v=1674121735",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FJ4955-300-6.png?v=1674121735",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FJ4955-300-7.png?v=1674121735",
        },
      ],
    },
    {
      id: 4,
      name: "Air Max Motif [GS]",
      gender: "Grade School",
      brand: "Nike",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/t/1/assets/nike_200x.png",
      categoryName: "Sneakers",
      type: "Air Max",
      details:
        "Enter a new era in Air Max history. The Nike Air Max Motif honors the iconic AM1—a streetwear legend since ‘87—with a futuristic take made for your generation. The design lines give throwback vibes and a redesigned Air unit has supersoft cushioning, so you have everything you need for all-day play.",
      sizes: [3, 4, 5, 6],
      price: 2199.0,
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DH9388-005-1.png?v=1670320762",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DH9388-005-2.png?v=1670320762",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DH9388-005-3.png?v=1670320762",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DH9388-005-4.png?v=1670320762",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DH9388-005-5.png?v=1670320762",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DH9388-005-6.png?v=1670320762",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DH9388-005-7.png?v=1670320762",
        },
      ],
    },
    {
      id: 5,
      name: "Forum Low",
      gender: "Mens",
      brand: "Adidas",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/t/1/assets/adidas_200x.png",
      categoryName: "Sneakers",
      type: "Forum",
      details:
        "More than just a shoe, it's a statement. The adidas Forum hit the scene in '84 and gained major love on both the hardwood and in the music biz. This pair of the classic shoes brings back the '80s attitude, the explosive hardwood energy and the iconic X-strap ankle design, distilled into a low top version meant for the streets.",
      sizes: [6, 7, 8, 9, 10],
      price: 1699.0,
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GX7071_1.png?v=1667292838",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GX7071_2.png?v=1667292838",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GX7071_3.png?v=1667292838",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GX7071_4.png?v=1667292838",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GX7071_5.png?v=1667292838",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GX7071_6.png?v=1667292838",
        },
      ],
    },
    {
      id: 6,
      name: "Gazelle",
      gender: "Womens",
      brand: "Adidas",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/t/1/assets/adidas_200x.png",
      categoryName: "Sneakers",
      type: "Gazelle",
      details:
        "The adidas Gazelle Shoes have stepped onto just about every corner of our cultural landscape — starting in the world of sport before making their way into the music and fashion scenes. These trainers are a one-to-one reissue of the '91 Gazelle, with the same textures, materials and proportions as the OG. Even the colours nod back to the era, done in muted tones with contrast.",
      sizes: [3, 4, 5, 6, 7, 8, 9, 10, 11],
      price: 1499.0,
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/H06395_1.png?v=1663075029",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/H06395_2.png?v=1663075029",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/H06395_3.png?v=1663075029",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/H06395_4.png?v=1663075029",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/H06395_5.png?v=1663075029",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/H06395_6.png?v=1663075029",
        },
      ],
    },
    {
      id: 7,
      name: "Forum Low",
      gender: "Mens",
      brand: "Adidas",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/t/1/assets/adidas_200x.png",
      categoryName: "Sneakers",
      type: "Forum",
      details:
        "Your style is ever-evolving. Choose shoes that can keep up. Like this fresh take on the adidas Forum shoes. Made with cool weather in mind, the upper mixes CORDURA® woven fabric with premium suede. The heel cord and lace toggle pop against the muted monochromatic design for an elevated look. This pair keeps the iconic details like the X-detail, hook-and-loop strap and rubber cupsole intact. Made in part with recycled content generated from production waste, e.g. cutting scraps, and post-consumer household waste to avoid the larger environmental impact of producing virgin content.",
      sizes: [6, 7, 8, 9, 10],
      price: 1599.0,
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GW4374_1.png?v=1669883785",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GW4374_2.png?v=1669883785",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GW4374_3.png?v=1669883785",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GW4374_4.png?v=1669883785",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GW4374_5.png?v=1669883785",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/GW4374_6.png?v=1669883785",
        },
      ],
    },
    {
      id: 8,
      name: "CHICAGO BULLS STATEMENT EDITION JERSEY",
      gender: "Mens",
      brand: "Nike",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/t/1/assets/nike_200x.png",
      categoryName: "Apparel",
      type: "Team Sportswear",
      details:
        "Emulate your favoUrite player in this Chicago Bulls jersey, a fan-ready favorite with logo and design details that match what the pros wear on the court. Plus, it infuses breathable mesh with sweat-wicking technology to help keep you cool and dry whether you’re burning up the court or just keeping it casual around town.",
      sizes: ["S", "M", "L", "XL", "2XL"],
      price: 1599.0,
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DO9521-012-1.png?v=1676466302",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DO9521-012-2.png?v=1676466302",
        },
      ],
    },
    {
      id: 9,
      name: "NSW TECH FLEECE WINDRUNNER (W)",
      gender: "Womens",
      brand: "Nike",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/t/1/assets/nike_200x.png",
      categoryName: "Apparel",
      type: "Sweatshirts",
      details:
        "The Nike Sportswear Tech Fleece Hoodie is made with double-sided spacer fabric to harness your body heat to create added warmth without extra bulk or weight.",
      sizes: ["XS", "S", "M", "L", "XL"],
      price: 1949.0,
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/5489_610e6b1c43d215.41696660_LEMKUS-NIKE_CW4298-063-1.png?v=1662971646",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/5489_610e6b2f07b8a5.76598439_LEMKUS-NIKE_CW4298-063-2.png?v=1662971646",
        },
      ],
    },
    {
      id: 10,
      name: "NBA ALL STAR ESSENTIAL T-SHIRT",
      gender: "Mens",
      brand: "Nike",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/t/1/assets/nike_200x.png",
      categoryName: "Apparel",
      type: "T-shirts/Tops",
      details:
        "Show your love for King James all weekend long. Made from soft cotton, this classic-fit tee is all about letting you comfortably cheer on the best players in the league. In fact, it just might become the all-star of your fan wardrobe.",
      sizes: ["S", "M", "L", "XL", "2XL"],
      price: 529.0,
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DX9893-400-2.png?v=1676370648",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DX9893-400-1.png?v=1676370648",
        },
      ],
    },
    {
      id: 11,
      name: "NSW BOYFRIEND T-SHIRT (W)",
      gender: "Womens",
      brand: "Nike",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/t/1/assets/nike_200x.png",
      categoryName: "Apparel",
      type: "T-shirts/Tops",
      details:
        "Made to look and feel vintage, this heavyweight cotton tee has a roomy fit and satiny logo for a premium feel you'll want to wear every day.",
      sizes: ["XS", "S", "M", "L", "XL"],
      price: 619.0,
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DR8982-334-1.png?v=1670322146",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DR8982-334-2.png?v=1670322146",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DR8982-334-3.png?v=1670322146",
        },
      ],
    },
    {
      id: 12,
      name: "AIR MAX 90 LTR (GS)",
      gender: "Grade School",
      brand: "Nike",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/t/1/assets/nike_200x.png",
      categoryName: "Sneakers",
      type: "Air Max 90",
      details:
        "The Air Max 90 returns with an even better feel for you. Cushioning is softer and more flexible than previous versions, the Max Air unit is tuned for growing feet and the shape gives your toes more wiggle room. With a design and look that are still the same, it brings a '90s fave to a new generation.",
      sizes: [3, 4, 5, 6],
      price: 2299,
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV3607-100-1.png?v=1676384250",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV3607-100-2.png?v=1676384250",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV3607-100-3.png?v=1676384250",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV3607-100-4.png?v=1676384250",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV3607-100-5.png?v=1676384250",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV3607-100-6.png?v=1676384250",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV3607-100-7.png?v=1676384250",
        },
      ],
    },
    {
      id: 12,
      name: "PARIS SAINT-GERMAIN LOGO T-SHIRT",
      gender: "Mens",
      brand: "Air Jordan",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/t/1/assets/air-jordan_200x.png",
      categoryName: "Apparel",
      type: "Team Sportswear",
      details:
        "Signal your pride for Paris Saint-Germain in this logo T-shirt(DB6514-100/WHITE) from Jordan Brand. It's made on soft, lightweight cotton. The tee has an oversized back graphic and colors inspired by the club's home kit on select versions.",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      price: 519,
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/9915_6135cca5104eb3.55649357_LEMKUS-AIRJORDAN_DB6514-100-1_22439b2d-4d3a-44cf-88db-3b42557ac56c.png?v=1635672158",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/9915_6135ccaf7da596.10404436_LEMKUS-AIRJORDAN_DB6514-100-2_a84f4537-49cd-42c6-b87f-e9e8b7cd398f.png?v=1635672158",
        },
      ],
    },
    {
      id: 13,
      name: "NSW ICON GX HOODIE (W)",
      gender: "Womens",
      brand: "Nike",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/t/1/assets/nike_200x.png",
      categoryName: "Apparel",
      type: "Sweatshirts",
      details: "",
      sizes: ["XS", "S", "L", "XL"],
      price: 519,
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/6264_610525b682c569.49373222_LEMKUS-NIKE_DD5052-814-1_a433fec9-d189-4fb3-9bd6-a970f31a5597.png?v=1635672514",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/6264_610525c1c8fc90.00194198_LEMKUS-NIKE_DD5052-814-2_4917a839-a3ad-4315-8ebf-3013f2b02beb.png?v=1635672514",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/6264_610525cbd86562.43808310_LEMKUS-NIKE_DD5052-814-3_48fbf1c9-9c78-4ab7-808a-8593b3e3116c.png?v=1635672514",
        },
      ],
    },
    {
      id: 14,
      name: "Air Jordan 2 Retro",
      gender: "Mens",
      brand: "Air Jordan",
      categoryName: "Launches",
      type: "Sneakers",
      price: 3699.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Air_Jordan_2x_abada9df-a5b5-4f3b-92e0-e189743df31f_200x.png?v=1629719248",
      sizes: [6, 7, 8, 9, 10, 11, 12],
      details:
        "1 pair per customer only. Orders with duplicate details including contact details, shipping address and banking details will be cancelled. All release dates and mechanisms are subject to change as per Lemkus or the relevant brands discretion should it be needed.",
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DX2454-106-1.png?v=1671455949",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DX2454-106-2.png?v=1671455949",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DX2454-106-3.png?v=1671455949",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DX2454-106-4.png?v=1671455949",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DX2454-106-5.png?v=1671455949",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DX2454-106-6.png?v=1671455949",
        },
      ],
    },
    {
      id: 15,
      name: "Air Jordan 1 Retro Hi OG [W]",
      gender: "Womens",
      brand: "Air Jordan",
      categoryName: "Launches",
      type: "Sneakers",
      price: 3399.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Air_Jordan_2x_abada9df-a5b5-4f3b-92e0-e189743df31f_200x.png?v=1629719248",
      sizes: [3, 4, 5, 6, 7, 8],
      details:
        "1 Pair Per Customer only. Orders with duplicate details including contact details, shipping address and banking details will be cancelled. All release dates and mechanisms are subject to change as per Lemkus or the relevant brands discretion should it be needed.",
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DZ2523-001-1.png?v=1671354786",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DZ2523-001-2.png?v=1671354786",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DZ2523-001-3.png?v=1671354786",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DZ2523-001-4.png?v=1671354786",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DZ2523-001-5.png?v=1671354786",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DZ2523-001-6.png?v=1671354786",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DZ2523-001-7.png?v=1671354786",
        },
      ],
    },
    {
      id: 16,
      name: "Air Jordan 1 Zoom Cmft 2 Sp [W]",
      gender: "Womens",
      brand: "Air Jordan",
      categoryName: "Launches",
      type: "Sneakers",
      price: 3399.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Air_Jordan_2x_abada9df-a5b5-4f3b-92e0-e189743df31f_200x.png?v=1629719248",
      sizes: [3, 4, 5, 6, 3.5, 4.5, 5.5, 6.5, 7, 8],
      details:
        "Releasing in-store and online 09 February 2023. 1 Pair Per Customer only. Orders with duplicate details including contact details, shipping address and banking details will be cancelled. All release dates and mechanisms are subject to change as per Lemkus or the relevant brands discretion should it be needed.",
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV1304-106-1.png?v=1675771173",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV1304-106-2.png?v=1675771173",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV1304-106-3.png?v=1675771173",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV1304-106-4.png?v=1675771173",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV1304-106-5.png?v=1675771173",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV1304-106-6.png?v=1675771173",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV1304-106-7.png?v=1675771173",
        },
        {
          id: 8,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV1304-106-8.png?v=1675771173",
        },
      ],
    },
    {
      id: 17,
      name: "SKY JORDAN 1 (PS)",
      gender: "Pre School",
      brand: "Air Jordan",
      categoryName: "Launches",
      type: "Sneakers",
      price: 1299.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Air_Jordan_2x_abada9df-a5b5-4f3b-92e0-e189743df31f_200x.png?v=1629719248",
      sizes: [1, 1.5, 2, 2.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5],
      details:
        "Inspired by the AJ1, the Sky Jordan 1 is equal parts iconic and adorable. It has soft foam cushioning, rubber traction and a hook-and-loop strap for easy on and off.",
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/BQ7197-016-1.png?v=1676557696",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/BQ7197-016-2.png?v=1676557696",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/BQ7197-016-2.png?v=1676557696",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/BQ7197-016-4.png?v=1676557696",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/BQ7197-016-5.png?v=1676557696",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/BQ7197-016-6.png?v=1676557696",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/BQ7197-016-7.png?v=1676557696",
        },
        {
          id: 8,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/BQ7197-016-8.png?v=1676557696",
        },
      ],
    },
    {
      id: 18,
      name: "AIR JORDAN 1 LOW",
      gender: "Mens",
      brand: "Air Jordan",
      categoryName: "Launches",
      type: "Sneakers",
      price: 2299.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Air_Jordan_2x_abada9df-a5b5-4f3b-92e0-e189743df31f_200x.png?v=1629719248",
      sizes: [6, 7, 8, 9, 10, 11, 12],
      details:
        "Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that's familiar yet always fresh. With an iconic design that pairs perfectly with any 'fit, these kicks ensure you'll always be on point.",
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/553558-215-1.png?v=1675772520",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/553558-215-2.png?v=1675772520",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/553558-215-3.png?v=1675772520",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/553558-215-4.png?v=1675772520",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/553558-215-5.png?v=1675772520",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/553558-215-6.png?v=1675772520",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/553558-215-7.png?v=1675772520",
        },
      ],
    },
    {
      id: 19,
      name: "AIR JORDAN 1 MID",
      gender: "Mens",
      brand: "Air Jordan",
      categoryName: "Launches",
      type: "Sneakers",
      price: 2399.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Air_Jordan_2x_abada9df-a5b5-4f3b-92e0-e189743df31f_200x.png?v=1629719248",
      sizes: [6, 7, 8, 9, 10, 11, 12],
      details:
        "You ready for your moment in the sun? Every time the AJ1 gets a remake you get the classic sneaker in new colors and textures for a fresh look with a familiar feel. Premium materials and accents give modern expression to an all-time favorite. Get out there and shine.",
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FD1029-400-1.png?v=1675844504",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FD1029-400-2.png?v=1675844504",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FD1029-400-3.png?v=1675844504",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FD1029-400-4.png?v=1675844504",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FD1029-400-5.png?v=1675844504",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FD1029-400-6.png?v=1675844504",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FD1029-400-7.png?v=1675844504",
        },
      ],
    },
    {
      id: 20,
      name: "AIR MORE UPTEMPO '96",
      gender: "Mens",
      brand: "Nike",
      categoryName: "Launches",
      type: "Sneakers",
      price: 3399.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Nike_2x_d319ed79-6a55-4f30-a769-88431ed60091_200x.png?v=1625832579",
      sizes: [6, 7, 8, 9, 10, 11, 6.5, 7.5, 8.5, 9.5, 10.5, 12],
      details:
        "Bring original hoops style back to the streets with the Air More Uptempo. Classic black and white leather and energetic iridescent accents put a fashion forward twist on the '90s icon whose graffiti-styled graphics have always been an off-court fave. Full-length, visible Air cushioning delivers the comfort you need, while elastic straps over the tongue keep your style sharp whether you rock them laced or unlaced.",
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0819-001-1.png?v=1675856297",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0819-001-2.png?v=1675856297",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0819-001-3.png?v=1675856297",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0819-001-4.png?v=1675856297",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0819-001-5.png?v=1675856297",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0819-001-6.png?v=1675856297",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0819-001-7.png?v=1675856297",
        },
      ],
    },
    {
      id: 21,
      name: "AIR ZOOM FLIGHT 95",
      gender: "Mens",
      brand: "Nike",
      categoryName: "Launches",
      type: "Sneakers",
      price: 3399.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Nike_2x_d319ed79-6a55-4f30-a769-88431ed60091_200x.png?v=1625832579",
      sizes: [6, 7, 8, 9, 10, 11],
      details:
        "Have you ever had déjà shoe? Flash back to one of the first shoes to popularize Zoom Air technology and relive the hoops revolution. With its flowing lines, patent leather accents and futuristic 'bug eye' detailing, the Air Zoom Flight 95 is no dream—it's your ticket to turn heads.",
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0820-100-1.png?v=1675952388",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0820-100-2.png?v=1675952388",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0820-100-3.png?v=1675952388",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0820-100-4.png?v=1675952388",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0820-100-5.png?v=1675952388",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0820-100-6.png?v=1675952388",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0820-100-7.png?v=1675952388",
        },
      ],
    },
    {
      id: 22,
      name: "AIR FOAMPOSITE ONE",
      gender: "Mens",
      brand: "Nike",
      categoryName: "Launches",
      type: "Sneakers",
      price: 4699.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Nike_2x_d319ed79-6a55-4f30-a769-88431ed60091_200x.png?v=1625832579",
      sizes: [6, 7, 8, 9, 10, 11, 6.5, 7.5, 8.5, 9.5, 10.5],
      details:
        "Cross between b-ball greatness and rare off-court style in the Nike Air Foamposite 1. From the liquid look of its Foamposite upper to the signature '1 Cent' logo and low-profile cushioning, it lets you bridge past, present and future. It's game time.",
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0815-100-1.png?v=1675856996",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0815-100-2.png?v=1675856996",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0815-100-3.png?v=1675856996",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0815-100-4.png?v=1675856996",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0815-100-5.png?v=1675856996",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0815-100-6.png?v=1675856996",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0815-100-7.png?v=1675856996",
        },
      ],
    },
    {
      id: 23,
      name: "AIR PENNY II",
      gender: "Mens",
      brand: "Nike",
      categoryName: "Launches",
      type: "Sneakers",
      price: 3599.0,
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Nike_2x_d319ed79-6a55-4f30-a769-88431ed60091_200x.png?v=1625832579",
      sizes: [5.5, 6, 7, 8, 9, 10, 11, 12],
      details:
        "Flash back to '96 in the Air Penny 2. Bold and unmistakable, it was the first Air Penny to combine Max and Zoom Air technology. Now, the daring design comes wrapped in patent leather, while the signature “1 Cent” logo on the side and wavy design lines keep the coveted off-court appeal strong.",
      images: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0817-100-1.png?v=1675944088",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0817-100-2.png?v=1675944088",
        },
        {
          id: 3,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0817-100-3.png?v=1675944088",
        },
        {
          id: 4,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0817-100-4.png?v=1675944088",
        },
        {
          id: 5,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0817-100-5.png?v=1675944088",
        },
        {
          id: 6,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0817-100-6.png?v=1675944088",
        },
        {
          id: 7,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DV0817-100-7.png?v=1675944088",
        },
      ],
    },
  ],
  filter: [
    {
      id: 1,
      name: "Sneakers",
      items: [
        { id: 1, name: "Brand" },
        { id: 2, name: "Sneaker Style" },
        { id: 3, name: "Type" },
        { id: 4, name: "Size" },
        { id: 5, name: "Gender" },
        { id: 6, name: "Price" },
      ],
    },
    {
      id: 2,
      name: "Apparel",
      items: [
        { id: 1, name: "Brand" },
        { id: 2, name: "Type" },
        { id: 3, name: "Size" },
        { id: 4, name: "Gender" },
        { id: 5, name: "Price" },
      ],
    },
    {
      id: 3,
      name: "Kids",
      items: [
        { id: 1, name: "Brand" },
        { id: 2, name: "Sneaker Style" },
        { id: 3, name: "Type" },
        { id: 4, name: "Size Range" },
        { id: 4, name: "Size" },
        { id: 5, name: "Gender" },
        { id: 6, name: "Price" },
      ],
    },
    {
      id: 4,
      name: "Accessories",
      items: [
        { id: 1, name: "Brand" },
        { id: 2, name: "Type" },
        { id: 3, name: "Size" },
        { id: 4, name: "Gender" },
        { id: 5, name: "Price" },
      ],
    },
  ],
  culture: [
    {
      id: 1,
      name: "Rolo Rozay X Air Jordan 2: The 35th Anniversary",
      category: "Relases",
      date: "28.12.22",
      author: "Jack Lemkus Online Admin",
      readTime: "5 min",
      image:
        "https://cdn.shopify.com/s/files/1/0538/9280/8895/articles/Lemkus_Rolo_Rozay_Air_Jordan_2_Retro_517x654_420c9e39-50c6-46f4-8227-ebfd7ed44b49.jpg?v=1672214228",
      imageFull:
        "https://cdn.accentuate.io/588768739580/1672214284385/Lemkus_Rolo_Rozay_Air_Jordan_2_Retro_1316x669.jpg?v=1672214284385",
      headingText1:
        "IT TAKES A CERTAIN TITAN OF INDUSTRY, AND AN OG OF THE SCENE, TO RETROSPECT ON THE AIR JORDANS 2 IN ITS 35TH YEAR. ROLO ROZAY IS ONE OF THE FIRST PEOPLE TO EDIFY HIS CAREER OUT OF SNEAKERS; FROM HIS WORK AT SNEAKER CARTEL, TO HIS POSITION NOW AS A CULT-OF-PERSONALITY - IF ANYONE IS UP TO THE TASK OF HONOURING THE BONAFIDE ‘MIDDLE CHILD’ OF AIR JORDAN, ITS ROLO.",
      descriptionText1: [
        {
          id: 1,
          text: "A stamp of approval from Rolo is a serious verification; if you know, you know. If you haven’t been following Rolo - which you should be  - you might not know that the single biggest accolade he claims, despite all his successes, is that he’s from Bishop Lavis; the suburb that created him, and the place to whom he owes everything. It's this code of honour and integrity that defines Rolo as an OG and Godfather of the scene; and a lesson that we must always respect the beginning chapters, for where they lead us now. It’s with this in mind that we asked Rolo to join us in celebrating the AJ2; a shoe that set the stage for the lineage of Air Jordans, being the second edition after the wild success of the Air Jordan 1 in 1985.",
        },
        {
          id: 2,
          text: "As Rolo tells us, in Cape Town - it’s all about AJ 14 - 18s - but that could never have happened without the 2s. As stated by Nike, this immaculate retro edition takes it way back to 1987 - and is an essential for any sneakerheads’ archive; “Made to the same specs as the original, you get all the iconic details like faux lizard skin, no Swoosh, and the original Nike Air and Wings logos. Fresh enough to wear to a wedding, fly enough to wear courtside—the only real question is what you're gonna pair them with.” This is a shoe not to be glossed over; it's an important feature on the mantle of well-refined and researched sneaker obsession.",
        },
      ],
      sideToside: [
        {
          id: 1,
          image:
            "https://cdn.accentuate.io/588768739580/1672214298300/Lemkus_Rolo_Rozay_Air_Jordan_2_Retro_630x668.jpg?v=1672214298300",
        },
        {
          id: 2,
          image:
            "https://cdn.accentuate.io/588768739580/1672214309637/1_Lemkus_Rolo_Rozay_Air_Jordan_2_Retro_630x668.jpg?v=1672214309637",
        },
      ],
      headingText2:
        "YOU’RE A SNEAKER OG - CAN YOU BRIEFLY INTRODUCE YOUR LOVE FOR SNEAKERS AND HOW IT’S CATALYSED YOUR CAREER?",
      descriptionText2: [
        {
          id: 1,
          text: "I’ve been into sneakers for a minute now - since I can remember - and I’ve built a career around it, with like-minded individuals. I’ve made connections between Joburg, Cape Town, Dubai, London and the USA; with people who have the same love for shoes that I do, the same passion for what footwear represents. Shoes are this unifying symbol in music videos, movies - across culture and subcultures - we all wear them, and particularly in the realm of sneakers, I don’t think there’s a genre that more takes advantage of how a shoe can represent culture, style and ideas. I’m from Bishop Lavis, and I’m known for being from this place; not for my name. I think this sets me apart.",
        },
      ],
      headingText3:
        "LET’S TALK ABOUT AIR JORDAN’S II - SINCE 1987, IT’S UNDERGONE MANY UPDATES. WITH THIS LATEST RELEASE, CAN YOU TALK ABOUT THE DETAILS YOU LOVE?",
      descriptionText3:
        "This is one of the most under-appreciated sneakers of all time. A lot of people skip through from 1 to 3 and go straight to 4 - all the way to 14, 15 - here in Cape Town, we love 15, 16, 17 and 18s, 18.5s. When you look at it, the first ones introduced a premium, Italian leather. This is just one of those shoes that is obscure and it's paying homage to an original style. We can’t have the lineage that comes after, without appreciating the AJ2’s; it was one of the first moments we saw luxury, technical principles applied to a sneaker format. Nowadays, it’s hard to remember a time when that wasn’t a standard - we have come a long way in how we understand sneakers, and how they are made. When you look at the first Jordan 2s that made it onto the internet, during that blog era, it was Vashtie’s lavender Air Jordan 2. I love that this is a best-kept secret, almost, and it's a shoe not many people have or know about.",
      imageTextImage:
        "https://cdn.accentuate.io/588768739580/1672214322160/02_Lemkus_Rolo_Rozay_Air_Jordan_2_Retro_630x400.jpg?v=1672214322160",
      imageTextHeding:
        "WHAT DOES AIR JORDAN AND MICHAEL JORDAN MEAN TO YOU AS A LEGACY?",
      imageTextDesc:
        "We never really got to see Michael Jordan play, and it wasn’t accessible to us here. So our love for Jordan really came through from sitcoms - Will Smith, LL Cool J - and we created our own culture in Cape Town around Jordans, and now it's a part of who we are. The 2’s are the middle child, and seeing Virgil shine some light on it - people have taken notes. I enjoy seeing the Retro comeback, in a form like this;  get yourself a pair at Lemkus and don’t sleep on it.",
      imageTextReverseImage:
        "https://cdn.accentuate.io/588768739580/1672214356765/01_Lemkus_Rolo_Rozay_Air_Jordan_2_Retro_630x400.jpg?v=1672214365785",
      imageTextReverseHeading:
        "WHAT IS YOUR VISION AND HOPE FOR CAPE TOWN AND SOUTH AFRICA CULTURALLY IN THE NEXT YEAR AHEAD?",
      imageTextReverseDesc:
        "We are growing quickly, and we are the place to be - I see a lot of great things happening. The connections, the brands, and people putting in the work and young guys taking the torch and carrying the flag forward. We see it with the guys from Broke, Pot Plant Club - Grade Africa. People are making moves, you know - and with Lemkus and the Exchange Building. It’s going to take time for us, but there is a determined spirit that just keeps moving.",
      imageTextReverseSecondary:
        "Air Jordan 2 Retro OG - Drops in-store, Friday, 30th December 2022. Limited to one pair per customer. First come, first served.",
    },
  ],
  collection: [
    {
      id: 1,
      name: "Air Jordan",
      image:
        "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/AJ2_Collection_Images_556x508_0f93ffd2-5c21-4a36-a097-cd8b31abb497.png?v=1678263674",
    },
    {
      id: 2,
      name: "Oakley",
      image:
        "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/Oakley_Collection_Images_556x508_6b576aa0-de1f-465d-9934-c839a098f9ea.png?v=1678264878",
    },
    {
      id: 3,
      name: "New Balance",
      image:
        "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/NB_Collection_Images_556x508_6d05d5c9-c88e-47cc-9635-3e6a78834b84.png?v=1678264941",
    },
  ],
  brands: [
    {
      id: 3,
      letter: "#",
      brand: ["032C"],
    },
    {
      id: 2,
      letter: "A",
      brand: [
        "ACW",
        "Adidas",
        "Air Jordan",
        "Angelus",
        "ARTCLUB & FRIENDS",
        "Asics",
      ],
    },
    {
      id: 3,
      letter: "B",
      brand: ["Birkenstock", "Broke", "Butan"],
    },
    {
      id: 4,
      letter: "C",
      brand: ["Ceremony", "Converse", "Crep", "Crocs"],
    },
    {
      id: 5,
      letter: "D",
      brand: ["Daily Paper"],
    },
    {
      id: 6,
      letter: "E",
      brand: ["Ewing"],
    },
    {
      id: 7,
      letter: "F",
      brand: ["Funko Pop"],
    },
    {
      id: 8,
      letter: "H",
      brand: ["HBN"],
    },
    {
      id: 9,
      letter: "J",
      brand: ["Jason Markk"],
    },
    {
      id: 10,
      letter: "L",
      brand: ["Leaf x LowerBoys", "Lemkus", "Levi's", "LUKHANYO MDINGI"],
    },
    {
      id: 11,
      letter: "M",
      brand: ["Mad Dogs", "Maylee"],
    },
    {
      id: 12,
      letter: "N",
      brand: ["New Balance", "Newe", "Nike", "North Face"],
    },
    {
      id: 13,
      letter: "O",
      brand: ["Oakley"],
    },
    {
      id: 14,
      letter: "P",
      brand: ["Puma"],
    },
    {
      id: 15,
      letter: "R",
      brand: ["Ray-Ban", "Reebok"],
    },
    {
      id: 16,
      letter: "S",
      brand: ["Sol Sol", "Sweet-Orr"],
    },
    {
      id: 17,
      letter: "T",
      brand: ["Tino"],
    },
    {
      id: 18,
      letter: "W",
      brand: ["Wanda Lephoto"],
    },
  ],
};

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
  { path: "/account/login", name: "Login", Component: Login },
  { path: "/account/register", name: "Register", Component: Register },
];

function App() {
  //CART CONTINUE SHOP TIKLANDIĞINDA KAPATILACAK
  //PROPS ILE DAGITILACAK HER YERDE MEVCUT
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [buttonInnerHTML, setButtonInnerHTML] = useState("");

  const location = useLocation();
  const uiCtx = useContext(UIContext);

  const clickedButtonHandler = (data) => {
    setButtonInnerHTML(data);
  };

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
      <Header
        categories={DUMMY_DATA.menu}
        clickedButton={clickedButtonHandler}
      />
      {/*Menü düzeltilecek clickedButtondan gelen data ile menu.name eş ise render*/}
      {/* {DUMMY_DATA.menu.map((item) => (
        <Menu
          className={`menu ${
            item.name !== buttonInnerHTML || dimensions.width <= 1024
              ? "menu--close"
              : "menu--active"
          }`}
          key={item.id}
          item={item}
        />
      ))} */}
      {DUMMY_DATA.menu
        .filter((item) => item.name === buttonInnerHTML)
        .map((item) => (
          <Menu className="menu menu--active" key={item.id} item={item} />
        ))}
      <Routes>
        <Route
          path="/collections/:categoryName"
          element={<Collection items={DUMMY_DATA.pages} />}
        />
        <Route
          path={`/collections/:categoryName/:productName`}
          element={<CollectionDetail data={DUMMY_DATA.pages} />}
        />
        <Route
          path={`/products/:productName`}
          element={<CollectionDetail data={DUMMY_DATA.pages} />}
        />

        <Route
          path="/blogs/news"
          element={<News data={DUMMY_DATA.culture} />}
        />
        <Route
          path="/blogs/news/:newsName"
          element={<NewsDetail data={DUMMY_DATA.culture} />}
        />

        <Route
          path="/"
          element={
            <Home
              products={DUMMY_DATA.products}
              collections={DUMMY_DATA.collection}
            />
          }
        />
        <Route
          path="/pages/launches"
          element={<Launches launches={DUMMY_DATA.pages} />}
        />
        <Route
          path="/pages/brands"
          element={<Brands data={DUMMY_DATA.brands} />}
        />
        <Route path="/checkouts" element={<Payment />} />
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      <Cart data={DUMMY_DATA.cart} />
      {dimensions.width < 1025 && <MenuMobile menu={DUMMY_DATA.menu} />}
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
          gsap.to(".backdrop--wishlist", {
            opacity: 0,
            display: "none",
            ease: "Expo.easeInOut",
          });
          gsap.to("body", {
            overflow: "visible",
          });
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
