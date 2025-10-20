import React from 'react';
import TabPanel from './TabPanel';

const TabPanels = ({ tabs , activeIndex }) => {
    return (
        <>
            <div>
                {
                    tabs.map((tab , index) => {
                        return (
                            <TabPanel key = {index} header = {tab.header} content = {tab.content} activePanel = {activeIndex === index}/>
                        )
                    })
                }
            </div>
        </>
    );
};

export default TabPanels;