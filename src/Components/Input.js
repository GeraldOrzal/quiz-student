import React from 'react'

export default function Input({className,...props}) {
  
  return (
    <input {...props} 
        className={"p-2 rounded " + className}
    
    />
  )
}
