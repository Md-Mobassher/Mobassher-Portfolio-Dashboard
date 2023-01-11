import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    
    useEffect( () =>{
        fetch('data.json')      
        .then(res => res.json())
        .then(data => setProjects(data));
    }, []);


    return (
        <section id='projects' className='py-6 '>
            <h2 className='lg:text-4xl md:text-3xl text-2xl font-bold text-primary text-center mb-3'>Projects</h2>
            <div className='lg:px-20  sm:p-5 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5'>
                    {
                        projects.map(project => <Project
                            key={project._id}
                            project={project}
                        ></Project>)
                    }
                </div>           
            </div>
        </section>
    );
};

export default Projects;