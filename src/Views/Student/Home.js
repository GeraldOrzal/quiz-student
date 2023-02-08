import React,{useEffect, useState} from 'react'
import Nav from '../../Shared/Nav'
import DashboardCard from '../../Components/DashboardCard'
import './css/home.css';
import quizService from '../../Services/QuizService'
import {useSearchParams} from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
export default function Home() {
  const [quizzes, setquizzes] = useState()
  
  const [searchParams] = useSearchParams()
  const user = useLoaderData();
  useEffect(()=> {
    console.log(user)
    quizService.getAllQuiz((data)=>{
      setquizzes(data);
    });
    
  },[])
  return (
    
    <div className="Home">
      
        <Nav user={user}/>
        <h1 className="p-3">Dashboard</h1>
        {searchParams.get("err")&&<h2 className="p-3 error" >{searchParams.get("err")}</h2>}
        <div className='px-5 content'>
          {
            quizzes?.map(({quiz,questions})=>
            <DashboardCard
              title={`Quiz #${quiz.id}`}
              description={quiz.title}
              datetime={quiz.date_updated}
              id={quiz.id}
              data={{
                quiz,
                questions
              }}
            /> 
            )
          }
            
        </div>
    </div>
  )
}
