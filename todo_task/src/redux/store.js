import todos from "./reducer";
import { createStore } from "redux";

const store = createStore(todos);
export default store;
