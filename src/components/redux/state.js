import { rerenderEntireTree } from "../../render";

let state = {
  siteBar: [
    { id: 1, name: "Valera" },
    { id: 2, name: "Valera" },
    { id: 3, name: "Valera" },
    { id: 4, name: "Valera" },
    { id: 5, name: "Valera" },
    { id: 6, name: "Valera" },
  ],

  dialogPage: {
    dialogsData: [
      { id: 1, name: "Diana" },
      { id: 2, name: "Nikita" },
      { id: 3, name: "Ana" },
      { id: 4, name: "Gleb" },
      { id: 5, name: "Sveta" },
      { id: 6, name: "Valera" },
    ],

    massages: [
      { id: 1, massage: "prievt" },
      { id: 2, massage: "poka" },
      { id: 3, massage: "kak dela" },
      { id: 4, massage: "kncskn kasdans" },
    ],
  },

  profilePage: {
    posts: [
      { id: 1, massage: "мфть стекла", like: "13" },
      { id: 2, massage: "have a good day", like: "43" },
      { id: 3, massage: "have a goodвввв day", like: "63" },
    ],
  },
};

export let addPost = (postMessage) => {
  console.log(postMessage);
  let newPost = {
    id: 5,
    massage: postMessage,
    like: "0",
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;
