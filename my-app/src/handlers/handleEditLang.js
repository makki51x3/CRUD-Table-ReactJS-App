
import { editLanguage } from '../redux/HomeSlice';

export const handleEditLanguage = (newLanguage,dispatch,{content})=>{
    console.log(content,"handleEditLang checkkk");
    dispatch(
        editLanguage(
            {
                newLanguage: newLanguage || content.Languages,
                current:content
            }
        )
    );
}

export default handleEditLanguage;

