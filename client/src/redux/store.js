import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger();

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
