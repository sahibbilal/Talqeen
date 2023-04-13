import React, { useState } from 'react'
import { singleArray } from './singleArray'
import { Link } from 'react-router-dom';

function SingleVideo() {
    // here get the array item and store into variable
    const single = singleArray;

    // update and display the item one by one 
    const [display, setDisplay] = useState(single);

    // create a function which is filter the categoryvideo
    const filterItem = (categoryVideo) => {
        const updatedVideo = single.filter((videoItem) => {
            return videoItem.category === categoryVideo
        })
        setDisplay(updatedVideo)
    }
    return (
        <React.Fragment>
            <div className="container py-5 mt-5">
                <div className="row">
                    <div className="col-lg-3 hero_detail-box">
                        <h1 className=" pb-4" style={{ fontSize: "40px" }}>Categories</h1>

                        <ul className="list-unstyled templatemo-accordion cat_list ">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue id="All" onClick={() => {
                                    setDisplay(single)
                                }} />
                                <label className="form-check-label" for="All">
                                    All
                                </label>

                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue id="Abdul bari" onClick={() => {
                                    filterItem('Abdul bari')
                                }} />
                                <label className="form-check-label" htmlFor="flexCheckDefault" for="Abdul bari" >
                                    Abdul bari
                                </label>

                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue id="Cartoon" onClick={() => {
                                    filterItem('Cartoon')
                                }} />
                                <label className="form-check-label" htmlFor="flexCheckDefault" for="Cartoon">
                                    Cartoon
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue id="Jann Cartoon" onClick={() => {
                                    filterItem('Jann Cartoon')
                                }} />
                                <label className="form-check-label" htmlFor="flexCheckDefault" for="Jann Cartoon">
                                    Jann Cartoon
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue id="ChuChu tv" onClick={() => {
                                    filterItem('ChuChu tv')
                                }} />
                                <label className="form-check-label" htmlFor="flexCheckDefault" for="ChuChu tv">
                                    ChuChu tv
                                </label>
                            </div>
                        </ul>
                    </div>
                    <div className="col-lg-9 single_video layout_padding">
                        <div className="row">
                            {
                                display.map((item, index) => {
                                    let { img, title } = item
                                    return (
                                        <div className="col-md-4" key={index}>
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
                        {/* <div div="row">
                            <ul className="pagination pagination-lg justify-content-end">
                                <li className="page-item disabled">
                                    <Link className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" to="" tabIndex={-1}>1</Link>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SingleVideo