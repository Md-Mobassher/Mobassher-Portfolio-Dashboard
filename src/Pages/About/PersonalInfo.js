import React from 'react';

const PersonalInfo = () => {
    return (
        <div className='lg:max-w-2/3 my-5' >
                     <h2 className='text-4xl font-bold  text-center lg:mb-12'>Personal <span className='text-primary'>Informations</span></h2>
                     <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5 p-5 justify-center items-center'>
                         <div className=' justify-start mr-10'>
                            <p className='mb-3 font-semibold '>Name: <span className='text-primary'>Md Mobassher Hossain</span></p>
                            <p className='mb-3 font-semibold '>Address: <span className='text-primary'>Rajarhat, Kurigram, Bangladesh</span></p>
                            <p className='mb-3 font-semibold '>Nationality: <span className='text-primary'>Bangladeshi</span></p>
                            <p className='mb-3 font-semibold '>Age: <span className='text-primary'>25</span></p>
                            <p className='mb-3 font-semibold '>Language: <span className='text-primary'>Bengali (Native), English</span></p>
                         </div>

                         <div className='justify-start'>
                            <p className='mb-3 font-semibold '>Phone: <span className='text-primary'>+88 01773381807</span></p>
                            <p className='mb-3 font-semibold '>Email: <span className='text-primary'>mdmobassherhossain1@gmail.com</span></p>
                            <p className='mb-3 font-semibold '>Github: <span className='text-primary'>https://github.com/Md-Mobassher</span></p>
                            <p className='mb-3 font-semibold '>Linkedin: <span className='text-primary'>https://www.linkedin.com/in/md-mobassher</span></p>
                            <p className='mb-3 font-semibold '>Facebook: <span className='text-primary'>https://www.facebook.com/mdmobassherf</span></p>
                         </div>
                       
                     </div>
                </div>
    );
};

export default PersonalInfo;