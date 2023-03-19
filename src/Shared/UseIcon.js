import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const useIcon = () => {
    return (
        <div >
            <div className=' mt-5 flex gap-5 justify-center items-center transition duration-500'>  
                <hr />      
                

                <a as={Link} target='_black' href='https://www.linkedin.com/in/md-mobassher/'><FaLinkedin className='w-10 h-10 text-primary hover:text-secondary'></FaLinkedin></a>

                <a as={Link} target='_black' href='https://github.com/Md-Mobassher'><FaGithubSquare className='w-10 h-10  text-primary hover:text-secondary'></FaGithubSquare></a>

                <a as={Link} target='_black' href='https://www.facebook.com/mdmobassherf'><FaFacebookSquare className='w-10 h-10  text-primary hover:text-secondary'></FaFacebookSquare></a>

                <a as={Link} target='_black' href='https://twitter.com/md_mobasshert'><AiFillTwitterSquare className='w-11 h-11 rounded text-primary hover:text-secondary'></AiFillTwitterSquare></a>
                <hr />
            </div>
        </div>
    );
};

export default useIcon;