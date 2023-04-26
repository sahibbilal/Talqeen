import React, { useEffect, useState } from 'react'
import AdminSide from './AdminSide'
import AddVideo from './AddVideo'
import "./admin.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

function AdminVideo() {
    // api data get 
    const token = localStorage.getItem('token')
    const [video, setVideo] = useState([])
    const [deleteItem, setDeleteItem] = useState();
    const [updateItem, setUpdateItem] = useState();
    const getVideo = async () => {
        let reqOptions = {
            url: `${process.env.REACT_APP_BASE_URL}admin/videos`,
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

    // code for deleteData 
    const deleteData = async (id) => {
        const res = await axios.delete(`${process.env.REACT_APP_BASE_URL}admin/videos/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });
        setDeleteItem(res)
    }
    // code for updateData
    const updateData = async (id) => {
        let res = await axios.put(`${process.env.REACT_APP_BASE_URL}admin/videos/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });
        setUpdateItem(res)
    }
    console.log(video);
    const displayData = video.map((item) => {
        const { id, name, url, categories, image, status } = item
        console.log('testing ', item);
        return (
            <tr>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{url}</td>
                <td>{categories}</td>
                <td><img src={image} alt='image' /></td>
                {/* <td>{status}</td> */}
                <td>
                    <button type="button" class="btn btn-warning " style={{ color: "#082465 !important" }} onClick={() => {
                        deleteData(id)
                    }}>
                        <i class="fas fa-trash-alt"></i>
                    </button>
                    <button type="button" class="btn btn-warning ms-2" style={{ color: "#082465 !important" }}
                        onClick={() => {
                            updateData(id)
                        }}
                    >
                        <Link to={`/addvideo/${id}`}>
                            <i class="fas fa-pen"></i>
                        </Link>

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
                        <p className="font-weight-bold">VIDEO</p>
                        <AddVideo />
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Url</th>
                                <th scope="col">Categories</th>
                                <th scope="col">Image</th>
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

export default AdminVideo