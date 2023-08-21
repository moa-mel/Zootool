import React from 'react'
import './styles.css'
import {ArrowDropDown, ArrowDropUp} from '@mui/icons-material';
import { HiOutlineLightBulb } from "react-icons/hi";

const Zootools = () => {
  return (
    <div className='zootool'>
       <h2 className='z-h2'><b>ZooTools insights</b></h2>
       <p className='z-p'>Making analytics simple and actionable</p>
       <div className='zt-down'>
         <div className='zt-left '>
         <h3 className='ztl-h3'><b> Summary</b></h3>
         <div className='ztl-div'>
           <div className='ztl-icon'>
            <ArrowDropDown/>
           </div>
            <p className='ztl-p'><b>Signups are slowing down.</b>-5% new than laskweek</p>
         </div>
         <div className='ztl-div'>
         <div className='zt-icon'>
            <ArrowDropUp/>
           </div>
         <p className='ztl-p'><b>80%</b> of your signups were invited by other members </p>
         </div>
         <div className='ztl-div'>
         <div className='zl-icon'>
            <HiOutlineLightBulb />
           </div>
         <p className='ztl-p'><b>80%</b> of your signups were invited by a friend </p>
         </div>
         <div className='ztl-div'>
         <div className='zl-icon'>
            <HiOutlineLightBulb />
           </div>
         <p className='ztl-p'><b>80%</b> of your signups were invited by a friend</p>
         </div>
         </div>
         <div className='zt-right'>
            <h3 className='ztr-h3'><b>Recommendation</b></h3>
            <p className='ztr-p'><b> Make sure to promote and share your form</b></p>
            <p className='ztr-p1'><b> Congrats! Thia is huge. keep giving award for your usrs </b></p>
         </div>
       </div>
        </div>
  )
}

export default Zootools