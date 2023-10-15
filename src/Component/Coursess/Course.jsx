import React from 'react';
import { FaDollarSign, FaCreditCard } from 'react-icons/fa';
const Course = ({ course, handleSelect }) => {
    const { image, title, description, price, credit } = course;
    // console.log(course);
    return (
        <div className='  p-5 rounded-lg flex flex-col gap-2 bg-white'>
            <img src={image} alt="" />
            <h1 className='font-bold text-lg'>{title}</h1>
            <p className='text-sm text-[#1C1B1B99]'>{description}</p>
            <div className='flex justify-between'>  <p className='flex items-center gap-2'><FaDollarSign />Price: {price}</p>
                <p className='flex items-center gap-2'><FaCreditCard /> Credit: {credit} hr</p> </div>
            <button onClick={() => handleSelect(course)} className='bg-blue-500 text-white py-1 rounded-lg'>Select</button>
        </div>
    );
};

export default Course;