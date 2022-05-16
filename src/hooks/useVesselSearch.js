import {useEffect, useState} from "react";
import axios from "axios";

export const useVesselSearch = (searchQuery, sortValue) => {
    const [vessels, setVessels] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [fetchingFailed, setFetchingFailed] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [vesselsPerPage] = useState(10);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        if (fetching) {
            let cancel;
            axios.get("http://localhost:8080/api/vessels/search/nameContains", {
                params: {
                    name: searchQuery,
                    sort: sortValue,
                    page: currentPage,
                    size: vesselsPerPage
                },
                cancelToken: new axios.CancelToken(c => cancel = c)
            }).then(response => {
                setVessels([...vessels, ...response.data]);
                setCurrentPage(prevState => prevState + 1);
                setTotalCount(parseInt(response.headers['x-total-count']));
            }).catch(reason => {
                if (axios.isCancel(reason)) return
                setFetchingFailed(true);
            }).finally(() => setFetching(false))
            return () => cancel();
        }
    }, [fetching]);

    useEffect(() => {
        setVessels([]);
        setCurrentPage(0);
        setFetching(true);
    }, [searchQuery, sortValue])

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return () => {
            document.removeEventListener("scroll", scrollHandler)
        };
    })

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && vessels.length < totalCount) {
            setFetching(true);
        }
    }

    return {vessels, fetching, fetchingFailed, currentPage, vesselsPerPage, totalCount}
}
