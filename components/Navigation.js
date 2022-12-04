import Link from "next/link";
import styles from "/styles/components/Navigation.module.css";
import { ShoppingBag, Search } from "iconoir-react";
const Navigation = () => {
  return (
    <div className={styles.container}>
      <Search />
      <Link className={styles.link} href="/men">Men</Link>
      <Link className={styles.link} href="/women">Women</Link>
      <Link className={styles.link} href="/shop">Shop</Link>
      <Link className={styles.link} href="/latest">Latest</Link>
      <ShoppingBag />
    </div>
  );
};

export default Navigation;
