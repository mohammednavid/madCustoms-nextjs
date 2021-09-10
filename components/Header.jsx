import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import useOnClickOutside from "use-onclickoutside";
// import Logo from "../../assets/icons/logo";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";
import classNames from "classnames";
import { Menu, SearchOutlined } from "@material-ui/icons";
import MenuComponent from "./Menu";
import Search from "./Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Header = ({ isErrorPage }) => {
  const router = useRouter();
  // const { cartItems } = useSelector((state) => state.cart);
  const arrayPaths = ["/"];

  const [onTop, setOnTop] = useState(
    !arrayPaths.includes(router.pathname) || isErrorPage ? false : true
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const shopRef = useRef(null);

  const headerClass = () => {
    if (window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };

  useEffect(() => {
    if (!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.onscroll = function () {
      headerClass();
    };
  }, []);
  const closeShop=()=>{
      setShopOpen(false)
  }
  useOnClickOutside(shopRef,closeShop)
  return (
    <header
      className={classNames(
        styles.site_header,
        !onTop && styles.site_header__fixed
      )}
    >
      <div className={styles.container}>
        <Link href="/">
          <h1 className={styles.site_logo}>MADE CUSTOMS</h1>
        </Link>
        <nav
          className={classNames(
            styles.site_nav,
            menuOpen && styles.site_nav__open
          )}
        >
          <div ref={shopRef} className={classNames(styles.site_nav__shop,shopOpen&&styles.site_nav__shopOpen)} onClick={()=>setShopOpen(!shopOpen)}>
            SHOP <ArrowDropDownIcon/>
            {shopOpen && <div>
              <a>sneakers</a>
              <a>apparel</a>
              <a>accessories</a>
              <a>jewelry</a>
              <a>house</a>
              <a>masks</a>
            </div>}
          </div>
          <Link href="/" Link className={styles.site_nav__btn}>
            MISSIONS
          </Link>
          <Link href="/" className={styles.site_nav__btn}>
            FAVORITES
          </Link>
          <Link href="/" className={styles.site_nav__btn}>
            Account
          </Link>
          {/* <Link href="/cart">
            <a className="btn_cart">
              <i className="icon_cart"></i>
              {cartItems.length > 0 && (
                <span className="btn_cart__count">{cartItems.length}</span>
              )}
            </a>
          </Link> */}
          <Link href="/login" className={styles.site_nav__btn}>
            LOGIN / SIGNUP
          </Link>
          <a
            // ref={searchRef}
            onClick={() => setSearchOpen(true)}
            className={styles.search_form_wrapper}
          >
            <SearchOutlined />
          </a>
          <a
            onClick={() => setMenuOpen(true)}
            className={styles.site_header__btn_menu}
          >
            <Menu />
          </a>

          {searchOpen && (
            <div
              onClick={() => setSearchOpen(false)}
              className={styles.menu__overlay}
            ></div>
          )}
          {menuOpen && (
            <div
              onClick={() => setMenuOpen(false)}
              className={styles.menu__overlay}
            ></div>
          )}
          <Search searchOpen={searchOpen} />
          <MenuComponent menuOpen={menuOpen} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
