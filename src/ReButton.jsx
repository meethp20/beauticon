    import React from 'react'

    function ReButton({text,children , styleType='pink',fontType='mono',...props}) {
        
        const style={ 
        red:'shadow-lg shadow-red-500/50 ',
        blue:'shadow-lg shadow-blue-500/50',
        pink:'shadow-lg shadow-pink-700/50',
        }
        
    return (
    <button {...props} className={` text-black ob py-2 px-4 hover:text-purple-400 rounded ${style[styleType]}, ${fontType} transition-all hover:scale-105`}>
            {text|| children}
        </button>
    )
    }

    export default ReButton