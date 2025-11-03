import SearchBar from '../SearchBar';
import Sort from '../Sort';

const ContactsHeaderPanel = ({ onDUMMYCONTACTS , modelIsOpen , onModelIsOpen }) => {
    return (
        <>
            <div className = 'mb-5'>
                <div className = 'flex items-center justify-between'>
                    <SearchBar />

                    <button onClick = {() => onModelIsOpen(true)} title = 'add contact' className = 'group cursor-pointer w-8 h-8 flex justify-center items-center rounded-full bg-white/45 border-white/80 backdrop-blur-xl shadow-[0_5px_10px_rgba(0,0,0,0.05)] border text-gray-500 transition-all duration-200 hover:w-20 hover:bg-sky-500 hover:text-white'>
                        <i className = 'bx bx-plus translate-x-[11px] group-hover:translate-x-0 delay-100'></i>
                        <p className = 'group-hover:visible group-hover:opacity-100 group-hover:ml-2 invisible opacity-0 transition-all'>add</p>
                    </button>
                </div>

                <div className = 'flex items-center justify-between mt-5'>
                    <h1 className = 'capitalize text-xl font-semibold'>contacts</h1>
                    <div className = 'flex gap-3'>
                        <button className = 'text-blue-500 hover:border-blue-500 px-3 cursor-pointer rounded-full border border-transparent transition-all'>select</button>
                        <Sort/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactsHeaderPanel;