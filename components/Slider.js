import Image from "next/image";
import styles from "/styles/components/Slider.module.css";
import productTest from "/public/products/product-1.png";
import ProductInformation from "./ProductInformation";
import ProductDetail from "./ProductDetail";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <ProductInformation />
      <Image className={styles.image} src={productTest} />
      <ProductDetail />
    </div>
  );
};

export default Slider;
