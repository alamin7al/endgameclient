import React, { useEffect, useState } from 'react';
import useAuth from '../Login/useAuth';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Menuorder = () => {
    const { user } = useAuth()
    const [singleOrder, setSingleorder] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/singleemail?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleorder(data))
    }, [user.email])

    const handleDeleted = (id) => {
        const procces = window.confirm('Are You Sure, You Want To Delet')
        if (procces) {
            fetch(`http://localhost:5000/singleemail/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount >= 0) {
                        alert('deleted SuccessFully ')
                        const rstrongainignData = singleOrder.filter(x => x._id !== id)
                        setSingleorder(rstrongainignData)
                    }

                })
        }

    }



    let total = 0
    for (const p of singleOrder) {
        total = total + parseInt(p.price)
    }

    const sshipping = total > 0 ? 15 : 0
    const tax = (total + sshipping) * 0.10
    const grandtotal = total + sshipping + tax












    return (
        <div className='my-5'>
            <hr />
            {singleOrder.length === 0 && < div >
                <h1 className='text-danger'> Loading.... </h1>
            </div>}
            <div className="row">
                <div className="col-md-9">
                    {singleOrder.map((menuItem) => {
                        const { email, productName, image, price, phone, _id, name, city } = menuItem;
                        return (
                            <article className='menu-item'>
                                <img src={image} alt={name} className='photo' />
                                <div className='item-info'>
                                    <header>

                                        <h4>{name}</h4>

                                        <h4 className='price'>${city}</h4>
                                    </header>
                                    <div className="d-flex justify-content-between align-items-center ">
                                        <h4 className='price'> Name:  {productName}</h4>

                                    </div>
                                    <h4 className='price'>Price:  {price}</h4>

                                    <p className='item-text'>{phone}</p>
                                    <p className='item-text'>{email} </p>
                                    <div className='text-start my-3 ms-1'>

                                        <button onClick={() => handleDeleted(_id)} className='btn btn-outline-dark m-0 px-5  ms-3'>Delete</button>

                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
                <div className="col-md-3  text-start justify-content-center align-items-center ">
                    <div className="text-start ms-3">
                        <p>Order Summary</p>
                        <p> Items Order: {singleOrder.length}</p>
                        <p> Total: {total}</p>
                        {/* <p> Total: {grandtotal}</p> */}

                    <Link to={`/pay/${singleOrder._id}`}>
                    <button className='btn btn-outline-dark m-0 px-3 '>Pay</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menuorder;