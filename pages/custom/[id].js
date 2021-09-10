import Footer from "../../components/Footer";
import Header from "../../components/Header";
import products from "../../utils/data/products";
import styles from "../../styles/Product.module.css";
import Image from "next/image";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import StarIcon from "@material-ui/icons/Star";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HomeProducts from "../../containers/HomeProducts";

export const getStaticProps = async ({ params }) => {
  const product = products.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      product: product[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
};

export default function Product({ product }) {
  return (
    <>
      <Header />
      <div className={styles.product}>
        <div className={styles.product__container}>
          <div className={styles.product__hero}>
            <div className={styles.product__left}>
              <Image
                src={product.images}
                alt={product.name}
                height={480}
                width={470}
              />
            </div>
            <div className={styles.product__right}>
              <h3>{product.name}</h3>
              <p className={`descp ${styles.ratings}`}>ARTIST: {product.by}</p>
              <button className="btn">SUBSCRIBE</button>
              <div className={styles.product__ratings}>
                <p className={`descp ${styles.ratings}`}>
                  <StarIcon /> {product.ratings}
                </p>
                <FavoriteBorderIcon />
              </div>
              <p className={`descp ${styles.ratings}`}>DESCRIPTION</p>
              <p className={`descp ${styles.size_title}`}>all size available</p>
              <div className={styles.product__ship}>
                <div className={styles.product__shipInner}>
                  <p className="descp">PROCESSING TIME</p>
                  <p className="descp">2-3 WEEKS</p>
                </div>
                <div className={styles.product__shipInner}>
                  <p className="descp">SHIPPING</p>
                  <p className="descp">WORLDWIDE</p>
                </div>
              </div>
              <p className={`descp ${styles.ratings}`}>
                <VerifiedUserIcon /> COVERED BY BUYER PROTECTION ➔
              </p>
              <p className={`descp ${styles.product__descp}`}>
                Every transaction made through a PayPal account is covered by
                <span> PayPal Purchase Protection</span>. Transactions made
                through your credit or debit card are covered by your card's
                purchase protection. If you have any questions or need
                assistance, our support team is here to help.
              </p>
              <div className={styles.product__size}>
                <p className={`descp ${styles.ratings}`}>SIZING: UK</p>
                <p className="descp">SIZE GUIDE</p>
              </div>
              <div className={styles.product__sizeDropdown}>
                <p className="descp">UK SIZE</p>
                <label for="size"></label>
                <select id="size">
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <button className="btn" style={{ minWidth: "100%" }}>
                BUY ${product.price}
              </button>
            </div>
          </div>
          <div className={styles.product__recommend}>
            <h3 className={styles.product__recommendTitle}>You May Also Like</h3>
            <div className="products">
              <HomeProducts />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
