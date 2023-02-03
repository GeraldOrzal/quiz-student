
import './App.css';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Label from '../Components/Label';
import { Link} from "react-router-dom";
import {AiOutlineLoading} from 'react-icons/ai'
import {useState,useEffect} from 'react'
import Man from './Man';
import authService from '../Services/AuthService'
import { useNavigate} from "react-router-dom";
function App() {
  const [isLoading, setisLoading] = useState(false)
  const initial ={
    idnumber:"",
    password:""
  };
  const history = useNavigate()
  const [credentials, setcredentials] = useState(initial);
  const [error, seterror] = useState(null)

  return (
    <div className="App">
      <h1 
      className="p-3"
      style={{
        color:"white"
      }}> Sign in </h1>
      <Man/>
      <form className="row row-gap-4 m-0 p-5  " onSubmit={(e)=>{
        console.log("RUN")
        e.preventDefault();
        setisLoading(true);
        authService.login(credentials,(data)=>{
          console.log(data)
          if(data.status==403){
            
            seterror(data)
            setisLoading(false);
            return;
          }
          seterror(null)
          history(`/home`);
          
        })
      }}>
          <h2>Hello Student!</h2>
          {error&&<h4>{error.message}</h4>}
          <Label>ID Number:</Label>
          <Input type="text" onChange={(e)=>{
            if (/^\s*$/.test(e.target.value)) {
              setcredentials(prev=>{
                return{
                  ...prev,
                idnumber:""
                }
              });
              return;
            }
            setcredentials(prev=>{
              return{
                ...prev,
              idnumber:e.target.value.trim()
              }
            });
            
          }}/>
          <Label>Password:</Label>
          <Input type="password"
            onChange={(e)=>{
              if (/^\s*$/.test(e.target.value)) {
                setcredentials(prev=>{
                return{
                  ...prev,
                password:""
                }
              });
                return;
              }
              setcredentials(prev=>{
                return{
                  ...prev,
                password:e.target.value.trim()
                }
              });
            }}
          />
          <Button
            
            
            className={isLoading ||/^\s*$/.test(credentials.idnumber)||/^\s*$/.test(credentials.password)?"disabled":""}
            disabled={isLoading||/^\s*$/.test(credentials.idnumber)||/^\s*$/.test(credentials.password)}
          >{isLoading?<AiOutlineLoading id="loading"/>:"Login"}</Button>
      </form>
    </div>
  );
}

export default App;
