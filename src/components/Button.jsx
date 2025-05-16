import React, { Children } from 'react'

function Button({ children , ...props}) {
  return (
    <div > 
        <button {...props} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                
             </button>
    </div>
  )
}

export default Button