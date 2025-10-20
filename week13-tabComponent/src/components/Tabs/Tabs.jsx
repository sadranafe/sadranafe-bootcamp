import { useState } from "react";
import TabLists from "./TabLists";
import TabPanels from "./TabPanels";

const Tabs = ({ tabs }) => {
    const [activeIndex , setActiveIndex] = useState(0)
    return (
        <>
            <div className = "dark:bg-neutral-900 bg-neutral-200 dark:text-neutral-200 text-neutral-900 border dark:border-neutral-800 border-neutral-100 shadow-md h-64 w-1/2 rounded-3xl p-7">
                <h1 className = "capitalize text-center font-semibold text-3xl">tabs component with react</h1>
                <TabLists tabs = {tabs} activeIndex = {activeIndex}  setActiveIndex = {setActiveIndex}/>
                <TabPanels tabs = {tabs} activeIndex = {activeIndex}/>
            </div>
        </>
    );
};

export default Tabs;