import { ChevronRight, SearchOutlined } from "@material-ui/icons";
import classNames from "classnames";
import styles from "../styles/Search.module.css";

const Search = ({ searchOpen }) => {
  return (
    <div className={classNames(styles.search, searchOpen && styles.search__open)}>
      <ul className={styles.search__close}>
        <li >
          <input type="text" placeholder="SEARCH" /> <SearchOutlined />
        </li>
        <li>POPULAR</li>
        <li>BUTTERFLY <ChevronRight className="icon"/></li>
        <li>ANIME <ChevronRight className="icon"/></li>
        <li>PURPLE <ChevronRight className="icon"/></li>
        <li>PINK <ChevronRight className="icon"/></li>
        <li>DRAGON <ChevronRight className="icon"/></li>
      </ul>
    </div>
  );
};

export default Search;
