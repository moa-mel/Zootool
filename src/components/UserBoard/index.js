import React from 'react'
import './styles.css'


const UserBoard = () => {
  return (
    <div className='userBoard'>
      <div className='user'>
        <h3 className='user-h3'><b>User leaderboard</b></h3>
        <div className='user-1'>
          <p>Email</p>
          <p className='u1-p1'>Friends invite</p>
          <p className='u1-p'>Countries</p>
        </div>
        <div className='user-2'>
          <p >paula.suarze@con…es</p>
          <p className='u2-p1'>6,500</p>
          <p className='u2-p'>USA</p>
        </div>
        <div className='user-3'>
          <p>laura.kenet.3@yahoo.com</p>
          <p className='u3-p1'>2,300</p>
          <p className='u3-p'>Monaco</p>
        </div>
        <div className='user-4'>
          <p>aaron.michael@arg.org</p>
          <p className='u4-p1'>1,200</p>
          <p className='u4-p'>Prague</p>
        </div>
        <div className='user-5'>
          <p>jeremy.runner@aol.com</p>
          <p className='u5-p1'>900</p>
          <p className='u5-p'>China</p>
        </div>
        <button className='u-but'>See leaderboard</button>
      </div>
      <div className='traffic'>
        <div className='traf-it'>
        <div className='traff-1'>
          <h3 className='traf-h3'><b>Traffic</b></h3>
          <div className='traf-in'>
            <button className='trf-but'>Source</button>
            <p className='u1-p'>City</p>
          </div>
        </div>
        <div className='traf-1'>
          <div className='sm-1'>
          <p className='s-1'>Google</p>
          </div>
          <p className='tf-1'>30,000</p>
        </div>
        <div className='traf-2'>
          <div className='sm-2'>
          <p className='s-2'>Twitter</p>
          </div>
          <p className='tf-2'>20,000</p>
        </div>
        <div className='traf-3'>
          <div className='sm-3'>
          <p className='s-2'>Facebook</p>
          </div>
          <p className='tf-3'>10,000</p>
        </div>
        <div className='traf-4'>
          <div className='sm-4'>
          <p className='s-4'>Linkedin</p>
          </div>
          <p className='tf-4'>5,000</p>
        </div>
        <div className='traf-5'>
          <div className='sm-5'>
          <p className='s-5'>YouTube</p>
          </div>
          <p className='tf-5'>3,000</p>
        </div>
        <div className='traf-6'>
          <div className='sm-6'>
          <p className='s-6'>Other</p>
          </div>
          <p className='tf-6'>2,000</p>
        </div>
        <button className='traffic-but'>See traffic sources</button>
      </div>
      </div>
    </div>
  )
}

export default UserBoard