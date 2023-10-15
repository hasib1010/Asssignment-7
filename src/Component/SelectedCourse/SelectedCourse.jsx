import React from 'react';

const SelectedCourse = ({selected}) => {
   
    const {title, price, credit} = selected;    
    return (
        <div>
            <ol className="text-base list-disc text-[#1C1B1B99]">
                <li>{title}</li>
            </ol>
            <br />
        </div>
    );
};

export default SelectedCourse;