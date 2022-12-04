import { Keyframes } from "iconoir-react";
import Image from "next/image";
import logo from "/public/nike-logo.svg";
import styles from "../styles/components/Header.module.css";
import Navigation from "./Navigation";
const Header = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.logo} src={logo} alt="Logo Nike" width={80} />
      <Navigation />
      <Keyframes width={40} height={40} color="#5bd0df"/>
    </div>
  );
};

export default Header;
