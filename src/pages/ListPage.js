import React, {Fragment, useState} from "react";
import {ListComponent} from "../components/ListComponent";
import {useVesselSearch} from "../hooks/useVesselSearch";

export const ListPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortValue, setSortValue] = useState('name,asc')

    const {
        vessels,
        fetching,
        fetchingFailed,
        currentPage,
        vesselsPerPage,
        totalCount
    } = useVesselSearch(searchQuery, sortValue);

    const searchHandler = (e) => {
        setSearchQuery(e.target.value);
    }

    const sortHandler = (e) => {
        setSortValue(e.target.value);
    }

    return (
        <Fragment>
            <div className="px-3 py-2 border-bottom mb-3 bg-light">
                <div className="container d-flex flex-wrap justify-content-center">
                    <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Type name..."
                            aria-label="Search"
                            value={searchQuery}
                            onChange={searchHandler}
                        />
                    </form>
                    <div className="text-end">
                        <select onChange={sortHandler} className="form-select">
                            <option value={'name,asc'}>Sort by name ascending</option>
                            <option value={'name,desc'}>Sort by name descending</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="container">
                <ListComponent vessels={vessels}/>
            </div>
        </Fragment>
    )
}
