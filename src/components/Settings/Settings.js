import React from "react";

export const Settings = (props) => {
  return (
    <div>
      <ul>
        <li>
          <a href="https://www.freecodecamp.org/news/the-html-handbook/">
            Первая книга
          </a>
        </li>
        <li>{props.msg}</li>
        <li>второй элимент</li>
        <li>третий элимент</li>
      </ul>
    </div>
  );
};
