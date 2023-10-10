import React, {useState, useEffect} from 'react';
import { Link, navigate, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './login.css';
import Swal from 'sweetalert2'

function Login() {
    const [values, setValues] = React.useState({
      email: '',
      password: ''
    });

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8081/api/login` ,values)
        .then(res => {
          if (res.data.Status === 'Success') {
            Swal.fire({
              title: 'Welcome!',
              text: 'Happy to see you again',
              icon: 'success',
              confirmButtonText: 'Ok'
            }).then((result) => {
              navigate('/');
            })

            
          } else {
            Swal.fire({
              title: 'Error!',
              text: 'Password or Email is incorrect',
              icon: 'error',
              confirmButtonText: 'Ok'
            })
          }
        })
        .catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        axios.get(`http://localhost:8081/login`)
        .then(res => {
            if (res.data.Status === 'Success') {
              navigate('/');
            }
        })
    }, []);
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>

          <div className='mb-3'>
            <label htmlFor='Email'><strong>Email</strong></label>
            <input type='text' className='form-control rounded-0' id='Email' placeholder='Enter Email' name='Email' required onChange={e => setValues({...values, email: e.target.value})} />
          </div>

          <div className='mb-3'>
            <label htmlFor='Password'><strong>Password</strong></label>
            <input type='password' className='form-control rounded-0' id='Password' placeholder='Enter Password' name='Password' required onChange={e => setValues({...values, password: e.target.value})} />
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>

          <br />
          <Link to='/forgot-password'>Forgot Password ?</Link>
          <br /> 

          <p>
            You are to agree to our <a href='/'>Terms of Use</a> and <a href='/'>Privacy Policy</a>
          </p>

          <Link to='/register' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create account</Link>

        </form>
      </div>
    </div>

    /* <>
        <section>
            <div className="form-box">
                <div className="form-value">
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="inputbox">
                            <input type="email" name='email' required onChange={e => setValues({...values, email: e.target.value})} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="inputbox">
                            <input type="password" required name='password' onChange={e => setValues({...values, password: e.target.value})}/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="forget">
                            <><a href="#">Forget Password</a></>
                        </div>
                        <button type='submit'>Log in</button>
                        <div className="register">
                            <p>Don't have a account <a href="/register">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </> */
  )
}

export default Login