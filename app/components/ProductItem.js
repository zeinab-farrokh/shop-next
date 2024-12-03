"use client";
import React from "react";
import styles from "./productItem.module.scss";
import { AiOutlineDelete } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import {
  increase,
  decrease,
  addItem,
  removeItem,
} from "../redux/cart/cartSlice";
import { productQuantity } from "../helper/helper";
const ProductItem = ({ data }) => {
  const { id, price, image } = data;

  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const quantity = productQuantity(state, id);

  return (
    <div className={styles.container}>
      <div className={styles.imgBox}>
        <img src={image} alt="" width="400" height="400" />
      </div>
      <div className={styles.textBox}>
        <h3>محصول-{id}</h3>
        <h4>${price}</h4>
      </div>
      <div className={styles.btnBox}>
        {quantity == 0 ? (
          <button
            className={styles.addBtn}
            onClick={() => dispatch(addItem(data))}
          >
            افزودن به سبد خرید
          </button>
        ) : (
          <button
            className={styles.increaseBtn}
            onClick={() => dispatch(increase(data))}
          >
            +
          </button>
        )}
        {!!quantity && <span>{quantity}</span>}
        {quantity == 1 && (
          <button
            className={styles.removeBtn}
            onClick={() => dispatch(removeItem(data))}
          >
            <AiOutlineDelete fontSize={20} />
          </button>
        )}
        {quantity > 1 && (
          <button
            className={styles.decreaseBtn}
            onClick={() => dispatch(decrease(data))}
          >
            -
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
