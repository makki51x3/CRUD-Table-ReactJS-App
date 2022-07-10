import React  from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {updateLanguage} from '../redux/HomeSlice'

export const LangSelection = ()=>{
    const dispatch = useDispatch();
    const languages= useSelector(state=>state.HomeReducer.languages);
    return(
      <label style={{margin:10}}>Language: 
        <select style={{marginLeft:10}} onChange={(e)=>dispatch(updateLanguage(e.target.value))}>
          {languages.map(
            (lang,idx)=><option value={lang.language} key={idx}>{lang.language}</option>
          )}
        </select>
      </label>
    );
  }
export default LangSelection;