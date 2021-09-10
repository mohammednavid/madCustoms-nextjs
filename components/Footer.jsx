import { Apple, Instagram } from "@material-ui/icons";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
    <div className={styles.footer__container}>
      <div className={styles.footer__top}>
        <div className={styles.footer__left}>
          <div className={styles.instagram}>
            <Instagram />
          </div>
          <div className={styles.apple}>
            <Apple />
            <div>
              Download on the
              <br />
              <span>App Store</span>
            </div>
          </div>
        </div>
        <div className={styles.footer__right}>
          <a className={`descp ${styles.footer_link}`}>HELP & FAQ</a>
          <a className={`descp ${styles.footer_link}`}>SIZE GUIDE</a>
          <a className={`descp ${styles.footer_link}`}>TERMS & CONDITIONS</a>
          <a className={`descp ${styles.footer_link}`}>PRIVACY POLICY</a>
          <a className={`descp ${styles.footer_link}`}>IP POLICY</a>
        </div>
      </div>
      <div className={styles.footer__bottom}>
          <p>Subscribe to learn of new arrivals, exclusive content, and the latest discounts.</p>
          <div>
              <input type="text" placeholder="Enter Email" />
              <a className={`btn ${styles.footer__btn}`}>SUBSCRIBE</a>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
