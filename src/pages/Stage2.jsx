import React from 'react'
import './Stage2.css';

const Stage2 = () => {
  return (
    <>
      <div>
        <h2 className='text-center mt-5'>Why Shop With Us</h2>

        <table className="table table-bordered mt-4 responsive-table" style={{ width: "80%", margin: "0 auto" }}>
          <tbody>
            <tr>
                <td>
                    <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1751208991/bus_sjnqjx.svg" width={30} alt="" /><br />
                    <h3>Free Shipping</h3>
                    <p>On all orders over $50</p>
                    <br />
                    <p>Enjoy fast and free delivery on <br /> qualified purchases</p>
                </td>
                <td>
                    <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1751209086/call-receive_mjezd9.svg" width={30} alt="" /><br />
                    <h3>Expert Support</h3>
                    <p>Talk to real drone specialists</p>
                    <br />
                    <p>Weather you're buying of flying<br /> __We're here to help</p>
                </td>
                <td>
                    <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1751209370/auto-repair-service_cxr1cp.svg" width={30} alt="" /><br />
                    <h3>Free Shipping</h3>
                    <p>certified technicians at your service</p>
                    <br />
                    <p> Keep your gear flight-ready with <br /> trusted maintenance</p>
                </td>
                <td>
                    <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1751209415/secure-shield-password-protect-safe_whdhzh.svg" width={30} alt="" /><br />
                    <h3>Free Shipping</h3>
                    <p>Fully encrypted checkout system</p>
                    <br />
                    <p>Shop with confidence using our <br/> industry-grade security</p>
                </td>
            </tr>
            
            
          </tbody>
        </table>


      </div>

      <div>

      </div>
    </>
  )
}

export default Stage2
