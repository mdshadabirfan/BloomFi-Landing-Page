import React from 'react'

const Button = ({children}) => {
  return (
    <>
    <button className="bg-accent-main px-6 py-2 text-white rounded-full text-[0.9rem] cursor-pointer scale-100 hover:bg-accent-hover hover:scale-102 duration-300 ease-in">
          {children}
        </button>
    </>
  )
}

export default Button
