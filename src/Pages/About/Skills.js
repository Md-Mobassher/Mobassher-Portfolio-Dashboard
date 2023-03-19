import React from 'react';

const Skills = () => {
    return (
        <section className='lg:max-w-2/3 mt-24 mb-28' >
            <h2 className='lg:text-4xl text-3xl font-bold  text-center lg:mb-12'> <span className='text-primary'>Skills</span></h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 px-5'>
                <div className='card shadow-xl p-10 '>

                    <div className='flex justify-center items-center mb-5 hover:text-secondary  '>
                        <p className='w-40 font-semibold'>Html</p>
                        <progress className="progress  progress-primary hover:progress-secondary hover:progress-secondary" value="90" max="100"></progress>
                    </div>

                    <div className='flex justify-center items-center mb-5 hover:text-secondary '>
                        <p className='w-40 font-semibold'>CSS</p>
                        <progress className="progress  progress-primary hover:progress-secondary" value="80" max="100"></progress>
                    </div>

                    <div className='flex justify-center items-center mb-5 hover:text-secondary '>
                        <p className='w-40 font-semibold'>JavaScript</p>
                        <progress className="progress  progress-primary hover:progress-secondary" value="75" max="100"></progress>
                    </div>
                    <div className='flex justify-center items-center mb-5 hover:text-secondary '>
                        <p className='w-40 font-semibold'>React</p>
                        <progress className="progress  progress-primary hover:progress-secondary" value="75" max="100"></progress>
                    </div>
                    <div className='flex justify-center items-center mb-5 hover:text-secondary '>
                        <p className='w-40 font-semibold'>Node JS</p>
                        <progress className="progress  progress-primary hover:progress-secondary" value="70" max="100"></progress>
                    </div>
                    <div className='flex justify-center items-center mb-5 hover:text-secondary '>
                        <p className='w-40 font-semibold'>Express JS</p>
                        <progress className="progress  progress-primary hover:progress-secondary" value="70" max="100"></progress>
                    </div>
                    <div className='flex justify-center items-center mb-5 hover:text-secondary '>
                        <p className='w-40 font-semibold'>MongoDB</p>
                        <progress className="progress  progress-primary hover:progress-secondary" value="65" max="100"></progress>
                    </div>

                    <div className='flex justify-center items-center mb-5 hover:text-secondary '>
                        <p className='w-40 font-semibold'>WordPress</p>
                        <progress className="progress  progress-primary hover:progress-secondary" value="90" max="100"></progress>
                    </div>

                    <div className='flex justify-center items-center mb-5 hover:text-secondary '>
                        <p className='w-40 font-semibold'>Elementor</p>
                        <progress className="progress  progress-primary hover:progress-secondary" value="100" max="100"></progress>
                    </div>

                    <div className='flex justify-center items-center mb-5 hover:text-secondary '>
                        <p className='w-40 font-semibold'>Divi</p>
                        <progress className="progress  progress-primary hover:progress-secondary" value="95" max="100"></progress>
                    </div>
   
                </div>


                <div className='card bg-base-100 shadow-xl p-10'>
                    
                   <div className='flex justify-center items-center mb-5 hover:text-secondary '>
                        <p className='w-40 font-semibold'>Bootstrap</p>
                        <progress className="progress  progress-primary hover:progress-secondary" value="100" max="100"></progress>
                    </div>

                    <div className='flex justify-center items-center mb-5 hover:text-secondary '>
                        <p className='w-40 font-semibold'>Tailwind</p>
                        <progress className="progress  progress-primary hover:progress-secondary" value="95" max="100"></progress>
                    </div>

                    <div className='flex justify-center items-center mb-5 hover:text-secondary '>
                        <p className='w-40 font-semibold'>Git</p>
                        <progress className="progress  progress-primary hover:progress-secondary" value="75" max="100"></progress>
                    </div>

                    <div className='flex justify-center items-center mb-5 hover:text-secondary '>
                        <p className='w-40 font-semibold'>Github</p>
                        <progress className="progress  progress-primary hover:progress-secondary" value="70" max="100"></progress>
                    </div>

                    <div className='flex justify-center items-center mb-5 hover:text-secondary '>
                        <p className='w-40 font-semibold'>Firebase</p>
                        <progress className="progress  progress-primary hover:progress-secondary" value="100" max="100"></progress>
                    </div>

                    <div className='flex justify-center items-center mb-5 hover:text-secondary '>
                        <p className='w-40 font-semibold'>Heroku</p>
                        <progress className="progress  progress-primary hover:progress-secondary" value="90" max="100"></progress>
                    </div> 

                     <div className='flex justify-center items-center mb-5 hover:text-secondary '>
                        <p className='w-40 font-semibold'>Netlify</p>
                        <progress className="progress  progress-primary hover:progress-secondary" value="90" max="100"></progress>
                    </div>

                    <div className='flex justify-center items-center mb-5 hover:text-secondary '>
                        <p className='w-40 font-semibold'>VS Code</p>
                        <progress className="progress  progress-primary hover:progress-secondary" value="95" max="100"></progress>
                    </div> 

                    <div className='flex justify-center items-center mb-5 hover:text-secondary '>
                        <p className='w-40 font-semibold'>Photoshop</p>
                        <progress className="progress  progress-primary hover:progress-secondary" value="60" max="100"></progress>
                    </div> 
                    <div className='flex justify-center items-center mb-5 hover:text-secondary '>
                        <p className='w-40 font-semibold'>Figma</p>
                        <progress className="progress  progress-primary hover:progress-secondary" value="80" max="100"></progress>
                    </div> 

                </div>
               
            </div>

        </section>
    );
};

export default Skills;