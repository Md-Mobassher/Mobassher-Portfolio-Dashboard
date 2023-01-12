import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { BsCodeSquare } from 'react-icons/bs';

const Services = () => {
    return (
        <section id='projects' className='pt-10 lg:px-20'>
            <h2 className='lg:text-4xl md:text-3xl text-2xl font-bold text-primary text-center lg:mb-12 mb-8'>Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center items-center px-5'>
                <div className=' max-w-sm mx-auto flex-col justify-center items-center shadow-2xl rounded-lg border-x-rose-600 p-5'>
                    <FaLaptopCode className='w-10 h-10 block mx-auto mt-4 mb-6'></FaLaptopCode>
                    <div >
                        <h2 className='text-primary font-semibold lg:text-2xl text-xl text-center mb-4'>Web Design</h2>
                        <p className='text-center p-2'>As a web designer, I always provide the quality work and always try to satisfy my clients and make a good relationship with them. </p>
                    </div>
                </div>
                <div className=' max-w-sm mx-auto  flex-col justify-center items-center shadow-2xl rounded-lg border-x-rose-600 p-5'>
                    <RiCodeSSlashLine className='w-10 h-10 block mx-auto mt-4 mb-6'></RiCodeSSlashLine>
                    <div >
                        <h2 className='text-primary font-semibold lg:text-2xl text-xl text-center mb-4'>Web Development</h2>
                        <p className='text-center'>Providing quality content on your website, regularly adding new information, establishing trust, and marketing your site on other websites and social media.</p>
                    </div>
                </div>
                <div className=' max-w-sm mx-auto flex-col justify-center items-center shadow-2xl rounded-lg border-x-rose-600 p-5'>
                    <BsCodeSquare className='w-10 h-10 block mx-auto mt-4 mb-6'></BsCodeSquare>
                    <div >
                        <h2 className='text-primary font-semibold lg:text-2xl text-xl text-center mb-4'>Customize Website</h2>
                        <p className='text-center  p-2'>I will cutomize your previous website, fix bugs, errors, and add new features. Providing the best and quality services.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;