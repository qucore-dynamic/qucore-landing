'use client'

// Styles
import './Cloud.scss'

// Modules
import { useState } from 'react'

interface CloudT {
  fileName: string
  className: string
}

const Cloud = ({ fileName, className }: CloudT) => {
  const [isError, setIsError] = useState(false)

  if (isError) return null

  return (
    <img
      src={`images/clouds/${fileName}`}
      className={`Cloud w-[50%] max-h-screen pointer-events-none select-none absolute blur-[3.5vw] -z-1 ${className}`}
      onError={() => setIsError(true)}
    />
  )
}

export default Cloud
