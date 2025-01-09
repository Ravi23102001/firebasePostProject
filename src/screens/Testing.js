import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Testing = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('name'))

    // Get a specific search parameter
    const query = searchParams.get('query');
    const updateSearchParams = () => {
        setSearchParams({ query: 'newQuery', page: 2,name:'ravi' });
    };
    return (
        <div>Testing page
            <p>Current Query: {query}</p>
            <button onClick={updateSearchParams}>Update Query</button>
        </div>
    )
}

export default Testing