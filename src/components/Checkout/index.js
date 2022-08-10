import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Product from './Product';
import Subtotal from "./Subtotal.js";
import { useStateValue } from "../../provider/stateProvider";

export const Checkout = () => {
  const [{ basket, logged }] = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      navigate('/login');
    }
  }, [logged, navigate]);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map(item => (
            <Product
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">{<Subtotal />}</div>
    </div>
  );
};
