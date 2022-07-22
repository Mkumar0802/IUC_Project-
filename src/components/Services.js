import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Services() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <div>
            <div className='flex justify-center mt-24 mb-10 '>
                <h1 className='md:text-3xl  text-xl font-popins'>Our Services</h1>
            </div>
            <div className='md:grid md:grid-cols-3 grid-flow-row md:px-40  md:mt-10'>

                <div data-aos="flip-left" className='p-4 max-w-sm bg-white rounded-lg border  sm:p-8  px-10 py-10 hover:shadow-2xl transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-100 shadow-xl '>
                    <div className='text-center'>
                        <h1 className='md:text-2xl font-popins underline p-2 py-6 text-indigo-900 opacity-90'>Graduate and professional Zone</h1>
                    </div>
                    <div>
                        <ul className=''>
                            <li className='md:text-xl font-medium  font-popins  flex'><span className='py-1 md:animate-bounce '><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg></span>   Training Courses</li>
                            <li className='text-slate-500 font-radio text-center'>Students can attend training courses and utilize lab facilities</li>
                            <li className='md:text-xl font-medium font-popins  flex'><span className='py-1 md:animate-bounce'><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg></span> Online Training</li>
                            <li className='text-slate-500 font-radio text-center '>Online Courses for those who are  working are faraway  from our institute</li>
                            <li className='md:text-xl font-medium font-popins  flex '> <span className='py-1 md:animate-bounce '><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg></span>Placement Help</li>
                            <li className='text-slate-500 font-radio text-center'>Notification regarding job openings and interview preperation</li>
                        </ul>
                    </div>
                </div>
                <div data-aos="flip-up" className='p-4 max-w-sm bg-white rounded-lg border  sm:p-8  px-10 py-10 hover:shadow-2xl  shadow-xl transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-100 '>
                    <div className='text-center'>
                        <h1 className='md:text-2xl font-popins underline p-2 py-6 text-indigo-900 opacity-90'>School Zone</h1>
                    </div>
                    <div>
                        <ul className=''>
                            <li className='md:text-xl font-medium  font-popins  flex mt-6'><span className='py-1  md:animate-bounce '><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg></span>Summer and Winter Camps</li>
                            <li className='text-slate-500 font-radio text-center'>Hands on experience about computer and current technology during holidays</li>
                            <li className='md:text-xl font-medium font-popins flex'><span className='py-1    md:animate-bounce animate-infinite '><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg></span> Long Term Courses</li>
                            <li className='text-slate-500 font-radio text-center'>A Deep understanding on computer after school hours.</li>
                            <li className='md:text-xl font-medium font-popins  flex'><span className='py-1 md:animate-bounce'><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg></span>  Short Term Courses</li>
                            <li className='text-slate-500 font-radio text-center'>Fasttrack courses on computer after scholl hours.</li>
                        </ul>
                    </div>

                </div>
                <div data-aos="flip-right" className='p-4 max-w-sm bg-white rounded-lg border  sm:p-8  px-10 py-10 hover:shadow-2xl  shadow-xl transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-100 '>
                    <div className='text-center'>
                        <h1 className='md:text-2xl font-popins underline p-2 py-6 text-indigo-900 opacity-90'>Business Solutions</h1>
                    </div>
                    <div>
                        <ul className=''>
                            <li className='md:text-xl font-medium  font-popins flex mt-6'><span className='py-1 md:animate-bounce'><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg></span>Services</li>
                            <li className='text-slate-500 font-radio text-center'>Web Development, Mobile Apps,Web designing,eCommerce, enterprise and Other services</li>
                            <li className='md:text-xl font-medium font-popins  flex'> <span className='py-1 md:animate-bounce'><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg></span>Our Clients</li>
                            <li className='text-slate-500 font-radio text-center'>Description and reviews about our work from clients</li>
                            <li className='md:text-xl font-medium font-popins  flex'><span className='py-1 md:animate-bounce'><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg></span> Blog and Notification</li>
                            <li className='text-slate-500 font-radio text-center'>Discussion and articles on current technology.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services