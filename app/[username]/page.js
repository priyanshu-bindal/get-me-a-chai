import React from 'react'

const Username = async ({params}) => {
    const slug = (await params).username
  return (
  <>   
    <div className='cover relative w-full'>
      <img
        className='object-cover  w-full'
        style={{ height: '350px' }}
        src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/688268/8628ef60983c4806867cccd45545ce07/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/10.jpeg?token-hash=LC4x_7kd-Gw75ZRxMTzPqfUnOodvoYLORV8cnll6LEw%3D&token-time=1770163200"
        alt=""/> 
        <div className='absolute  '  style={{ right: '50%' , bottom: '-10px', transform: 'translateX(50%)' }}>
          <img width={100} height={100}
            className=' rounded-full object-cover border-2 border-white shadow-lg'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHMBHbRzVdFPZ4OlHHHpEuQQ4POGrtiNR0A&s"
            alt="profile avatar"/>
        </div>
    </div>
    <div className=" flex justify-center items-center flex-col gap-2   ">
      <div className='font-bold text-2xl mt-4'> 
     @{slug}
      </div>
      <div className='text-slate-400 '>
        Creating animated profile pages coming soon!
      </div>
      <div className='text-slate-400 '>
        Stay tuned!
      </div>
    </div>
    </>
  )
}

export default Username
