import React, { useRef } from "react";

import Footer from "../components/Footer/Footer";
import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
import PagesList from "../components/UI/pagesList";
import InternationalShip from "../components/UI/pagesInternational";

const Faq = () => {
  const smoothScrollWrapper = useRef();
  return (
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
      <div className="pages">
        <span className="pages__title">WHAT IS LEMKUS</span>
        <p className="pages__description">
          Lemkus is a streetwear brick and mortar/e-commerce fashion retailer
          based in Cape Town, South Africa.
        </p>
        <span className="pages__title">HOW DO I BUY ON YOUR SITE?</span>
        <ol className="pages__list">
          <li className="pages__item">
            Select a category that appeals to you.
          </li>
          <li className="pages__item">
            Within the category you’ll find a range of products on offer.
          </li>
          <li className="pages__item">
            Once you choose a product you’ll be taken to the product review page
            for a more detailed description along with pictures and details to
            help you make your choice, we understand every purchase is a big
            decision so we will try to equip you with as much information as
            possible.
          </li>
          <li className="pages__item">Select size and “Add to Bag”. </li>
          <li className="pages__item">
            You will be taken to your bag confirming the addition and from here
            you can choose to continue shopping or checkout.
          </li>
          <li className="pages__item">
            In checkout we’ll give you the opportunity to review your cart. From
            here you can enter your delivery and billing addresses (if you’re a
            first time buyer) or go straight to the payment page (if you’ve
            bought before).
          </li>
        </ol>
        <span className="pages__title">
          WHAT PAYMENT METHODS / OPTIONS ARE AVAILABLE?
        </span>
        <p className="pages__description">
          EFT/DIRECT DEPOSIT - Only once we have received your money into our
          account will we send your product to you. This will take one day if
          you bank with nedbank and 2 days with other banks.
        </p>
        <p className="pages__description">
          CREDIT CARD: VISA AND MASTERCARD - Your order will be sent
          immediately, please note that you will need to have a card that has
          been 3D secured, if you have a new card this should automatically be
          done, if not you will have to go and activate this at your nearest
          bank branch. Don’t be nervous about 3D secure it does a brilliant job
          of helping us all to have a more secure and fraud free e-commerce
          experience.
        </p>
        <p className="pages__description">
          MOBICRED: This is an easy Online credit application with an instant
          response. The steps taken to apply for Credit are as follows:
        </p>
        <p className="pages__description">
          Apply on Mobicreds Website, click here Accept the Terms and conditions
          Your Ready to Shop Online, and Mobicred will charge you a monthly fee
          depending on how much credit is granted.
        </p>
        <p className="pages__description">
          <b>
            PLEASE NOTE: JACK LEMKUS FACILITATES MOBICRED ON OUR WEBSITE BUT
            DOES NOT HAVE ANY AFFILIATION WITH MOBICRED, ALL ACCOUNT DISPUTES
            AND SETTLING OF ACCOUNTS MUST BE DONE THROUGH MOBICRED.
          </b>
        </p>
        <span className="pages__title">
          WHERE IS MY ORDER/HOW DO I CHECK ON THE STATUS OF MY ORDER?
        </span>
        <p className="pages__description">
          There are several areas where you can track your order; in your user
          profile under 'items ordered' under Track Order on the right hand
          side, and the site footer by clicking on 'Track my Parcel', Just enter
          your tracking number into the provided field and you will instantly
          get an update as to how far your product is on the delivery process.
        </p>
        <span className="pages__title">
          DO YOU DELIVER OVERSEAS / WHERE DO YOU DELIVER?
        </span>
        <p className="pages__description">
          JACKLEMKUS.COM delivers to all parts of South Africa. RAM have an
          extensive network across the country.
        </p>
        <span className="pages__title">HOW DOES LEMKUS DELIVER PRODUCTS?</span>
        <p className="pages__description">
          Jack Lemkus uses RAM Express Road for delivery.
        </p>
        <span className="pages__title">PLACE/TIME OF DELIVERY:</span>
        <p className="pages__description">
          Due to courier restrictions Jacklemkus.com can only deliver to
          addresses where there will be someone to sign for the product during
          the hours of 8:30 - 5 and Monday - Friday.
        </p>
        <span className="pages__title">CAN I CHANGE MY DELIVERY ADDRESS?</span>
        <p className="pages__description">
          Yes you can change your delivery address. The courier will even allow
          for one failed attempt of delivery and a change of address before a
          second attempt, should this second attempt fail the courier will
          return the product back to Jack Lemkus. Should this occur this will
          count as your free return.
        </p>
        <span className="pages__title">HOW DO I RETURN AN ITEM?</span>
        <p className="pages__description">
          <b>
            Please keep your shipping box incase you would like to return the
            item you have purchased on lemkus.com
          </b>
        </p>
        <PagesList />
        <span className="pages__title">DOES LEMKUS SHIP INTERNATIONALLY?</span>
        <p className="pages__description">Yes we do</p>
        <InternationalShip />
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default Faq;
