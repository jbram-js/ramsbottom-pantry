/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import food from "../images/food4.jpg";
import "../styles/Controller.scss";

const WhatWeNeed = () => {
  return (
    <div className="wwn">
      <div className="left-wwn">
        <h1>What we need</h1>
        <p className="wwn-p">
          We rely on the generosity and community spirit of Ramsbottom. We
          always need non-perishable food items, toiletries & cleaning products.
        </p>
        <ul className="wwn-list">
          <li className="wwn-list-item">Pasta & rice</li>
          <li className="wwn-list-item">Tins & jars</li>
          <li className="wwn-list-item">Sauces, jams & spreads</li>
          <li className="wwn-list-item">Tea, coffee & sugar</li>
          <li className="wwn-list-item">Cereals & long life milk</li>
          <li className="wwn-list-item">Squash</li>
          <li className="wwn-list-item">Crisps & biscuits</li>
          <li className="wwn-list-item">Washing detergent</li>
          <li className="wwn-list-item">Household cleaning products</li>
          <li className="wwn-list-item">Toiletries & sanitary products</li>
          <li className="wwn-list-item">Nappies & baby items</li>
          <li className="wwn-list-item">Pet food</li>
        </ul>
      </div>
      <div className="right-wwn">
        <img src={food} className="food-image" />
      </div>
    </div>
  );
};

export default WhatWeNeed;
