
import React  from 'react';
import {useDispatch} from 'react-redux'
import {updateArticles,resetForm} from '../redux/HomeSlice'

export const CreateBtn = ()=>{
    const dispatch = useDispatch()
    const btn = {
        margin:10,
        padding:5,
        fontSize:13,
        fontWeight:"bold",
        borderRadius:15,
        backgroundColor:"beige"
    }

    return(
        <button 
          style={btn} 
          onClick={
            ()=>{
              dispatch(updateArticles());
              dispatch(resetForm());
            }
          }>
          Create and Save
        </button>
    );
  }
export default CreateBtn;