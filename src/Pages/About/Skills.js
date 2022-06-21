import React from 'react';

const Skills = () => {
    return (
        <section className='lg:max-w-2/3 mt-24 mb-28' >
            <h2 className='text-4xl font-bold  text-center lg:mb-12'> <span className='text-primary'>Skills</span></h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className='card bg-base-100 shadow-xl p-10 '>

                    <div className='flex justify-center items-center mb-5'>
                        <p className='w-40 font-semibold'>Html</p>
                        <progress class="progress progress-primary" value="90" max="100"></progress>
                    </div>

                    <div className='flex justify-center items-center mb-5'>
                        <p className='w-40 font-semibold'>CSS</p>
                        <progress class="progress progress-primary" value="80" max="100"></progress>
                    </div>

                    <div className='flex justify-center items-center mb-5'>
                        <p className='w-40 font-semibold'>JavaScript</p>
                        <progress class="progress progress-primary" value="75" max="100"></progress>
                    </div>
                    <div className='flex justify-center items-center mb-5'>
                        <p className='w-40 font-semibold'>React</p>
                        <progress class="progress progress-primary" value="75" max="100"></progress>
                    </div>
                    <div className='flex justify-center items-center mb-5'>
                        <p className='w-40 font-semibold'>Node JS</p>
                        <progress class="progress progress-primary" value="70" max="100"></progress>
                    </div>
                    <div className='flex justify-center items-center mb-5'>
                        <p className='w-40 font-semibold'>Express JS</p>
                        <progress class="progress progress-primary" value="70" max="100"></progress>
                    </div>
                    <div className='flex justify-center items-center mb-0'>
                        <p className='w-40 font-semibold'>MongoDB</p>
                        <progress class="progress progress-primary" value="65" max="100"></progress>
                    </div>
   
                </div>
                <div className='card bg-base-100 shadow-xl p-10'>

                    <div className='flex justify-center items-center mb-5'>
                        <p className='w-40 font-semibold'>Html</p>
                        <progress class="progress progress-primary" value="90" max="100"></progress>
                    </div>

                    <div className='flex justify-center items-center mb-5'>
                        <p className='w-40 font-semibold'>CSS</p>
                        <progress class="progress progress-primary" value="80" max="100"></progress>
                    </div>

                    <div className='flex justify-center items-center mb-5'>
                        <p className='w-40 font-semibold'>JavaScript</p>
                        <progress class="progress progress-primary" value="75" max="100"></progress>
                    </div>
                    <div className='flex justify-center items-center mb-5'>
                        <p className='w-40 font-semibold'>React</p>
                        <progress class="progress progress-primary" value="75" max="100"></progress>
                    </div>
                    <div className='flex justify-center items-center mb-5'>
                        <p className='w-40 font-semibold'>Node</p>
                        <progress class="progress progress-primary" value="70" max="100"></progress>
                    </div>
                    <div className='flex justify-center items-center mb-5'>
                        <p className='w-40 font-semibold'>Express</p>
                        <progress class="progress progress-primary" value="70" max="100"></progress>
                    </div>
                    <div className='flex justify-center items-center mb-0'>
                        <p className='w-40 font-semibold'>MongoDB</p>
                        <progress class="progress progress-primary" value="65" max="100"></progress>
                    </div>
   
                </div>
               
            </div>

        </section>
    );
};

export default Skills;