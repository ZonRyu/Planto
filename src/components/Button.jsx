import React from 'react'

const Button = ({children, cardStyles}) => {
  return (
    <button className={`${cardStyles} border border-white py-2 rounded-lg`}>{children}</button>
  )
}

export default Button