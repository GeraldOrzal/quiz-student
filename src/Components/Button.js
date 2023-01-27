import React from 'react'

export default function Button({children,className,...props}) {
  return (
    <button className={"rounded p-3 primary " + className} {...props}>{children}</button>
  )
}
