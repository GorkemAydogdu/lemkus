import { useState, useEffect, useContext } from "react";
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
            { id: 2, pathname: "/male-sneakers", name: "Mens" },
            { id: 3, pathname: "/womens-sneakers", name: "Womens" },
            {
              id: 4,
              pathname: "/kids-grade-school-sneakers",
              name: "Grade School",
            },
          ],
        },
        {
          id: 2,
          category: "Brands",
          items: [
            { id: 1, pathname: "/sneakers/nike", name: "Nike" },
            { id: 2, pathname: "/sneakers/air-jordan", name: "Air Jordan" },
            { id: 3, pathname: "/sneakers/new-balance", name: "New Balance" },
            {
              id: 4,
              pathname: "/sneakers/adidas",
              name: "Adidas",
            },
            { id: 5, pathname: "/sneakers/converse", name: "Converse" },
            { id: 6, pathname: "/sneakers/reebok", name: "Reebok" },
            { id: 7, pathname: "/sneakers/puma", name: "Puma" },
            { id: 8, pathname: "/sneakers/crocs", name: "Crocs" },
            {
              id: 9,
              pathname: "/sneakers/ewing-athletics",
              name: "Ewing Athletics",
            },
            { id: 10, pathname: "/sneakers/asics", name: "Asics" },
          ],
        },
      ],
      featured: {
        name: "Featured",
        items: [
          {
            id: 1,
            name: "Air Max 90 QS",
            image:
              "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/AM90-Sneakers-Featured-Dropdown_Images_556x508_40cd2b3a-c299-440b-b9f5-0b6125e26508.png?v=1628241321",
          },
          {
            id: 2,
            name: "Nike Blazer",
            image:
              "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/Blazer-Dropdown_Images_556x508_06428b80-5d44-4a2a-8cf2-2b64f899ef7c.jpg?v=1627726517",
          },
          {
            id: 3,
            name: "Chuck 70",
            image:
              "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/Chuck-70--Dropdown_Images_556x508_174a36f1-11b3-4acc-b099-36ed7dfb65ad.jpg?v=1627726533",
          },
        ],
      },
    },
    // {
    //   id: 2,
    //   name: "Apparel",
    //   links: [
    //     {
    //       id: 1,
    //       category: "Collections",
    //       items: ["All Apparel", "Mens", "Womens", "Sale"],
    //     },
    //     {
    //       id: 2,
    //       category: "Mens",
    //       items: [
    //         "T-shirts/Tops",
    //         "Sweatshirts",
    //         "Outerwear",
    //         "Bottoms",
    //         "Team Sportswear",
    //       ],
    //     },
    //     {
    //       id: 3,
    //       category: "Womens",
    //       items: ["T-shirts/Tops", "Sweatshirts", "Outerwear", "Bottoms"],
    //     },
    //   ],
    //   featured: {
    //     name: "Featured",
    //     items: [
    //       {
    //         id: 1,
    //         name: "Air Jordan PSG Tee",
    //         image:
    //           "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/PSG-Apparel-Featured-Dropdown_Images_556x508-Mens-Apparel.png?v=1631001892",
    //       },
    //       {
    //         id: 2,
    //         name: "Nsw Icon GX Hoodie",
    //         image:
    //           "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/Apparel-Featured-Dropdown_Images_556x508-Wmns-Apparel.png?v=1627889788",
    //       },
    //     ],
    //   },
    // },
    // {
    //   id: 3,
    //   name: "Kids",
    //   links: [
    //     {
    //       id: 1,
    //       category: "Collections",
    //       items: ["All Kids", "All Kids Sneakers", "All Kids Apparel"],
    //     },
    //     {
    //       id: 2,
    //       category: "Brands",
    //       items: [
    //         "Nike",
    //         "Air Jordan",
    //         "Adidas",
    //         "Converse",
    //         "Crocs",
    //         "New Balance",
    //       ],
    //     },
    //     {
    //       id: 3,
    //       category: "Apparel",
    //       items: [
    //         "T-Shirts/Tops",
    //         "Sweatshirts",
    //         "Outerwear",
    //         "Bottoms",
    //         "Infant Sets",
    //         "Team Sportswear",
    //       ],
    //     },
    //   ],
    //   featured: {
    //     name: "Featured",
    //     items: [
    //       {
    //         id: 1,
    //         name: "Air Max 1 QS (TD)",
    //         image:
    //           "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/Kids-Featured-Dropdown_Images_556x508-1.jpg?v=1627890516",
    //       },
    //       {
    //         id: 2,
    //         name: "Crocs x Paw Patrol",
    //         image:
    //           "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/Kids-Featured-Dropdown_Images_556x508-2.png?v=1627890527",
    //       },
    //     ],
    //   },
    // },
    // {
    //   id: 4,
    //   name: "Accessories",
    //   links: [
    //     {
    //       id: 1,
    //       category: "Collections",
    //       items: ["All Accessories"],
    //     },
    //     {
    //       id: 2,
    //       category: "Types",
    //       items: [
    //         "Headwear",
    //         "Socks",
    //         "Bags",
    //         "Sneaker Care",
    //         "Crocs Jibbitz",
    //         "Sunglasses",
    //       ],
    //     },
    //   ],
    //   featured: {
    //     name: "Featured",
    //     items: [
    //       {
    //         id: 1,
    //         name: "The North Face Headwear",
    //         image:
    //           "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/Accessories-Featured-Dropdown_Images_556x508-1.png?v=1627892249",
    //       },
    //       {
    //         id: 2,
    //         name: "Nike Nsw Crossbody",
    //         image:
    //           "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/Accessories-Featured-Dropdown_Images_556x508-2.png?v=1627892249",
    //       },
    //       {
    //         id: 3,
    //         name: "Nike NSW Everyday Crew",
    //         image:
    //           "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/Accessories-Featured-Dropdown_Images_556x508-3.png?v=1627892835",
    //       },
    //     ],
    //   },
    // },
  ],
  launches: [
    {
      id: 1,
      name: "Mt580 Lifestyle",
      price: "R 2,699.00",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/New_Balance_2x_ed8e9aca-d511-4f34-bce6-323df64ca48e_200x.png?v=1625833403",
      sizes: [7, 8, 9, 10],
      image: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/MT580RTB-1.png?v=1673421398",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/MT580RTB-2.png?v=1673421398",
        },
      ],
    },
    {
      id: 2,
      name: "Air Jordan 2 Retro",
      price: "R 3,699.00",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Air_Jordan_2x_abada9df-a5b5-4f3b-92e0-e189743df31f_200x.png?v=1629719248",
      sizes: [6, 7, 8, 9, 10, 11, 12],
      image: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DX2454-106-1.png?v=1671455949",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DX2454-106-2.png?v=1671455949",
        },
      ],
    },
    {
      id: 3,
      name: "Air Jordan 1 Retro Hi OG [W]",
      price: "R 3,399.00",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Air_Jordan_2x_abada9df-a5b5-4f3b-92e0-e189743df31f_200x.png?v=1629719248",
      sizes: [3, 4, 5, 6, 7, 8],
      image: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DZ2523-001-1.png?v=1671354786",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DZ2523-001-2.png?v=1671354786",
        },
      ],
    },
    {
      id: 4,
      name: "Air Jordan 6 Retro",
      price: "R 3,699.00",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Air_Jordan_2x_abada9df-a5b5-4f3b-92e0-e189743df31f_200x.png?v=1629719248",
      sizes: [10, 11, 12],
      image: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DX2836-001-1.png?v=1671545564",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DX2836-001-2.png?v=1671545564",
        },
      ],
    },
    {
      id: 5,
      name: "Air Jordan 5 Retro GTX [W]",
      price: "R 3,899.00",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Air_Jordan_2x_abada9df-a5b5-4f3b-92e0-e189743df31f_200x.png?v=1629719248",
      sizes: [3, 4, 5, 6, 7, 8],
      image: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DR0092-001-1.png?v=1667822837",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DR0092-001-2.png?v=1667822837",
        },
      ],
    },
    {
      id: 6,
      name: "Dunk Hi Retro SE",
      price: "R 2,399.00",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Nike_2x_d319ed79-6a55-4f30-a769-88431ed60091_200x.png?v=1625832579",
      sizes: [5.5, 6, 7, 8, 9, 10, 12],
      image: [
        {
          id: 1,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DQ7680-300-1.png?v=1670320252",
        },
        {
          id: 2,
          url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DQ7680-300-2.png?v=1670320252",
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
          price: "R 2,999.00",
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
          price: "R 2,999.00",
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
          price: "R 799.00",
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
          price: "R 2,499.00",
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
          price: "R 2,199.00",
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
          price: "R 999.00",
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
          price: "R 999.00",
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
          price: "R 949.00",
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
          price: "R 999.00",
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
          price: "R 1,199.00",
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
          price: "R 2,599.00",
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
          price: "R 2,299.00",
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
          price: "R 3,399.00",
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
          price: "R 2,599.00",
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
          price: "R 2,599.00",
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
          price: "R 1,699.00",
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
          price: "R 2,099.00",
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
          price: "R 2,199.00",
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
          price: "R 2,199.00",
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
          price: "R 2,399.00",
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
          price: "R 749.00",
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
          price: "R 749.00",
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
          price: "R 2,599.00",
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
          price: "R 2,399.00",
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
          price: "R 2,399.00",
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
      price: "R 899.00",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Crep_2x_0b83b184-421f-4102-a1eb-3ec443c46f35_200x.png?v=1625833041",
      image:
        "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/SPG715-1.png?v=1645624535",
    },
    {
      id: 2,
      name: "CREP CURE",
      price: "R 399.00",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Crep_2x_0b83b184-421f-4102-a1eb-3ec443c46f35_200x.png?v=1625833041",
      image:
        "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/7518_6108fe72421f74.09231456_SPG706.png?v=1637651920",
    },
    {
      id: 3,
      name: "CREP ULTIMATE SHOE CARE PACK",
      price: "R 799.00",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Crep_2x_0b83b184-421f-4102-a1eb-3ec443c46f35_200x.png?v=1625833041",
      image:
        "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/7520_6108fde25f6173.48031833_SPG710.png?v=1637651912",
    },
    {
      id: 4,
      name: "CREP PROTECT",
      price: "R 299.00",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Crep_2x_0b83b184-421f-4102-a1eb-3ec443c46f35_200x.png?v=1625833041",
      image:
        "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/7516_6108fe11abde32.90077137_SPG704_1b8c89b0-a131-43ca-ad46-a3d05a1e0430.png?v=1637651923",
    },
    {
      id: 5,
      name: "CREP CURE REFILL",
      price: "R 219.00",
      logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/collections/Crep_2x_0b83b184-421f-4102-a1eb-3ec443c46f35_200x.png?v=1625833041",
      image:
        "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/7519_6108fe441cf786.95248695_SPG709.png?v=1637651917",
    },
  ],
  pages: [
    {
      id: 1,
      name: "Sneakers",
      products: [
        {
          id: 1,
          brand: "Nike",
          logo: "https://cdn.shopify.com/s/files/1/0538/9280/8895/t/1/assets/nike_200x.png",
          items: [
            {
              id: 1,
              name: "Blazer Mid Victory [W]",
              gender: "Womens",
              sneakerStyle: "Blazer",
              sizes: [3, 4, 5, 6],
              price: "R 2,299.00",
              images: [
                {
                  id: 1,
                  url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DR2948-200-1.png?v=1674122077",
                },
                {
                  id: 2,
                  url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DR2948-200-2.png?v=1674122077",
                },
              ],
            },
            {
              id: 2,
              name: "Blazer Low Platform [W]",
              gender: "Womens",
              sneakerStyle: "Blazer",
              sizes: [3, 4, 5, 6],
              price: "R 1,899.00",
              images: [
                {
                  id: 1,
                  url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DJ0292-200-1.png?v=1667568139",
                },
                {
                  id: 2,
                  url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DJ0292-200-2.png?v=1667568139",
                },
              ],
            },
            {
              id: 3,
              name: "Lebron XX",
              gender: "Mens",
              sneakerStyle: "Blazer",
              sizes: [6, 7, 8, 9, 10, 11, 12],
              price: "R 3,699.00",
              images: [
                {
                  id: 1,
                  url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FJ4955-300-1.png?v=1674121735",
                },
                {
                  id: 2,
                  url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/FJ4955-300-2.png?v=1674121735",
                },
              ],
            },
            {
              id: 4,
              name: "Air Max Motif [GS]",
              gender: "Kids",
              sneakerStyle: "Air Max",
              sizes: [3, 4, 5, 6],
              price: "R 2,199.00",
              images: [
                {
                  id: 1,
                  url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DH9388-005-1.png?v=1670320762",
                },
                {
                  id: 2,
                  url: "https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DH9388-005-2.png?v=1670320762",
                },
              ],
            },
          ],
        },
      ],
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
  { path: "/pages/brands", name: "Brands", Component: Brands },
  { path: "/search", name: "Search", Component: Search },
  { path: "/account/login", name: "Login", Component: Login },
  { path: "/account/register", name: "Register", Component: Register },
  { path: "/blogs/news", name: "News", Component: News },
  {
    path: "/blogs/news/detail",
    name: "NewsDetail",
    Component: NewsDetail,
  },
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
    setButtonInnerHTML(data.innerHTML);
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
          path="/collections/sneakers"
          element={DUMMY_DATA.pages
            .filter((item) => item.name === "Sneakers")
            .map((item) =>
              item.products.map((product) => (
                <Collection key={product.id} items={product.items} />
              ))
            )}
        />

        <Route
          path="/collections/womens-sneakers"
          element={DUMMY_DATA.pages
            .filter((item) => item.name === "Sneakers")
            .map((item) =>
              item.products.map((product) => (
                <Collection
                  key={product.id}
                  items={product.items.filter(
                    (filtered) => filtered.gender === "Womens"
                  )}
                />
              ))
            )}
        />
        <Route
          path="/collections/male-sneakers"
          element={DUMMY_DATA.pages
            .filter((item) => item.name === "Sneakers")
            .map((item) =>
              item.products.map((product) => (
                <Collection
                  key={product.id}
                  items={product.items.filter(
                    (filtered) => filtered.gender === "Mens"
                  )}
                />
              ))
            )}
        />
        <Route
          path="/collections/kids-grade-school-sneakers"
          element={DUMMY_DATA.pages
            .filter((item) => item.name === "Sneakers")
            .map((item) =>
              item.products.map((product) => (
                <Collection
                  key={product.id}
                  items={product.items.filter(
                    (filtered) => filtered.gender === "Kids"
                  )}
                />
              ))
            )}
        />

        <Route path="/" element={<Home products={DUMMY_DATA.products} />} />
        <Route
          path="/pages/launches"
          element={<Launches launches={DUMMY_DATA.launches} />}
        />
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
