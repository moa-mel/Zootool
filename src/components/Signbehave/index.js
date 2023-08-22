import React from 'react'
import './styles.css'
import USA from "../../images/18165.jpg"
import Germany from "../../images/27101.jpg"
import Netherlands from "../../images/27107.jpg"
import India from "../../images/305271-P7U57F-958.jpg"
import japan from "../../images/flag-japan(1).jpg"
import other from "../../images/39644.jpg"

const Signbehave = () => {
 
  return (
    <div className='sign-behave'>
      <div className='signup'>
        <div className='sign-1'>
          <h3 className='sign-h3'><b>Signup location</b></h3>
          <div className='sign-in'>
            <button className='sign-but'>Country</button>
            <p className='sign-p'>City</p>
          </div>
        </div>
        <div >
          <div className='qu-1'>
             <img src={USA} alt='' className='img-1'/>
             <p className='m-1'>United states</p>
          </div>
          <div className='qu-2'>
          <img src={Germany} alt='' className='img-2'/>
          <p className='m-2'>Germany</p>
          </div>
          <div className='qu-3'>
          <img src={Netherlands} alt='' className='img-3'/>
          <p className='m-3'>Netherlands</p>
          </div>
          <div className='qu-4'>
          <img src={India} alt='' className='img-4'/>
          <p className='m-4'>India</p>
          </div>
          <div className='qu-5'>
          <img src={japan} alt='' className='img-5'/>
          <p className='m-5'>Japan</p>
          </div>
          <div className='qu-6'>
          <img src={other} alt='' className='img-6'/>
          <p className='m-6'>Other</p>
          </div>

          <div className='nums'>
          <p className='yo-1'>30,000</p>
          <p className='yo-2'>20.000</p>
          <p className='yo-3'>10,000</p>
          <p className='yo-4'>5.000</p>
          <p className='yo-5'>3,000</p>
          <p className='yo-6'>2,000</p>
          </div>
           </div>
        <button className='sign-but'>See all countries</button>
      </div>

        <div className='bahaviour'>
          <div className='beh-1'>
            <h3 className='beh-h3'><b>Behaviour</b></h3>
            <div className='beh-in'>
              <button className='beh-but'>Browsers</button>
              <p className='beh-p'>Decides</p>
            </div>
          </div>
          <div className='bhv-1'>
            <div className='cou-1'>
              <p className='c-1'>United States</p>
            </div>
            <p className='bh-1'>30,000</p>
          </div>
          <div className='bhv-2'>
            <div className='cou-2'>
            <p className='c-2'>Germany</p>
            </div>
            <p className='bh-2'>20.000</p>
          </div>
          <div className='bhv-3'>
            <div className='cou-3'>
            <p className='c-3'>Netherlands</p>
            </div>
            <p className='bh-3'>10,000</p>
          </div>
          <div className='bhv-4'>
            <div className='cou-4'>
            <p className='c-4'>India</p>
            </div>
            <p className='bh-4'>5,000</p>
          </div>
          <div className='bhv-5'>
            <div className='cou-5'>
            <p className='c-5'>Japan</p>
            </div>
            <p className='bh-5'>3,000</p>
          </div>
          <div className='bhv-6'>
            <div className='cou-6'>
            <p className='c-6'>Other</p>
            </div>
            <p className='bh-6'>2,000</p>
          </div>
          <button className='beh-but'>See all countries</button>
        </div>
      </div>
  
  )
}

export default Signbehave