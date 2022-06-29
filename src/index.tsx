import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import CoreLayout from "./common/layouts/CoreLayout";
import Routes from "./routes";
import { store } from "./app/store";

import "./styles/_main.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CoreLayout>
        <Routes />
      </CoreLayout>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
