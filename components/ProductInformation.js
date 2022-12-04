import styles from "/styles/components/ProductInformation.module.css";
import Image from "next/image";
import { FastBottomCircle } from "iconoir-react";
import logoReact from "/public/nike-react.svg";
const ProductInformation = () => {
  return (
    <div>
      <Image
        className={styles.brand}
        src={logoReact}
        alt="Logo Nike React"
        width={150}
      />
      <h3 className={styles.title}>SELF-LACING</h3>
      <p className={styles.description}>
        Get the right fit, every game, every step.
        <FastBottomCircle className={styles.iconReadMore}/>
      </p>
    </div>
  );
};

export default ProductInformation;
