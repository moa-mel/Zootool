import React from 'react'
import './styles.css'
import { BarChart, Bar, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload; // Assuming your data is an object
    return (
      <div className="custom-tooltip">
         <div className="arrow"></div>
        <p><b>3000</b> signups <br/> August 26</p>
      </div>
    );
  }
  return null;
};

const ParticipantChart = ({  data, dataKey }) => {
  return (
    <div className='part-chart'>
     < ResponsiveContainer>
        <BarChart width={1200} height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="0.2 1" />
          <Tooltip content={<CustomTooltip />} position={{ y: -100 }}/>
          <Bar dataKey={dataKey} fill="#EBD579" radius={[16, 16, 16, 16]}/>
        </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default ParticipantChart