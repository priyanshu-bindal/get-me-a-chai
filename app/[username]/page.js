import React from 'react'

const Username = async ({params}) => {
    const slug = (await params).username
  return (
    <div className='text-white' >
     {slug}
    </div>
  )
}

export default Username
