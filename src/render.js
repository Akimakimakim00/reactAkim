import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost } from "./components/redux/state";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = (state) => {
  let container = null;

  if (!container) {
    container = document.getElementById("root");
    const root = createRoot(container);

    root.render(
      <BrowserRouter>
        <App state={state} addPost={addPost} />
      </BrowserRouter>
    );
  }
};
