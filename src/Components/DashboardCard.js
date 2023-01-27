import React from 'react'
import {AiOutlineClockCircle} from 'react-icons/ai'
export default function DashboardCard({ title, description }) {
    return (
        <div className="card">
            <div className="card-body">

                <h5 className="card-title">{title}</h5>
                {description}
            </div>
            <div className='card-footer'> 
                <AiOutlineClockCircle/> 01-10-2023 : 08:30 pm
            </div>
        </div>
    )
}
