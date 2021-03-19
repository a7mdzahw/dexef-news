import { combineReducers } from "redux";
import newsReducer from "./news";

// combining reducers of different slices
const reducer = combineReducers({
  news: newsReducer,
});

export default reducer;
