import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [
      {
        "id": 1,
        "title": "Learn REACTJS",
        "languages": "JAVASCRIPT",
        "description": "this is a description how to build apps in REACTJS"
      },
      {
        "id": 2,
        "title": "Learn PYTHON",
        "languages": "PYTHON",
        "description": "this is a description  how to build apps in PYTHON"
      },
      {
        "id": 3,
        "title": "Learn DJANGO",
        "languages": "PYTHON",
        "description": "this is a description how to build apps in PYTHON"
      }
  ],     
  languages: [
    { "id": 1, "language": "PYTHON" },
    { "id": 2, "language": "JAVASCRIPT" }
  ],
  form:{
    id:3,
    title:"",
    language:"PYTHON",
    description:""
  },
  editID:0
};

export const HomeSlice = createSlice({
  name: "Home",
  initialState,
  reducers: {
      updateArticles: (state,action) => {    
        const newRow = {
          "id": state.form.id+1,
          "title": state.form.title,
          "languages": state.form.language,
          "description": state.form.description
        };
        state.articles.push(newRow);
        state.form.id += 1;
      },
      updateTitle: (state, action) => {  
        state.form.title = action.payload;
      },
      updateLanguage: (state, action) => {  
        state.form.language = action.payload;
      },
      updateDescription: (state, action) => {   
        state.form.description = action.payload;
      },
      resetForm:  (state, action) => {   
        state.form.description = "";
        state.form.title = "";
        state.form.language = "PYTHON";
      },
      removeRow:  (state, action) => {   
        state.articles = state.articles.filter((item)=>item.id!==action.payload);
      },
      updateEditID:  (state, action) => {   
        state.editID = state.editID===action.payload?0:action.payload
      },
      editTitle: (state, action) => { 
        const filteredArticles = state.articles.filter((article)=>article.id!==action.payload.current.id);
        state.articles = [...filteredArticles,{...action.payload.current,title:action.payload.newTitle}];
        state.editID = 0;
      },
      editDescription: (state, action) => { 
        const filteredArticles = state.articles.filter((article)=>article.id!==action.payload.current.id);
        state.articles = [...filteredArticles,{...action.payload.current,description:action.payload.newDescription}];
        state.editID = 0;
      },      
      editLanguage: (state, action) => { 
        const filteredArticles = state.articles.filter((article)=>article.id!==action.payload.current.id);
        state.articles = [...filteredArticles,{...action.payload.current,languages:action.payload.newLanguage}];
        state.editID = 0;
      },     
    }
});

export const { 
    updateArticles,
    updateTitle,
    updateLanguage,
    updateDescription,
    resetForm,
    removeRow,
    updateEditID,
    editTitle,
    editDescription,
    editLanguage,
  } = HomeSlice.actions;

export default HomeSlice.reducer;