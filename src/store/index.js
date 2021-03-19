import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

// initializing store
const store = configureStore({ reducer });

export default store;
