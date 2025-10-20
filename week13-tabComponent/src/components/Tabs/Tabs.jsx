import { useState } from "react";
import TabLists from "./TabLists";
import TabPanels from "./TabPanels";

const Tabs = ({ tabs }) => {
    const [activeIndex , setActiveIndex] = useState(0)
    return (
        <>
            <div className = "bg-linear-to-br from-sky-300/30 to-blue-600/50 h-64 shadow-lg w-1/2 rounded-4xl p-7">
                <h1 className = "capitalize text-center font-semibold text-3xl">tabs component with react</h1>
                <TabLists tabs = {tabs} activeIndex = {activeIndex}  setActiveIndex = {setActiveIndex}/>
                <TabPanels tabs = {tabs} activeIndex = {activeIndex}/>
            </div>
        </>
    );
};

export default Tabs;