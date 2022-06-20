import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const ProjectDetails = () => {

    const {state } = useLocation()
    console.log(state)

    const {name,type,details1,details2,details3, live, server,client, technology, _id,img1, img2, img3, } = state

    
 

    return (
        <section id='details' className='my-10 lg:px-20 px-5'>
             <h2 className='text-4xl font-bold  text-center mb-5 lg:mb-10'>Project <span className='text-primary'>Details</span></h2>
             <div className=''>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  justify-center items-center mb-10 shadow-lg rounded-lg p-5'>
                    <img className=" p-5 w-full flex" src={img1} class=" rounded-lg shadow-2xl" alt=''/>
                    <img className=" p-5 w-full flex" src={img2} class=" rounded-lg shadow-2xl" alt=''/>
                    <img className=" p-5 w-full flex" src={img3} class=" rounded-lg shadow-2xl" alt=''/>
                </div>

                
                <div className='items-center justify-start lg:w-4/5 shadow-lg rounded-lg mx-auto p-8 mt-8'>
                    <p className='mb-3 font-semibold text-xl'>Project Name: <span className='text-primary text-xl'>{ name }</span></p>
                    <p className='mb-5 font-semibold  text-xl '>Project Type: <span className='text-primary'>{ type }</span></p>
                    <p className='mb-2 font-semibold  text-xl'>Project Details: <span className='text-primary'>{  }</span></p>
                    <p className='mb-3 font-semibold '>
                        <ul className='list-inside  list-disc mb-5'>
                            <li>{details1}</li>
                            <li>{details2}</li>
                            <li>{details3}</li>
                        </ul>
                    </p>
                    <p className='mb-3 font-semibold  text-xl'>Technology Used: <span className=' text-lg'>{ technology }</span></p>

                    <p className='mb-3 mt-5 font-semibold  text-xl'>Go to Live site  <a as={Link} target='_black' href={live} className='btn btn-primary ml-5 text-white'>Click here </a></p>
                    <p className='mb-3 mt-5 font-semibold  text-xl'>Go to see the Client-Side code  <a as={Link} target='_black' href={client} className='btn btn-primary ml-5 text-white'>Click here </a></p>
                    <p className='mb-3 mt-5 font-semibold  text-xl'>Go to see the Server-Side code  <a as={Link} target='_black' href={live} className='btn btn-primary ml-5 text-white'>Click here </a></p>
                   
                </div>
            </div>
  
        </section>
    );
};

export default ProjectDetails;