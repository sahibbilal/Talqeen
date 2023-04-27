import React, { useEffect, useState } from 'react'

import AddCategories from './AddCategories'
import axios from 'axios'
import CategoryEdit from './CategoryEdit'
import AdminSide from '../AdminSide'

function Categories() {
    // api data get 
    const [video, setVideo] = useState([])
    const token = localStorage.getItem('token')
    const getVideo = async () => {
        let reqOptions = {
            url: `${process.env.REACT_APP_BASE_URL}admin/video/category`,
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        }
        let response = await axios.request(reqOptions);
        setVideo(response.data.data);
    }
    useEffect(() => {
        getVideo();
    }, [])
    const displayData = video.map((item) => {
        const { id, name } = item
        return (
            <tr>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>
                    <button type="button" class="btn btn-warning ms-2" style={{ color: "#082465 !important" }}>
                        <CategoryEdit id={id} name={name} />
                    </button>
                    <button type="button" class="btn btn-warning ms-2" style={{ color: "#082465 !important" }}>
                        <i class="far fa-eye"></i>
                    </button>

                </td>
            </tr >
        )
    })
    return (
        <React.Fragment>
            <div class="grid-container">
                <header className="header">
                    <div className="menu-icon">
                        <span className="material-icons-outlined">
                            <i class="fas fa-bars"></i>
                        </span>
                    </div>
                </header>
                <aside id="sidebar">
                    <div className="sidebar-title">
                        <span className="material-icons-outlined">
                            close
                        </span>
                    </div>
                    <AdminSide />
                </aside>
                <main className="main-container">
                    <div className="main-title">
                        <p className="font-weight-bold">CATEGORY</p>
                        <AddCategories />
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col"> Categories Name</th>
                                <th scope="col" >Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                displayData
                            }
                        </tbody>
                    </table>
                </main>
            </div>
        </React.Fragment>
    )
}

export default Categories