import React, { useState } from 'react';
import Navbar from '../pages/Navbar';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';



const Login = () => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const goToSignup = () => {
    navigate('/signup');
  };


const Submit = (e) => {
  e.preventDefault(); 
  setError('');
  setLoading(true); 


  if (mail === '' || pass === '') {
    setError("Please fill in all fields");
    setLoading(false);
  } else {
    const data = { mail, pass };
    axios.post("https://backend-e-commerce-cxjx.onrender.com/login", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "email"){
          setError("User not found");
          if (res.data.status === "incorrect") {
            setError("Incorrect password"); 
          }
        }else if (res.data.status === "success") {
          localStorage.setItem("userEmail", mail);
          setMail('');
          setPass('');
          navigate('/dashboard');
        }else {
          setError(res.data.message || "Login failed");
        }

      })
      .catch((err) => {
        setError(
          err.response?.data?.message ||
          "An error occurred during login"
        );
      })
      .finally(() => {
        setLoading(false); 
      });
      
  }
};

  return (
    <>
     <div>
    {loading && (<div className="loading-overlay"><ClipLoader color="#f39c12" size={50} />
</div>)}
    <Navbar />
    
  </div>
      <div>
        <section
          className="d-flex flex-column justify-content-center align-items-center bg-dark text-white"
          style={{ height: '100vh', padding: '20px' }}
        >
          <div
            className="p-5 rounded shadow-lg"
            style={{
              backgroundColor: '#2c3e50',
              maxWidth: '400px',
              width: '100%',
            }}
          >
            <h3 className="text-center mb-4" style={{ color: '#f39c12' }}>
              Login
            </h3>
            <form onSubmit={Submit}>
              {error && (
                <div className="alert alert-danger text-center py-2">{error}</div>
              )}
              <div className="mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e)=>setMail(e.target.value)}
                  value={mail}
                  style={{
                    backgroundColor: '#34495e',
                    color: '#ecf0f1',
                    border: 'none',
                  }}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e)=>setPass(e.target.value)}
                  value={pass}
                  id="exampleInputPassword1"
                  style={{
                    backgroundColor: '#34495e',
                    color: '#ecf0f1',
                    border: 'none',
                  }}
                />
              </div>
              <div className="mb-4 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label"
                  htmlFor="exampleCheck1"
                  style={{ color: '#bdc3c7' }}
                >
                  Remember Me
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-warning w-100 mb-3"
                style={{ fontWeight: 'bold' }}
                onClick={Submit}
              >
                Login
              </button>
              <p className="text-center" style={{ color: '#bdc3c7' }}>
                Don't have an account?{' '}
                <span
                  onClick={goToSignup}
                  style={{
                    color: '#f39c12',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                >
                  Sign Up
                </span>
              </p>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;