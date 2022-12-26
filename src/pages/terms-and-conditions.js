import React, { useRef } from "react";

import Footer from "../components/Footer/Footer";
import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
import PagesList from "./pagesList";
import InternationalShip from "./pagesInternational";

const TsCs = () => {
  const smoothScrollWrapper = useRef();

  return (
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
      <div className="pages">
        <span className="pages__title">SHIPPING & DELIVERY</span>
        <p className="pages__description">
          <b>Lemkus.com</b> uses only the best courier companies when delivering
          your product. Please see below the different options you have on how
          to receive your product, please also see a brief terms and conditions
          section around delivery.
        </p>
        <p className="pages__description">
          <b>Free delivery option</b>
        </p>
        <p className="pages__description">
          Delivery is Free everywhere in SA on all orders over R800.<br></br>{" "}
          Main Centres take 2-3 Days<br></br> Regional Areas take 3-5 days.
          <br></br>
          Collecting in store - Should you wish to skip the sometimes long ques
          in store, you can make your purchase online and come in to collect.
          This would also work if you want to pick up some of our best product
          before it flies off the shelves.
        </p>
        <p className="pages__description">
          <b>Free delivery option</b>
        </p>
        <p className="pages__description">
          Orders can be collected within an hour<br></br> Please note if you pay
          via EFT, you will be sent an email letting you know when we have
          received the payment and after such, can come and collect your order.
          <br></br>
          <b>
            EFT Payment Method: Please note we can not be liable If the product
            you ordered is sold before you email us proof of payment, we can
            keep product aside for 1HOUR<br></br> Important Points:
          </b>{" "}
          We want to help you have the best e-commerce experience we possibly
          can, please see our very basic terms & conditions below:<br></br>
          Our trusted courier partners are hand to hand couriers,<br></br>
          <u>
            <b>no P.O Box Addresses</b>
          </u>
          Courier will try delivery twice, and try to contact you both times,
          please note we only offer Free Delivery when it is initially sent out,
          if the product is returned to us after a failed second attempt we will
          charge you R75 for the next attempt.<br></br>
          <b>Cheques are not accepted</b>
          <br></br>The Courier Operates from 8:00AM-17:00PM, Monday to Friday
          <br></br>All orders received after 15:00PM will only leave the next
          working day<br></br>Please make sure someone is present at the address
          to sign for your purchase, if someone will not be present, please use
          your work address, the courier has your contact details!<br></br>Full
          amount on order must be paid before effecting delivery.<br></br>
          Delivery times do not include Saturdays, Sundays or public holidays,
          and are subject to signature authorisation.<br></br>Orders with
          incorrect billing information, or requiring additional verification,
          will be delayed.<br></br>Order may be delayed if the following
          applies:<br></br>Customer is not present to receive order delivery is
          effected twice by the courier, if customer is still not present to
          sign for order, it is returned to Jack Lemkus<br></br>Address is
          incorrect on order<br></br>Act of God
        </p>
        <span className="pages__title">PRIVACY & SECURITY</span>
        <p className="pages__description">See Privacy Policy</p>
        <span className="pages__title">RETURNS & REPLACEMENTS</span>
        <p className="pages__description">
          <b>
            Please keep your shipping box incase you would like to return the
            item you have purchased on lemkus.com.{" "}
          </b>
        </p>
        <PagesList />
        <span className="pages__title">ORDERING</span>
        <p className="pages__description">
          Select a category that you are looking to purchase product from.
          <br></br>
          Within the category you’ll find a range of products on offer.
          <br></br>
          Once you choose a product you’ll be taken to the product review page
          for a more detailed description along with pictures and reviews to
          help you make you choice, we understand every purchase is a big
          decision so we will try to equip you with as much information as
          possible.
          <br></br>
          Select quantity, size and “add to your cart”. You will be taken to
          your cart confirming the addition and from here you can choose to
          continue shopping or checkout. In checkout we’ll give you the
          opportunity to review your cart.
          <br></br>
          From here you can enter your delivery and billing addresses (if you’re
          a first time buyer) or go straight to the payment page (if you’ve
          bought before).
          <br></br>
          Any orders placed online for releases that has not been verified
          through the raffle system will be cancelled. (Including orders placed
          before the release date).
          <br></br>
          Orders that are placed online that were meant to be an in-store
          release will also be canceled.
        </p>
        <span className="pages__title">PAYMENT, PRICING & PROMOTIONS</span>
        <p className="pages__description">
          EFT/DIRECT DEPOSIT - Only once we have received your money into our
          account will we send your product to you. This will take one day if
          you bank with Nedbank and 2 days with any other bank.
          <br></br>
          CREDIT CARD: VISA AND MASTERCARD - Your order will be sent
          immediately, please note that you will have to have a card that has
          been 3D activated, if you have a new card this should automatically be
          done, if not you will have to go and activate this at your nearest
          bank branch.
          <br></br>
          Don't be nervous about 3D secure, it does a brilliant job of helping
          us all to have a more secure and fraud free e-commerce experience.
        </p>
        <span className="pages__title">
          HOW CAN I REGISTER / ACTIVATE FOR 3D SECURE?
        </span>
        <p className="pages__description">
          <b>ABSA</b> - ABSA cardholders do not need to register or activate 3D
          Secure. Proceed to Checkout and follow the prompts.
        </p>
        <p className="pages__description">
          <b>Standard Bank</b> - Standard Bank cardholders do not need to
          register or activate 3D Secure. Proceed to checkout and follow the
          prompts.
        </p>
        <p className="pages__description">
          <b>FNB</b> - FNB cardholders must register and activate 3D Secure.
          Please follow the steps below to Register your card for 3D Secure:
        </p>
        <p className="pages__description">
          Login to your Online Banking Profile
          <br></br>
          Select 'My Bank Accounts'
          <br></br>
          Select the My Cards Tab
          <br></br>
          Find the Card you are wanting to activate for 3D Secure
          <br></br>
          Click "Activate now"
          <br></br>
          Complete the required Information
          <br></br>a One time Password will be sent to your phone, enter it when
          prompted
          <br></br>
          You are now activated for 3D Secure, Happy Shopping!
        </p>
        <p className="pages__description">
          <b>Nedbank</b> - Nedbank cardholders do not need to register or
          activate 3D Secure.
        </p>
        <p className="pages__description">
          <b>Investec</b> - Investec cardholders must use their credit card pins
          when prompted to submit the One Time Pin (OTP) in the checkout.
        </p>
        <p className="pages__description">
          <b>Capitec</b> - If you've already registered or activated your card
          for 3D Secure with Capitec, simply enter your personal SecureCode
          password on the checkout screen. Please go here and follow the
          instructions.
        </p>
        <p className="pages__description">
          <b>SecureCode Customers (MasterCard)</b> (If you bank with an
          Institution other than the above): Please visit the the Securecode
          website here
        </p>
        <p className="pages__description">
          Verified by Visa Customers (VISA): Customers with VISA Cards that do
          not bank with one of the above need no longer register their Cards to
          checkout, please see the Visa website here for further explanation
        </p>
        <span className="pages__title">VIEWING ORDERS</span>
        <p className="pages__description">
          Login into your account in the Top Right
          <br></br>
          Or create an account
          <br></br>
          Once logged in, you can view your orders under 'Order History'
        </p>
        <span className="pages__title">LAY-BY TERMS AND CONDITIONS</span>
        <p className="pages__description">
          Lay-byes can only be done IN STORE
          <br></br>
          10% Deposit, 3 Months to Pay it off
          <br></br>
          No Style changes, Only size changes allowed on a Lay-bye
          <br></br>
          No refunds, Only credit notes allowed (Credit note can not be used to
          Laybye, only as a Final Payment)
          <br></br>
          Cancellations: Subject to a 10% cancellation Fee
          <br></br>
          No Lay-bys will be accepted on Mens sized Air Jordan Retro styles.
        </p>
        <span className="pages__title">UPDATING ACCOUNT INFORMATION</span>
        <p className="pages__description">
          See above.
          <br></br>
          Once logged in you can change your 'account information' and update
          your 'address book'
        </p>
        <span className="pages__title">INTERNATIONAL SHIPPING</span>
        <InternationalShip />
        <span className="pages__title">CHRISTMAS ORDER CUT-OFF</span>
        <p className="pages__description">
          - Order online by 18.12.22 in order to receive your order before
          Christmas.
        </p>
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default TsCs;
