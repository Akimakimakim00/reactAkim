import React from "react";
import styles from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post massage={p.massage} like={p.like} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
  };

  return (
    <div>
      <div>
        my posts:
        <div className={styles.post}>
          <div className={styles.sendPost}>
            <textarea ref={newPostElement}></textarea>
            <button className={styles.button} onClick={addPost}>
              add post
            </button>
          </div>
        </div>
      </div>
      <div className={styles.posts}>{postsElement}</div>
    </div>
  );
};
