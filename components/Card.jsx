import StarIcon from "@material-ui/icons/Star";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import styles from "../styles/Card.module.css";
import Link from "next/link";
import Image from "next/image";
const Card = ({ id, src, name, by, ratings, price, location }) => {
  return (
    <>
      <Link href={`/custom/[id]`} as={`/custom/${id}`} passHref>
        <div className={styles.card}>
          <Image
            src={src}
            alt={src}
            width={280}
            height={280}
            loading={"lazy"}
            layout="responsive"
          />
          <div className={styles.content}>
            <p className={styles.name}>{name}</p>
            <p className="descp">BY: {by}</p>
            <div>
              <p className={`descp ${styles.ratings}`}>
                {ratings} <StarIcon />
              </p>
              <FavoriteBorderIcon />
            </div>
            <div>
              <p className={`descp ${styles.ratings}`}>
                <LocationOnIcon /> {location}
              </p>
            </div>
            <button className="btn">BUY ${price}</button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
