import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const ProjectDetails = () => {

    const {state } = useLocation()

    const {name, type, details1,details2,details3,details4,details5, live, server,client, technology, img,img1, img2, img3, img4, img5 } = state


    return (
        <section id='details' className='py-10 lg:px-20 px-5'>
             
             <div class="dropdown  w-full mb-10 mx-auto ">
                
                 <button tabindex="0" class=" btn btn-outline btn-primary gap-4  lg:px-10  lg:text-xl " >Project Details 

                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                     
                </button>                      
         
                <div tabindex="0" class="dropdown-content bg-base-300 w-full border rounded-lg mt-1">
                   <div className='items-center text-justify justify-start  lg:pt-10 p-5 lg:pl-20'>
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



           <div className="img-carousel">
             <div class="carousel w-full border rounder-2xl overflow-hidden">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={img1} class="w-full" alt={img1}/>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" class="btn btn-circle">❮</a> 
                    <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={img2} class="w-full" alt={img2}/>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a> 
                    <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={img3} class="w-full" alt={img3}/>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a> 
                    <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" class="carousel-item relative w-full">
                    <img src={img4} class="w-full" alt={img4}/>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a> 
                    <a href="#slide5" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" class="carousel-item relative w-full">
                    <img src={img5} class="w-full" alt={img5}/>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a> 
                    <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
              </div>
           </div>

            {/* <div className=''>
                {
                    img &&
                    <div className='w-full  mb-6  overflow-hidden '>
                        <div class="carousel w-full  ">
                            {
                                img1 && 
                                <div id="slide1" class="carousel-item relative w-full  overflow-x-auto overflow-y-auto border rounded-2xl">
                                    <img src={img1} class="w-full h-full overflow-auto" alt={img1} />
                                 <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                 <a href="#slide5" class="btn btn-circle btn-primary text-white">❮</a> 
                                 <a href="#slide2" class="btn btn-circle btn-primary text-white">❯</a>
                                 </div>
                                </div> 
                            }
                            {
                                img2 && 
                                <div id="slide2" class="carousel-item relative w-full h-full overflow-auto">
                                    <img src={img2} class="w-full h-full" alt={img2} />
                                 <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                 <a href="#slide3" class="btn btn-circle btn-primary text-white">❮</a> 
                                 <a href="#slide1" class="btn btn-circle btn-primary text-white">❯</a>
                                 </div>
                                </div> 
                            }
                            {
                                img3 && 
                                <div id="slide3" class="carousel-item relative w-full h-full overflow-auto">
                                    <img src={img3} class="w-full h-full" alt={img3} />
                                 <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                 <a href="#slide4" class="btn btn-circle btn-primary text-white">❮</a> 
                                 <a href="#slide2" class="btn btn-circle btn-primary text-white">❯</a>
                                 </div>
                                </div> 
                            }
                            {
                                img4 && 
                                <div id="slide4" class="carousel-item relative w-full h-full overflow-auto">
                                    <img src={img4} class="w-full h-full" alt={img4} />
                                 <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                 <a href="#slide5" class="btn btn-circle btn-primary text-white">❮</a> 
                                 <a href="#slide3" class="btn btn-circle btn-primary text-white">❯</a>
                                 </div>
                                </div> 
                            }
                            {
                                img5 && 
                                <div id="slide5" class="carousel-item relative w-full h-full overflow-auto">
                                    <img src={img5} class="w-full h-full" alt={img5} />
                                 <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                 <a href="#slide1" class="btn btn-circle btn-primary text-white">❮</a> 
                                 <a href="#slide4" class="btn btn-circle btn-primary text-white">❯</a>
                                 </div>
                                </div> 
                            }
                            
                            
                        </div>                   
                    </div>
                }

                
               
            </div> */}
  
        </section>
    );
};

export default ProjectDetails;