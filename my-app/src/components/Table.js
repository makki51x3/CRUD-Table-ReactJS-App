
import React  from 'react';
import Rows from './Rows';

export const Table = ()=>{
    
    const headerCell ={
        alignItems:'center',
        backgroundColor:'#fff5c3',
        padding:5, 
        fontWeight:"bold",
        textAlign:"center"
    }

    const tableStyle = {
        width:"50%",
        marginBottom:20, 
        backgroundColor:"black"
    }
  
    return(
        <table style={tableStyle}>
          <thead>
            <tr>
              <td style={headerCell}>ID</td>
              <td style={headerCell}>Title</td>
              <td style={headerCell}>Languages</td>
              <td style={headerCell}>Description</td>
              <td style={headerCell}>Actions</td>
            </tr>
          </thead>
          <tbody>
            <Rows/>
          </tbody>
        </table>
    );
  }
export default Table;