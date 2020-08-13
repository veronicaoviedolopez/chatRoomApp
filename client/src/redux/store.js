import { createStore } from "redux";
import reducers from "./reducers/index";

const devtoools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducers, devtoools);

export default store;
