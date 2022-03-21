import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';



import img2 from '../../image/download.png'


const AdminRevew = () => {
    const [revew, setRevew] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/revew')
            .then(res => res.json())
            .then(data => setRevew(data))
    })

    const handleApprove = (id) => {

        fetch(`http://localhost:5000/revew?id=${id}`, {
            method: "PUT",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    alert(
                        "Approvement successful. Visit the dashboard to see all the approved blogs."
                    );

                }
            });
    };




    return (
        <div className='my-5 container'>
             {revew.length === 0 && < div >
                <h1 className='text-danger'> Loading.... </h1>
            </div>}
            <h1 style={{ color: '#062265' }} className='text-center my-5'> Reviews</h1>
            <div className="row">


                {
                    revew.map(r =>
                        <div className="col-md-6 ">

                            <Card style={{ width: '27rem', height: 'auto' }}>
                                <div className="d-flex justify-content-center align-items-center my-2">
                                    <Card.Img className='text-center' style={{ width: '100px', height: '100px', borderRadius: '15px', }} src={img2} />

                                </div>
                                <Card.Body>
                                    <Card.Title style={{ color: '#062265' }} className='fs-5 text-uppercase'>{r.description}</Card.Title>
                                    <Card.Text className='text-start text-muted text-capitalize'>
                                        {r.profession}
                                    </Card.Text>
                                 
                                    {
                                        r.statu ? <button
                                            disabled
                                            onClick={() => handleApprove(r._id)}
                                            className="btn btn-outline-danger m-0 px-5"
                                        >
                                            Approved Done
                                        </button> : <button
                                           
                                            onClick={() => handleApprove(r._id)}
                                            className="btn btn-outline-danger m-0 px-5"
                                        >
                                            Approve
                                        </button>
                                    }
                                </Card.Body>
                            </Card>
                        </div>

                    )
                }
            </div>
        </div>
    );
};


export default AdminRevew;