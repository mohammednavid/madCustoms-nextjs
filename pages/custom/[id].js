import Footer from "../../components/Footer";
import Header from "../../components/Header";
import products from "../../utils/data/products";
import styles from "../../styles/Product.module.css";
import Image from "next/image";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import StarIcon from "@material-ui/icons/Star";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HomeProducts from "../../containers/HomeProducts";
import { Avatar } from "@material-ui/core";
import { useState } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

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
  const [genderOpen, setGenderOpen] = useState(false);
  const [gender, setGender] = useState("_");
  const [sizeOpen, setSizeOpen] = useState(false);
  const [size, setSize] = useState("_");
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
                through your credit or debit card are covered by your cards
                purchase protection. If you have any questions or need
                assistance, our support team is here to help.
              </p>
              <div className={styles.product__size}>
                <p className={`descp ${styles.ratings}`}>SIZING: UK</p>
                <p className="descp">SIZE GUIDE</p>
              </div>
              <div className={styles.product__sizeDropdown_C}>
                <div
                  onClick={() => setGenderOpen(!genderOpen)}
                  className={styles.dropdown}
                >GENDER
                  <span>
                    {gender}
                    {genderOpen ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </span>
                  {genderOpen && (
                    <div>
                      <p onClick={() => setGender("MEN's") || setGenderOpen(false)}>
                        MEN's
                      </p>
                      <p
                        onClick={() => setGender("WOMEN's") || setGenderOpen(false)}
                      >
                        WOMEN's
                      </p>
                      <p onClick={() => setGender("KID's") || setGenderOpen(false)}>
                        KID's
                      </p>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setSizeOpen(!sizeOpen)}
                  className={styles.dropdown}
                >UK SIZE
                  <span>
                    {size}
                    {sizeOpen ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </span>
                  {sizeOpen && (
                    <div className={styles.dropdown__size}>
                      <p onClick={() => setSize("3") || setSizeOpen(false)}>
                        3
                      </p>
                      <p
                        onClick={() => setSize("3.5") || setSizeOpen(false)}
                      >
                        3.5
                      </p>
                      <p onClick={() => setSize("4") || setSizeOpen(false)}>
                        4
                      </p>
                      <p onClick={() => setSize("4.5") || setSizeOpen(false)}>
                        4.5
                      </p>
                      <p onClick={() => setSize("5") || setSizeOpen(false)}>
                        5
                      </p>
                      <p onClick={() => setSize("5.5") || setSizeOpen(false)}>
                        5.5
                      </p>
                      <p onClick={() => setSize("6") || setSizeOpen(false)}>
                        6
                      </p>
                      <p onClick={() => setSize("6.5") || setSizeOpen(false)}>
                        6.5
                      </p>
                      <p onClick={() => setSize("7") || setSizeOpen(false)}>
                        7
                      </p>
                      <p onClick={() => setSize("7.5") || setSizeOpen(false)}>
                        7.5
                      </p>
                      <p onClick={() => setSize("8") || setSizeOpen(false)}>
                        8
                      </p>
                      <p onClick={() => setSize("8.5") || setSizeOpen(false)}>
                        8.5
                      </p>
                      <p onClick={() => setSize("9") || setSizeOpen(false)}>
                        9
                      </p>
                      <p onClick={() => setSize("9.5") || setSizeOpen(false)}>
                        9.5
                      </p>
                      <p onClick={() => setSize("10") || setSizeOpen(false)}>
                        10
                      </p>
                      <p onClick={() => setSize("10.5") || setSizeOpen(false)}>
                        10.5
                      </p>
                      <p onClick={() => setSize("11") || setSizeOpen(false)}>
                        11
                      </p>
                      <p onClick={() => setSize("11.5") || setSizeOpen(false)}>
                        11.5
                      </p>
                      <p onClick={() => setSize("12") || setSizeOpen(false)}>
                        12
                      </p>
                      <p onClick={() => setSize("12.5") || setSizeOpen(false)}>
                        12.5
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <button className="btn" style={{ minWidth: "100%" }}>
                BUY ${product.price}
              </button>
            </div>
          </div>
          <div className={styles.product__reviews}>
            <div className={styles.product__reviewsHead}>
              <a className={`descp ${styles.artist}`}>ARTIST</a>
              <a className="descp">THIS CUSTOM</a>
            </div>
            <div className="border"></div>
            <div className={styles.product__reviewsContainer}>
              <div className={styles.product__reviewsContent}>
                <div className={styles.product__reviewsContent_C}>
                  <div className={styles.product__reviewsInner_L}>
                    <div className={styles.customer}>
                      <Avatar />
                      <p className="descp">
                        <span style={{ color: "#000" }}>AURORA182929</span>
                        <br />
                        JULY 2021
                      </p>
                    </div>
                  </div>
                  <div className={styles.product__reviewsInner_R}>
                    <p className="descp">
                      <span style={{ color: "#000" }}>
                        “SORBET” AIR FORCE 1’S
                      </span>
                    </p>
                    <Image
                      src="/products/product-2.webp"
                      width={45}
                      height={45}
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className={styles.star}>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className={`descp ${styles.reviews__text}`}>
                  Loved the shoes! They looked super pretty! I got these shoes
                  for my daughter, and she loved it! Thank you!
                </p>
                <div className="border"></div>
              </div>
              <div className={styles.product__reviewsContent}>
                <div className={styles.product__reviewsContent_C}>
                  <div className={styles.product__reviewsInner_L}>
                    <div className={styles.customer}>
                      <Avatar />
                      <p className="descp">
                        <span style={{ color: "#000" }}>KARANVEER M</span>
                        <br />
                        JUNE 2021
                      </p>
                    </div>
                  </div>
                  <div className={styles.product__reviewsInner_R}>
                    <p className="descp">
                      <span style={{ color: "#000" }}>NIKOSWOOSH1</span>
                    </p>
                    <Image
                      src="/products/product-4.webp"
                      width={45}
                      height={45}
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className={styles.star}>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className={`descp ${styles.reviews__text}`}>
                  Super professional, one of the fastest to ship. Everyone loves
                  Wuuski's customs.
                </p>
                <div className="border"></div>
              </div>
            </div>
            <div className={styles.product__reviewsContainer}>
              <div className={styles.product__reviewsContent}>
                <div className={styles.product__reviewsContent_C}>
                  <div className={styles.product__reviewsInner_L}>
                    <div className={styles.customer}>
                      <Avatar />
                      <p className="descp">
                        <span style={{ color: "#000" }}>AURORA182929</span>
                        <br />
                        JULY 2021
                      </p>
                    </div>
                  </div>
                  <div className={styles.product__reviewsInner_R}>
                    <p className="descp">
                      <span style={{ color: "#000" }}>
                        “SORBET” AIR FORCE 1’S
                      </span>
                    </p>
                    <Image
                      src="/products/product-6.webp"
                      width={45}
                      height={45}
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className={styles.star}>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className={`descp ${styles.reviews__text}`}>
                  Loved the shoes! They looked super pretty! I got these shoes
                  for my daughter, and she loved it! Thank you!
                </p>
                <div className="border"></div>
              </div>
              <div className={styles.product__reviewsContent}>
                <div className={styles.product__reviewsContent_C}>
                  <div className={styles.product__reviewsInner_L}>
                    <div className={styles.customer}>
                      <Avatar />
                      <p className="descp">
                        <span style={{ color: "#000" }}>KARANVEER M</span>
                        <br />
                        JUNE 2021
                      </p>
                    </div>
                  </div>
                  <div className={styles.product__reviewsInner_R}>
                    <p className="descp">
                      <span style={{ color: "#000" }}>NIKOSWOOSH1</span>
                    </p>
                    <Image
                      src="/products/product-8.webp"
                      width={45}
                      height={45}
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className={styles.star}>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className={`descp ${styles.reviews__text}`}>
                  Super professional, one of the fastest to ship. Everyone loves
                  Wuuski's customs.
                </p>
                <div className="border"></div>
              </div>
            </div>
          </div>
          <div className={styles.product__recommend}>
            <h3 className={styles.product__recommendTitle}>
              You May Also Like
            </h3>
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
