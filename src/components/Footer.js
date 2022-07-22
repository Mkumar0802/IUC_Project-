import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';



function Footer() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <div><div class=" bg-sky-50 py-4 text-xs md:text-sm">
            <div class="w-full border-t-2 border-blue-900"></div>
        </div>
            <div className='bg-sky-50 text-gray-500  font-popins '>

                <div className='flex justify-center'>

                </div>
                <div data-aos="fade-right"
                    className="text-xs md:text-sm py-10 p-5">
                    <div className="flex grid-cols-6  space-x-10 md:space-x-36 justify-center">

                        <div className=' '>
                            <ul className="space-y-2 ">
                                <h1 className="font-semibold whitespace-wrap font-popins">
                                    <span className='text-indigo-900  text-3xl font-extrabold '>Q</span>uick Links
                                </h1>
                                <li className='hover:text-blue-300 hover:underline decoration-sky-500 flex'>
                                    <span className=''><ion-icon name="caret-forward-outline"></ion-icon></span>
                                    Home

                                </li>
                                <li className='hover:text-blue-300  hover:underline decoration-sky-500 '>
                                    <ion-icon name="caret-forward-outline"></ion-icon>
                                    About Us
                                </li>
                                <li className='hover:text-blue-300 hover:underline decoration-sky-500 '>
                                    <ion-icon name="caret-forward-outline"></ion-icon>
                                    Training Courses
                                </li>
                                <li className='hover:text-blue-300 hover:underline decoration-sky-500 '>
                                    <ion-icon name="caret-forward-outline"></ion-icon>
                                    Online Courses
                                </li>
                                <li className='hover:text-blue-300 hover:underline decoration-sky-500'>
                                    <ion-icon name="caret-forward-outline"></ion-icon>
                                    Reviews
                                </li>
                                <li className='hover:text-blue-300  hover:underline decoration-sky-500'>
                                    <ion-icon name="caret-forward-outline"></ion-icon>
                                    Careers
                                </li>
                                <li className='hover:text-blue-300  hover:underline decoration-sky-500'>
                                    <ion-icon name="caret-forward-outline"></ion-icon>
                                    Contact Us
                                </li>


                            </ul>





                        </div>
                        <div>
                            <ul className="  ">
                                <h1 className="font-semibold whitespace-wrap font-popins">
                                    <span className='text-indigo-900 font-popins text-3xl font-extrabold'>G</span>et In Touch
                                </h1>
                                <li className=' py-1 hover:text-blue-300  flex gap-1 hover:underline decoration-sky-500'> <span className='text-indigo-900'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                    </svg></span>+919840235196 </li>

                                <li className='py-1 hover:text-blue-300  flex  gap-1 hover:underline decoration-sky-500'>
                                    <span className='text-indigo-900'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </span>+91-044-43539196
                                </li>
                                <li className='py-1 hover:text-blue-300  flex gap-1 hover:underline decoration-sky-500'>
                                    <span className='text-indigo-900'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg></span>info@iucedu.com
                                </li>
                                <li className='py-1 hover:text-blue-300  flex  gap-1 hover:underline decoration-sky-500'>
                                    <span className='text-indigo-900'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    <span>
                                        <li className=''># 1 & 2, 'Gold Nest Apts', 2nd Main Road,</li>
                                        <li>
                                            C.I.T Nagar,Chennai - 600 035,
                                        </li>
                                        <li>
                                            Tamil Nadu, South India.
                                        </li>
                                    </span>



                                </li>


                                <li className='text-xl space-x-2 grid grid-flow-col-dense   rounded-full text-indigo-900'>
                                    <a href="https://www.facebook.com/IUCComputerEducation/" target="_blank" rel="noreferrer" className='hover:text-blue-600  text-3xl'><ion-icon name="logo-facebook"></ion-icon> </a>
                                    <a href="https://wa.me/+919840235196" target="_blank" rel="noreferrer" className='hover:text-green-600 text-3xl'><ion-icon name="logo-whatsapp"></ion-icon> </a>
                                    <a href="https://www.youtube.com/channel/UCPwsj4xAXDaXZ8v6c62KORw/" className='hover:text-red-600 text-3xl'><ion-icon name="logo-youtube"></ion-icon>    </a>
                                    <a href="https://twitter.com/iucedu" target="_blank" rel="noreferrer" className='hover:text-sky-500 text-3xl'><ion-icon name="logo-twitter"></ion-icon>    </a>
                                    <a href="https://www.instagram.com/iuccomputers/" target="_blank" rel="noreferrer" className='hover:text-pink-500 text-3xl'><ion-icon name="logo-instagram"></ion-icon> </a>
                                </li>

                            </ul>





                        </div>
                    </div>
                </div>
                <div class="py-4 text-xs md:text-sm">
                    <div class="w-full border-t-2 border-blue-900"></div>
                </div>
                <div className='py-6 px-8  flex justify-between'>
                    <p className='text-xs md:text-sm'>
                        Copyright © IUC Computers. All right reserved@{(new Date().getFullYear())}
                    </p>

                    <p className='text-xs md:text-sm'>Web Design : IUC Computers</p>
                </div>
                <div class="">
                    <div class="w-full border-t-4 border-blue-900"></div>
                </div>
            </div></div>

    )
}

export default Footer;