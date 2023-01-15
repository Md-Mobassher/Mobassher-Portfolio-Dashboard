import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const ProjectDetails = () => {

    const {state } = useLocation()
    const { name, type, details1,details2,details3,details4,details5, live, server,client, technology,img1} = state


    //const [current, setCurrent]= useState(0);
    //const length = .length;
    

    const nextSlide = (e) => {
        e.preventDefault()
        //setCurrent(current === length - 1 ? 0 : current + 1)
        //console.log(current)
    }
    const prevSlide = (e) => {
        e.preventDefault()
        //setCurrent(current === 0 ? length - 1 : current - 1)
        //console.log(current)
    }
    // if(!Array.isArray(slides) || slides.length <= 0 ){
    //     return null
    // }

    return (
        <section id='details' className='py-10 '>
             
             <div class="dropdown lg:px-20 px-5 w-full mb-10 mx-auto ">
                
                 <button tabindex="0" class=" btn btn-outline btn-primary gap-4 flex justify-center 
                  lg:px-10  lg:text-xl " >Project Details 

                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                     
                </button>                      
         
                <div tabindex="0" class="dropdown-content bg-base-200 border border-primary rounded-lg mt-1">
                   <div className='items-center text-justify justify-start  lg:pt-10 p-5 lg:px-20 '>
                        {
                            name && 
                            <div className='flex'>
                                <p className='mb-3 font-bold lg:text-xl'>Project Name:
                                    <span className=' ml-2 text-primary font-semibold lg:text-xl'>{ name }</span>
                                </p>                                
                            </div>
                        }
                        {
                            type &&
                            <div className='flex'>
                                <p className='mb-3 font-bold lg:text-xl'>Project Type:
                                    <span className=' ml-2 text-primary font-semibold lg:text-xl'>{ type }</span>
                                </p>                            
                            </div>
                        }
                        {
                            details1 && 
                            <div className=''>
                            <p className='mb-1 font-bold lg:text-xl '>Project Details:</p> 
                            <p className='mb-3 font-semibold text-sm '>
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
                                <p className='mb-3 font-bold lg:text-xl '>Technology: <span className=' ml-2 font-semibold lg:text-lg'>{ technology }</span> </p> 
                                
                            </div>
                        }

                        {
                            live &&
                            <p className='mb-3 mt-5 font-bold  lg:text-xl'>Go to Live site - <a as={Link} target='_black' href={live} className='btn  btn-primary ml-auto] text-white'>Click here </a></p>
                        }
                        {
                            client &&
                            <p className='mb-3 mt-5 font-bold  lg:text-xl'>Client-Side code - <a as={Link} target='_black' href={client} className='btn btn-primary ml-auto text-white'>Click here </a></p>
                        }
                        {
                            server && 
                            <p className='mb-3 mt-5 font-bold  lg:text-xl'>Server-Side code - <a as={Link} target='_black' href={server} className='btn  btn-primary ml-auto text-white'>Click here </a></p>
                        }
                    
                    </div>
                </div>

            </div>

            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={img1} class="w-full" alt={img1}/>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <p onClick={prevSlide} class="btn btn-primary text-white btn-circle">❮</p> 
                      <p onClick={nextSlide} class="btn btn-primary text-white btn-circle">❯</p> 
                    </div>
                </div> 
                
            </div>

          
  
        </section>
    );
};

export default ProjectDetails;