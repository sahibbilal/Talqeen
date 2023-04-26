import React, { useState, useEffect } from 'react'
import AdminSide from './AdminSide';
import "./admin.css"
import AddSub from './AddSub';
import axios from 'axios';

function SubCategories() {
    let token = localStorage.getItem('token')
    console.log(token);
    // api data get 
    const [video, setVideo] = useState([])
    const [deleteItem, setDeleteItem] = useState([]);
    const [updateItem, setUpdateItem] = useState([])
    const getVideo = async () => {
        let reqOptions = {
            url: `${process.env.REACT_APP_BASE_URL}admin/video/subcategory`,
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        }
        let response = await axios.request(reqOptions);
        console.log(response.data.data);
        setVideo(response.data.data);
    }
    useEffect(() => {
        getVideo();
    }, [])
    const deleteData = async (id) => {
        const res = await axios.delete(`${process.env.REACT_APP_BASE_URL}admin/video/subcategory/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });

        setDeleteItem(res)
        console.log(res);
    }
    // code for updateData
    // const updateData = async (id) => {
    //     const res = await axios.put(`${process.env.REACT_APP_BASE_URL}admin/video/subcategory/${id}`);
    // }
    const updateData = async (id) => {
        let res = await axios.put(`${process.env.REACT_APP_BASE_URL}admin/video/subcategory/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });
        setUpdateItem(res)
    }

    const displayCategories = video.map((item) => {
        let { id, name, categories } = item
        return (
            <tr>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{categories}</td>

                <td>
                    <button type="button" class="btn btn-warning " style={{ color: "#082465 !important" }}
                        onClick={() => {
                            deleteData(id)
                        }}>
                        <i class="fas fa-trash-alt"></i>
                    </button>
                    <button type="button" class="btn btn-warning ms-2" style={{ color: "#082465 !important" }}
                        onClick={() => {
                            updateData(id)
                        }}>
                        <i class="fas fa-pen"></i>
                    </button>
                    <button type="button" class="btn btn-warning ms-2" style={{ color: "#082465 !important" }}>
                        <i class="far fa-eye"></i>
                    </button>

                </td>
            </tr>
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
                        <p className="font-weight-bold">SUBCATEGORY</p>
                        <AddSub />
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Categories</th>
                                <th scope="col">Sub Categories Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                displayCategories
                            }
                        </tbody>
                    </table>
                </main>
            </div>
        </React.Fragment>
    )
}

export default SubCategories