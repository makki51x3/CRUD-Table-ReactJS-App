import React  from 'react';
import handleDelete from '../handlers/handleDelete';
import handleView from '../handlers/handleView';
import {AiFillDelete}  from "react-icons/ai";
import { FaEdit, FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { updateEditID } from '../redux/HomeSlice';

export const Actions = ({id,rowId})=>{
    const dispatch = useDispatch();
    const articles= useSelector((state)=>state.HomeReducer.articles);
    const content = articles.filter((item)=>item.id===id);
    let navigate = useNavigate();

    return(
      <>
      <AiFillDelete size={17}  onClick={()=>{handleDelete(id,dispatch)}}/>
      <FaEdit size={17} style={{marginRight:5,marginLeft:5}} onClick={()=>{dispatch(updateEditID(rowId))}}/>
      <FaEye size={17} onClick={()=>{handleView(content,dispatch,navigate)}}/>
      </>
    );
  }
export default Actions;