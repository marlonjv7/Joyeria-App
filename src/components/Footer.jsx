import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { IMGLINK } from '../styles/StyleGlobal';
import axios from 'axios';
import { url5 } from '../helpers/URLS';

const Footer = () => {

    const [foter, setFoter] = useState([])

    const GetData = async () => {
        const { data } = await axios.get(`https://reto-1.herokuapp.com/${url5}`)
        setFoter(data)
    }

    useEffect(() => {
        GetData()
    }, [setFoter])

    return (
        <div id='Footer'>
            <div className='d-flex mb-5'>
                <section className='d-flex justify-content-evenly mx-auto w-75'>
                    {
                        foter.map((d) => (
                            <div className='' key={d.id}>
                                <h2 className='fs-3 ms-3'>{d.title}</h2>
                                <ListGroup className=''>
                                    <ListGroup.Item className='text-secondary border-0 CARDBG'>{d.recur1}</ListGroup.Item>
                                    <ListGroup.Item className='text-secondary border-0 CARDBG'>{d.recur2}</ListGroup.Item>
                                    <ListGroup.Item className='text-secondary border-0 CARDBG'>{d.recur3}</ListGroup.Item>
                                </ListGroup>
                            </div>
                        ))
                    }
                </section>

                <section className='d-flex flex-column w-50'>
                    <div className='ms-5'>
                        <h2 className='fs-3'>Get in touch</h2>
                        <p className='w-50 text-secondary'>You’ll find your next Marketing value you prefer.</p>
                        <div className='d-flex gap-3'>
                            <IMGLINK className='mt-5' src="https://i.ibb.co/c2FptB2/Icon-1.png" alt="" />
                            <IMGLINK className='mt-5' src="https://i.ibb.co/qgQzCXj/Icon-2.png" alt="" />
                            <IMGLINK className='mt-5' src="https://i.ibb.co/Qc8n9Ny/Icon-3.png" alt="" />
                        </div>
                    </div>

                </section>
            </div>

            <section className='bg-dark d-flex p-3'>
                <h6 className='text-center text-secondary mx-auto my-2'>Copyright 2021 j-shop.com, All rights reserved.</h6>
            </section>
        </div>
    )
}

export default Footer;