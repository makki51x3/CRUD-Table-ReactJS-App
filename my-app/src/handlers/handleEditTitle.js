
import { editTitle } from '../redux/HomeSlice';

export const handleEditTitle = (apply,dispatch,content)=>{
    if (apply) {
        let newTitle = prompt('Edit Title:',content.title);
        dispatch(
            editTitle(
                {
                    newTitle: newTitle || content.title,
                    current:content
                }
            )
        );
    } 
}

export default handleEditTitle;

