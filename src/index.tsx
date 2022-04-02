import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { WorldComponent } from "./components/World";
import { configureStore } from "./store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <WorldComponent />
  </Provider>,
  document.getElementById("root")
);
