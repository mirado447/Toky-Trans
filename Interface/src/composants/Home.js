import React from 'react'
import { useState } from 'react';
import '../css/Home.css'
import Navbar from './Navbar';
import Offre from './Offre';
import Footer from './Footer';

export default function Home() {
    const [toggle, setToggle] = useState(false)
  return (
    <>
    <span className='title'>
      Toky - Trans vous offre le voyage qui vous convient, même plus encore
    </span>
    <div id='offre' onClick={() => {setToggle(true)}}>Decouvrez nos offres</div>
    <Navbar local="home"/>
    <Offre toggle={toggle} setToggle={setToggle}/>
    <Footer/>
    </>
  )
}
