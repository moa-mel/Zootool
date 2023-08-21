import React from 'react'
import './styles.css'

const Header = () => {
  return (
    <div className='header'> 
        <h2 className='head-h2'> Summer referral competition </h2>
        <div className='head-comp'>
            <div className='head-sub'>
        <button className='h-butt'>1h</button>
            <button className='h-butt'>24h</button>
            <button className='h-but'>30d</button>
            <button className='h-butt'>60d</button>
            </div>
        </div>
    </div>
  )
}

export default Header