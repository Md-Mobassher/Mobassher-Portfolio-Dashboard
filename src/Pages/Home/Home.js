import React from 'react';
import Projects from '../Projects/Projects';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Projects></Projects>
                    
        </div>
    );
};

export default Home;