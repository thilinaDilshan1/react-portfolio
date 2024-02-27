import React from 'react'
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';

export default function Home(currentPage) {
  return (
    <div>
      <Navbar currentPage={currentPage} />
      <h1>Home</h1>
    </div>
  )
}
