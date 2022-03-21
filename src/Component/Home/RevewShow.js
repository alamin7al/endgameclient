import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';


import img2 from '../../image/download.png'

const RevewShow = () => {
    const [revew, setRevew] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/revew')
            .then(res => res.json())
            .then(data => setRevew(data))
    })





    return (
        <div className='my-5 container'>
            <h1 style={{ color: '#062265' }} className='text-center my-5'> Reviews</h1>
            {revew.length === 0 && < div >
                <h1 className='text-danger'> Loading.... </h1>
            </div>}
            <div className="row">


                {
                    revew.map(r =>
                        <div className="col-md-4 ">

                            {
                                r.statu  && <Card style={{ width: 'auto', height: 'auto' }}>
                                    <div className="d-flex justify-content-center align-items-center my-2">
                                        <Card.Img className='text-center' style={{ width: '100px', height: '100px', borderRadius: '15px', }} src={img2} />

                                    </div>
                                    <Card.Body>
                                        <Card.Title style={{ color: '#062265' }} className='fs-5 text-uppercase'>{r.description}</Card.Title>
                                        <Card.Text className='text-start text-muted text-capitalize'>
                                            {r.profession.slice(0, 200)}
                                        </Card.Text>

                                    </Card.Body>
                                    <div className="flex py-2">



                                    </div>

                                </Card>
                            }
                        </div>

                    )
                }
            </div>
        </div>
    );
};


export default RevewShow;