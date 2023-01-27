import React.{useState} from 'react'
import Button from './Button';
import Input from './Input';
import Label from './Label';
export default function QuizCard(props) {
    const [question, setQuestion] = useState(props.questions[0]);
    const [currentIndex, setCurrentIndex] = useState({
        questionsIndex: 0,
        groupQuestionsIndex: 0
    });
  return (
    <div className="card">
    <div className="card-body">
        <h3 className="card-title">{question?.title}</h3>
        <h5 >{`${currentIndex.groupQuestionsIndex + 1} of ${question.questions.length}`}</h5>
        <Label className="my-5">
            {
                question.questions[currentIndex.groupQuestionsIndex].question
            }
        </Label>
        {question.title == "Identification" && <Input className="w-100" type="text" />}
        {question.title == "Multiple" &&
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
            className={currentIndex.groupQuestionsIndex == 0 ? "disabled" : ""}
            disabled={currentIndex.groupQuestionsIndex == 0 ? true : false}
            onClick={(e) => {
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
</div>
  )
}
