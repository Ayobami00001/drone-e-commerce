import React from 'react'

const DashboardHeading = () => {
  return (
    <>
      <header style={{ marginTop:'80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' , padding: '20px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', gap: '40px' }}>
        <div className='d-flex flex-column flex-md-row align-items-center gap-5 ps-3 ps-xl-5 mt-5 ' style={{ flexDirection: 'row', width: '100%' }}>
            <div>
                <div>
                    <h2>
                        Shop Cutting-Edge Drones
                        <br />
                        for Every Mission
                    </h2>
                </div>
                <div>
                    <p>
                        Explore high-performance drones built for  cinematography, surveying, recreation, <br />and more - all  backed y expert support and fast shipping.
                    </p>
                </div>
                <button style={{background:'#FFA500', padding: '6px' , borderRadius:'5px'}}>Explore Drones</button>
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center gap-3 ' style={{ width: '100%' }}>
                <img src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1749835021/0ec05f22ec90d6df897f18101f7d26e11961abc8-5860x2240_hxwdlj.avif" className='w-100' alt="" />
            </div>
        </div>
      </header>
    </>
  )
}

export default DashboardHeading
