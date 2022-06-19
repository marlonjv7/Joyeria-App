import React from 'react'
import ReactPlayer from 'react-player';
import NavBar from './NavBar';
import { BtnVideo, IMGBG, IMGLINK } from '../styles/StyleGlobal';

const Encabezado = () => {
    return (
        <div>
            <NavBar />
            <div className='d-flex mb-5'>
                <section className='ms-5 me-3'>
                    <IMGBG className='' src="https://i.ibb.co/ncrDByL/gold-ring-with-shiny-diamond-stone-it.png" style={{ width: '600px' }} alt="" />
                    <h1 className='ms-5 mb-5'>Jewelery tells a great story</h1>
                </section>

                <section className='d-flex mt-5'>
                    <div className='d-flex flex-column w-50 mt-5'>
                        <h3 className='fs-1'>Our Story</h3>
                        <p className=''>modern jewelry is made of gold, silver, or platinum, often with precious or semiprecious stones, it evolved from shells, animal teeth, and other items used as body decoration in prehistoric times.</p>
                        <IMGBG className='mt-5' src="https://i.ibb.co/X7JQxZG/Rectangle-4.png" alt="" style={{ width: '400px' }} />
                    </div>

                    <ReactPlayer
                        url='https://youtu.be/c6JEjZGRyJo'
                        className='mt-auto w-25'
                        width='300px'
                        height='200px'
                        controls
                        playing
                        muted
                        playbackRate={1}
                        playIcon={<BtnVideo className='fs-5'><img className='me-2' src="https://i.ibb.co/p0P7MKZ/Group-5.png" alt="" />Play Video</BtnVideo>}
                        light="https://th.bing.com/th/id/R.4cd3184015eeef6666ada6fb0299d7cb?rik=NB7%2bX%2fVUSxd8KA&riu=http%3a%2f%2ffc02.deviantart.net%2ffs71%2ff%2f2012%2f299%2fa%2f1%2ffondo_png_transparente__by_mituesposito-d5j0293.png&ehk=YBGcAxbYOn8GtY4eK%2fRVruKWCSZ8dq%2bR6BT6VOv0Nr0%3d&risl=&pid=ImgRaw&r=0"
                    />

                    <section className='d-flex flex-column gap-4 ms-auto me-4 my-auto'>
                        <IMGLINK src="https://i.ibb.co/c2wqbxC/043-twitter.png" alt="" />
                        <IMGLINK src="https://i.ibb.co/prJPZ5c/Vector-2.png" alt="" />
                        <IMGLINK src="https://i.ibb.co/61KzWgS/Vector.png" alt="" />
                    </section>
                </section>



            </div>

            <div id='Categories' className='d-flex ms-5 mt-5 oroGol'>
                <section className='ms-5'>
                    <h3 className=''>Gold</h3>
                    <p className=' '>Her provision acuteness had two why intention. </p>
                </section>
                <section className='ms-5'>
                    <h3 className=''>SILVER</h3>
                    <p className=''>Her provision acuteness had two why intention. </p>
                </section>
            </div>
        </div>
    )
}

export default Encabezado;