import React from "react";

const Pagination = ({postPerPage, totalPost, paginate}) => {

    const pageNumber = [];
    
    for(let i = 1; i <= Math.ceil(totalPost / postPerPage); i++){
        pageNumber.push(i);
    }
    return (
        <div>
        {pageNumber.length > 1 ? (
        <nav>
            <ul className="table__pagination">
                {pageNumber.map(number => (
                    <li key={number} className="table__pagination-item">
                        <a onClick={() => {paginate(number)}} href="#!"  className="table__pagination-item">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
            
        </nav>) : null }
        </div>
    )

}

export default Pagination;