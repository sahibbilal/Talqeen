import React from 'react'
import AdminSide from './AdminSide'
import { AllVideo } from './AllVideo'

function User() {
    let display = AllVideo.map((item) => {
        let { id, name, status } = item
        return (
            <tr>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{status}</td>
                <td>{name}</td>
                <td>@mdo</td>
                <td>+923....</td>

                <td>
                    <button type="button" class="btn btn-warning " style={{ color: "#082465 !important" }}>
                        <i class="fas fa-trash-alt"></i>
                    </button>
                    <button type="button" class="btn btn-warning ms-2" style={{ color: "#082465 !important" }}>
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
                            <p className="font-weight-bold">User</p>

                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Father Name</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    display
                                }

                            </tbody>
                        </table>
                    </main>
                </div>
            </React.Fragment>
        </React.Fragment>
    )
}

export default User