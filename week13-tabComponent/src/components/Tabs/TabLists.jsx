import Tab from "./Tab";

const TabLists = ({ tabs , activeIndex , setActiveIndex }) => {
    return (
        <>
            <div className = "flex justify-center gap-6 my-3">
                {
                    tabs.map((tab , index) => {
                        return (
                            <Tab key = {index} label = {tab.label}  isActive = {activeIndex === index} onActive = {() => setActiveIndex(index)}/>
                        )
                    })
                }
            </div>
        </>
    );
};

export default TabLists;