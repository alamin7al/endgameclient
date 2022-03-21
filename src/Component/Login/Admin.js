import React, { useState } from 'react';

const Admin = () => {
    const [email, setEmail] = useState('')
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()

        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                
            })
    }

    return (
        <div>
            <h1 className='display-6'>Admin</h1>
            <div class="mb-3">
                <form className='w-50 h-50 mx-auto' onSubmit={handleSubmit}>
                    <input type="email" onBlur={handleOnBlur} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <button className='btn btn-outline-danger px-5 m-0 text-start mt-2' type='submit '>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Admin;