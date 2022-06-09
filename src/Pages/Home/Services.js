import React from 'react';
import { FcManager } from 'react-icons/fc';

const Services = () => {
    return (
        <section id='projects' className='my-16 lg:px-20'>
            <h2 className='text-3xl font-bold text-primary text-center mb-12'>Services</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 px-5'>
                <div className=' max-w-sm mx-auto flex-col justify-center items-center shadow-lg rounded-lg border-x-rose-600 p-5'>
                    <FcManager className='w-8 h-8 block mx-auto mb-6'></FcManager>
                    <div >
                        <h2 className='text-primary font-semibold text-2xl text-center mb-4'>Web Design</h2>
                        <p className='text-center'>As a web designer, my objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to design compelling and attractive websites.</p>
                    </div>
                </div>
                <div className=' max-w-sm mx-auto  flex-col justify-center items-center shadow-lg rounded-lg border-x-rose-600 p-5'>
                    <FcManager className='w-8 h-8 block mx-auto mb-6'></FcManager>
                    <div >
                        <h2 className='text-primary font-semibold text-2xl text-center mb-4'>Web Development</h2>
                        <p className='text-center'>As a web designer, my objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to design compelling and attractive websites.</p>
                    </div>
                </div>
                <div className=' max-w-sm mx-auto flex-col justify-center items-center shadow-lg rounded-lg border-x-rose-600 p-5'>
                    <FcManager className='w-8 h-8 block mx-auto mb-6'></FcManager>
                    <div >
                        <h2 className='text-primary font-semibold text-2xl text-center mb-4'>Web Development</h2>
                        <p className='text-center'>As a web designer, my objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to design compelling and attractive websites.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;