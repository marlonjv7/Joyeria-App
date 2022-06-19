import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { url2 } from '../helpers/URLS';

const Detalle = () => {

    const [propa, setPropa] = useState([])

    const GetData = async () => {
        const { data } = await axios.get(`https://reto-1.herokuapp.com/${url2}`)
        setPropa(data)
    }

    useEffect(() => {
        GetData()
    }, [setPropa])



    return (
        <section id='Detail' className='d-flex flex-column mx-auto w-75'>
            <div className='row row-cols-1 row-cols-2'>
                <section className='col d-flex flex-column my-auto'>
                    <img src="https://i.ibb.co/wKkhv45/image-12.png" alt="" />
                </section>
                <section className='col d-flex flex-column my-auto'>
                    <h2 className='' style={{ fontSize: '54px' }}>J-Shop’s best Collections</h2>
                    <h4 className='fs-1 mb-3'>Comfort</h4>
                    <p> We will reach out to you for the current cost of this permit. Please contact us for more information. Maui Divers Jewelry offers extended sizing which may be subject to an additional cost. Any subsequent resizes after purchase will incur an additional charge. Please note some styles cannot be resized due to their design.</p>
                </section>
                <section className='col d-flex flex-column my-auto'>
                    <h4 className='fs-1 mb-3'>100% Gold</h4>
                    <p>Gold chains were a sign of service to the supreme beings of a particular religion in the past. Nowadays, they are symbols of wealth and class. Rap artists were most likely the ones who brought the custom of wearing gold chains to modern men's everyday life. There are a few reasons why do men wear gold chains.</p>
                </section>
                <section className='col d-flex flex-column my-auto'>
                    <img src="https://i.ibb.co/CPZcP0g/image-13.png" alt="" />
                </section>
                <section className='col d-flex flex-column my-auto'>
                    <img src="https://i.ibb.co/r65bhzm/image-14.png" alt="" />
                </section>
                <section className='col d-flex flex-column my-auto'>
                    <h4 className='fs-1 mb-3'>Trendy</h4>
                    <p>A collection of hammered gold discs swing from the top and bottom of a shimmery gold hoop, creating a noisy fringe. Earring attaches to a standard fishhook fitting. Sold as one pair of earrings.Other hoop designs do not complete the circle, but penetrate through the ear in a post, using the same attachment techniques that apply to stud earrings.</p>
                    <button  data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" type="button" className='btn-secondary bg-dark text-white fs-6  border-0 me-5 w-25 py-2'>Go to Shop</button>
                </section>
            </div>

            <section className='my-5 '>
                <h2 className='text-center my-5'>Trusted by leading companies</h2>
                <div className='d-flex justify-content-evenly'>
                    {
                        propa.map((d) => (
                            <div key={d.id}>
                                <img src={d.image} alt="" />
                            </div>
                        ))
                    }
                </div>
            </section>
        </section>
    )
}

export default Detalle;