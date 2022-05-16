import React from "react";

export const PaginationComponent = ({currentPage, setCurrentPage, totalVessels, vesselsPerPage, paginate}) => {
    const pageNumbers = [];
    const displayedLength = 5;

    for(let i = 1; i <= Math.ceil(totalVessels / vesselsPerPage); i++) {
        if (i < displayedLength + currentPage && (i >= currentPage || i > totalVessels / vesselsPerPage - 4)) {
            pageNumbers.push(i);
        }
    }

    const nextPage = () => setCurrentPage(prev => prev < totalVessels / vesselsPerPage ? prev + 1 : prev);
    const prevPage = () => setCurrentPage(prev => prev > 1 ? prev - 1 : prev);

    return (
        <nav className="m-auto" aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                {
                    currentPage === 1 ?
                        (<li className="page-item disabled"><a className="page-link" href="#" onClick={prevPage}>Previous</a></li>)
                        :
                        (<li className="page-item"><a className="page-link" href="#" onClick={prevPage}>Previous</a></li>)
                }
                {
                    pageNumbers.map((number, i) => (
                        currentPage === number ?
                            <li key={i} className="page-item active"><a className="page-link" href="#" onClick={() => paginate(number)}>{number}</a></li>
                            :
                            <li key={i} className="page-item"><a className="page-link" href="#" onClick={() => paginate(number)}>{number}</a></li>

                    ))
                }
                {
                    currentPage >= totalVessels / vesselsPerPage ?
                        (<li className="page-item disabled"><a className="page-link" href="#" onClick={nextPage}>Next</a></li>)
                        :
                        (<li className="page-item"><a className="page-link" href="#" onClick={nextPage}>Next</a></li>)
                }
            </ul>
        </nav>
    )
}
