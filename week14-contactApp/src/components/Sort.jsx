const Sort = ({ sortContactsHandler }) => {
    return (
        <>
            <select name = "dropDown" id = "dropDown" onChange = {ev => sortContactsHandler(ev.target.value)} className = 'cursor-pointer capitalize rounded-xl p-2 px-3'>
                <option value = "default">default</option>
                <option value = "asc">ascending</option>
                <option value = "desc">descending</option>
            </select>
        </>
    );
};

export default Sort;