import React, { useState } from 'react'
import { VideosSlider } from './videoSilderArray'
import Carousel from 'react-bootstrap/Carousel';

function VideoSlider() {
    let video = VideosSlider;
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <React.Fragment>
            <section className="vehicle_section layout_padding">
                <div className="container">
                    <h2 className="main-heading ">
                        Vehicles Facility
                    </h2>
                    <p className="text-center">
                        There are many variations of passages of Lorem Ipsum available, but the majority hThere are many variations of
                        passages of Lorem Ipsum available, but the majority h
                    </p>
                    <div className="layout_padding-top">
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            {
                                video.map((item) => {
                                    let { img } = item;
                                    return (
                                        <Carousel.Item interval={3000}>
                                            <img
                                                className="d-block mx-auto w-75"
                                                src={img}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>
            </section>


        </React.Fragment >
    )
}

export default VideoSlider