import React, { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';


function Main() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])
  return (
    <>
      
      <div className='bg-sky-50'>
        <div className='md:px-40 px-5'>
          <h1 className='md:text-3xl text-xl font-popins py-10'>
            Preface...
          </h1>
          <div className='md:w-10/12 text-slate-500 font-radio py-3'>
            IUC Computers Offer Top notch quality software training and placement in evergreen and modern technologies like Database Developer Training, DBA Training, Web Designing Training, C & C++ training, Java Training, Software Testing Training, Microsoft Training, Oracle Applications Training, Android training , iOS training Mobile Applications Training, Oracle Training, Cloud Computing Training, Other Training and more to the students.
          </div>
          <div className='md:w-10/12 text-slate-500 font-radio py-3'>
            After getting trained at IUC Computers Chennai you will be able to get vast experience by transforming your ideas into actual new application and software controls for the websites and the entire computing enterprise. To make it easier for you at IUC Computers at Chennai is visualizing all the materials you want.
          </div>
          <div className='md:w-10/12 text-slate-500 font-radio py-3'>
            Our experts are from top MNC's in india and abroad can give u a professional and corporate level training and prepare you logically and technically for the job you wanted, Also our expert team helps in placement assistance.
          </div>

          <div className='md:w-1/4 font-radio text-black  '>
            IUC Computers –A reliable gateway for success!!!
            "It is never too late to be what you might have been"
            <ul className='text-right md:text-xl '>-George Eliot</ul>
          </div>
        </div>
        <div>

        </div>
      </div>
    </>

  )
}

export default Main