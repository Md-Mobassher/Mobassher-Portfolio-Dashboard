import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = (name) => {
    const [projectDetails, setProjectDetails] = useState([]);
    const projectName = useParams(name);
    
    useEffect( (projectName) =>{
        fetch('data.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })      
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const match = data.find(d => d.name.icludes(projectName));
            setProjectDetails(match)
        });
    }, [projectName]);


    console.log(projectDetails)

    return (
        <div>
            <h2>Project details</h2>
        </div>
    );
};

export default ProjectDetails;