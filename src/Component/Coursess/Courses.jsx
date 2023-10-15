import React, { useEffect, useState } from 'react';
import Course from './Course';
const Courses = ({handleSelect}) => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    
    return (
        <div className='container mx-auto font-[Inter] grid grid-cols-3 gap-3 mt-5'>
            {
                courses.map(course=> <Course
                key={course.id}
                course={course}
                handleSelect={handleSelect}
                ></Course> )
            }
        </div>
    );
};

export default Courses;