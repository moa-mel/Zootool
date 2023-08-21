import React from 'react'
import './styles.css'
import Header from '../components/Header'
import ParticipantChart from '../components/ParticipantChart'
import { PartData } from '../dummyData'
import Tooltip from '@mui/material/Tooltip';
import Zootools from '../components/Zootools'
import UserBoard from '../components/UserBoard'
import { FiUsers } from "react-icons/fi";
import Signbehave from '../components/Signbehave'

const Tool = () => {
  return (
    <div className='tool'>
      <div className='tool-contain'>
        <Header />
        <div className='tool-box'>
          <div className='icon'>
            <p className='tool-p'>100,000</p>
            <FiUsers className='tool-icon'/>
          </div>
          <p className='tool-p1'>Participants</p>
          <Tooltip title="Add" placement="top">
              <ParticipantChart data={PartData} dataKey="fig"/>
              </Tooltip>
              </div>
              <Zootools/>
              <UserBoard/>
              <Signbehave/>
      </div>
    </div>
  )
}

export default Tool