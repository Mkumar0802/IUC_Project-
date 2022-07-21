import React from 'react'
import { Link } from 'react-router-dom'


function WebDesign() {
  return (
    <div>
      <div className='bg-sky-50'>
        <div className='bg-gradient-to-r from-indigo-900 to-blue-500 text-white'>
          <div className='relative  text-9xl'>

          </div>
          <div className='flex justify-center p-44'>
            <div className=''>
              <h1 className='text-4xl font-semibold '><span className='text-white  text-6xl font-extrabold font-popins '>S</span>ervices</h1>

              <ul className='flex'>
                <li className='flex py-5 px-3'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify hover:ring-4 ring-white transition ease-in-out duration-100'><Link to="/home">Home</Link></button></li>

                <li className='flex py-5 px-3 cursor-not-allowed'><button className=' rounded-full p-3  px-1 py-1 hover:bg-blue-700   flex  text-justify hover:ring-4  cursor-not-allowed  '>WebMarketing</button></li>

              </ul>
            </div>

          </div>
        </div>
        <div>
          <div className='  px-36 gap-16 mt-10 mb-10 py-9'>
            <div className='bg-white hover:bg-indigo-200  px-10 py-10 rounded-xl hover:shadow-xl transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-100 shadow-xl '>
              <div className='text-center'>
                <h1 className='text-2xl font-popins underline p-2'> <span className='text-indigo-900  text-3xl font-extrabold opacity-80 '>W</span>ebDesign</h1>
              </div>
              <div className='flex justify-center'>
                <ul className=' '>
                  <li className='text-xl font-medium  font-popins underline flex'><div className='text-indigo-900 text-xl py-1 '><ion-icon name="caret-forward-outline"></ion-icon> </div>Layout Design </li>
                  <li className='text-xl font-medium  font-popins underline py-1  flex'><div className='text-indigo-900 text-xl py-1 '><ion-icon name="caret-forward-outline"></ion-icon> </div> Responsive Design </li>
                  <li className='text-xl font-medium  font-popins underline  py-1 flex'><div className='text-indigo-900 text-xl py-1 '><ion-icon name="caret-forward-outline"></ion-icon> </div>Application Interface Design</li>
                  <li className='text-xl font-medium  font-popins underline py-1 flex'><div className='text-indigo-900 text-xl py-1 '><ion-icon name="caret-forward-outline"></ion-icon> </div>Prototype Design </li>
                  <li className='text-xl font-medium  font-popins underline py-1 flex'><div className='text-indigo-900 text-xl py-1 '><ion-icon name="caret-forward-outline"></ion-icon> </div>Corporate Design </li>
                  <li className='text-xl font-medium  font-popins underline py-1 flex'><div className='text-indigo-900 text-xl py-1 '><ion-icon name="caret-forward-outline"></ion-icon> </div>Facebook Page Design </li>
                  <li className='text-xl font-medium  font-popins underline py-1 flex'><div className='text-indigo-900 text-xl py-1 '><ion-icon name="caret-forward-outline"></ion-icon> </div>Banner Design </li>
                  <li className='text-xl font-medium  font-popins underline py-1 flex'><div className='text-indigo-900 text-xl py-1 '><ion-icon name="caret-forward-outline"></ion-icon> </div>Logo Design </li>
                  <li className='text-xl font-medium  font-popins underline py-1 flex'><div className='text-indigo-900 text-xl py-1 '><ion-icon name="caret-forward-outline"></ion-icon> </div>Brochure Design </li>
                  <li className='text-xl font-medium  font-popins underline py-1 flex'><div className='text-indigo-900 text-xl py-1 '><ion-icon name="caret-forward-outline"></ion-icon> </div>Wireframe </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebDesign