import {redirect} from 'react-router-dom'
const baseURL = "http://localhost:5000";
let allAnswers = [];

const  getAllQuiz = async (cb)=>{
  const data = await (await fetch(`${baseURL}/quiz`,{
    method:"GET",
    credentials:"include",
    headers: new Headers({'content-type': 'application/json'}),
  })).json()
  cb(data);
}
const addAnswer = (question,answer)=>{
  
  
  const test = allAnswers.find((x)=>x.id==question.id)
  if(test&&allAnswers.length!=0){
    
    allAnswers.splice(allAnswers.indexOf(test), 1,{
      ...question,
      answer:answer
    });

  }else{
    
    allAnswers.push({
      ...question,
      answer:answer
    })
  }
  
  
}
const submitAnswer = async (quiz_id,totalscore,cb)=>{
  let score = 0;
  allAnswers.forEach((ans)=>{
    if(ans.is_right){
      score++
    }
  })
  const data = await (await fetch(`${baseURL}/answer`,{
    method:"POST",
    credentials:"include",
    
    body:JSON.stringify({
      quiz_id,
      score,
      totalscore,
      allAnswers
    }),
    headers: new Headers({'content-type': 'application/json'})
  })).json()
  cb(data)
}
const  getChoices = async (id,cb)=>{
    const data = await (await fetch(`${baseURL}/choices/${id}`,{
      method:"GET",
      credentials:"include",
      headers: new Headers({'content-type': 'application/json'}),
    })).json()
    cb(data);
}
const  getAnswers = async ({params})=>{
  const data1 = await (await fetch(`${baseURL}/user`,{
    method:"GET",
    headers: new Headers({'content-type': 'application/json'}),
      credentials:"include",
    
  })).json()
  if(!data1.data){
    return redirect("/");
  }
    const data = await (await fetch(`${baseURL}/viewquiz/${params.id}`,{
      method:"GET",
      credentials:"include",
      headers: new Headers({'content-type': 'application/json'}),
    })).json()
    console.log(data)
    return data;
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
  if(cleared.message=="THE USER CURRENTLY THE QUIZ"){
    return redirect(`/home?err=USER ALREADY TAKING THE EXAM`)
  }
  if(cleared.message=="THE USER ALREADY TOOK THE QUIZ"){
    return redirect(`/viewquiz/${params.id}`)
  }
  return null;
}
const quizService = {
    getAllQuiz,
    getChoices,
    checkIfCleared,
    addAnswer,
    submitAnswer,
    getAnswers
};

export default quizService;