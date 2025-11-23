import { useReducer , createContext } from "react";
import ContactReducer, { InitialContactState } from "../reducers/ContactAppReducer";

const ContactAppContext = createContext();

const ContactAppContextProvider = ({ children }) => {
    const [state , dispatch] = useReducer(ContactReducer , InitialContactState);
    return (
        <ContactAppContext.Provider value = {{ state , dispatch }}>
            { children }
        </ContactAppContext.Provider>
    );
};

export { ContactAppContext };
export default ContactAppContextProvider;