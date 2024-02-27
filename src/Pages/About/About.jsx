import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

export default function About(currentPage) {
  return (
    <div>
      <Navbar currentPage={currentPage} />
      <h1>About</h1>
    </div>
  )
}
