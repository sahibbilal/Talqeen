import React, { useEffect, useState } from 'react'
import { videoArray } from './videoArray'
import arrow from "../../assets/images/right-arrow.png"
import { Link } from 'react-router-dom';
import axios from 'axios';

function Videos() {
    // here show the data of api 
    const [user, setuser] = useState()
    const sendData = async () => {
        const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}admin/videos`);
        setuser(data);
        console.log(data);
    }
    useEffect(() => {
        sendData()
    }, [])

    let array = videoArray;
    return (
        <React.Fragment>
            <section className="teacher_section layout_padding ">
                <div className="container">
                    <h2 className="main-heading ">
                        Our Teachers
                    </h2>
                    <p className="text-center video_para mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum voluptatum eveniet aliquam, repudiandae molestiae in ipsa tenetur doloremque incidunt sit temporibus accusamus omnis ad eum ex placeat distinctio vitae!
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