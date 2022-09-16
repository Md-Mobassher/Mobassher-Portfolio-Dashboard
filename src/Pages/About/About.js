import React from 'react';
import { Link } from 'react-router-dom';
import mobassher from '../../Assets/Images/mobassher.png'
import PersonalInfo from './PersonalInfo';
import UseIcon from '../../Shared/UseIcon';
import Skills from './Skills';


const About = () => {
    return (
        <section id='about' className='my-10 lg:px-20'>
             <h2 className='text-4xl font-bold  text-center lg:mb-8'>About <span className='text-primary'>Me</span></h2>
             <div className="hero-content w-full flex-col lg:flex-row-reverse justify-center items-center ">
                <div className='w-full lg:w-2/5  flex justify-center p-5'>
                    <img className="flex rounded-lg" src={mobassher}  alt='mobassher'/>
                </div>
                <div className='w-full lgw-3/5  p-3 '>
                    <h1 className='text-xl lg:text-2xl font-semibold mb-3'>Who am <span className='text-primary'>I </span>?</h1>
                    <h1 className="text-2xl lg:text-3xl font-semibold mb-3">I am <span className='text-primary text-3xl lg:text-4xl'>Md Mobassher Hossain</span> </h1>
                    <h2 className="text-xl lg:text-2xl mb-3 text-secondary font-semibold ">Full stack Developer from Bangladesh</h2>
                    
                    <p className='font-semibold'>I'm a Full-stack Developer and WordPress expert who is passionate about making error-free websites with 100% client satisfaction. 
                    When I discovered web design in my University life, I realized it would be the perfect fit for me. I could use my creative side to design and my logical side to code. As a bonus, being both designer and developer.</p>

                    <div>
                        
                        <Link to='/contact' className='btn btn-outline btn-primary px-8 mt-8 hover:text-white' >Hire Me</Link>
                    </div>

                </div>

                
            </div>

            <Skills></Skills>

            <PersonalInfo></PersonalInfo>
            
            <UseIcon></UseIcon>

      
        </section>
    );
};

export default About;