import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DashboardNavbar = () => {
    const [userData, setUserData] = useState({ name: '', profileImage: '' });

    useEffect(() => {
        const usermail = localStorage.getItem("userEmail");
        if (!usermail) return;

        axios.get(`http://localhost:2003/user/${usermail}`)
            .then(res => {
                if (res.data.status === "success") {
                    setUserData(res.data.user);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    

    return (
        <>
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="" alt="" />Bamito</a>


               
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className='d-flex flex-wrap flex column  justify-content-between align-items-center w-100 gap-3 space-between'>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center gap-3" style={{listStyle:'none'}}>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#scrollspyHeading1" style={{color:'#373243' }} >Home</a>
                        </li>
                        <li className="nav-item">
                            <div className="dropdown">
                                <span className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    shop
                                </span>

                                <ul class="dropdown-menu dropdown-menu-end bg-transparent">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item"> 
                            <a className="nav-link" href="#scrollspyHeading2" style={{color:'#373243' }}>Explore</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyHeading3" style={{color:'#373243' }}>Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyHeading4" style={{color:'#373243' }}>About us</a>
                        </li>
                    </ul>
                <div className='d-flex align-items-center gap-3 justify-content-around'>
                    <div className="d-flex align-items-center">
    <label htmlFor="profile-upload" style={{ cursor: 'pointer', marginRight: '10px' }}>
        {userData.profileImage ? (
            <img
                src={userData.profileImage ? `backend-e-commerce-rho.vercel.app${userData.profileImage}` : defaultImage}
                alt="Profile"
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                }}
            />
        ) : (
            <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#555',
            }}></div>
        )}
        
    </label>
    <span>{userData.name}</span>
</div>

                </div>

                </div>
            </div>
             
                </div>
        </nav>
        </>
    );
}

export default DashboardNavbar;
