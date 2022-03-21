

import { useState, } from 'react';
import {
    BrowserRouter as Router,

    NavLink,

    useHistory,

    useLocation,

} from "react-router-dom";



import { Card } from 'react-bootstrap';
import useAuth from './useAuth';


const Register = () => {
    const { signInuser, loading, error, user, googleLogin } = useAuth()
    const [loginDate, setLoginData] = useState({})
    const location = useLocation()
    const history = useHistory()
    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginDate }
        newLoginData[field] = value
        setLoginData(newLoginData)
        console.log(newLoginData);
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (loginDate.password !== loginDate.password2) {
            alert('not Matched')
            return
        }
        signInuser(loginDate.email, loginDate.password, loginDate.name, location, history)
    }
    const appointmentBanner = {
       
        backgroundColor: '#958B8B',
        backgroundBlendMode: 'multiply',
        backgroundPosition: 'center',
        backgroundRepeat: ' no-repeat',
        backgroundSize: 'cover',
        // opacity: '3.9'

    }
    const handleGoogleLogin = () => {
        googleLogin(location, history)
    }


    return (
        <div className="">
            <div style={appointmentBanner} className='  registerDesign d-flex justify-content-center align-items-center '>

                <div className=' fs-5'>

                    <div className='row '>
                        <div className=' w-100 mx-auto '>
                            <Card


                                style={{ width: '30rem' }} className=' p-3 '>
                                <h2>Register</h2>
                                {!loading && <form onSubmit={handleOnSubmit}>

                                    <div className="mb-1 text-start">

                                        <label for="exampleInputPassword1" className="form-label ">Your Name</label>
                                        <input

                                            name='name'


                                            placeholder='Your Name'
                                            className="form-control"
                                            onBlur={handleOnBlur}
                                            id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-1 text-start">

                                        <label for="exampleInputPassword1" className="form-label">Your Email</label>
                                        <input
                                            placeholder='Enter Your Email'
                                            name='email'
                                            type='email'
                                            className="form-control"
                                            onBlur={handleOnBlur}
                                            id="exampleInputPassword1" />
                                    </div>

                                    <div className="mb-1 text-start">

                                        <label for="exampleInputPassword1" className="form-label">Your Password</label>
                                        <input
                                            placeholder='Enter Your Password'
                                            name='password'
                                            type="password" className="form-control"
                                            onBlur={handleOnBlur}
                                            id="exampleInputPassword1" />
                                    </div>

                                    <div className=" text-start">


                                        <label for="exampleInputPassword1" className="form-label">ReType Your Password</label>
                                        <input
                                            placeholder='Enter Your Re Type Your Password'

                                            name='password2'
                                            type="password" className="form-control"
                                            onBlur={handleOnBlur}
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

                                        to='/login'><p

                                            className='text-dark '
                                        >Already Register? Please Login</p>
                                    </NavLink>

                                </form>}

                                <div>
                                    <button
                                        className='btn btn-outline-dark mt-3'
                                        onClick={handleGoogleLogin}
                                    >Google SignIn</button>
                                </div>


                                {loading && <div>
                                    <div class="spinner-grow text-dark" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div><div class="spinner-grow text-dark" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>}
                                {user?.email &&
                                    <div class="alert alert-primary" role="alert">
                                        User Created SuccessFulyy
                                    </div>
                                }
                                {error &&
                                    <div class="alert alert-warning" role="alert">
                                        {error}
                                    </div>
                                }




                            </Card>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;