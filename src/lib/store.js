import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import { from } from 'rxjs';
export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});


export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
    }
  })
}

export const observable = from(store);
