import ContactsPanel from "../contactPanel/ContactsPanel";
import SideBar from "../SideBar";
import Model from "../model";
import Toast from "../Toast";

const ContactApp = () => {
    return (
        <>
            <div className = "bg-neutral-200/40 w-11/12 lg:w-8/12 flex justify-between items-start content-center shadow-md rounded-4xl overflow-hidden p-5 h-[500px]">
                <SideBar/>
                <ContactsPanel/>
            </div>

            <Model/>
            <Toast/>
        </>
    );
};

export default ContactApp;