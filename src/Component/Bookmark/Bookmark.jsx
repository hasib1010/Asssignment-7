import React from 'react';
import SelectedCourse from '../SelectedCourse/SelectedCourse';

const Bookmark = ({ select, courseCost, remainCredit, totalCredit }) => {
    return (
        <div className='ml-5 w-[312px]'>
            <h1 className='text-xl font-bold text-[#2F80ED]'>Credit Hour remaining {remainCredit} hr </h1>
            <hr />
            <br />
            <h1 className="text-xl font-bold">Course Name</h1>
            {
                select.map(selected => <SelectedCourse key={select.id} selected={selected}></SelectedCourse>)
            }
            <hr />
            <br />
            <h1 className='text-2xl'>Total Credit: {totalCredit} </h1>
            <hr />
            <br />
            <h1 className='text-2xl'>Total Price: {courseCost} USD</h1>
        </div>
    );
};

export default Bookmark;