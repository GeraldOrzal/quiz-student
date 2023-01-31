import React, { useState, useEffect } from 'react'
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Label from '../../Components/Label';
import Nav from '../../Shared/Nav'
import { AiOutlineLoading } from 'react-icons/ai'
import { useSearchParams,useParams, useLocation } from "react-router-dom"
import './css/viewquiz.css';
import quizService from '../../Services/QuizService'

export default function ViewQuiz(props) {

    const { state: questions } = useLocation();
    const {id}= useParams();
    const [searchParams] = useSearchParams();
    const [question, setQuestion] = useState(questions.questions[0]);
    const [currentIndex, setCurrentIndex] = useState({
        questionsIndex: 0,
        groupQuestionsIndex: 0
    });
    const [choices, setchoices] = useState({
        choices: [],
        isloading: true
    })
    useEffect(() => {



        setchoices({
            choices: [],
            isloading: true
        })
        if(currentIndex.questionsIndex + 1 == questions.length){
            return;
        }
        quizService.getChoices(question.questions[currentIndex.groupQuestionsIndex].id, (data) => {
            setchoices({
                choices: data,
                isloading: false
            })
        })
    }, [currentIndex.groupQuestionsIndex])
    return <div className="ViewQuiz">
        <Nav />
        <h1 className="p-3">History {searchParams.get("view") ? "(50/50)" : ""}</h1>
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
                        {question.title == "Identification" && <Input className="w-100" type="text" defaultValue={question.questions[currentIndex.groupQuestionsIndex].userAnswer ?? ""} />}
                        {question.title == "Multiple" &&
                            <div>
                                {
                                    !choices.isloading ? choices.choices.map((choice) => <div className="row my-3">
                                        <Input className="col-2" type="radio" name="answer"
                                            defaultValue={
                                                choice.is_right
                                            }
                                            onChange={(e) => {
                                                console.log(e.target.value)
                                            }}
                                        />
                                        <Label className="col-6">{choice.option_txt}</Label>

                                    </div>) : <AiOutlineLoading id="loading" />
                                }


                            </div>}
                    </div>
                    <div className="card-footer">
                        <Button
                            className={currentIndex.groupQuestionsIndex == 0 && currentIndex.questionsIndex == 0 ? "disabled" : ""}
                            disabled={currentIndex.groupQuestionsIndex == 0 && currentIndex.questionsIndex == 0 ? true : false}
                            onClick={(e) => {
                                if (currentIndex.groupQuestionsIndex == 0 && currentIndex.questionsIndex == 0) {
                                    return;
                                }

                                if (currentIndex.questionsIndex != 0 && currentIndex.groupQuestionsIndex == 0) {
                                    setQuestion(questions[currentIndex.questionsIndex - 1]);


                                    setCurrentIndex(prev => {
                                        return {
                                            questionsIndex: prev.questionsIndex - 1,
                                            groupQuestionsIndex: questions[currentIndex.questionsIndex - 1].questions.length - 1
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
                                if (currentIndex.groupQuestionsIndex + 1 == question.questions.length) {
                                    quizService.submitAnswer(id,question.questions.length)
                                    return;
                                }
                                var radios = document.getElementsByTagName('input');
                                var value;
                                for (var i = 0; i < radios.length; i++) {
                                    if (radios[i].type === 'radio' && radios[i].checked) {
                                        // get value, set checked flag or do whatever you need to
                                        value = radios[i].value;
                                    }
                                }
                                quizService.addAnswer(question.questions[currentIndex.groupQuestionsIndex],value)
                                /*
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
                                */
                                setCurrentIndex(prev => {
                                    return {
                                        ...prev,
                                        groupQuestionsIndex: prev.groupQuestionsIndex + 1
                                    }
                                });
                            }}
                        >{currentIndex.groupQuestionsIndex + 1 == question.questions.length ? "Submit" : "Next"}</Button>
                    </div>
                </div> :
                <div className="container-fluid">
                    {
                        questions?.map((question) =>
                            <div className='p-3 question-cont my-5'>
                                <h3 className="card-title">{question?.title}</h3>
                                {question.questions.map((ques) =>
                                    <div className="questionAnswer my-3">
                                        <h5 className="text-justify">{ques.question}</h5>
                                        <label style={{
                                            fontWeight: "bold"
                                        }}>Correct Answer: {ques.answer}</label>
                                        <label style={{
                                            fontWeight: "bold"
                                        }}>Your Answer: <label className={ques.userAnswer && ques.userAnswer == ques.answer ? "success" : "error"} style={{
                                            fontWeight: "normal"
                                        }}>{ques.userAnswer ?? "No Answer"}</label></label>
                                    </div>)}
                            </div>)
                    }
                </div>}
        </div>
    </div>


}


