import { Carousel } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { DivCarrusell } from '../styles/StyleGlobal';
import axios from 'axios';
import { url3 } from '../helpers/URLS';

const Coment = () => {

    const [coment, setComent] = useState([])

    const GetData = async () => {
        const { data } = await axios.get(`https://reto-1.herokuapp.com/${url3}`)
        setComent(data)
    }

    useEffect(() => {
        GetData()
    }, [setComent])

    return (
        <div>
            <Carousel fade className='mx-auto'>


                {
                    coment.map((d) => (
                        <Carousel.Item key={d.id}>
                            <div>
                                <div>
                                    <div className='car'>
                                        <DivCarrusell className='position-relative'>

                                            <div className='bg-secondary position-absolute car1'></div>

                                            <img className='position-absolute car1img' src={d.image} alt="" />

                                            <div className='bg-dark position-absolute d-flex car2'>
                                                <img className='m-auto' src="https://i.ibb.co/mvHhT57/image.png" alt="" />
                                            </div>

                                            <h2 className='position-absolute car3'>Testimonials</h2>

                                            <p className='position-absolute car4P'>
                                                ++++++++
                                                ++++++++
                                                ++++++++
                                                ++++++++
                                                ++++++++
                                                ++++++++
                                                ++++++++
                                                ++++++++
                                            </p>
                                            <div className='position-absolute car4 '>
                                                <div className='bg-white d-flex flex-column py-5 px-5'>
                                                    <h3 className='ms-2 mb-1'>{d.name}</h3>
                                                    <h5 className='text-secondary ms-2 mb-3 fs-6'>Senior Designer</h5>
                                                    <p className='ms-2'>{d.descript}</p>
                                                </div>
                                            </div>

                                            <div className='d-flex position-absolute car6'>
                                                <img src={d.images.img1} alt="" />
                                                <img src={d.images.img2} alt="" />
                                                <img src={d.images.img3} alt="" />
                                            </div>
                                        </DivCarrusell>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div >
    )
}

export default Coment;