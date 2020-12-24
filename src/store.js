import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./Reducers/index";
const store = createStore(rootReducer, composeWithDevTools(
   applyMiddleware(thunk),
  // other store enhancers if any
));

export default store;
