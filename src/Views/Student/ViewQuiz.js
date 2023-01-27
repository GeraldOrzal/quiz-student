import React, { useState } from 'react'
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Label from '../../Components/Label';
import Nav from '../../Shared/Nav'
import { useSearchParams } from "react-router-dom"
import './css/viewquiz.css';
export default function ViewQuiz() {
    const questions = [
        {
            title: "Identification",
            questions: [
                {
                    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores iste sit consectetur libero, minima dolore a, fugit cum voluptatem deleniti. Ipsam fugiat tempora eaque quia quo totam pariatur sed?",
                    answer:"Test",
                    userAnswer:"dfg"
                },
                {
                    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores iste sit consectetur libero, minima dolore a, fugit cum voluptatem deleniti. Ipsam fugiat tempora eaque quia quo totam pariatur sed asdas?",
                    answer:"Test",
                    userAnswer:null

                }
            ]
        },
        {
            title: "Multiple",
            questions: [
                {
                    question: "Multiple Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores iste sit consectetur libero, minima dolore a, fugit cum voluptatem deleniti. Ipsam fugiat tempora eaque quia quo totam pariatur sed?",
                    answer:"a",
                    userAnswer:"b"
                },
                {
                    question: "Multiple Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores iste sit consectetur libero, minima dolore a, fugit cum voluptatem deleniti. Ipsam fugiat tempora eaque quia quo totam pariatur sed asdas?",
                    answer:"a",
                    userAnswer:"a"
                }
            ]
        },
        {
            title: "Multiple",
            questions: [
                {
                    question: "Multiple Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores iste sit consectetur libero, minima dolore a, fugit cum voluptatem deleniti. Ipsam fugiat tempora eaque quia quo totam pariatur sed?",
                    answer:"a",
                    userAnswer:"b"
                },
                {
                    question: "Multiple Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores iste sit consectetur libero, minima dolore a, fugit cum voluptatem deleniti. Ipsam fugiat tempora eaque quia quo totam pariatur sed asdas?",
                    answer:"a",
                    userAnswer:"a"
                }
            ]
        }, {
            title: "Multiple",
            questions: [
                {
                    question: "Multiple Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores iste sit consectetur libero, minima dolore a, fugit cum voluptatem deleniti. Ipsam fugiat tempora eaque quia quo totam pariatur sed?",
                    answer:"a",
                    userAnswer:"b"
                },
                {
                    question: "Multiple Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores iste sit consectetur libero, minima dolore a, fugit cum voluptatem deleniti. Ipsam fugiat tempora eaque quia quo totam pariatur sed asdas?",
                    answer:"a",
                    userAnswer:"a"
                }
            ]
        }, {
            title: "Multiple",
            questions: [
                {
                    question: "Multiple Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores iste sit consectetur libero, minima dolore a, fugit cum voluptatem deleniti. Ipsam fugiat tempora eaque quia quo totam pariatur sed?",
                    answer:"a",
                    userAnswer:"b"
                },
                {
                    question: "Multiple Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores iste sit consectetur libero, minima dolore a, fugit cum voluptatem deleniti. Ipsam fugiat tempora eaque quia quo totam pariatur sed asdas?",
                    answer:"a",
                    userAnswer:"a"
                }
            ]
        }, {
            title: "Multiple",
            questions: [
                {
                    question: "Multiple Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores iste sit consectetur libero, minima dolore a, fugit cum voluptatem deleniti. Ipsam fugiat tempora eaque quia quo totam pariatur sed?",
                    answer:"a",
                    userAnswer:"b"
                },
                {
                    question: "Multiple Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores iste sit consectetur libero, minima dolore a, fugit cum voluptatem deleniti. Ipsam fugiat tempora eaque quia quo totam pariatur sed asdas?",
                    answer:"a",
                    userAnswer:"a"
                }, {
                    question: "Multiple Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores iste sit consectetur libero, minima dolore a, fugit cum voluptatem deleniti. Ipsam fugiat tempora eaque quia quo totam pariatur sed?",
                    answer:"a",
                    userAnswer:"b"
                },
                {
                    question: "Multiple Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores iste sit consectetur libero, minima dolore a, fugit cum voluptatem deleniti. Ipsam fugiat tempora eaque quia quo totam pariatur sed asdas?",
                    answer:"a",
                    userAnswer:"a"
                }
            ]
        }
    ]
    const [searchParams] = useSearchParams();
    const [question, setQuestion] = useState(questions[0]);
    const [currentIndex, setCurrentIndex] = useState({
        questionsIndex: 0,
        groupQuestionsIndex: 0
    });

    return <div>
        <Nav />
        <h1 className="p-3">History {searchParams.get("view")?"(50/50)":""}</h1>
        <div className="content">
            {!searchParams.get("view") ?
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">{question?.title}</h3>
                        <h5 >{`${currentIndex.groupQuestionsIndex + 1} of ${question.questions.length}`}</h5>
                        <Label className="my-5">
                            {
                                question.questions[currentIndex.groupQuestionsIndex].question
                            }
                        </Label>
                        {question.title == "Identification" && <Input className="w-100" type="text" defaultValue={question.questions[currentIndex.groupQuestionsIndex].userAnswer ?? ""}/>}                        {question.title == "Multiple" &&
                            <div>
                                <div className="row my-3">
                                    <Input className="col-2" type="radio" name="answer" />
                                    <Label className="col-6">a. Choice1</Label>
                                </div>
                                <div className="row my-3">
                                    <Input className="col-2" type="radio" name="answer" />
                                    <Label className="col-6">b. Choice2</Label>
                                </div>
                                <div className='row my-3'>
                                    <Input className="col-2" type="radio" name="answer" />
                                    <Label className="col-6">c. Choice3</Label>
                                </div>
                            </div>}
                    </div>
                    <div className="card-footer">
                        <Button
                            className={currentIndex.groupQuestionsIndex == 0&&currentIndex.questionsIndex==0 ? "disabled" : ""}
                            disabled={currentIndex.groupQuestionsIndex == 0 &&currentIndex.questionsIndex==0? true : false}
                            onClick={(e) => {
                                if(currentIndex.groupQuestionsIndex == 0 &&currentIndex.questionsIndex==0){
                                    return;
                                }
                                if(currentIndex.questionsIndex!=0 &&currentIndex.groupQuestionsIndex==0){
                                    setQuestion(questions[currentIndex.questionsIndex - 1]);
                                    
                                    
                                    setCurrentIndex(prev => {
                                        return {
                                            questionsIndex:prev.questionsIndex-1,
                                            groupQuestionsIndex: questions[currentIndex.questionsIndex -1].questions.length - 1
                                        }
                                    });
                                    
                                    return;
                                }
                                setCurrentIndex(prev => {
                                    return {
                                        ...prev,
                                        groupQuestionsIndex: prev.groupQuestionsIndex - 1
                                    }
                                });
                            }}

                        >Prev</Button>
                        <Button

                            onClick={(e) => {
                                if (currentIndex.questionsIndex + 1 == questions.length && currentIndex.groupQuestionsIndex + 1 == question.questions.length) {

                                    return;
                                }
                                if (currentIndex.groupQuestionsIndex + 1 == question.questions.length) {

                                    setQuestion(questions[currentIndex.questionsIndex + 1]);
                                    setCurrentIndex(prev => {
                                        return {
                                            groupQuestionsIndex: 0,
                                            questionsIndex: prev.questionsIndex + 1
                                        }
                                    });
                                    return;
                                }
                                setCurrentIndex(prev => {
                                    return {
                                        ...prev,
                                        groupQuestionsIndex: prev.groupQuestionsIndex + 1
                                    }
                                });
                            }}
                        >{currentIndex.questionsIndex + 1 == questions.length && currentIndex.groupQuestionsIndex + 1 == question.questions.length ? "Submit" : "Next"}</Button>
                    </div>
                </div> :
                <div className="container-fluid">
                    {
                        questions.map((question)=>
                        <div className='p-3 question-cont my-5'>
                            <h3 className="card-title">{question?.title}</h3>
                            {question.questions.map((ques)=>
                            <div className="questionAnswer my-3">
                                <h5 className="text-justify">{ques.question}</h5>
                                <label  style={{
                                    fontWeight:"bold"
                                }}>Correct Answer: {ques.answer}</label>
                                <label style={{
                                    fontWeight:"bold"
                                }}>Your Answer: <label className={ques.userAnswer && ques.userAnswer == ques.answer?"success":"error"} style={{
                                    fontWeight:"normal"
                                }}>{ques.userAnswer??"No Answer"}</label></label>
                            </div>)}
                        </div>)
                    }
                </div>}
        </div>
    </div>


}


