import React from 'react'
import Nav from './NavSection/Nav'
import MainNav from './NavSection/MainNav'
import './NavSection/Header.css'
import Dashboard from './Dashboard/Dashboard'

const Header = () => {
  return (
    <>
      <header>
        <Nav />
        <MainNav />
      </header>
      <Dashboard />
    </>
  )
}

export default Header
