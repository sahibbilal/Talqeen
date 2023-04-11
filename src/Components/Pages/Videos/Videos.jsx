import React from 'react'
import { videoArray } from './videoArray'
import arrow from "../../assets/images/right-arrow.png"
import { Link, useParams } from 'react-router-dom';
function Videos() {
    let array = videoArray;
    return (
        <React.Fragment>
            <section className="teacher_section layout_padding ">
                <div className="container">
                    <h2 className="main-heading ">
                        Our Teachers
                    </h2>
                    <p className="text-center video_para">
                        Ipsum available, but the majority h
                    </p>
                    <div className="teacher_container layout_padding2">
                        <div className="card-deck ">
                            {
                                array.map((item) => {
                                    return (
                                        <div className="card ">
                                            <Link to={`/videoSingle/${item.title}`} className='text-decoration-none'>

                                                <img className="card-img-top" src={item.img} alt="Card image cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.title}</h5>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <Link to="/video" className="call_to-btn  ">
                            <span>
                                See More
                            </span>
                            <img src={arrow} alt="arrow" />
                        </Link>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Videos