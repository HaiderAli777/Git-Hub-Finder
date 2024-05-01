import { configureStore } from "@reduxjs/toolkit";
import hooks from "./slice";
const store = configureStore({
  reducer: { finder: hooks.reducer },
});
export default store;
