import React from 'react'
import Logo from '../../../src/logo.png.webp'

const MainNav = () => {
  return (
    <>
      <nav
        id='main-navbar'
        className='navbar navbar-expand-lg navbar-light bg-darkd fixed-top px-4'
        style={{ backgroundColor: 'rgb(88, 74, 137)' }}>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-mdb-toggle='collapse'
            data-mdb-target='#sidebarMenu'
            aria-controls='sidebarMenu'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <i className='fas fa-bars'></i>
          </button>
          <div className='navbar-brand dashboard-logo'>
            <img
              src={Logo}
              className='logo-img w-100 h-auto'
              alt='Logo'
              title='iTech India Pvt Ltd'
            />
          </div>
          <ul className='navbar-nav ms-auto d-flex flex-row'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-mdb-toggle='dropdown'
                aria-expanded='false'>
                <i className='fas fa-bell'></i>
                <span className='badge rounded-pill badge-notification bg-danger'>
                  1
                </span>
              </a>
              <ul
                className='dropdown-menu dropdown-menu-end'
                aria-labelledby='navbarDropdownMenuLink'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Some news
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Another news
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a className='nav-link me-3 me-lg-0' href='#'>
                <i className='fas fa-fill-drip'></i>
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle hidden-arrow d-flex align-items-center'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-mdb-toggle='dropdown'
                aria-expanded='false'>
                <img
                  src='https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg'
                  className='rounded-circle'
                  height='22'
                  alt=''
                  loading='lazy'
                />
              </a>
              <ul
                className='dropdown-menu dropdown-menu-end'
                aria-labelledby='navbarDropdownMenuLink'>
                <li>
                  <a className='dropdown-item' href='#'>
                    My profile
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Settings
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default MainNav
