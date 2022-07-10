import React  from 'react';
import {useDispatch, useSelector} from 'react-redux'
import handleEditLanguage from '../handlers/handleEditLang';

export const EditLangSelection = (content)=>{
    const dispatch = useDispatch();
    const languages= useSelector(state=>state.HomeReducer.languages);
    return(
        <select onChange={(e)=>handleEditLanguage(e.target.value,dispatch,content)}>
          {languages.map(
            (lang,idx)=><option value={lang.language} key={idx}>{lang.language}</option>
          )}
        </select>
    );
  }
export default EditLangSelection;