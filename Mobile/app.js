import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import Routes from "./src/routes";
import store from "./src/store";

export default function magicTables() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
