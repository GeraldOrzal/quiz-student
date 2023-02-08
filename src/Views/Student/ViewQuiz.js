import React, { useState } from 'react'
import Nav from '../../Shared/Nav'
import './css/viewquiz.css';
import { useLoaderData } from 'react-router-dom'
export default function TakeQuiz() {
    const {quiz,user} = useLoaderData();
    const [questions, setquestions] = useState(quiz)
    
    return (
        <div>
            <Nav user={user}/>
            <div className="container-fluid">

                
                <div className='p-3 question-cont my-5'>
                <h1>{`${questions.filter((x)=>x.is_right).length} / ${questions.length}`}</h1>
                    {questions.map((ques) =>
                        <div className="questionAnswer my-3">
                            <h5 className="text-justify">{ques.question}</h5>
                            
                            <label style={{
                                fontWeight: "bold"
                            }}>Your Answer: <label className={ques.is_right == "1" ? "success" : "error"} style={{
                                fontWeight: "normal"
                            }}>{ques.option_txt ?? "No Answer"}</label></label>
                        </div>)}


                </div>
            </div>
        </div>
    )
}
