import React,{useRef} from 'react'
import {Link,useNavigate} from  'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import{MdOutlineSpaceDashboard,MdOutlineQuiz,MdOutlineLogout} from 'react-icons/md'
import authService from '../Services/AuthService'
export default function Nav({user}) {
  const navigate = useNavigate();
  const bg = useRef();
  const rightPanel = useRef();
  
  return (
    <nav className="p-4">
        <div>
            <h4 className="text-white">{user.name}</h4>
        </div>

          <Link className="pc" to="/home">Dashboard</Link>

          <form 
          className="pc"
          onSubmit={(e)=>{
            e.preventDefault();
            authService.logout(()=>{
              navigate("/")
            })
          }} method="POST">
              <button type="submit"> Logout</button>
          </form>
        
        <AiOutlineMenu className="mobile"
          color='white'
          onClick={
            ()=>{
                setTimeout(()=>{
                  bg.current.style.display = "block";
                },1000)
                rightPanel.current.style.right = 0;
            }
          }
        />
        <div className="background" ref={bg}
          onClick={
            (e)=>{
              setTimeout(()=>{
                e.target.style.display="none";
              },500)
              
              rightPanel.current.style.right = "-100%";
            }
          }
        ></div>
        <div
         className='mobile-right'
         ref={rightPanel}
        >
            
            <Link to="/home"><MdOutlineSpaceDashboard/> Dashboard</Link>
            <form onSubmit={(e)=>{
            e.preventDefault();
            authService.logout(()=>{
              navigate("/")
            })
          }} method="POST">
              <button type="submit"><MdOutlineLogout/> Logout</button>
            </form>
            
        </div>
    </nav>
  )
}
