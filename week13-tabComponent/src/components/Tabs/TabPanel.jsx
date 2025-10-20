import React from 'react';

const TabPanel = ({ header , content , activePanel }) => {
    return (
        <>
            {
                activePanel && 
                <div>
                    <h2 className = 'font-medium text-lg mb-1'>{header}</h2>
                    <div>
                        <p className = 'ml-2 text-justify'>{content}</p>
                    </div>
                </div>
            }   
        </>
    );
};

export default TabPanel;