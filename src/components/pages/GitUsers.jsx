import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'

export default function GitUsers({ showUser }) {
    const [pageNumber, setPageNumber] = useState(0)
    const userPerPage = 5
    const itemsVisited = pageNumber * userPerPage

    const numberOfPage = Math.ceil(showUser.length / userPerPage)

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    const displayUser = showUser.slice(itemsVisited, itemsVisited + userPerPage).map((users, index) => {
        const { avatar_url, login, id, type } = users
        return (
            <div className="card" key={index}>
                <div className="card-body">
                    <div className="image">
                        <img src={avatar_url} alt="Not found" />
                    </div>
                    <div className="detail">
                        <div className="name">{login}</div>
                        <div className="position">{type}</div>
                        <div className="git-detail">
                            <div className="git-detail-body">
                                <div className="git-content">
                                    <span className="git-content-content">Article</span>
                                    <span className="number1">{id}</span>
                                </div>
                                <div className="git-content">
                                    <span className="git-content-content">Follower</span>
                                    <span className="number1">20</span>
                                </div>
                                <div className="git-content">
                                    <span className="git-content-content">Rating</span>
                                    <span className="number1">40</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            {displayUser}
            <ReactPaginate
                pageCount={numberOfPage}
                onPageChange={changePage}
                containerClassName={"pagination_btn"}
                previousLinkClassName={"previous_btn"}
                nextLinkClassName={"next_btn"}
                disabledClassName={"pagination_disabled"}
                activeClassName={"active_pagination"}
            />
        </>
    )
}
