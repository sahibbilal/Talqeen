import React, { useState } from 'react'
import { singleArray } from './singleArray'
import { Link, useParams } from 'react-router-dom';
function SingleVideo() {
    const single = singleArray;
    return (
        <React.Fragment>
            <div className="container py-5 mt-5">
                <div className="row">
                    <div className="col-lg-3 hero_detail-box">
                        <h1 className=" pb-4" style={{ fontSize: "40px" }}>Categories</h1>
                        <ul className="list-unstyled templatemo-accordion cat_list " >

                            <li className="pb-3" >
                                <Link className="accordion-collapse collapse d-flex justify-content-between h3 text-decoration-none" to="/">
                                    Categories-1
                                </Link>
                            </li>
                            <li className="pb-3" >
                                <Link className="accordion-collapse collapse d-flex justify-content-between h3 text-decoration-none" to="/">
                                    Categories-2
                                </Link>
                            </li>
                            <li className="pb-3">
                                <Link className="accordion-collapse collapse d-flex justify-content-between h3 text-decoration-none" to="/">
                                    Categories-3
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9 single_video">
                        <div className="row">
                            {
                                single.map((item, index) => {
                                    let { img, title } = item
                                    return (
                                        <div className="col-md-4">
                                            <div className="card mb-4 product-wap rounded-0">
                                                <Link to={`/videodetail/${item.id}`}>
                                                    <div className="card rounded-0">
                                                        <img className="card-img rounded-0 img-fluid" src={img} alt="single -video" />
                                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="card-body">
                                                    <Link to={`/videodetail/${item.id}`} className="h3 text-decoration-none"><p>{title}</p></Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div div="row">
                            <ul className="pagination pagination-lg justify-content-end">
                                <li className="page-item disabled">
                                    <Link className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" to="" tabIndex={-1}>1</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SingleVideo