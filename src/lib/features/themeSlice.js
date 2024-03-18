import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTheme: "dark",
  data: {}
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === "dark" ? "light" : "dark";
    },
    fetchAPi : (state, action) =>{
      if (action.payload) {
        // Assuming action.payload is a number or string
        state.data = action.payload;

        console.log(state.data, "myname")
      } else {
        // Handle the case where no payload is provided
        console.warn('fetchAPi action received no payload. Ignoring update.');
      }
    
      // Log state for debugging purposes only (remove in production)
       console.log('Updated state:', state.data);
    },
    addData : (state, action) =>{
      if (action.payload) {
        // Assuming action.payload is a number or string
        state.data = action.payload;

        console.log(state.data, "myname")
      } else {
        // Handle the case where no payload is provided
        console.warn('fetchAPi action received no payload. Ignoring update.');
      }

    }
  },
});

console.log(initialState, "thiscalled")
export const { toggleTheme, fetchAPi, addData } = themeSlice.actions;
export default themeSlice.reducer;
