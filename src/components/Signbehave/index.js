import React from 'react'
import './styles.css'
import { useCountries } from 'use-react-countries'

const Signbehave = () => {
  const { countries } = useCountries()

  const countryOrder = ['United States', 'Germany', 'Netherlands', 'India', 'Japan', { name: 'Other', flag: '🌍' },]; // Country names in the desired order

  // Create a map to associate country names with their data for quick lookup
  const countryMap = new Map();
  countries.forEach(country => {
    countryMap.set(country.name, country);
  });
  // Retrieve countries in the order specified in countryOrder
  const orderedCountries = countryOrder.map(countryName => countryMap.get(countryName));

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
        <div className='yo'>
          <div>
          {orderedCountries.map(item => {
            if (!item) return null; // Skip undefined items
            const {
              name,
              emoji,
            } = item;
            return (
              <div key={name} >
                <p>
                  {emoji} {name}
                </p>
                </div>
            )
          })}
          <p>
            🌍 Other
          </p>     
          </div>
          <div>
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