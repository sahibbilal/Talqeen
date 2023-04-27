import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./admin.css"
function AdminSide() {
    let move = useNavigate()
    const Logout = (event) => {
        event.preventDefault();
        let token = localStorage.removeItem('token', "");
        console.log(token);
        move('/login')
    }

    return (
        <React.Fragment>
            <ul className="sidebar-list" id="menu">
                <Link to="/dashboard" className='text-warning text-decoration-none'>
                    <li className="sidebar-list-item">
                        <span className="material-icons-outlined"></span> Dashboard
                    </li>
                </Link>
                <Link to="/adminvideo" className='text-warning text-decoration-none'>
                    <li className="sidebar-list-item">

                        <span className="material-icons-outlined"></span>Video

                    </li>
                </Link>
                {/*drop down  */}
                <li className="sidebar-list-items">
                    <a
                        href="#submenu2"
                        data-bs-toggle="collapse"
                        className="nav-link align-middle ">
                        <i className="fs-4 bi-bootstrap" />
                        <span className="ms-1 d-none d-sm-inline text-warning">Categories</span>
                    </a>
                    <ul
                        className="collapse nav flex-column ms-1"
                        id="submenu2"
                        data-bs-parent="#menu">
                        <li className="w-100 sidebar-list-items" >
                            <Link to="/Admincategories" className="nav-link">
                                <span className="d-none d-sm-inline text-warning">Category</span>
                            </Link>
                        </li>
                        <li className='w-100 sidebar-list-items'>
                            <Link to="/subCategories" className="nav-link">
                                <span className="d-none d-sm-inline text-warning">Sub Category</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <Link to="/user" className='text-warning text-decoration-none'>
                    <li className="sidebar-list-item">
                        <span className="material-icons-outlined"></span> User
                    </li>
                </Link>
                {/* user detail */}
                {/* <div class="dropdown pb-4 sidebar-list-item">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle" />
                        <span class="d-none d-sm-inline mx-1 text-warning">Admin</span>
                    </a>
                    <ul class="dropdown-menu dropdown text-small shadow">
                        <li><Link class="dropdown-item" to="/login">Sign In </Link></li>
                        <li className='dropdown-item' onClick={Logout}>Logout</li>
                    </ul>
                </div> */}

                {/* admin pannel */}

                <li className="sidebar-list-items">
                    <a href="#submenu3"
                        data-bs-toggle="collapse"
                        className="nav-link align-middle ">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle" />
                        <span class="d-none d-sm-inline mx-1 text-warning">Admin</span>
                    </a>
                    <ul
                        className="collapse nav flex-column ms-1"
                        id="submenu3"
                        data-bs-parent="#menu">
                        <li className="w-100" >
                            <Link to="/login" className="nav-link">
                                <span className="d-none d-sm-inline text-warning">Sig In </span>
                                
                            </Link>
                        </li>
                        <li className="w-100" >
                            <Link to="/login" className="nav-link">
                            <span className="d-none d-sm-inline text-warning" onClick={Logout}>Logout</span>
                                
                            </Link>
                        </li>
                    </ul>
                </li>

            </ul>

        </React.Fragment >
    )
}

export default AdminSide