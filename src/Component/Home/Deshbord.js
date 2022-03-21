import React, { useState } from 'react';
import Admin from '../Login/Admin';
import useAuth from '../Login/useAuth';
import AdminPost from './AdminPost';
import AdminRevew from './AdminRevew';
import Revew from './Revew';
import YourOrder from './YourOrder';

const Deshbord = () => {
    const [nav, setNav] = useState('order')
    const { admin } = useAuth()








    return (
        <div  >
            <div className="  ">
                <div className='  mx-4 '>
                    <div className="row">
                        <div className="col-md-3">

                            <div className="dashbordstyle d-flex align-items-center justify-content-center ">
                                <div className="align-items-start d-grid gap-4 mt-5 justify-content-center  ">
                                    <button className='btn btn-outline-primary px-3' onClick={() => setNav('order')}> Order </button>
                                    <button className='btn btn-outline-primary px-3' onClick={() => setNav('revew')}> Revew </button>
                                    {
                                        admin && <button className='btn btn-outline-primary px-3' onClick={() => setNav('admin')}> Admin </button>
                                    }
                                    {
                                        admin && <button className='btn btn-outline-primary px-3' onClick={() => setNav('stsus')}> Revew Update </button>
                                    }
                                    {
                                        admin && <button className='btn btn-outline-primary px-3' onClick={() => setNav('psot')}> Post </button>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-12 align-items-center container justify-content-center my-5">
                            {
                                nav === "order" && <YourOrder />
                            }
                            {
                                nav === "revew" && <Revew />
                            }
                            {
                                nav === "admin" && <Admin />
                            }
                            {
                                nav === "stsus" && <AdminRevew />
                            }
                            {
                                nav === "psot" && <AdminPost />
                            }
                            {
                                nav === "pay" && <AdminPost />
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deshbord;