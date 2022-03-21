import React from 'react';
import { useForm } from 'react-hook-form';

const AdminPost = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/doctor`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('data recived')
                   
                }
            })
         
    };
    return (
        <div>
            <form className='w-50 mx-auto text-start' onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-1">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input {...register("name")} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="mb-1">
                    <label for="exampleInputEmail1" class="form-label">Price</label>
                    <input {...register("Price")} type='number' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="mb-1">
                    <label for="exampleInputEmail1" class="form-label">Desc</label>
                    <textarea   {...register("desc")} class="form-control" rows={8} id="floatingTextarea"></textarea>

                

                </div>
                <div class="mb-1">
                    <label for="exampleInputEmail1" class="form-label">Image Link</label>
                    <input {...register("image")} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AdminPost;