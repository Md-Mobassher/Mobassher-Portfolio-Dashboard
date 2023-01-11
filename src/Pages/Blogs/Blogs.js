import React from 'react';
import comingSoon from '../../Assets/Images/coming-soon.gif'

const Blogs = () => {
    return (
        <section className='py-10 h-full'>
            <h2 className='text-4xl font-bold  text-center '>Personal <span className='text-primary'>Blogs</span></h2>
            <div className='text-center h-full flex justify-center items-center'>
                <img src={comingSoon} alt="comming soon" />
                {/* <h1 className='h-full flex justify-center items-center text-6xl'>Comming &nbsp;
                    <span> Soon</span> 
                </h1> */}
            </div>
        </section>
    );
};

export default Blogs;