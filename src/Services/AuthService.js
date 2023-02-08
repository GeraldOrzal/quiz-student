import {redirect} from 'react-router-dom'
const baseURL = "http://localhost:5000";
const  login = async ({idnumber,password},cb)=>{
    const data = await (await fetch(`${baseURL}/login`,{
      method:"POST",
      headers: new Headers({'content-type': 'application/json'}),
        credentials:"include",
      body:JSON.stringify(Object.freeze({
        idnumber,
        password
      })),
    })).json()
    cb(data);
}
const  user = async ()=>{
  const data = await (await fetch(`${baseURL}/user`,{
    method:"GET",
    headers: new Headers({'content-type': 'application/json'}),
      credentials:"include",
    
  })).json()

  if(!data.data){
    return redirect("/")
  }
  return data.data
} 
const logout = async (cb)=>{
  const data = await (await fetch(`${baseURL}/logout`,{
    method:"POST",
    headers: new Headers({'content-type': 'application/json'}),
    credentials:"include",
    
  })).json()
  cb();
}
const authService = {
    login,
    user,
    logout
};

export default authService;