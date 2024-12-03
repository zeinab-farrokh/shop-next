"use client";
import React from "react";
import { useSelector } from "react-redux";
import CartItems from "../components/cartItems";
import styles from "./cart.module.scss";

const Cart = () => {
  const state = useSelector((store) => store.cart);

  console.log(state.selectedItems);
  return (
    <div className={styles.container}>
      {!state.itemsCounter == 0 ? (
        <>
          <div className={styles.totalBox}>
            <h4>جمع کل مبلغ : {state.total}</h4>
            <button>پرداخت</button>
          </div>
          <div className={styles.cartItems}>
            {state.selectedItems.map((i) => (
              <CartItems key={i.id} data={i} />
            ))}
          </div>
        </>
      ):<h3>محصولی در سبد خرید وجود ندارد.</h3>
          
          }
    </div>
  );
};

export default Cart;
