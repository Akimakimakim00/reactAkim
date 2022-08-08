import "./App.css";
import React from "react";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Profile } from "./components/Profile/Profile";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Routes>
          <Route element={<div>awfwaf</div>} path="/" />
          <Route
            element={<Dialogs state={props.state.dialogPage} />}
            path="dialogs"
          />
          <Route
            element={
              <Profile
                state={props.state.profilePage}
                addPost={props.addPost}
              />
            }
            path="profile"
          />
          <Route element={<News />} path="news" />
          <Route element={<Music />} path="music" />
          <Route element={<Settings />} path="settings" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
