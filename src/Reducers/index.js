import { combineReducers } from "redux";
import contactReducers from "./contactReducers";

const rootReducer = combineReducers({
    contact: contactReducers
    
})

export default rootReducer


