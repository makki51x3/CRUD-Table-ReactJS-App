
import { editDescription } from '../redux/HomeSlice';

export const handleEditDescription = (apply,dispatch,content)=>{
    if (apply) {
        let newDescription = prompt('Edit Description:',content.description);
        dispatch(
            editDescription(
                {
                    newDescription: newDescription || content.description,
                    current:content
                }
            )
        );
    } 
}

export default handleEditDescription;

