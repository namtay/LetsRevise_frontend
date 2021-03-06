import React from 'react';
import "../css/Pagination.css";


function Pagination({questionPerPage,totalQuestions,paginate}) {
   const pageNumbers= [];
    for (let i = 1;i<= Math.ceil(totalQuestions / questionPerPage);i++){
        pageNumbers.push(i);
    }
    const numberList= pageNumbers.map(number=>(
        <li className="page-item" key={number}><a class="page-link" href="#" onClick={()=>paginate(number)}>{number}</a></li>              
    ))

    return (
        <div className="">
            <nav className="col-sm-5 mx-auto mt-5">
                <ul className="pagination">
                    {
                      numberList 
                    }
                                 
                   
                </ul>
            </nav>
        </div>
        
    )
}

export default Pagination;
