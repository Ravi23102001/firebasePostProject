import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useAuthenticate } from '../../hooks/useAuthenticate';

const Login = () => {
  const { signIn } = useAuthenticate()
  const [signInUserData, setSignInUserData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = signInUserData;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignInUserData({ ...signInUserData, [name]: value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (email === '') { toast.warn('Enter Your Email'); return }
    if (password === '') { toast.warn('Enter Your Email Password'); return }
    console.log(signInUserData, 'signInUser')
    signIn(signInUserData)
  }
  return (
    <div className="outercontainer">
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <h1>Sign In</h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => handleInputChange(e)} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name='password' placeholder="Password" value={password} onChange={(e) => handleInputChange(e)} />
        </div>

        <div className="text-end">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login