import React from "react";
import style from "./Post.module.css";

export const Post = (props) => {
  return (
    <>
      <div className={style.item}>
        <img src="https://cdn.dribbble.com/users/16598/screenshots/2091685/alex-benson-avatar_1x.png" />
        {props.massage}
        <div>
          <span>like</span> {props.like}
        </div>
      </div>
    </>
  );
};
