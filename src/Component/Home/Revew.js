import React from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Revew = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.status = 'pending'
        fetch('http://localhost:5000/revew', {
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
        <div className='my-5'>
            <Card className='mx-auto' style={{ width: '28rem' }}>
                <form className='my-5' onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-group w-75 h-75 mx-auto text-start">
                        <label className='mb-2' for="exampleFormControlInput1"> Name</label>
                        <input placeholder='description' {...register("description")} class="form-control mb-3" />

                        <label className='mb-2' for="exampleFormControlInput1"> Description</label>

                        <textarea placeholder='profession' {...register("profession")} class="form-control" rows="3"></textarea>
                        <input className='btn btn-outline-success btn-lg mt-2' type="submit" />
                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}

                </form>
            </Card>
        </div >
    );
};

export default Revew;