import React from "react";

const PagesList = () => {
  return (
    <ol className="pages__list">
      <li className="pages__item">All returns are economy.</li>
      <li className="pages__item">
        Returning for an exchange costs <b>R100</b>
      </li>
      <li className="pages__item">
        Returning for a refund costs <b>R100</b>
      </li>
      <li className="pages__item">
        Returns and refunds must be enacted within{" "}
        <b>7 days of receiving the goods.</b>
      </li>
      <li className="pages__item">
        <b>NO RETURNS</b> or <b>EXCHANGES</b> on <b>SALE ITEMS.</b>
      </li>
      <li className="pages__item">
        To process returns/exchanges please email <b>info@jacklemkus.co.za</b>{" "}
        and make sure you include your order number in the email subject
        (Banking details will be emailed to you).
      </li>
      <li className="pages__item">
        Exchanges can be made in-store but if you are returning the item and you
        would like a refund, the refund would have to be{" "}
        <b>processed the same way payment was made for the item/s.</b>
      </li>
      <li className="pages__item">
        Only once we receive the product that is being returned/exchanged will
        we process the refund/exchange. All goods must be{" "}
        <b>undamaged/unworn</b> with all the relevant packaging and tags still
        intact on the item -{" "}
        <b>
          Any items that are returned and shows signs of wear, is not in the
          relevant packaging or does not have the tags intact will NOT BE
          REFUNDED or EXCHANGED.
        </b>
      </li>
      <li className="pages__item">
        If an item is sent to you in the wrong style, size or colourway we will
        process a return/exchange free of charge.
      </li>
      <li className="pages__item">
        Credit card refunds may take up to <b>10 working days</b> by law.
      </li>
      <li className="pages__item">
        EFT refunds can take up to <b>2 working days</b> to be visible in
        customers account. Please note this is bank dependant.
      </li>
    </ol>
  );
};

export default PagesList;
