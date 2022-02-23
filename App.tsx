import * as React from "react";
import AppContainer from "./src/containers/App/App";
import "react-native-gesture-handler";

import { Provider } from "react-redux";
import store from "./src/store";
  

export default function App() {
  return (
    <Provider store={store}>
        <AppContainer></AppContainer>
    </Provider>
  );
}
