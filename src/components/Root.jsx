import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Nav from './nav/Nav'

export default function Root() {
  return (
    <div>
        <Nav />
        <Outlet />
        <Footer/>
    </div>
  )
}
