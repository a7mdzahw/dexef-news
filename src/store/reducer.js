import { combineReducers } from "redux";
import newsReducer from "./news";

const reducer = combineReducers({
  news: newsReducer,
});

export default reducer;
