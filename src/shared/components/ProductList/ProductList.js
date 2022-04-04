import { useDeferredValue } from "react";
import styles from "./ProductList.module.css";

export const ProductList = ({ filteredData }) => {
  // const deferedProducts = useDeferredValue(filteredData, { timeoutMs: 2000 });
  return (
    <ul className={styles.productList}>
      {filteredData.map((product, index) => (
        <li className={styles.productItem} key={`product-id-${index}`}>
          {product}
        </li>
      ))}
    </ul>
  );
};
