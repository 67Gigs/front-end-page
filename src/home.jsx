import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Home() {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');


  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get(`http://localhost:8081/`)
    .then(res => {
      if (res.data.Status === 'Success') {
        setAuth(true);
        setName(res.data.name);
      } else {
        setAuth(false);
        setMessage(res.data.Error);
      }
    })
  }, []);

  const handleDelete = () => {
    axios.get(`http://localhost:8081/api/logout`)
    .then(res => {
      window.location.reload(true);
    }).catch(err => {
      console.log(err)
    })
  };

  return (
    <div>
      {
        auth ?
        <div>
          <h3>Welcome {name}</h3>
          <button className='btn btn-danger' onClick={handleDelete}>Logout</button>
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