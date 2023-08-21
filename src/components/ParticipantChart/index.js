import React from 'react'
import './styles.css'
import { BarChart, Bar, CartesianGrid, Tooltip} from 'recharts';


const ParticipantChart = ({  data, dataKey }) => {
  return (
    <div className='part-chart'>
        <BarChart width={1200} height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="0.2 1" />
          <Tooltip title="Add" arrow placement="top"/>
          <Bar dataKey={dataKey} fill="#EBD579" radius={[16, 16, 16, 16]}/>
        </BarChart>
    </div>
  )
}

export default ParticipantChart