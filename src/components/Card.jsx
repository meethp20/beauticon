import React from 'react'

function Card({title, description,imageUrl, ...props}) {
  return (
    <div 
    className='border-4 shadow-lg shadow-pink-500/50 rounded-3xl flex hover:scale-105 transition-all duration-400 w-[1000px]'
    
    >
           <div className='text-black w-1/2 text-center flex items-center justify-center flex-col p-4'>
             <h1 className='text-3xl font-bold mb-2 text-gray-800 '>
                 {title}
             </h1>
              <p className='text-gray-600 leading-relaxed'>
                {description}
              </p>
           </div>
           <div className='w-1/2  justify-end h-[300px] object-cover '>
                <img src={imageUrl} alt={title} className=' right-0 top-0 w-full h-full rounded-lg object-cover  shadow-lg'
                onError={(e)=>{e.target.src = '';e.target.onerron=null;}} />
           </div>
    </div>
  )
}

export default Card