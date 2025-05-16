import React from 'react'

function GradientBackground() {
  return (
    <div className="w-full h-screen bg-hero-gradient bg-[length:400%_400%] animate-gradient-x text-white flex justify-center items-center">
      {children}
    </div>
  )
}

export default GradientBackground