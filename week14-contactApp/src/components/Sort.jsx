import { useContext } from "react";
import { ContactAppContext } from "./context/ContactAppContext";

const Sort = () => {
    const { state , dispatch } = useContext(ContactAppContext)
    return (
        <>
            <select name = "dropDown" id = "dropDown" value = {state.sortOption} onChange = { ev => dispatch({ type : 'SET_SORT_OPTION' , payLoad : ev.target.value }) } className = 'cursor-pointer capitalize rounded-xl p-2 px-3'>
                <option value = "default">default</option>
                <option value = "asc">ascending</option>
                <option value = "desc">descending</option>
            </select>
        </>
    );
};

export default Sort;