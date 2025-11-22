import { useReducer , createContext } from "react";
import { initialContactState , contactReducer } from "../reducers/ContactAppReducer";

const ContactAppContext = createContext();

const ContactAppContextProvider = ({ children }) => {
    const [state , dispatch] = useReducer(contactReducer , initialContactState);
    return (
        <ContactAppContext.Provider value = {{ state , dispatch }}>
            { children }
        </ContactAppContext.Provider>
    );
};

export { ContactAppContext };
export default ContactAppContextProvider;