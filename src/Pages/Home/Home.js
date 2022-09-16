import React from 'react';
import Projects from '../Projects/Projects';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Services></Services>
            </div>
            <div className='mt-28'>
                <Projects></Projects>
            </div>
                
        </div>
    );
};

export default Home;