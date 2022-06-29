import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  useLocation,
} from 'react-router-dom'
import Logo from '../../src/logo.png.webp'
// import Link from '@mui/material/Link'
import Login from './Login'
import Register from './Register'
import Header from './Header'

const Navigation = () => {
  // const location = useLocation()

  // if (location === '/dashboard') {
  //   console.log('Dashboard page')
  // }

  return (
    <>
      <Router>
        <div
          className={
            Header ? 'offscreen navigate' : 'dashboard-navigates navigate'
          }
          id='navigate'
          style={{ backgroundColor: '#584a89' }}>
          <div className='containers px-4'>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
              <div className='navbar-brand dashboard-logo'>
                <img
                  src={Logo}
                  className='logo-img w-100 h-auto'
                  alt='Logo'
                  title='iTech India Pvt Ltd'
                />
              </div>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </button>

              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto'>
                  <li className='nav-item'>
                    <NavLink to='/register'>Register</NavLink>
                    {/* <a className='nav-link' href='#'>
                      Register
                    </a> */}
                  </li>
                  <li className='nav-item'>
                    <NavLink exact='true' to='/'>
                      Login
                    </NavLink>
                    {/* <a className='nav-link' href='#'>
                    Login
                  </a> */}
                  </li>
                  {/* <li className='nav-item'>
                    <NavLink exact='true' to='/dashboard'>
                      Dashboard
                    </NavLink>
                  </li> */}
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <Routes>
          <Route
            key='/login'
            path='/'
            element={
              <React.Fragment>
                <Login />
              </React.Fragment>
            }
          />
          <Route
            key='/register'
            path='/register'
            element={
              <React.Fragment>
                <Register />
              </React.Fragment>
            }
          />
          <Route
            key='/dashboard'
            path='/dashboard'
            element={
              <React.Fragment>
                <Header />
              </React.Fragment>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default Navigation
