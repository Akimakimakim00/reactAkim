import React from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
          to="/profile"
        >
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
        >
          Massage
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
        >
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
        >
          Music
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
