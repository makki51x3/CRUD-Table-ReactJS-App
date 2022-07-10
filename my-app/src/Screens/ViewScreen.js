
import React from 'react';
import {useSelector} from 'react-redux'    
import BackBtn from '../components/BackBtn';

export const ViewScreen = () => {

  const bg={
    backgroundColor: "#22b0b052",
    minHeight: '100vh', 
    fontSize: 17,
    alignItems:"center",
    justifyContent:"center",
    display:"flex",
    flex:1
  };
  
  const container={
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    fontWeight:"500",
    width:"50%"
  };

  const title = {
    fontWeight:"bold",
    marginBottom:15,
    fontSize: 21,

  }

  const description = {
    marginBottom:10,
    fontSize: 14,
    alignSelf:"left"
  }

  const language = {
    fontWeight:"500",
    marginBottom:15,
    color:"#f44336"
  }

  const content= useSelector((state)=>state.ViewReducer.content);

  const onlySpaces = (str) => str.trim().length === 0;

  return (
    <div style={bg}>
        <div style={container}>
            <div style={title}>
                {onlySpaces(content.title)?"No Title Available":content.title}
            </div>            
            <div style={description}>
                Description:<br/>
                {onlySpaces(content.description)?"No Description Available":content.description}
                <br/>
            </div>
            <br/>Programming Language
            <div style={language}>
                {content.language}
            </div>
            <BackBtn/>
        </div>
    </div>  
    );
}

export default ViewScreen;
