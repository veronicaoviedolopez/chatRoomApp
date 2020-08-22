import { createStore } from "redux";
import reducer from "./reducers/usersReducer";

const devtoools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, devtoools);

export default store;
