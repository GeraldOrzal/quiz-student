import React from 'react'
import Nav from '../../Shared/Nav'
import DashboardCard from '../../Components/DashboardCard'
import './css/home.css';
export default function Home() {
  return (
    <div className="Home">
        <Nav/>
        <h1 className="p-3">Dashboard</h1>
        <div className='px-5 content'>
            <DashboardCard
              title="New Quiz!"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est reiciendis totam nesciunt tempora voluptatem, quos molestias dignissimos deleniti neque eum maxime corporis doloribus dolorem, quo libero? Praesentium quae laborum quia?"
            />
            <DashboardCard
              title="New Quiz!"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est reiciendis totam nesciunt tempora voluptatem, quos molestias dignissimos deleniti neque eum maxime corporis doloribus dolorem, quo libero? Praesentium quae laborum quia?"
            />
            <DashboardCard
              title="New Quiz!"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est reiciendis totam nesciunt tempora voluptatem, quos molestias dignissimos deleniti neque eum maxime corporis doloribus dolorem, quo libero? Praesentium quae laborum quia?"
            />
            <DashboardCard
              title="New Quiz!"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est reiciendis totam nesciunt tempora voluptatem, quos molestias dignissimos deleniti neque eum maxime corporis doloribus dolorem, quo libero? Praesentium quae laborum quia?"
            />
            <DashboardCard
              title="New Quiz!"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est reiciendis totam nesciunt tempora voluptatem, quos molestias dignissimos deleniti neque eum maxime corporis doloribus dolorem, quo libero? Praesentium quae laborum quia?"
            />
            
        </div>
    </div>
  )
}
