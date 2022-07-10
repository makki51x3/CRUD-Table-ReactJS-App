import {updateContent} from '../redux/ViewSlice'

export const handleView = (content,dispatch,navigate)=>{
    dispatch(updateContent(content[0]));
    navigate("Id");
}

export default handleView;