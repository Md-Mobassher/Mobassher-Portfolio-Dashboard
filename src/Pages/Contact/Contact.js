import React from 'react';
import { useForm } from "react-hook-form";
import { FcManager } from 'react-icons/fc';
import { GoLocation } from 'react-icons/go';
import { TbPhoneCall } from 'react-icons/tb';
import { HiOutlineMailOpen } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = async data => {
        emailjs.send('service_6ioyfyn','template_vcxutb8', data, 'O14vl6cRB93Me-2ZS')
        .then((response) => {
            if(response.status === 200){
                toast.success('Contact successfully')
                reset();
            }
        }, (err) => {
        toast.failed('FAILED to Contact...', err);
        });
    }
    
    


    return (
        <section id='contact' className=' py-6 lg:px-20'>
             <h1 className="lg:text-4xl text-3xl font-bold text-center">Hire <span className='text-primary'> Me</span></h1>

            <div className='lg:flex sm:flex-reverse mt-8 justify-center'>


                <div className='lg:w-1/2  mb-10 flex-col sm:px-5 pl-5'>
                    <h1 className="lg:text-3xl text-2xl font-semibold text-center">Contact <span className='text-primary'> Info</span></h1>
                    <div className='max-w-sm mx-auto'>
                            <div className='flex justify-start max-w-sm items-center mt-12'>
                                <div>
                                <FcManager className='w-10 h-10 mr-8 text-primary'></FcManager>
                                </div>
                                <div>
                                    <h2 className='font-bold'>Name</h2>
                                    <h2 className='text-primary font-semibold'>Md Mobassher Hossain</h2>
                                </div>
                            </div>
                            <div className='flex justify-start max-w-sm items-center mt-7'>
                                <div>
                                <GoLocation className='w-10 h-10 mr-8  text-primary'></GoLocation>
                                </div>
                                <div>
                                    <h2 className='font-bold'>Location</h2>
                                    <h2 className='text-primary font-semibold'>Rajarhat, Kurigram, Bangladesh.</h2>
                                </div>
                            </div>
                            <div className='flex justify-start max-w-sm items-center mt-7'>
                                <div>
                                <TbPhoneCall className='w-10 h-10 mr-8 text-primary'></TbPhoneCall>
                                </div>
                                <div>
                                    <h2 className='font-bold'>Call Me</h2>
                                    <h2 className='text-primary font-semibold'>
                                        <a as={Link}   href='tell:+8801706060647' className=' text-primary'>+88-01706060647</a>
                                    </h2>
                                </div>
                            </div>
                            <div className='flex justify-start max-w-sm items-center mt-7'>
                                <div>
                                <HiOutlineMailOpen className='w-10 h-10 mr-8 text-primary'></HiOutlineMailOpen>
                                </div>
                                <div>
                                    <h2 className='font-bold'>Email</h2>
                                    <h2 className='text-primary font-semibold'>
                                        <a as={Link} target='_black'  href='mailto:mdmobassherhossain1@gmail.com' className=' text-primary'>mdmobassherhossain1@gmail.com</a>
                                    </h2>
                                </div>
                            </div>
                    </div>
                </div >


                <div className='lg:w-1/2'>
                    <h1 className="lg:text-3xl text-2xl font-semibold text-center ">Contact <span className='text-primary'> Me</span></h1>
                    <div className=' max-w-sm mx-auto mt-6'>
                        
                        <div className=" bg-base-100 ">
                      
                            <div className="">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="form-control">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="input input-bordered input-primary w-full "
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

                                    <div className="form-control w-full ">
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="input input-bordered input-primary w-full "
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

                                    <div className="form-control w-full ">
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            className="input input-bordered input-primary w-full "
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

                                    <div className="form-control w-full ">
                                        <textarea
                                            type="textarea"
                                            placeholder="Message"
                                            className="textarea textarea-bordered textarea-primary h-24 w-full "
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

                                    <input className='btn w-1/2 mx-auto btn-primary hover:btn-secondary border-0 max-w-xs text-white' type="submit" value="Contact" />
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