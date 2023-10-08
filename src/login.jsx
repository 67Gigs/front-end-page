import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './login.css';

function Login() {
    const [values, setValues] = React.useState({
      email: '',
      password: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post(`http://${process.env.HOST}:${process.env.PORT}/api/login` ,values)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  return (
    // <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    //   <div className='bg-white p-3 rounded w-25'>
    //     <h2>Login</h2>
    //     <form>

    //       <div className='mb-3'>
    //         <label htmlFor='Email'><strong>Email</strong></label>
    //         <input type='text' className='form-control rounded-0' id='Email' placeholder='Enter Email' name='Email' required />
    //       </div>

    //       <div className='mb-3'>
    //         <label htmlFor='Password'><strong>Password</strong></label>
    //         <input type='password' className='form-control rounded-0' id='Password' placeholder='Enter Password' name='Password' required />
    //       </div>

    //       <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>

    //       <p>
    //         You are to agree to our <a href='/'>Terms of Use</a> and <a href='/'>Privacy Policy</a>
    //       </p>

    //       <Link to='/register' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create account</Link>

    //     </form>
    //   </div>
    // </div>
    <>
        <section>
            <div className="form-box">
                <div className="form-value">
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" name='email' required />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input type="password" required name='password' />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div class="forget">
                            <><a href="#">Forget Password</a></>
                        </div>
                        <button type='submit'>Log in</button>
                        <div class="register">
                            <p>Don't have a account <a href="/register">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </>
  )
}

export default Login