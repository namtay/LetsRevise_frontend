import React from 'react';
import "../css/Footer.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Footer() {
    return (
     
        
        <div className="footer-copyright text-center py-3 bg-dark text-white navbar-static-bottom footer">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a className="text-white" href="#">letsRevise.com </a>
          </MDBContainer>
        </div>
     
    )
}

export default Footer


      //   <h5 className="title">Footer Content</h5>
            //   <p>
            //     Here you can use rows and columns here to organize your footer
            //     content.
            //   </p>
            // </MDBCol>
            // <MDBCol md="6">
            //   <h5 className="title">Links</h5>
            //   <ul>
            //     <li className="list-unstyled">
            //       <a href="#!">Link 1</a>
            //     </li>
            //     <li className="list-unstyled">
            //       <a href="#!">Link 2</a>
            //     </li>
            //     <li className="list-unstyled">
            //       <a href="#!">Link 3</a>
            //     </li>
            //     <li className="list-unstyled">
            //       <a href="#!">Link 4</a>
            //     </li>
            //   </ul>
            // <MDBFooter className="font-small pt-4 mt-auto bg-light" >
            // </MDBFooter>
            