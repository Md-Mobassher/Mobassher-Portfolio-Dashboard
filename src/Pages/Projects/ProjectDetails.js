import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const ProjectDetails = () => {

    const {state } = useLocation()

    const {name,type,details1,details2,details3, live, server,client, technology, img1, img2, img3, } = state


    return (
        <section id='details' className='my-10 lg:px-20 px-5'>
             <h2 className='text-4xl font-bold  text-center mb-5 lg:mb-10'>Project <span className='text-primary'>Details</span></h2>
             <div className=''>
                <div className='w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mb-10 rounded-lg p-5'>
                    <div className='h-80 overflow-x-auto p-5'>
                        <img className="  w-full " src={img1} class=" rounded-lg shadow-2xl" alt=''/>
                    </div>
                    <div className='h-80 overflow-x-auto p-5'>
                        <img className="  w-full " src={img2} class=" rounded-lg shadow-2xl" alt=''/>
                    </div>
                    <div className='h-80 overflow-x-auto p-5'>
                        <img className="  w-full " src={img3} class=" rounded-lg shadow-2xl" alt=''/>
                    </div>
                </div>

                
                <div className='items-center justify-start lg:w-4/5 shadow-lg rounded-lg mx-auto p-8 mt-8'>
                    <div className='flex'>
                       <p className='mb-3 font-bold text-xl'>Project Name:</p> 
                       <p className=' ml-2 text-primary font-semibold text-xl'>{ name }</p>
                    </div>
                    <div className='flex'>
                       <p className='mb-3 font-bold text-xl'>Project Type: </p> 
                       <p className=' ml-2 text-primary font-semibold text-xl'>{ type }</p>
                    </div>
                    <div className=''>
                       <p className='mb-3 font-bold text-xl'>Project Details:</p> 
                       <p className='mb-3 font-semibold '>
                        <ul className='list-inside  list-disc mb-5'>
                            <li>{details1}</li>
                            <li>{details2}</li>
                            <li>{details3}</li>
                        </ul>
                    </p>
                    </div>
         
                    <div className='flex'>
                       <p className='mb-3 font-bold text-xl '>Technology: </p> 
                       <p className=' ml-2 font-semibold text-lg'>{ technology }</p>
                    </div>

                    <p className='mb-3 mt-5 font-bold  text-xl'>Go to Live site - <a as={Link} target='_black' href={live} className='btn btn-primary ml-5 text-white'>Click here </a></p>
                    <p className='mb-3 mt-5 font-bold  text-xl'>Go to see the Client-Side code - <a as={Link} target='_black' href={client} className='btn btn-primary ml-5 text-white'>Click here </a></p>
                    <p className='mb-3 mt-5 font-bold  text-xl'>Go to see the Server-Side code - <a as={Link} target='_black' href={server} className='btn btn-primary ml-5 text-white'>Click here </a></p>
                   
                </div>
            </div>
  
        </section>
    );
};

export default ProjectDetails;