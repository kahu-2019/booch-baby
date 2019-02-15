import React from "react";

const BoochListItem = props => {
  const details = props.item;
  return (
    <div className="column description">
      <img src="./images/kombucha.jpg" class="booch-image" />
      <h5>
        <strong>{details.name}</strong>
      </h5>
      <p>{details.description}</p>
      <p>
        <strong>Size:</strong>
        {details.size}
      </p>
      <p>
        <strong>Cost: </strong>${details.price}
      </p>
      <a
        href="#"
        className="cart-link"
        onClick={() => props.addToCart(details.id)}
      >
        Add to cart
      </a>
    </div>
  );
};

export default BoochListItem;
