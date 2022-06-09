import React from 'react';
import { useForm } from "react-hook-form";
import { FcManager } from 'react-icons/fc';
import { GoLocation } from 'react-icons/go';
import { TbPhoneCall } from 'react-icons/tb';
import { HiOutlineMailOpen } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';


const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = async data => {
        emailjs.send('service_6ioyfyn','template_vcxutb8', data, 'O14vl6cRB93Me-2ZS')
        .then((response) => {
            if(response.status == 200){
                toast.success('Email send successfully')
                reset();
            }
        console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
        console.log('FAILED...', err);
        });
    }
    
    


    return (
        <section id='contact my-20 px-20'>
             <h1 class="text-4xl font-bold text-center mt-10">Hire Me</h1>

            <div className='lg:flex sm:flex-reverse mt-14 px-20 '>


                <div className='lg:w-1/2 mb-10 flex-col justify-center'>
                    <h1 class="text-3xl font-semibold text-center">Contact Info</h1>
                    <div className='flex justify-start max-w-sm items-center mt-8'>
                        <div>
                           <FcManager className='w-10 h-10 mr-8'></FcManager>
                        </div>
                        <div>
                            <h2 className='font-bold'>Name</h2>
                            <h2 className='text-primary font-semibold'>Md Mobassher Hossain</h2>
                        </div>
                    </div>
                    <div className='flex justify-start max-w-sm items-center mt-5'>
                        <div>
                           <GoLocation className='w-10 h-10 mr-8'></GoLocation>
                        </div>
                        <div>
                            <h2 className='font-bold'>Location</h2>
                            <h2 className='text-primary font-semibold'>Rajarhat, Kurigram, Bangladesh.</h2>
                        </div>
                    </div>
                    <div className='flex justify-start max-w-sm items-center mt-5'>
                        <div>
                           <TbPhoneCall className='w-10 h-10 mr-8'></TbPhoneCall>
                        </div>
                        <div>
                            <h2 className='font-bold'>Call Me</h2>
                            <h2 className='text-primary font-semibold'>+88 01773381807</h2>
                        </div>
                    </div>
                    <div className='flex justify-start max-w-sm items-center mt-5'>
                        <div>
                           <HiOutlineMailOpen className='w-10 h-10 mr-8'></HiOutlineMailOpen>
                        </div>
                        <div>
                            <h2 className='font-bold'>Email</h2>
                            <h2 className='text-primary font-semibold'>mdmobassherhossain1@gmail.com</h2>
                        </div>
                    </div>
                </div >


                <div className='lg:w-1/2'>
                    <h1 class="text-3xl font-semibold text-center ">Contact Me</h1>
                    <div className='flex justify-center items-center mt-5'>
                        
                        <div className="card w-96 bg-base-100 ">
                      
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="form-control w-full max-w-xs">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message: 'Name is Required'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                        </label>
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: 'Email is Required'
                                                },
                                                pattern: {
                                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                    message: 'Provide a valid Email'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        </label>
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("subject", {
                                                required: {
                                                    value: true,
                                                    message: 'Subject is Required'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.subject?.type === 'required' && <span className="label-text-alt text-red-500">{errors.subject.message}</span>}
                                        </label>
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <textarea
                                            type="textarea"
                                            placeholder="Message"
                                            className="textarea textarea-bordered h-24 w-full max-w-xs"
                                            {...register("message", {
                                                required: {
                                                    value: true,
                                                    message: 'Message is Required'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.message?.type === 'required' && <span className="label-text-alt text-red-500">{errors.message.message}</span>}
                                            
                                        </label>
                                    </div>

                                    <input className='btn w-full max-w-xs text-white' type="submit" value="Contact" />
                                </form>
                                
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </section>
    );
};

export default Contact;