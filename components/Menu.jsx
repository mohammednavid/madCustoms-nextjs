import { ChevronRight } from "@material-ui/icons";
import classNames from "classnames";
import styles from "../styles/Menu.module.css";
const Menu = ({menuOpen}) => {
  return (
    <div className={classNames(styles.menu,menuOpen && styles.menu__open)}>
      <ul className={styles.menu__close}>
        <li>
          SHOP <ChevronRight />
        </li>
        <li>MISSION</li>
        <li>FAVORITES</li>
        <li>LOGIN / SIGNUP</li>
        <li>
          Subscribe to learn of new arrivals, exclusive content, and the latest
          discounts.
        </li>
        <li>
          <input type="text" placeholder="EMAIL"/>
          <button className="btn">SUBSCRIBE</button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
