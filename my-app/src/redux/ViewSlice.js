import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content:{
    title:"",
    language:"",
    description:""
  }
};

export const ViewSlice = createSlice({
    name: "View",
    initialState,
    reducers: {
      updateContent: (state, action) => {   
        state.content.title = action.payload.title;
        state.content.language = action.payload.languages;
        state.content.description = action.payload.description;
      },
    }
});

export const { 
    updateContent
  } = ViewSlice.actions;

export default ViewSlice.reducer;