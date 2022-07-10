import {removeRow} from '../redux/HomeSlice'

export const handleDelete = (id,dispatch)=>{
    if (window.confirm("Are you sure you want to delete this row?")) {
        dispatch(removeRow(id));
    } 
}

export default handleDelete;