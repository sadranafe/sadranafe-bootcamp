const EmptyState = ({ type , action }) => {
    let icon , title , subTitle , actionText;
    switch(type) {
        case 'noContacts' : {
            icon = 'bx bx-user-plus';
            title = 'no contacts yet.';
            subTitle = 'start by adding your first one!';
            actionText = 'add contact'
            break;
        };

        case 'noResults' : {
            icon = 'bx bx-search-alt';
            title = 'Hmmm ... no results found';
            subTitle = 'Try another name ?';
            actionText = 'clear filters'
            break;
        }

        default : {
            icon = 'bx bx-info-circle';
            title = 'nothing to show';
            subTitle = 'please check back later';
        }
    }

    return (
        <div className = "w-full text-center flex gap-1 flex-col justify-center items-center">
            <i className = {`${icon} text-gray-500 text-5xl`}></i>
            <p className = "capitalize">{title}</p>
            {
                action &&
                <button onClick = { action } className = "p-1 px-2 text-blue-500 capitalize cursor-pointer hover:underline">{subTitle}</button>
            }
        </div>
    );
};

export default EmptyState;