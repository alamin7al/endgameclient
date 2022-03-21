import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

const Edit = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { id } = useParams()
    const [single, setSingle] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/single/${id}`)
            .then(res => res.json())
            .then(data => setSingle(data))
    }, [id])

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/doctor/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount >= 0) {
                    alert('update')
                }
            })
    }
    console.log(single);
    return (
        <div className="container">
             {single.length === 0 && < div >
                <h1 className='text-danger'> Loading.... </h1>
            </div>}
            <Card className='p-5'>

                <form className="shipping-form w-50 mx-auto " onSubmit={handleSubmit(onSubmit)}>

                    {
                        single.name && <div className="mb-3 text-start">
                            <label for="exampleInputEmail1" className="form-label">User Name</label>
                            <input defaultValue={single.name} {...register("name")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    }

                    {single.Price && <div className="mb-3 text-start">
                        <label for="exampleInputPassword1" className="form-label">Profession</label>
                        <input defaultValue={single.Price} {...register("Price")} className="form-control" id="exampleInputPassword1" />
                    </div>}

                    {errors.email && <span className="error">This field is required</span>}

                    {single.desc && <div className="mb-3 text-start">
                        <label for="exampleInputPassword1" className="form-label">City Name</label>
                        <textarea defaultValue={single.desc}  {...register("desc")} class="form-control" rows={8} id="floatingTextarea"></textarea>



                    </div>}


                    <button class="btn btn-outline-dark m-0 px-5 py-2 text-center" type='submit'>
                        Submit
                    </button>
                </form>
            </Card>
        </div>


    );
};

export default Edit;