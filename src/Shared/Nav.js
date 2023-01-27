import React,{useRef} from 'react'
import {Link} from  'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import{MdOutlineSpaceDashboard,MdOutlineQuiz,MdOutlineLogout} from 'react-icons/md'
export default function Nav() {
  const bg = useRef();
  const rightPanel = useRef();
  return (
    <nav className="p-4">
        <div>
            <img/>
        </div>
        
          <Link className="pc" to="/user/5">Dashboard</Link>
          <Link className="pc" to="index">Logout</Link>
        
        <AiOutlineMenu className="mobile"
          color='white'
          onClick={
            ()=>{
                setTimeout(()=>{
                  bg.current.style.display = "block";
                },2000)
                rightPanel.current.style.right = 0;
            }
          }
        />
        <div className="background" ref={bg}
          onClick={
            (e)=>{
              setTimeout(()=>{
                e.target.style.display="none";
              },1000)
              
              rightPanel.current.style.right = "-100%";
            }
          }
        ></div>
        <div
         className='mobile-right'
         ref={rightPanel}
        >
            
            <Link to="/user/5"><MdOutlineSpaceDashboard/> Dashboard</Link>
            <Link to="index"><MdOutlineLogout/> Logout</Link>
            
        </div>
    </nav>
  )
}
