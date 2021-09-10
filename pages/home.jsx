import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import {artists} from "../utils/data/artists";
import HomeProducts from "../containers/HomeProducts";
const HomePage = () => {
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  // }, []);
  return (
    <>
      <Header />
      <div className={styles.home}>
        <div className={styles.home__hero}>
          <h1 className="title">MADE CUSTOMS</h1>
          <p>
            Custom Sneakers, Apparel, and Accessories by Independent Artists
          </p>
          <a className="btn">SHOP CUSTOMS</a>
        </div>
        <div className={styles.home__heroBorder}></div>
        <div className={styles.home__products}>
          <h2 className={`title ${styles.secTitle}`}>Popular This Week</h2>
          <div className="products">
            <HomeProducts/>
          </div>
        </div>
        <div className={styles.home__heroBorder}></div>
        <div
          className={styles.home__products}
          style={{ paddingBottom: "30px" }}
        >
          <h2 className={`title ${styles.secTitle}`}>Popular Artists</h2>
          <div className={styles.home__productsContainer}>
            {artists.slice(0,4).map((artist) => {
              return (
                <Card
                  key={artist.id}
                  id={artist.id}
                  src={artist.images}
                  name={artist.name}
                  location={artist.location}
                  {...artist}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
