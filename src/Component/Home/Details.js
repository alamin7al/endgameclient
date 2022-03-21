import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { useForm } from "react-hook-form";
import useAuth from '../Login/useAuth';

const Details = () => {
    const { user } = useAuth()
    const { id } = useParams()
    const [single, setSingle] = useState({})
    console.log(single);
    useEffect(() => {
        fetch(`http://localhost:5000/singleCart/${id}`)
            .then(res => res.json())
            .then(data => setSingle(data))
    })

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('We recived your order.');

                }

                // history.push(redirect);

            })
    }
    return (
        <div >
       
            <div className="container">
                <div className="row">
                    <div className="col-md-6  my-4 ">
                        <Card style={{ width: '100%' }}>
                            <Card.Img style={{ height: '300px', width: 'auto' }} variant="top" src={single.image} />
                            <Card.Body>
                                <Card.Title className='text-uppercase '> {single.title} </Card.Title>
                                <h6 className='text-start text-muted my-3 text-center'>
                                    {single.name}
                                </h6>
                                <p className='text-start text-muted'>{single.desc}</p>
                                <div className="d-flex justify-content-center align-items-center">

                                    <p style={{ color: 'black' }}>
                                        Price: ${single.Price}.00
                                    </p>
                                </div>


                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-6 mt-4">
                        <Card style={{ width: '100%', padding: '10px' }}>

                            <form className="shipping-form w-75 mx-auto " onSubmit={handleSubmit(onSubmit)}>

                                {
                                    user.displayName && <div className="mb-3 text-start">
                                        <label for="exampleInputEmail1" className="form-label">User Name</label>
                                        <input defaultValue={user.displayName} {...register("name")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                }
                                {
                                    user.email && <div className="mb-3 text-start">
                                        <label for="exampleInputPassword1" className="form-label">User Email</label>
                                        <input defaultValue={user.email} {...register("email",)} className="form-control" id="exampleInputPassword1" />
                                    </div>
                                }
                                {single.image && <div className="mb-3 text-start">
                                    <label for="exampleInputPassword1" className="form-label">Image Link</label>
                                    <input defaultValue={single.image} {...register("image")} className="form-control" id="exampleInputPassword1" />
                                </div>}

                                {errors.email && <span className="error">This field is required</span>}

                                {single.name && <div className="mb-3 text-start">
                                    <label for="exampleInputPassword1" className="form-label"> Name</label>
                                    <input defaultValue={single.name} placeholder="Address"  {...register("productName")} className="form-control" id="exampleInputPassword1" />

                                </div>}
                                {single.Price && <div className="mb-3 text-start">
                                    <label for="exampleInputPassword1" className="form-label"> Price</label>
                                    <input defaultValue={single.Price } placeholder="Address"  {...register("price")} className="form-control" id="exampleInputPassword1" />

                                </div>}
                                <div className="mb-3 text-start">

                                    <label for="exampleInputPassword1" className="form-label">City Name</label>
                                    <input placeholder="City"  {...register("city")} className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 text-start">
                                    <label for="exampleInputPassword1" className="form-label">Number</label>
                                    <input placeholder="phone number" {...register("phone")} className="form-control" id="exampleInputPassword1" />
                                </div>
                                {/* <a type="submit"  alt="submit"></a> */}
                                <button class="btn btn-outline-primary px-5 m-0 text-center" type='submit'>
                                    Submit
                                </button>
                            </form>
                        </Card>

                    </div>


                </div>
                <div>
                </div>

            </div >
        </div >
    );
};

export default Details;