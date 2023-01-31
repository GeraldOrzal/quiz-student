import React,{useEffect, useState} from 'react'
import Nav from '../../Shared/Nav'
import DashboardCard from '../../Components/DashboardCard'
import './css/home.css';
import quizService from '../../Services/QuizService'

export default function Home() {
  const [quizzes, setquizzes] = useState()
  useEffect(()=> {
    
    quizService.getAllQuiz((data)=>{
      setquizzes(data);
    });
    
  },[])
  return (
    
    <div className="Home">
      
        <Nav/>
        <h1 className="p-3">Dashboard</h1>
        <div className='px-5 content'>
          {
            quizzes?.map(({quiz,questions})=>
            <DashboardCard
              title="New Quiz!"
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
