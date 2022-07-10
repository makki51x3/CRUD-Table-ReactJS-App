
import React  from 'react';
import { useNavigate } from "react-router-dom";


export const BackBtn = ()=>{

    let navigate = useNavigate();

    const btn = {
        margin:10,
        padding:5,
        fontSize:13,
        fontWeight:"bold",
        borderRadius:15,
        backgroundColor:"beige"
    }

    return(
        <button style={btn} onClick={()=>{navigate(-1)}}>Go Back</button>
    );
  }
export default BackBtn;