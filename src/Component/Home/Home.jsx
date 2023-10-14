import React, { useEffect } from 'react';
import './Home.css'
const Home = () => {
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div className='container mx-auto full'>

            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam dicta id labore libero velit cum! Voluptates natus ratione quidem illo nemo molestiae architecto nihil, mollitia, dicta pariatur optio suscipit praesentium!</h2>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam dicta id labore libero velit cum! Voluptates natus ratione quidem illo nemo molestiae architecto nihil, mollitia, dicta pariatur optio suscipit praesentium!</h2>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam dicta id labore libero velit cum! Voluptates natus ratione quidem illo nemo molestiae architecto nihil, mollitia, dicta pariatur optio suscipit praesentium!</h2>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam dicta id labore libero velit cum! Voluptates natus ratione quidem illo nemo molestiae architecto nihil, mollitia, dicta pariatur optio suscipit praesentium!</h2>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam dicta id labore libero velit cum! Voluptates natus ratione quidem illo nemo molestiae architecto nihil, mollitia, dicta pariatur optio suscipit praesentium!</h2>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam dicta id labore libero velit cum! Voluptates natus ratione quidem illo nemo molestiae architecto nihil, mollitia, dicta pariatur optio suscipit praesentium!</h2>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam dicta id labore libero velit cum! Voluptates natus ratione quidem illo nemo molestiae architecto nihil, mollitia, dicta pariatur optio suscipit praesentium!</h2>
        </div>
    );
};

export default Home;