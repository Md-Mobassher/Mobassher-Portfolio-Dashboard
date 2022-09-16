import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const ProjectDetails = () => {

    const {state } = useLocation()

    const {name, type, details1,details2,details3,details4,details5, live, server,client, technology, img,img1, img2, img3, } = state


    return (
        <section id='details' className='my-10 lg:px-20 px-5'>
             <h2 className='text-4xl font-bold  text-center mb-5 lg:mb-10'>Project <span className='text-primary'>Details</span></h2>
             <div className=''>
                {
                    img &&
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mb-10 rounded-lg p-5'>
                    {
                        img1 && 
                        <div className=' h-56 overflow-auto p-5 rounded-lg shadow-xl'>
                            <img src={img1} className=" w-full rounded-lg " alt=''/>
                        </div>
                    }
                    {
                        img2 && 
                        <div className='h-56 overflow-auto p-5 rounded-lg shadow-xl'>
                            <img src={img2} className=" w-full rounded-lg " alt=''/>
                        </div>
                    }
                    {
                        img3 && 
                        <div className='h-56 overflow-auto p-5 rounded-lg shadow-xl'>
                            <img src={img3} className=" w-full rounded-lg " alt=''/>
                        </div>
                    }                    
                    </div>
                }

                
                <div className='items-center justify-start lg:w-4/5 shadow-lg rounded-lg mx-auto p-8 mt-8'>
                    {
                        name && 
                        <div className='flex'>
                            <p className='mb-3 font-bold text-xl'>Project Name:
                                <span className=' ml-2 text-primary font-semibold text-xl'>{ name }</span>
                            </p> 
                            
                        </div>
                    }
                    {
                        type &&
                        <div className='flex'>
                            <p className='mb-3 font-bold text-xl'>Project Type:
                                <span className=' ml-2 text-primary font-semibold text-xl'>{ type }</span>
                            </p>                            
                        </div>
                    }
                    {
                        details1 && 
                        <div className=''>
                        <p className='mb-3 font-bold text-xl'>Project Details:</p> 
                        <p className='mb-3 font-semibold '>
                            <ul className='list-inside  list-disc mb-5'>
                             { details1 && <li>{details1}</li>}
                             { details2 && <li>{details2}</li>}
                             { details3 && <li>{details3}</li>}
                             { details4 && <li>{details4}</li>}
                             { details5 && <li>{details5}</li>}
                            </ul>
                        </p>
                        </div>
                    }
         
                    {
                        technology && 
                        <div className='flex'>
                            <p className='mb-3 font-bold text-xl '>Technology: <span className=' ml-2 font-semibold text-lg'>{ technology }</span> </p> 
                            
                        </div>
                    }

                    {
                        live &&
                        <p className='mb-3 mt-5 font-bold  text-xl'>Go to Live site - <a as={Link} target='_black' href={live} className='btn btn-primary ml-11 text-white'>Click here </a></p>
                    }
                    {
                        client &&
                        <p className='mb-3 mt-5 font-bold  text-xl'>Client-Side code - <a as={Link} target='_black' href={client} className='btn btn-primary ml-6 text-white'>Click here </a></p>
                    }
                    {
                        server && 
                        <p className='mb-3 mt-5 font-bold  text-xl'>Server-Side code - <a as={Link} target='_black' href={server} className='btn btn-primary ml-4 text-white'>Click here </a></p>
                    }
                   
                </div>
            </div>
  
        </section>
    );
};

export default ProjectDetails;