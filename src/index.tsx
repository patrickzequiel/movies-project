import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import {store} from "./redux/store";
import "./styles/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
