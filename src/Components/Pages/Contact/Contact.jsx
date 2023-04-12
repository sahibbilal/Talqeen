import React from 'react'
import arrow from "../../assets/images/right-arrow.png"
import { Link } from 'react-router-dom'
function Contact() {
    return (
        <React.Fragment>
            <section className="contact_section layout_padding">
                <div className="container">
                    <h2 className="main-heading">
                        Contact Now
                    </h2>
                    <p className="text-center">
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    </p>
                    <div className>
                        <div className="contact_section-container">
                            <div className="row">
                                <div className="col-md-6 mx-auto">
                                    <div className="contact-form">
                                        <form action>
                                            <div>
                                                <input type="text" placeholder="Name" />
                                            </div>
                                            <div>
                                                <input type="text" placeholder="Phone Number" />
                                            </div>
                                            <div>
                                                <input type="email" placeholder="Email" />
                                            </div>
                                            <div>
                                                <input type="text" placeholder="Message" className="input_message" />
                                            </div>
                                            <div className="d-flex justify-content-center mt-5">
                                                <Link to="/about" className="call_to-btn  ">
                                                    <span>Send</span>
                                                    <img src={arrow} alt="arrow" />
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Contact