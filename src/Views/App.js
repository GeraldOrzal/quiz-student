
import './App.css';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Label from '../Components/Label';
import { Link} from "react-router-dom";
import {AiOutlineLoading} from 'react-icons/ai'
import {useState} from 'react'
function App() {
  const [isLoading, setisLoading] = useState(false)
  const initial ={
    idnumber:"",
    password:""
  };
  const [credentials, setcredentials] = useState(initial);
  return (
    <div className="App">
      <h1>Sign in </h1>
      <form className="row row-gap-4 m-0 p-5  rounded " onSubmit={(e)=>{
        e.preventDefault();
      }}>
          <h2>Hello Student!</h2>
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
            onClick={(e)=>{
              setisLoading(true);
            }}
            className={isLoading ||/^\s*$/.test(credentials.idnumber)||/^\s*$/.test(credentials.password)?"disabled":""}
            disabled={isLoading||/^\s*$/.test(credentials.idnumber)||/^\s*$/.test(credentials.password)}
          >{isLoading?<AiOutlineLoading id="loading"/>:"Login"}</Button>
      </form>
    </div>
  );
}

export default App;
