import React from "react";
import "./product.css";
import { useStateValue } from "../../provider/stateProvider";

export function Product({id, title, image, price, rating}) {
    /* eslint-disable no-unused-vars */
    const [_, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title || 'title'}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price || 10}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}
                </div>
            </div>

            <img src={image} alt={title} />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}
