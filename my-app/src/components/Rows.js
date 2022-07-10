import React  from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Actions from './Actions';
import handleEditTitle from '../handlers/handleEditTitle';
import handleEditDescription from '../handlers/handleEditDescription';
import EditLangSelection from './EditLangSelection';

export const Rows = ()=>{

    const articles= useSelector((state)=>state.HomeReducer.articles);
    const editID= useSelector((state)=>state.HomeReducer.editID);
    const dispatch = useDispatch();

    const itemCell ={
      alignItems:'center',
      padding:5, 
      textAlign:"center",
      fontSize:15,
    }

    return (
      articles.map(
      (content,idx)=>{
        const rowSelected = editID===idx+"row";
        const rowStyle = {backgroundColor:rowSelected?"#c0ff76":"white"}
        return(
        <tr style={rowStyle} key={idx+"row"}>
          <td style={itemCell} key={idx+"id"}>{content.id}</td>
          <td style={itemCell} onClick={()=>{handleEditTitle(rowSelected,dispatch,content)}} key={idx+"title"}>{content.title}</td>
          <td style={itemCell}  key={idx+"languages"}>{rowSelected?<EditLangSelection content={content}/>:content.languages}</td>
          <td style={itemCell} onClick={()=>{handleEditDescription(rowSelected,dispatch,content)}} key={idx+"description"}>{content.description}</td>
          <td style={itemCell} key={idx+"actions"}>
            <Actions id={content.id} rowId={idx+"row"}/>  
          </td>        
        </tr>
      )})
    )
  }

export default Rows;