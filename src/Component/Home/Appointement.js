
import { Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Login/useAuth';

const Appointement = () => {
    const [allcart, setAllCart] = useState([])

    const { admin } = useAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/doctor`)
            .then(res => res.json())
            .then(data => {
                setAllCart(data)

            })
    }, [])
    const handleDeleted = (id) => {
        const procces = window.confirm('Are You Sure, You Want To Delet')
        if (procces) {
            fetch(`http://localhost:5000/single/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount >= 0) {
                        alert('deleted SuccessFully ')
                        const rstrongainignData = allcart.filter(x => x._id !== id)
                        setAllCart(rstrongainignData)
                    }

                })
        }
    }


    return (
        <div className="container my-5">
             {allcart.length === 0 && < div >
                <h1 className='text-danger'> Loading.... </h1>
            </div>}
            <div className="row">
                {
                    allcart.map(all => <div className="col-md-4 col-sm-6 my-4 ">
                        <Card>

                            <Card.Img style={{ height: '190px', width: 'auto' }} variant="top" src={all.image} />
                            <Card.Body>
                                <Card.Title className='text-uppercase'> {all.name}  </Card.Title>
                                <h6 className='text-start text-muted my-3'>
                                    {all.desc.slice(0, 50)}...

                                </h6>
                                <div className="d-flex justify-content-center align-items-center">

                                    <p style={{ color: 'black' }}>
                                        Price: ${all.Price}
                                    </p>
                                </div>

                                <div className="d-flex justify-content-center align-items-center">
                                    <Link to={`/single/deatils/${all._id}`}>
                                        <button className='btn btn-outline-primary m-0'>Buy</button>
                                    </Link>
                                    {admin && <>
                                        <Link to={`/edit/deatils/${all._id}`}>
                                            <button className='btn btn-outline-primary m-0 mx-2'>Edit</button>
                                        </Link>
                                     
                                            <button onClick={()=>(handleDeleted(all._id))} className='btn btn-outline-primary m-0'>Delete</button>
                                     
                                    </>}
                                </div>
                            </Card.Body>

                        </Card>

                    </div>)
                }
            </div>

        </div>
    );
};


export default Appointement;