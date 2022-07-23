import React, { useEffect } from 'react'
import Pic1 from './Assets/pic12.png'
import Pic2 from './Assets/pic22.png'
import Pic33 from './Assets/pic33.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

function Foot() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div>
            <div className='flex justify-center mt-24 mb-10 '>
                <h1 className='md:text-3xl  text-xl font-popins'>Our Services</h1>
            </div>
            <div className='grid grid-cols-3 px-40 cursor-default'>
                <div class="max-w-sm rounded overflow-hidden shadow-xl hover:shadow-2xl  shadow-indigo-100  hover:shadow-indigo-100  ">
                    <img class="w-full  p-3 rounded-2xl" src={Pic2} alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div>
                            <ul className=''>
                                <li className='md:text-xl font-medium  font-popins  flex '>  Training Courses</li>
                                <li className='text-slate-500 font-radio text-center'>Students can attend training courses and utilize lab facilities</li>
                                <li className='md:text-xl font-medium font-popins'> Online Training</li>
                                <li className='text-slate-500 font-radio text-center '>Online Courses for those who are  working are faraway  from our institute</li>
                                <li className='md:text-xl font-medium font-popins  flex '> Placement Help</li>
                                <li className='text-slate-500 font-radio text-center'>Notification regarding job openings and interview preperation</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-xl hover:shadow-2xl  shadow-indigo-100  hover:shadow-indigo-100 ">
                    <img class="w-full  p-3 rounded-2xl" src={Pic33} alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div>
                            <ul className=''>
                                <li className='md:text-xl font-medium  font-popins  flex'> Summer and Winter Camps</li>
                                <li className='text-slate-500 font-radio text-center'>Hands on experience about computer and current technology during holidays</li>
                                <li className='md:text-xl font-medium font-popins'>Long Term Courses</li>
                                <li className='text-slate-500 font-radio text-center '>A Deep understanding on computer after school hours.</li>
                                <li className='md:text-xl font-medium font-popins  flex '> Short Term Courses</li>
                                <li className='text-slate-500 font-radio text-center'>Fasttrack courses on computer after scholl hours.</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-xl hover:shadow-2xl  shadow-indigo-100  hover:shadow-indigo-100 ">
                    <img class="w-full  p-3 rounded-2xl" src={Pic1} alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div>
                            <ul className=''>
                                <li className='md:text-xl font-medium  font-popins  flex'>  Services</li>
                                <li className='text-slate-500 font-radio text-center'>Web Development, Mobile Apps,Web designing,eCommerce, enterprise and Other services</li>
                                <li className='md:text-xl font-medium font-popins'>Our Clients</li>
                                <li className='text-slate-500 font-radio text-center '>Description and reviews about our work from clients</li>
                                <li className='md:text-xl font-medium font-popins  flex '>Blog and Notification</li>
                                <li className='text-slate-500 font-radio text-center'>Discussion and articles on current technology.</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Foot
