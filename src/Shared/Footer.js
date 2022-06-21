import React from 'react';

const Footer = () => {
    return (
        <footer className='p-10 bg-base-100 mt-14'>
            <hr />
            <div className='bg-base-100 flex justify-center items-center mt-10'>
               <p className='text-center font-semibold'>Copyright &copy; {(new Date().getFullYear())} all right reserved to Developer Md Mobassher Hossain</p>
            </div>
            
        </footer>
    );
};

export default Footer;