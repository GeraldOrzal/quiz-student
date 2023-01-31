import React from 'react'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {formatDate} from "../Helpers/DateHelpers"
import {Link} from  'react-router-dom'
export default function DashboardCard({ title, description ,datetime,id,data}) {
    datetime = formatDate(datetime)
    return (
        <Link to={`/quiz/${id}`}
        state={data}
        >
            <div className="card">
                <div className="card-body">

                    <h5 className="card-title">{title}</h5>
                    {description}
                </div>
                <div className='card-footer'> 
                    <AiOutlineClockCircle/> {datetime}
                </div>
            </div>
        </Link>
    )
}
