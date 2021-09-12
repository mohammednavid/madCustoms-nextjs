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
        <a className={styles.card}>
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
            {by && <p className="descp">BY: {by}</p>}
            {ratings && <div>
              <p className={`descp ${styles.ratings}`}>
                {ratings} <StarIcon />
              </p>
              <FavoriteBorderIcon />
            </div>}
            {location && <div>
              <p className={`descp ${styles.ratings,styles.location}`}>
                <LocationOnIcon /> {location}
              </p>
            </div>}
            {price && <button className="btn">BUY ${price}</button>}
          </div>
        </a>
      </Link>
    </>
  );
};

export default Card;
