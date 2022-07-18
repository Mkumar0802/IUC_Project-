import React from 'react'

function Main() {
  return (
    <div className='bg-slate-50'>
      <div className='px-40'>
        <h1 className='text-3xl font-popins py-10'>
          Preface...
        </h1>
        <div className='w-10/12 text-slate-500 font-radio py-3'>
          IUC Computers Offer Top notch quality software training and placement in evergreen and modern technologies like Database Developer Training, DBA Training, Web Designing Training, C & C++ training, Java Training, Software Testing Training, Microsoft Training, Oracle Applications Training, Android training , iOS training Mobile Applications Training, Oracle Training, Cloud Computing Training, Other Training and more to the students.
        </div>
        <div className='w-10/12 text-slate-500 font-radio py-3'>
          After getting trained at IUC Computers Chennai you will be able to get vast experience by transforming your ideas into actual new application and software controls for the websites and the entire computing enterprise. To make it easier for you at IUC Computers at Chennai is visualizing all the materials you want.
        </div>
        <div className='w-10/12 text-slate-500 font-radio py-3'>
          Our experts are from top MNC's in india and abroad can give u a professional and corporate level training and prepare you logically and technically for the job you wanted, Also our expert team helps in placement assistance.
        </div>

        <div className='w-1/4 text-slate-500 font-radio '>
          IUC Computers –A reliable gateway for success!!!
          "It is never too late to be what you might have been"
          <ul className='text-right text-black text-xl'>-George Eliot</ul>
        </div>
      </div>
      <div>
        <div className='flex justify-center'>
          <h1 className='text-3xl font-popins'>Our Services</h1>
        </div>
        <div className='grid grid-cols-3  px-36 gap-16'>
          <div className='bg-white hover:bg-indigo-200  px-10 py-10 rounded-xl hover:shadow-xl transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-100 shadow-xl '>
            <div className='text-center'>
              <h1 className='text-2xl font-popins underline p-2'>Graduate and professional Zone</h1>
            </div>
            <div>
              <ul className=''>
                <li className='text-xl font-medium  font-popins underline'>Training Courses</li>
                <li className='text-slate-500 font-radio text-center'>Students can attend training courses and utilize lab facilities</li>
                <li className='text-xl font-medium font-popins underline'>Online Training</li>
                <li className='text-slate-500 font-radio text-center'>Online Courses for those who are  working are faraway  from our institute</li>
                <li className='text-xl font-medium font-popins underline'>Placement Help</li>
                <li className='text-slate-500 font-radio text-center'>Notification regarding job openings and interview preperation</li>
              </ul>
            </div>
          </div>
          <div className='bg-white hover:bg-indigo-200  px-10 py-10 rounded-xl hover:shadow-xl transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-100  shadow-xl '>
            <div className='text-center'>
              <h1 className='text-2xl font-popins underline p-2 py-6'>School</h1>
            </div>
            <div>
              <ul className=''>
                <li className='text-xl font-medium  font-popins underline'>Summer and Winter Camps</li>
                <li className='text-slate-500 font-radio text-center'>Hands on experience about computer and current technology during holidays</li>
                <li className='text-xl font-medium font-popins underline'>Long Term Courses</li>
                <li className='text-slate-500 font-radio text-center'>A Deep understanding on computer after school hours.</li>
                <li className='text-xl font-medium font-popins underline'>Short Term Courses</li>
                <li className='text-slate-500 font-radio text-center'>Fasttrack courses on computer after scholl hours.</li>
              </ul>
            </div>
          </div>
          <div className=' bg-white hover:bg-indigo-300  px-10 py-10 rounded-xl hover:shadow-xl transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-100  shadow-xl '>
            <div className='text-center'>
              <h1 className='text-2xl font-popins underline p-2 py-6'>Business Solutions</h1>
            </div>
            <div>
              <ul className=''>
                <li className='text-xl font-medium  font-popins underline'>Services</li>
                <li className='text-slate-500 font-radio text-center'>Web Development, Mobile Apps,Web designing,eCommerce, enterprise and Other services</li>
                <li className='text-xl font-medium font-popins underline'>Our Clients</li>
                <li className='text-slate-500 font-radio text-center'>Description and reviews about our work from clients</li>
                <li className='text-xl font-medium font-popins underline'>Blog and Notification</li>
                <li className='text-slate-500 font-radio text-center'>Discussion and articles on current technology.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Main