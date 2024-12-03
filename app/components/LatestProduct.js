
import React from "react";
import styles from "./latestProduct.module.scss";
import ProductItem from "./ProductItem";
const LatestProduct = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  const result= data.slice(0,4)

  return (
    <div className={styles.container}>
        <h2>محصولات جدید</h2>
      <div className={styles.productConiatner}>{result.map(item =><ProductItem key={item.id} data={item} />)}</div>
    </div>
  );
};

export default LatestProduct;
