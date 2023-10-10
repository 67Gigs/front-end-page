import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './login.css'
import { useEffect } from 'react'

function Register() {
    const [values, setValues] = React.useState({
      name: '',
      email: '',
      password: ''
    });

    axios.defaults.withCredentials = true;


    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8081/api/register` ,values)
        .then(res => {
            if (res.data.Status === 'Success') {
                navigate('/login');
            }
        })
        .catch(err => {
            alert(err)
        })
    }

    const validatePassword = (password) => {
      const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
      return re.test(password);
    }

    const validateEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
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
        <h2>Sign-up</h2>
        <form onSubmit={handleSubmit}>

          <div className='mb-3'>
            <label htmlFor='Name'><strong>Name</strong></label>
            <input type='text' className='form-control rounded-0' id='Name' placeholder='Enter Name' name='Name' required 
              onChange={e => setValues({...values, name: e.target.value})}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='Email'><strong>Email</strong></label>
            <input type='text' className='form-control rounded-0' id='Email' placeholder='Enter Email' name='Email' required
              onChange={e => setValues({...values, email: e.target.value})}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='Password'><strong>Password</strong></label>
            <input type='password' className='form-control rounded-0' id='Password' placeholder='Enter Password' name='Password' required
              onChange={e => setValues({...values, password: e.target.value})}
            />
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-0'>Sign up</button>

          <p>
            You are to agree to our <a href='/'>Terms of Use</a> and <a href='/'>Privacy Policy</a>
          </p>

          <Link to='/login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Have an account?</Link>

        </form>
      </div>
    </div>

    /* <>
        <section>
            <div className="form-box">
                <div className="form-value">
                    <form  onSubmit={handleSubmit}>
                        <h2>Sign Up</h2>
                        <div className="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="text" name='name' required onChange={e => setValues({...values, name: e.target.value})} />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" name='email' required onChange={e => setValues({...values, email: e.target.value})} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input type="password" required name='password' onChange={e => setValues({...values, password: e.target.value})} />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div class="forget">
                            <a href="#">Forget Password</a>
                        </div>
                        <button type='submit'>Sign up</button>
                        <div class="register">
                            <p>Already have an account ? <a href="/login">Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </> */
  )
}

export default Register