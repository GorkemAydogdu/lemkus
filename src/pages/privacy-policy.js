import React, { useRef } from "react";

import Footer from "../components/Footer/Footer";
import SmoothScrollWrapper from "../components/UI/SmoothScrollWrapper";
const PrivacyPolicy = () => {
  const smoothScrollWrapper = useRef();

  return (
    <SmoothScrollWrapper ref={smoothScrollWrapper} className="pageSmooth">
      <div className="pages">
        <span className="pages__title">PRIVACY POLICY</span>
        <p className="pages__description">
          This privacy policy sets out how Jack Lemkus uses and protects any
          information that you give Jack Lemkus when you use this website. Jack
          Lemkus is committed to ensuring that your privacy is protected. Should
          we ask you to provide certain information by which you can be
          identified when using this website, then you can be assured that it
          will only be used in accordance with this privacy statement. Jack
          Lemkus may change this policy from time to time by updating this page.
          You should check this page from time to time to ensure that you are
          happy with any changes.
        </p>
        <span className="pages__title">WHAT WE COLLECT</span>
        <p className="pages__description">
          We may collect the following information:
        </p>
        <p className="pages__description">
          Name. <br></br>Contact information including email address.<br></br>
          Demographic information such as postcode, preferences and interests.
          <br></br>
          Other information relevant to customer surveys and/or offers.<br></br>{" "}
          For the exhaustive list of cookies we collect see the List of cookies
          we collect section.
        </p>
        <span className="pages__title">
          WHAT WE DO WITH THE INFORMATION WE GATHER
        </span>
        <p className="pages__description">
          We require this information to understand your needs and provide you
          with a better service, and in particular for the following reasons:
        </p>
        <p className="pages__description">
          Internal record keeping. <br></br>We may use the information to
          improve our products and services.<br></br>We will not provide this
          information to any third parties or use it to contact you without
          permission.
        </p>
        <span className="pages__title">SECURITY</span>
        <p className="pages__description">
          We are committed to ensuring that your information is secure. In order
          to prevent unauthorised access or disclosure, we have put in place
          suitable physical, electronic and managerial procedures to safeguard
          and secure the information we collect online.
        </p>
        <span className="pages__title">HOW WE USE COOKIES</span>
        <p className="pages__description">
          A cookie is a small file which asks permission to be placed on your
          computer's hard drive. Once you agree, the file is added and the
          cookie helps analyse web traffic or lets you know when you visit a
          particular site. Cookies allow web applications to respond to you as
          an individual. The web application can tailor its operations to your
          needs, likes and dislikes by gathering and remembering information
          about your preferences.
        </p>
        <p className="pages__description">
          We use traffic log cookies to identify which pages are being used.
          This helps us analyse data about web page traffic and improve our
          website in order to tailor it to customer needs. We only use this
          information for statistical analysis purposes and then the data is
          removed from the system.
        </p>
        <p className="pages__description">
          Overall, cookies help us provide you with a better website, by
          enabling us to monitor which pages you find useful and which you do
          not. A cookie in no way gives us access to your computer or any
          information about you, other than the data you choose to share with
          us. You can choose to accept or decline cookies. Most web browsers
          automatically accept cookies, but you can usually modify your browser
          setting to decline cookies if you prefer. This may prevent you from
          taking full advantage of the website.
        </p>
        <span className="pages__title">LINKS TO OTHER WEBSITES</span>
        <p className="pages__description">
          Our website may contain links to other websites of interest. However,
          once you have used these links to leave our site, you should note that
          we do not have any control over that other website. Therefore, we
          cannot be responsible for the protection and privacy of any
          information which you provide whilst visiting such sites and such
          sites are not governed by this privacy statement. You should exercise
          caution and look at the privacy statement applicable to the website in
          question.
        </p>
        <span className="pages__title">
          CONTROLLING YOUR PERSONAL INFORMATION
        </span>
        <p className="pages__description">
          You may choose to restrict the collection or use of your personal
          information in the following ways:
        </p>
        <p className="pages__description">
          Whenever you are asked to fill in a form on the website, look for the
          box that you can click to indicate that you do not want the
          information to be used by anybody for direct marketing purposes if you
          have previously agreed to us using your personal information for
          direct marketing purposes, you may change your mind at any time by
          writing to or emailing us at info@jacklemkus.co.za
        </p>
        <p className="pages__description">
          We will not sell, distribute or lease your personal information to
          third parties unless we have your permission or are required by law to
          do so. We may use your personal information to send you promotional
          information about third parties which we think you may find
          interesting if you tell us that you wish this to happen.
        </p>
        <p className="pages__description">
          You may request details of personal information which we hold about
          you under the Data Protection Act 1998. A small fee will be payable.
          If you would like a copy of the information held on you please write
          to 26 St Georges Mall Cape Town CBD South Africa or
          info@jacklemkus.co.za.
        </p>
        <p className="pages__description">
          If you believe that any information we are holding on you is incorrect
          or incomplete, please write to or email us as soon as possible, at the
          above address. We will promptly correct any information found to be
          incorrect.
        </p>
        <span className="pages__title">COMPLYING WITH THE POPI ACT</span>
        <p className="pages__description">
          <b>What is the POPI Act?</b> <br></br> POPI stands for Protection of
          Personal Information Act and has come into effect as of 1st of July
          2021.<br></br> <b>What is Lemkus doing to Comply?</b>
          <br></br>Jack Lemkus does not keep customers personal information
          unless given the customers permission, all relevant customer
          information including name used on order, address, and contact number
          are used for delivery purposes <u>only</u>.
        </p>
        <p className="pages__description">
          Newsletter subscriptions at customer's request, delivery details
          needed to effect delivery at customers consent.
        </p>
        <p className="pages__description">
          Lemkus.com uses Shopify as its Web Software, please note Shopify has
          built in security protocols, please see their Privacy Policy here:
          <br></br>
          https://www.shopify.com/legal/privacy
        </p>
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default PrivacyPolicy;
