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
            { id: 2, pathname: "/sneakers?name=mens", name: "Mens" },
            { id: 3, pathname: "/sneakers?name=womens", name: "Womens" },
            {
              id: 4,
              pathname: "/sneakers?name=grade-school",
              name: "Grade School",
            },
          ],
        },
        {
          id: 2,
          category: "Brands",
          items: [
            { id: 1, pathname: "/sneakers?name=nike", name: "Nike" },
            {
              id: 2,
              pathname: "/sneakers?name=air-jordan",
              name: "Air Jordan",
            },
            {
              id: 3,
              pathname: "/sneakers?name=new-balance",
              name: "New Balance",
            },
            {
              id: 4,
              pathname: "/sneakers?name=adidas",
              name: "Adidas",
            },
            { id: 5, pathname: "/sneakers?name=converse", name: "Converse" },
            { id: 6, pathname: "/sneakers?name=reebook", name: "Reebok" },
            { id: 7, pathname: "/sneakers?name=puma", name: "Puma" },
            { id: 8, pathname: "/sneakers?name=crocs", name: "Crocs" },
            {
              id: 9,
              pathname: "/sneakers?name=ewing-athletics",
              name: "Ewing Athletics",
            },
            { id: 10, pathname: "/sneakers?name=asics", name: "Asics" },
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
    {
      id: 2,
      name: "Apparel",
      links: [
        {
          id: 1,
          category: "Collections",
          items: [
            { id: 1, pathname: "/apparel", name: "All Apparel" },
            { id: 2, pathname: "/apparel?name=mens", name: "Mens" },
            { id: 3, pathname: "/apparel?name=womens", name: "Womens" },
          ],
        },
        {
          id: 2,
          category: "Mens",
          gender: "Mens",
          items: [
            {
              id: 1,
              pathname: "/apparel?name=mens&category=t-shirts/tops",
              name: "T-shirts/Tops",
            },
            {
              id: 2,
              pathname: "/apparel?name=mens&category=sweatshirts",
              name: "Sweatshirts",
            },
            {
              id: 3,
              pathname: "/apparel?name=mens&category=outerwear",
              name: "Outerwear",
            },
            {
              id: 4,
              pathname: "/apparel?name=mens&category=bottoms",
              name: "Bottoms",
            },
            {
              id: 5,
              pathname: "/apparel?name=mens&category=team-sportswear",
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
              pathname: "/apparel?name=womens&category=t-shirts/tops",
              name: "T-shirts/Tops",
            },
            {
              id: 2,
              pathname: "/apparel?name=womens&category=sweatshirts",
              name: "Sweatshirts",
            },
            {
              id: 3,
              pathname: "/apparel?name=womens&category=outerwear",
              name: "Outerwear",
            },
            {
              id: 4,
              pathname: "/apparel?name=womens&category=bottoms",
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
            name: "Air Jordan PSG Tee",
            image:
              "https://cdn.shopify.com/s/files/1/0538/9280/8895/files/PSG-Apparel-Featured-Dropdown_Images_556x508-Mens-Apparel.png?v=1631001892",
          },
          {
            id: 2,
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
              pathname: "/kids?name=sneakers",
              name: "All Kids Sneakers",
            },
            {
              id: 3,
              pathname: "/kids?name=apparel",
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
              pathname: "/kids?name=nike",
              name: "Nike",
            },
            {
              id: 2,
              pathname: "/kids?name=air-jordan",
              name: "Air Jordan",
            },
            {
              id: 3,
              pathname: "/kids?name=adidas",
              name: "Adidas",
            },
            {
              id: 4,
              pathname: "/kids?name=converse",
              name: "Converse",
            },
            {
              id: 5,
              pathname: "/kids?name=crocs",
              name: "Crocs",
            },
            {
              id: 6,
              pathname: "/kids?name=new-balance",
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
              pathname: "/kids?name=apparel&category=t-shirts/tops",
              name: "T-shirts/Tops",
            },
            {
              id: 2,
              pathname: "/kids?name=apparel&category=sweatshirts",
              name: "Sweatshirts",
            },
            {
              id: 3,
              pathname: "/kids?name=apparel&category=outerwear",
              name: "Outerwear",
            },
            {
              id: 4,
              pathname: "/kids?name=apparel&category=bottoms",
              name: "Bottoms",
            },
            {
              id: 5,
              pathname: "/kids?name=apparel&category=infant-sets",
              name: "Infant Sets",
            },
            {
              id: 6,
              pathname: "/kids?name=apparel&category=team-sportswear",
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
            { id: 1, pathname: "/accessories?name=headwear", name: "Headwear" },
            { id: 2, pathname: "/accessories?name=socks", name: "Socks" },
            { id: 3, pathname: "/accessories?name=bags", name: "Bags" },
            {
              id: 4,
              pathname: "/accessories?name=sneaker-care",
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
      items: [
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
          type: "Blazer",
          details:
            "Revisiting the iconic lineup of the King’s Christmas Day kicks, this design’s festive array of graphics and colors creates a mash-up of Christmas’ past. From dimes to dunks, this is no ugly sweater—its lightweight, low-to-the-ground and ultra-cushioned design is fresher than pine and cozier than a cup of cocoa by the fireside. Hope you’ve been nice.",
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
              id: 6,
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
          price: "R 1,699.00",
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
          type: "Blazer",
          details:
            "The adidas Gazelle Shoes have stepped onto just about every corner of our cultural landscape — starting in the world of sport before making their way into the music and fashion scenes. These trainers are a one-to-one reissue of the '91 Gazelle, with the same textures, materials and proportions as the OG. Even the colours nod back to the era, done in muted tones with contrast.",
          sizes: [3, 4, 5, 6, 7, 8, 9, 10, 11],
          price: "R 1,499.00",
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
          price: "R 1,599.00",
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
          price: "R 1,599.00",
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
          price: "R 1,949.00",
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
          price: "R 529.00",
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
          price: "R 619.00",
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

  let categoryName = JSON.parse(localStorage.getItem("categoryName"));
  let clickedGender = JSON.parse(localStorage.getItem("gender"));
  let clickedItem = JSON.parse(localStorage.getItem("itemName"));

  const clickedButtonHandler = (data) => {
    setButtonInnerHTML(data);
  };

  // let data = DUMMY_DATA.pages.map((product) =>
  //   product.items.filter((filtered) => {
  //     if (wordInString(clickedItem, filtered.categoryName)) {
  //       return filtered;
  //     } else if (
  //       filtered.brand === clickedItem &&
  //       filtered.categoryName === categoryName
  //     ) {
  //       return filtered;
  //     } else if (
  //       filtered.type === clickedItem &&
  //       filtered.gender === clickedGender &&
  //       filtered.categoryName === categoryName
  //     ) {
  //       return filtered;
  //     } else if (
  //       filtered.gender === clickedItem &&
  //       filtered.categoryName === categoryName
  //     ) {
  //       return filtered;
  //     } else {
  //       return false;
  //     }
  //   })
  // );

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
        {/* <Route
          path="/collections/:categoryName"
          element={DUMMY_DATA.pages
            .filter((item) => item.name === categoryName)
            .map((item) =>
              item.products.map((product) => (
                <Collection
                  key={product.id}
                  items={
                    clickedItem === product.name
                      ? product.items
                      : product.items.filter((item) => {
                          if (item.brand === clickedItem) {
                            return item;
                          } else if (
                            item.type === clickedItem &&
                            item.gender === clickedGender
                          ) {
                            return item;
                          } else if (item.gender === clickedItem) {
                            return item;
                          } else {
                            return false;
                          }
                        })
                  }
                />
              ))
            )}
        />
        */}
        <Route
          path={`/collections/:categoryName/:productName`}
          element={<CollectionDetail />}
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
