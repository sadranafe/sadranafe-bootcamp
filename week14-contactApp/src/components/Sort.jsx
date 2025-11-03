import React from 'react';

const Sort = () => {
    return (
        <>
            <select name = "dropDown" id = "dropDown" className = 'cursor-pointer capitalize rounded-xl p-2 px-3'>
                <option value = "default"></option>
                <option value = "asc">ascending</option>
                <option value = "desc">descending</option>
            </select>
        </>
    );
};

export default Sort;