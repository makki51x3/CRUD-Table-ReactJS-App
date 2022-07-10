import React  from 'react';
import {useDispatch} from 'react-redux'
import {updateDescription} from '../redux/HomeSlice'

export const DescriptionField = ()=>{
    const dispatch = useDispatch();
    return(
      <label style={{margin:10}}> Description: 
        <input 
          onChange={(e)=>{dispatch(updateDescription(e.target.value));}} 
          type="text"
          style={{marginLeft:10}} 
          placeholder="Enter Description"
        />
      </label>
    );
  }
export default DescriptionField;