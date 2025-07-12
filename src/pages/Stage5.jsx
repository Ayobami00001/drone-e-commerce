import React from 'react'
import Social from '../components/Social'
import Subscribe from './Subscribe'

const Stage5 = () => {
  return (
    <>
      <div>
        <div className='text-center mt-5'>
            <h3>Stay Updated. Fly Smarter</h3>
            <p>Get the latest updates on new launches, tips <br /> and exclusive offers</p>
        </div>
         
         <div className='d-flex justify-content-center align-items-center '>
            <div className='mt-5 d-flex justify-content-center align-items-center flex-column p-'>< Social/></div>
            <div className='d-flex justify-content-center align-items-center flex-column'>
            <img className='w-100 text-center mt-3'  src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1752325196/avss-parachute-kit-for-dji-matrice-4d-series-prs-m4dt-drdroneca-131486_1600x_fk9p5l.webp" alt=""  />
            </div>
            <div>
                <p className='p-5'>Join 10,000+Drone Enthusiasts</p>
                <Subscribe/>
            </div>
         </div>
         <div className='text-center'>
            <img className='w-100' src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1752329012/Screenshot_2025-07-11_160336_r6ybt5.png" alt="" />
         </div>
        
      </div>
    </>
  )
}

export default Stage5
