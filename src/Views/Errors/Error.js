import React from 'react'
import { useRouteError } from 'react-router-dom';
import "./error.css"
import { ReactComponent as RocketShip } from './rocket.svg'
export default function Error(props) {
const error = useRouteError();
  return (
    <div className="Error">
        <RocketShip/>
        <hr/>
        <div>
            {error.status=="404"&&<h1 className="error">Page not found</h1>}
            {error.status=="501"&&<h1 className="error">Server Error</h1>}
            <h1>Error {error.status}</h1>
        </div>
    </div>
  )
}
