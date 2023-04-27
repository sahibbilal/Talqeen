import React from 'react'
import "./admin.css"
import AdminSide from './AdminSide'
import { Link} from 'react-router-dom'
import { adminDashbord } from './adminDashbord'
function Admin() {
    let Dashboard = adminDashbord.map((item) => {
        let { id, name, url } = item
        return (
            <div className="card-admin">
                <Link to={url} className='text-decoration-none'>
                    <div className="card-inner">
                        <p className="text-primary ">{name}</p>
                    </div>
                </Link>
            </div>
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
                            <i class="far fa-times"></i>
                        </span>
                    </div>
                    <AdminSide />
                </aside>
                <main className="main-container">
                    <div className="main-title">
                        <p className="font-weight-bold">DASHBOARD</p>
                    </div>
                    <div className="main-cards">
                        {
                            Dashboard
                        }
                    </div>

                </main>
            </div>
        </React.Fragment>
    )
}

export default Admin




