import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = (id) => {
    const  [ projectDetails, setProjectDetails] = useState({})
     const projectId = useParams(id);
    
    useEffect( () =>{
        fetch('data.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })      
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            const match = data.filter(d => d._id.includes(projectId));
            console.log(match)
            setProjectDetails(match);

        });
    }, [projectId]);



    return (
        <section id='details' className='my-10 lg:px-20 px-5'>
             <h2 className='text-4xl font-bold  text-center mb-5 lg:mb-10'>Project <span className='text-primary'>Details</span></h2>
             <div className=''>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  justify-center items-center p-5 mb-10 shadow-lg rounded-lg p-5'>
                    <img className=" p-5 w-full flex" src='https://i.ibb.co/bRgnb1G/service3.png' class=" rounded-lg shadow-2xl" alt=''/>
                    <img className=" p-5 w-full flex" src='https://i.ibb.co/bRgnb1G/service3.png' class=" rounded-lg shadow-2xl" alt=''/>
                    <img className=" p-5 w-full flex" src='https://i.ibb.co/bRgnb1G/service3.png' class=" rounded-lg shadow-2xl" alt=''/>
                </div>

                
                <div className='items-center justify-start lg:w-4/5 shadow-lg rounded-lg mx-auto p-8 mt-8'>
                    <p className='mb-3 font-semibold '>Project Name: <span className='text-primary'>{ }</span></p>
                    <p className='mb-3 font-semibold '>Project Type: <span className='text-primary'>{ }</span></p>
                    <p className='mb-3 font-semibold '>Project Details: <span className='text-primary'>{ }</span></p>
                    <p className='mb-3 font-semibold '>Live site Link: <span className='text-primary'>{ }</span></p>
                    <p className='mb-3 font-semibold '>Client Side Code Link: <span className='text-primary'>{ }</span></p>
                    <p className='mb-3 font-semibold '>Server Side Code Link: <span className='text-primary'>{ }</span></p>
                </div>
            </div>
  
        </section>
    );
};

export default ProjectDetails;