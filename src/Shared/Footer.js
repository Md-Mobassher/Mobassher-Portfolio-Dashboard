import React from 'react';
import UseIcon from './UseIcon';
import logo from '../Assets/Images/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="footer footer-center bg-base-200 text-base-content rounded p-10 mt-14">

            <div>
               
                <p class="font-bold">
                    <img src={logo} alt={logo} />
                <br/>Providing reliable tech since 2021
                </p> 

                <UseIcon></UseIcon>

                <p className='text-center font-semibold mt-3'>
                    Copyright &copy; {(new Date().getFullYear())} all right reserved to  
                    <span className="text-secondary"> Developer Md Mobassher Hossain </span>
                </p>
            </div> 

          

        </footer>

    );
};

export default Footer;