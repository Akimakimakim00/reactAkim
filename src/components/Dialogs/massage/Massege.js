import React from "react";
import styles from "./massege.module.css";

const Massage = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.avaName}>
        <img src="https://catherineasquithgallery.com/uploads/posts/2021-02/1614280269_53-p-chernii-fon-dlya-futazhei-68.jpg" />
        <div className={styles.name}>Diana</div>
      </div>
      <div className={styles.dialog}>{props.massage}</div>
    </div>
  );
};

export default Massage;
