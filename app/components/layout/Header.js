"use client";
import React, { useState } from "react";
import Link from "next/link";
//import styles
import styles from "./header.module.scss";
//import icons
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";

const Header = () => {
  const [menu, setMenu] = useState({ isOpen: false });
  const clickHandler = () => {
    setMenu({ isOpen: !menu.isOpen });
  };

  const state = useSelector((store) => store.cart);

  return (
    <div className={styles.navbar}>
      <div className={styles.icons}>
        <i className={styles.menuIcon} onClick={clickHandler}>
          <CiMenuFries fontSize={26} />
        </i>
        <Link href="/cart">
          <CiShoppingCart fontSize={26} />
          <span>{state.itemsCounter}</span>
        </Link>
        <Link href="" className={styles.hide}>
          <CiHeart fontSize={26} />
          <span>0</span>
        </Link>
        <Link href="" className={styles.hide}>
          <CiUser fontSize={26} />
        </Link>
        <i>
          <CiSearch fontSize={26} />
        </i>
      </div>
      <div className={menu.isOpen ? styles.show : styles.hide}>
        <ul>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            کالکشن
            <MdOutlineKeyboardArrowDown className={styles.arrowDown} />
            <ul className={styles.megaMenu}>
              <li>
                <Link href="">کالکشن 1</Link>
                <Link href="">کالکشن 2</Link>
                <Link href="">کالکشن 3</Link>
              </li>
            </ul>
          </li>
          <li>
            محصولات
            <MdOutlineKeyboardArrowDown className={styles.arrowDown} />
            <ul className={styles.megaMenu}>
              <li>
                <Link href="">محصولات 1</Link>
                <Link href="">محصولات 2</Link>
                <Link href="">محصولات 3</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/blog">بلاگ</Link>
          </li>
        </ul>
      </div>
      <div className={styles.brand}>
        <h1>TEMPLATE</h1>
      </div>
    </div>
  );
};

export default Header;
