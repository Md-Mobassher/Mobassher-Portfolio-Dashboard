import React from 'react';
import { Link } from 'react-router-dom';
import mobassher from '../../Assets/Images/mobassher.png'
import PersonalInfo from './PersonalInfo';
import UseIcon from '../../Shared/UseIcon';


const About = () => {
    return (
        <section id='about' className='my-16 lg:px-20'>
             <h2 className='text-4xl font-bold  text-center mb-5 lg:mb-8'>About <span className='text-primary'>Me</span></h2>
             <div class="hero-content w-full flex-col lg:flex-row-reverse justify-center items-center ">
                <div className='w-full lg:w-2/5  flex justify-center p-5'>
                    <img className=" p-5" src={mobassher} class=" rounded-lg shadow-2xl" alt=''/>
                </div>
                <div className='w-full lgw-3/5  p-5 '>
                    <h1 className='text-2xl font-semibold'>Who am <span className='text-primary'>I </span>?</h1>
                    <h1 class="text-3xl font-semibold mb-2">I am <span className='text-primary'>Md Mobassher Hossain</span> </h1>
                    <h2 class="text-3xl mb-3 font-semibold ">Full stack Developer from Bangladesh</h2>
                    
                    <p className=''>I'm a Full-stack Developer who is passionate about making error-free websites with 100% client satisfaction. 
                    I love to solve real-world problems. I am strategic, goal-oriented and always work with an end goal in mind. Over the past years, I created the 10s of websites for my clients. I pride myself on doing quality work. 
                    Most of the time I work with React, but some technologies I enjoy working with include JavaScript as well as WordPress.</p>

                    <div>
                        
                        <Link to='/contact' className='btn btn-outline btn-primary px-8 mt-8 hover:text-white' >Hire Me</Link>
                    </div>

                </div>

                
            </div>

            <PersonalInfo></PersonalInfo>
            
            <UseIcon></UseIcon>
        </section>
    );
};

export default About;