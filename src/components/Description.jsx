import React, { useEffect, useState } from 'react'
import { url1 } from '../helpers/URLS';
import { BtnSize, IMGBG } from '../styles/StyleGlobal';
import axios from 'axios';


const Description = () => {

    const [product, setProduct] = useState([])

    const GetData = async () => {
        const { data } = await axios.get(`https://reto-1.herokuapp.com/${url1}`)
        setProduct(data)
    }

    useEffect(() => {
        GetData()
    }, [setProduct])

    return (
        <main className='mt-5 CARDS d-flex flex-column gap-5'>
            {
                product.map((d) => (
                    <div className='d-flex mb-5 REVERSE justify-content-evenly' key={d.id}>
                        <IMGBG src={d.image} alt="" />
                        <section className='ms-5 CardsTitle'>
                            <h2 className=''>{d.title}</h2>
                            <p className='mb-5'>{d.description}</p>
                            <div className='mt-5'>
                                <h4>Size</h4>
                                <section className='d-flex gap-4'>
                                    <BtnSize className='my-auto'>S</BtnSize>
                                    <BtnSize className='my-auto'>M</BtnSize>
                                    <BtnSize className='my-auto'>L</BtnSize>
                                </section>

                                <section className='d-flex mt-5'>
                                    <button data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" type="button" className='btn-secondary bg-dark text-white fs-6 px-4 border-0 me-5'>ADD TO CART</button>
                                    <h2>{d.precie}</h2>
                                </section>

                            </div>
                        </section>
                    </div>
                ))
            }
        </main>
    )
}

export default Description;