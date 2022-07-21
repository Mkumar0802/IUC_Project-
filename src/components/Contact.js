import React from 'react'
import contact from './Assets/contact.png'

function Contact() {
    return (
        <div>
            <div className='flex justify-center font-popins'>
                <div className='py-36 px-24'>
                    <h1 className='font-popins text-3xl'>
                        IUC Computers CIT Nagar
                    </h1>
                    <p className='w-4/6  text-slate-500'>
                        We would be happy to hear from you, please fill in the form below or mail us your requirements on
                    </p>
                    <ul className='py-8'>
                        <li className='py-1 flex  gap-1  px-4 hover:animate-shakeX '>
                            <span className='text-indigo-900  bg-slate-200  p-4 rounded-full  '><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-center " viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg></span><span className='px-5 text-xl font-popins '>Phone   <span className='flex text-sm text-slate-500'>+919840235196</span></span>
                        </li>

                        <li className='py-1 flex  gap-1  px-4 hover:animate-shakeX  '>
                            <span className='text-indigo-900  bg-slate-200  p-4 rounded-full  '><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg></span><span className='px-5 text-xl font-popins'>Email  <span className='flex text-sm text-slate-500'>info@iucedu.com</span></span>
                        </li>
                        <li className='py-1 flex  gap-1  px-4 hover:animate-shakeX'>
                            <span className=' text-indigo-900  bg-slate-200  p-4 rounded-full '>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            <span className='font-popins text-xl px-5'>
                                Location
                                <li>IUC Computers</li>
                            </span>

                        </li>
                        <li className='px-24 text-sm text-slate-500  hover:animate-shakeX'>
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
                    </ul>
                </div>
                <div className='pr-24 py-10 '>
                    <img src={contact} alt='pic' />
                </div>
            </div>
        </div>
    )
}

export default Contact