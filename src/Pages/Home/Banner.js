import React from 'react';

const Banner = () => {
    return (
        <section class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse lg:px-20 ">
                <div className='w-1/2'>
                    <img src="https://api.lorem.space/image/movie?w=260&h=400" class=" rounded-lg shadow-2xl" alt=''/>
                </div>
                <div className='w-1/2'>
                    <h1 class="text-4xl font-bold">MD MOBASSHER HOSSAIN</h1>
                    <h2 class="py-6 text-3xl font-bold">Full-Stack Developer</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore minus similique, accusantium quis vel voluptate repudiandae! Sapiente voluptatem autem recusandae rem labore ab placeat non porro ipsam quasi reprehenderit eaque similique, harum incidunt expedita deleniti, atque ducimus quae corrupti eum quis! Sed voluptatem nam dolore explicabo vel esse, provident debitis?</p>
                    <button class="btn btn-primary">Hire me</button>
                </div>
            </div>
        </section>
    );
};

export default Banner;