import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({project}) => {
    const {img, name, type, description} = project;
    const navigate = useNavigate();

    const navigateToProjectDetail = (name) => {
        navigate(`/projects/${name}`);
    }

    return (
        <div className="card bg-base-100 border border-1 border-primary">
            <figure><img className='p-4' src={img} alt="tool" /></figure>
             <div className="card-body p-4 justify-between  items-between">
                    <div>
                        <h2 className="text-2xl mb-3 font-semibold text-primary">{name}</h2>
                        <h2 className="mb-4 font-semibold">{type}</h2>
                        <p>{description.slice(0,80)}</p>
                    </div>
                    <div className="card-actions justify-end items-end mt-3">
                        <div  onClick={() => navigateToProjectDetail(name)}  className=" btn  btn-primary text-white bg-primary">Details</div> 
                    </div>
                </div>
        </div>
    );
};

export default Project;