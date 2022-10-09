import React from "react";
import App from "./components/App";
import "./assets/style/index.scss";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { fetchProjects } from "./store/slices/projectsSlice";
import { gsap } from "gsap";
import { Flip } from "gsap/dist/Flip";

gsap.registerPlugin(Flip);

store.dispatch(fetchProjects());

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App tab="home" />
    </Provider>
  </React.StrictMode>
);
