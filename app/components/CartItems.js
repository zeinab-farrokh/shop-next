import React from "react";
import styles from "./cartItems.module.scss";
const CartItems = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.container}>
      <img src={data.image} alt={data.title} />
      <span>{data.price}</span>
      <span>محصول{data.id}</span>
    </div>
  );
};

export default CartItems;
