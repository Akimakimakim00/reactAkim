import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={styles.dialog}>
      <img
        className={styles.img}
        src="https://catherineasquithgallery.com/uploads/posts/2021-02/1614280269_53-p-chernii-fon-dlya-futazhei-68.jpg"
      />
      <NavLink className={styles.name} to={path}>
        {" "}
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
