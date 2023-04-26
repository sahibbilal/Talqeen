import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
function PrivateRoute({ children }) {
    // let [token, setToken] = useState()
    let move = useNavigate();
    useEffect(() => {
        let token = localStorage.getItem('token');
        if (!token) {
            move('/login')
        }
        // setToken(token)
        // console.log(token);
    }, [])
    return (
        <React.Fragment>
            {
                children
            }
            {/* {
                token ? children : <Navigate replace to='/login' />
            } */}
        </React.Fragment>
    )
}

export default PrivateRoute 