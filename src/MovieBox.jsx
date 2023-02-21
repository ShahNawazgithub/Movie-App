import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'


const API_IMG = "https://image.tmdb.org/t/p/w500/";
export default function MovieBox({ title, poster_path,vote_average, overview, release_date }) {

    const [show, setshow] = useState(false)
    const handleShow = () => setshow(true)
    const handleClose = () => setshow(false)

    return (
        <>
            <div className="card text-center background mb-2">
                <div className="card-body">
                    <img className='card-img-top w-10' style={{height:350}} src={API_IMG + poster_path} />
                    <div className="card-body">
                        <button type='button' className='btn btn-dark w-100' onClick={handleShow}>View More</button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header>
                                <Modal.Title></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <img className='card-img-top w-100 close float-left' src={API_IMG + poster_path} />
                                <h3>Movie : {title}</h3>
                                <h4 >IMDb : {vote_average}</h4>
                                <h5>Release Date : {release_date}</h5>
                                <br></br>
                                <h2>Overview : </h2>
                                <p>{overview}</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <button className='background text-light w-100 close' style={{minHeight:40}} onClick={handleClose}>Close</button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div >
            </div >
        </>
    )
}

