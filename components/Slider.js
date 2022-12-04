import Image from "next/image";
import styles from "/styles/components/Slider.module.css";
import productTest from "/public/products/product-2.png";
import ProductInformation from "./ProductInformation";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <ProductInformation />
      <Image className={styles.image} src={productTest} />
    </div>
  );
};

export default Slider;
