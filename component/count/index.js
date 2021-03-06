import React from "react";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from './models';
import Count from './Count';

// generate Redux store
const store = init({
  models,
});

const Root = () => (
  <Provider store={store}>
    <Count />
  </Provider>
);

export default Root