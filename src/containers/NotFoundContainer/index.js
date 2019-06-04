import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";


const NotfoundContainer = (props) => (
    <div className="page-wrap d-flex flex-row align-items-center">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 text-center">
                    <span className="display-1 d-block">404</span>
                    <div className="mb-4 lead">La página que no se busca no se ha podido encontrar.</div>
                    <Link to="/">Volver</Link>
                </div>
            </div>
        </div>
    </div>
)
export default NotfoundContainer