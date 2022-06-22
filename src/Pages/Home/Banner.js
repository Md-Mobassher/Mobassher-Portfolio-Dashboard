import React from 'react';
import { saveAs } from "file-saver";
import mobassher from '../../Assets/Images/mobassher.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    const saveFile = () => {
        saveAs(
          'https://drive.google.com/file/d/1NJRtUZJ2qwh-X2O4f8goa9vlBHmHz0oR/view?usp=sharing'
        );
      };


    return (
        <section class="hero min-h-screen bg-base-100 lg:-mt-10">
            <div class="hero-content flex-col lg:flex-row-reverse lg:px-20 justify-center items-center ">
                <div className='w-full lg:w-1/2 flex justify-center items-center'>
                    <img className=" flex " src={mobassher} class=" rounded-lg size-cover" alt=''/>
                </div>
                <div className='w-full lg:w-2/3 p-5 '>
                    <h1 class="lg:text-4xl text-3xl text-secondary font-bold mb-2">Hi</h1>
                    <h1 class="lg:text-5xl text-4xl  font-bold mb-3">I am <span className='text-primary'>MOBASSHER</span></h1>
                    <h2 class="mb-3 lg:text-4xl text-3xl font-bold text-secondary ">Full-Stack Developer</h2>
                    
                    <p className='font-semibold'>I'm a Full-stack Developer who is passionate about making error-free websites with 100% client satisfaction. 
                    I love to solve real-world problems. I am strategic, goal-oriented and always work with an end goal in mind. Over the past years, I created the 10s of websites for my clients. I pride myself on doing quality work. 
                    Most of the time I work with React, but some technologies I enjoy working with include JavaScript as well as WordPress.</p>

                    <div>
                        <button className='btn btn-primary px-8 mt-6 mr-5 text-white' onClick={saveFile}>Download Resume</button>
                        <Link to='/contact' className='btn btn-outline btn-primary px-8 mt-8 text-secondary ' >Hire Me</Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;