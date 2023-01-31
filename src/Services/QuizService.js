import {redirect} from 'react-router-dom'
const baseURL = "http://localhost:5000";
const allAnswers = [];
let score = 0;
const  getAllQuiz = async (cb)=>{
  const data = await (await fetch(`${baseURL}/quiz`,{
    method:"GET",
    credentials:"include",
    headers: new Headers({'content-type': 'application/json'}),
  })).json()
  cb(data);
}
const addAnswer = (question,answer)=>{
  if(answer=="1"){
    score++
  }
  allAnswers.push({
    ...question,
    answer:answer
  })
  console.log(score)
}
const submitAnswer = async (quiz_id,totalscore)=>{
  const data = await (await fetch(`${baseURL}/answer`,{
    method:"POST",
    credentials:"include",
    
    body:JSON.stringify({
      quiz_id,
      score,
      totalscore
    }),
    headers: new Headers({'content-type': 'application/json'})
  })).json()
  console.log(data)
}
const  getChoices = async (id,cb)=>{
    const data = await (await fetch(`${baseURL}/choices/${id}`,{
      method:"GET",
      credentials:"include",
      headers: new Headers({'content-type': 'application/json'}),
    })).json()
    cb(data);
}
const  checkIfCleared = async ({params,request})=>{
  console.log(request)
  const data = await (await fetch(`${baseURL}/user`,{
    method:"GET",
    headers: new Headers({'content-type': 'application/json'}),
      credentials:"include",
    
  })).json()
  const cleared = await (await fetch(`${baseURL}/quiz/${params.id}`,{
    method:"GET",
    credentials:"include",
    headers: new Headers({'content-type': 'application/json'}),
  })).json()
  if(!data.data){
      return redirect("/");
  }
  if(request.url!=`http://localhost:3000/quiz/${params.id}?view=true`&&cleared.message!="CLEARED"){
    return redirect(`/quiz/${params.id}?view=true`)
  }
  return null;
}
const quizService = {
    getAllQuiz,
    getChoices,
    checkIfCleared,
    addAnswer,
    submitAnswer
};

export default quizService;