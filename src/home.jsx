import React, {useEffect, useState} from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';

function Home() {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [verified, setVerified] = useState(false);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get(`http://localhost:8081/`)
    .then(res => {
      if (res.data.Status === 'Success') {
        setAuth(true);
        console.log(res.data);
        setVerified(res.data.verified);
        setName(res.data.name);
      } else {
        setAuth(false);
        setMessage(res.data.Error);
      }
    })
  }, []);


  const handleLogout = () => {
    axios.get(`http://localhost:8081/api/logout`)
    .then(res => {
      window.location.reload(true);
    }).catch(err => {
      console.log(err)
    })
  };

  const handleDelete = () => {
    axios.get(`http://localhost:8081/api/delete`)
    .then(res => {
      window.location.reload(true);
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      {
        auth ?
        <div>
          {
              verified ?
              <div>
                <h3>Welcome {name}</h3>
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                <button className='btn btn-danger' onClick={handleDelete}>Delete Account</button>
              </div>
              :
              <div>
                <h3>{name}</h3>
                <h3>Please, First Verify Your Email</h3>
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                <button className='btn btn-danger' onClick={handleDelete}>Delete Account</button>
              </div>
          }
        </div>
        :
        <div>
          <h3>{}</h3>
          <h3>Login Now</h3>
          <Link to='/login' className='btn btn-success'>Login</Link>
        </div>
      }
    </div>
  )
}

export default Home