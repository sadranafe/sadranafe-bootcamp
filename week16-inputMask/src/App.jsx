import { useState } from "react";
import cities from './cities.json'
import Input from "./Components/Input";
const App = () => {
  const [DUMMYCities , setDUMMYCities] = useState(cities);
  return (
    <>
      <Input DUMMYCities = {DUMMYCities} />
    </>
  );
};

export default App;