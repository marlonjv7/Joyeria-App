import React, { useEffect, useState } from 'react'
import { Form, Card } from 'react-bootstrap';
import axios from 'axios'
import { url4 } from '../helpers/URLS';

const SearchsAndBlocks = () => {

    const [search, setSearch] = useState([])

    const GetData = async () => {
        const { data } = await axios.get(`https://reto-1.herokuapp.com/${url4}`)
        setSearch(data)
    }

    useEffect(() => {
        GetData()
    }, [setSearch])

    return (
        <div className='mt-5'>
            <section id='Search' className='d-flex my-5'>
                <div className=' mx-auto w-50'>
                    <h2 className='mt-5 mb-4 fs-2 text-center'>Join J-Shop’s Family</h2>
                    <Form className="d-flex mx-auto h-50">
                        <Form.Control
                            type="search"
                            placeholder="Enter your emial"
                            className="me-2"
                            aria-label="Search"
                        />
                        <button className='bg-dark text-white fs-6 ms-4 px-5 border-0 w-50' variant="outline-dark">JOIN FAMILY</button>
                    </Form>
                </div>
            </section>


            <section className='d-flex flex-column my-5'>
                <h2 className='mx-auto fs-1 mt-5'>Our Blogs</h2>
                <div className='d-flex justify-content-evenly gap-5 w-75 mx-auto mt-4'>
                    {
                        search?.map((d) => (
                            <section className='w-25 mx-5' key={d.id}>
                                <Card className='mx-auto border-0 CARDBG' style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={d.image} alt='hola'/>
                                    <Card.Body className='ps-0'>
                                        <Card.Title className='text-dark fs-4'>{d.title}</Card.Title>
                                        <Card.Text className='text-secondary'>
                                            {d.descript}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </section>
                        ))
                    }

                </div>


            </section>
        </div>
    )
}

export default SearchsAndBlocks;