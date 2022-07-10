
import React from 'react';
import DescriptionField from '../components/DescriptionField';
import LangSelection from '../components/LangSelection';
import TitleField from '../components/TitleField';
import Table from '../components/Table';
import CreateBtn from '../components/CreateBtn';

export const HomeScreen = () => {

  const bg={
    backgroundColor: "#22b0b052",
    minHeight: '100vh', 
    fontSize: 17
  };
  
  const container={
    display:"flex",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    paddingTop:30,
    paddingBottom:30,
    flexDirection:"column",
    fontWeight:"500"
  };

  return (
    <div style={bg}>
        <div style={container}>
            <Table/>
            <div style={{display:"flex"}}>
                <TitleField/>
                <LangSelection/>
                <DescriptionField/>
            </div>
            <CreateBtn/>
        </div>
    </div>  
    );
}

export default HomeScreen;
