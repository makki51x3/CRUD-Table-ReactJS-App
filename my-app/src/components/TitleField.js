import React  from 'react';
import {useDispatch} from 'react-redux'
import {updateTitle} from '../redux/HomeSlice'

export const TitleField = ()=>{
    const dispatch = useDispatch();
    return(
      <label style={{margin:10}} >Title: 
        <input 
          onChange={(e)=>dispatch(updateTitle(e.target.value))} 
          type="text"
          style={{marginLeft:10}} 
          placeholder="Enter Title"
        />
    </label>
    );
  }
export default TitleField;