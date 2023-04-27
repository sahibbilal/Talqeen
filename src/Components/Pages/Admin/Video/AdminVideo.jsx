import React, { useEffect, useState } from 'react'
import AddVideo from './AddVideo'
import "../admin.css"
import axios from 'axios'
import Edit from './Edit'
import AdminSide from '../AdminSide'

function AdminVideo() {
    // api data get 
    const token = localStorage.getItem('token')
    const [video, setVideo] = useState([])
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
    // code for handleData 
    const deleteData = async (post) => {
        setVideo(video.filter((d) => d.id !== post.id))
        await axios.delete(`${process.env.REACT_APP_BASE_URL}admin/videos/${post.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });
    }
    const displayData = video.map((post) => {
        const { id, name, url, category_id, image, status, subcategory_id, description } = post
        return (
            <tr>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{url}</td>
                <td>{category_id}</td>
                <td><img src={image} alt='image' /></td>
                <td>{subcategory_id}</td>
                <td>{description}</td>
                <td>{status}</td>
                <td>
                    <button type="button" class="btn btn-warning " style={{ color: "#082465 !important" }} onClick={() => {
                        deleteData(post)
                    }}>
                        <i class="fas fa-trash-alt"></i>
                    </button>
                    <button type="button" class="btn btn-warning ms-2" style={{ color: "#082465 !important" }}>
                        <Edit id={id} name={name} url={url} category_id={category_id} status={status} description={description} />
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
                                <th scope="col">Sub_Categories</th>
                                <th scope="col">Description</th>
                                <th scope="col" >Status</th>
                                <th scope="col" >Operate</th>
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