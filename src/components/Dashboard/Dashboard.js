import React from 'react'
import Login from '../Login'
// import './NavSection/Header.css'

const Dashboard = (props) => {
  return (
    <main style={{ marginTop: '58px' }}>
      <div className='containers pt-4'>
        <section className='mb-4'>
          <div className='card'>
            <div className='card-header py-3'>
              <h5 className='mb-0 text-center text-capitalize '>
                <strong style={{ fontWeight: '500' }}>
                  Welcome to Dashboard
                </strong>
              </h5>
            </div>
            <div className='card-body'>
              {/* <h5 className='mb-0 text-center text-capitalize'>
                Hi <span className='ml-4'>{props.user}</span>
              </h5> */}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Dashboard
