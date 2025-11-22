import ContactApp from "./components/contact/ContactApp";
import ContactAppContextProvider from "./components/context/ContactAppContext";

const App = () => {
  return (
    <ContactAppContextProvider>
      <div className = "bg-neutral-50 w-full h-screen flex flex-wrap justify-center items-center">
        <ContactApp/>
      </div>
    </ContactAppContextProvider>
  );
};

export default App;