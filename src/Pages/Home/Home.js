import React from 'react';
import Projects from '../Projects/Projects';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <div className='lg:-mt-12'>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Services></Services>
            </div>
            <div className='lg:mt-28 mt-10'>
                <Projects></Projects>
            </div>
                
        </div>
    );
};

export default Home;