import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useAuthenticate } from '../../hooks/useAuthenticate';

const SignUp = () => {
    const [userDetails, setUserDetails] = useState({
        fName: '',
        lName: '',
        email: '',
        password: ''
    })

    const { signUp } = useAuthenticate()

    const { fName, lName, email, password } = userDetails;

    const handleFormSubmit = (e) => {

        e.preventDefault()
        if (fName === '') { toast.warn('Enter Your First Name'); return }
        if (lName === '') { toast.warn('Enter Your Last Name'); return }
        if (email === '') { toast.warn('Enter Your email'); return }
        if (password === '') { toast.warn('Enter Your Password'); return }

        signUp(userDetails)

    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value })
    }
    return (
        <div className="outercontainer">
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <h1>Sign Up</h1>
                <div className="form-group">
                    <label htmlFor="exampleInputFname">Enter Your First Name</label>
                    <input type="text" className="form-control" id="exampleInputFname" name='fName' aria-describedby="emailHelp" placeholder="Enter Your First Name" value={fName} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputLname">Enter Your Last Name</label>
                    <input type="text" className="form-control" id="exampleInputLname" name='lName' aria-describedby="emailHelp" placeholder="Enter Your First Name" value={lName} onChange={(e) => handleInputChange(e)} />
                </div>
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

export default SignUp