import React,{useState} from 'react';
import {Link,useHistory} from "react-router-dom";
import SignInModal from './SignInModal';
import SignUpModal from "./SignUpModal";

function Navbar() {
    const [show, setShow] = useState(false);
    const history = useHistory();
    const [loginShow,setLoginShow]=useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleLoginShow = () => setLoginShow(true);
    const handleLoginClose = () => setLoginShow(false);
    
    const handleLogin=(e)=>{
           e.preventDefault();
           history.push("/menu");
           handleLoginClose();
    }

    return (
        <div className="row row-content">
          <div className="col-12">          
            <nav className="navbar navbar-expand-sm  bg-dark text-light fixed-top" >
               <span className="navbar-brand h1">LetsRevise</span>
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item"><Link to="/" className="nav-link text-light">Home</Link></li>                       
                    <li className="nav-item"><Link onClick={handleShow} className="nav-link text-light" >SignUp</Link></li>    
                    <li className="nav-item"><Link onClick={handleLoginShow} className="nav-link text-light">Login</Link></li>   
                       
                </ul>              
            
                
            </nav>
            {
                show? <SignUpModal show={handleShow}
                 onHide={handleClose} 
                 text="SignUp"></SignUpModal>:null
            }
            { 
               loginShow?
               <SignInModal
               show={handleLoginShow}
               onHide={handleLoginClose} 
               text="Login" onClick={handleLogin}>
               </SignInModal>:null

            }
            </div>           
      
        </div>


        
               
    )
}

export default Navbar
