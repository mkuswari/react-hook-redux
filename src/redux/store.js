import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import contactReducer from "./reducers/contact";

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  contactReducer,
});

const store = createStore(
  rootReducers,
  composerEnhancer(compose(applyMiddleware(thunk)))
);

export default store;
