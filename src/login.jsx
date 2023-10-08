import React from 'react'

function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign-up</h2>
        <form>
          <div className='mb-3'>
            <label htmlFor='Name'><strong>Name</strong></label>
            <input type='text' className='form-control rounded-0' id='Name' placeholder='Enter Name' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login