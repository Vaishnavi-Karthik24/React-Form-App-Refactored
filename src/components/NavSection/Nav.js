import React from 'react'

const Nav = () => {
  return (
    <>
      <nav
        id='sidebarMenu'
        className='collapse d-lg-block sidebar collapse bg-white'>
        <div className='position-sticky'>
          <div className='list-group list-group-flush mx-3 mt-4'>
            <a
              href='#'
              className='list-group-item list-group-item-action py-2 ripple'
              aria-current='true'>
              <i className='fas fa-tachometer-alt fa-fw me-3'></i>
              <span> Dashboard</span>
            </a>
            <a
              href='#'
              className='list-group-item list-group-item-action py-2 ripple'>
              <i className='fas fa-lock fa-fw me-3'></i>
              <span>Password</span>
            </a>
            <a
              href='#'
              className='list-group-item list-group-item-action py-2 ripple'>
              <i className='fas fa-users fa-fw me-3'></i>
              <span>Users</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
