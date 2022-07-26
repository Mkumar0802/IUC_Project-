import React from 'react'



function MobileApps() {
  return (
    <div>
      <div className='bg-sky-50'>

        <div class="
		bg-[url('https://cdn.pixabay.com/photo/2015/08/24/12/53/banner-904884_960_720.jpg')]  h-96 w-full bg-cover bg-center">
          <div className='relative  text-9xl'>

          </div>
          <div className='flex justify-center p-44'>
            <div className=''>
              <h1 className='text-4xl font-semibold px-14' ><span className=' text-6xl font-extrabold font-popins '>S</span>ervices</h1>
              <div className='flex justify-center'>
                <h1 className='text-4xl font-semibold'>Mobile Apps</h1>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='  px-36 gap-16 mt-10 mb-10 py-9'>
            <div className='bg-white   px-10 py-10 rounded-xl hover:shadow-xl '>
              <div className='text-center'>
                <h1 className='text-2xl font-popins underline p-2'> <span className='text-indigo-900  text-3xl font-extrabold opacity-80 '>M</span>obileApps</h1>
              </div>
              <div className='flex justify-center'>
                <ul className='text-slate-500 '>
                  <li className='text-xl font-medium  font-popins underline flex'><div className='text-indigo-900 text-xl py-1 '><ion-icon name="caret-forward-outline"></ion-icon> </div>Mobile Website</li>
                  <li className='text-xl font-medium  font-popins underline py-1  flex'><div className='text-indigo-900 text-xl py-1 '><ion-icon name="caret-forward-outline"></ion-icon> </div>IOS Apps</li>
                  <li className='text-xl font-medium  font-popins underline  py-1 flex'><div className='text-indigo-900 text-xl py-1 '><ion-icon name="caret-forward-outline"></ion-icon> </div>Andriod Apps</li>
                  <li className='text-xl font-medium  font-popins underline py-1 flex'><div className='text-indigo-900 text-xl py-1 '><ion-icon name="caret-forward-outline"></ion-icon> </div>Mobile Frameworks </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileApps