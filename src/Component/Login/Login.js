import React from 'react';

import { useState } from 'react';
import {
    BrowserRouter as Router,

    NavLink,

    useLocation,
    useHistory
} from "react-router-dom";

import { Card } from 'react-bootstrap';
import useAuth from './useAuth';
// import { ExitToApp, GolfCourseTwoTone, NearMe } from '@material-ui/icons';


const Login = () => {
    const { loginInUser, loading, error, user, googleLogin } = useAuth()

    const [loginDate, setLoginData] = useState({})
    const location = useLocation()
    const history = useHistory()
    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginDate }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }




    const handleOnSubmit = (e) => {
        e.preventDefault()
        loginInUser(loginDate.email, loginDate.password, location, history)

    }

    const handleGoogleLogin = () => {
        googleLogin(location, history)
    }

    const appointmentBanner = {
      
        backgroundColor: '#958B8B',
        backgroundBlendMode: 'multiply',

        backgroundPosition: 'center',
        backgroundRepeat: ' no-repeat',
        backgroundSize: 'cover',
        // opacity: '3.9'

    }


    return (
        <div className="">
            <div style={appointmentBanner} className='
        loginDesign d-flex justify-content-center align-items-center
        ba fs-5 '>

                <Card style={{ width: '30rem' }} className=' p-3 '>
                    <div

                        className='w-50 mx-auto my-5'>
                        <h2>Login</h2>

                        <form


                            onSubmit={handleOnSubmit}>
                            <div className="mb-3 text-start">


                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input
                                    name='email'
                                    type="email" className="form-control" id="exampleInputEmail1"
                                    onChange={handleOnChange}
                                    placeholder='Type Your Email'
                                    aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3 text-start">


                                <label for="exampleInputPassword1" className="form-label">Password</label>

                                <input
                                    name='password'
                                    placeholder='Type Your Password'

                                    type="password" className="form-control"
                                    onChange={handleOnChange}
                                    id="exampleInputPassword1" />
                            </div>
                            <div className="text-start mt-1">
                                <button

                                    className='btn btn-outline-dark btn-lg mt-1'
                                    type='submit'
                                >


                                    Login</button>
                            </div>

                            <NavLink
                                style={{ textDecoration: 'none' }}

                                to='/register'><p className='text-dark'


                                >New User?Please Register</p>
                            </NavLink>

                            {loading && <div>
                                <div class="spinner-grow text-dark" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div><div class="spinner-grow text-dark" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>}
                            {user?.email &&
                                <div class="alert alert-success" role="alert">
                                    User Created SuccessFulyy
                                </div>
                            }
                            {error &&
                                <div class="alert alert-warning" role="alert">
                                    {error}
                                </div>
                            }

                        </form>

                        <button

                            className='btn btn-outline-dark mb-5'
                            onClick={handleGoogleLogin}
                        >

                            Google SignIn</button>
                    </div>

                </Card >


            </div>
        </div>
    );
};

export default Login;