import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const useIcon = () => {
    return (
        <div >
            <div className=' mt-5 flex gap-5 justify-center items-center'>  
                <hr />      
                

                <a as={Link} target='_black' href='https://www.linkedin.com/in/md-mobassher/'><FaLinkedin className='w-10 h-10  hover:text-primary'></FaLinkedin></a>

                <a as={Link} target='_black' href='https://github.com/Md-Mobassher'><FaGithubSquare className='w-10 h-10  hover:text-primary'></FaGithubSquare></a>

                <a as={Link} target='_black' href='https://www.facebook.com/mdmobassherf'><FaFacebookSquare className='w-10 h-10  hover:text-primary'></FaFacebookSquare></a>

                <a as={Link} target='_black' href='https://twitter.com/md_mobasshert'><AiFillTwitterSquare className='w-11 h-11 rounded hover:text-primary'></AiFillTwitterSquare></a>
                <hr />
            </div>
        </div>
    );
};

export default useIcon;