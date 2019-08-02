import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./rootReducer";
export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, applyMiddleware(logger));
  return store;
}
