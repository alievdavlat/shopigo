import React from 'react'
import { productsServicesItem } from '../../utils/constants'

const Services = () => {
  return (
    <div className='services'>

      <div className="container">

      <div className="services_content">
      {
        productsServicesItem.map(item => (
          <div key={item.id} className='services_content-item'>
              <div className='services_content-item__icon'>
                <img src={item.icon} alt="" />
              </div>

                <div className='services_content-item__text'>
                    <p>
                      {item.title}
                    </p>
                </div>
          </div>  
        ))
      }
      </div>

      </div>
    </div>
  )
}

export default Services