// import { useGlobalContext } from './Context';
import React, { useState } from 'react'

const Search = (props) => {
    const { searchText } = props;
    // const { setQuery, Query } = useGlobalContext();
    const [Text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // setQuery(Text)
        searchText(Text)
        setText('') //To reset placeholder
    }
    return (
        <div>
            <form className="d-flex" onSubmit={handleSubmit}>
                <input className="form-control me-2" type="text" placeholder="Search for topics" value={Text} onChange={(e) => { setText(e.target.value) }} />
                <button className="btn btn-primary" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    )
}

export default Search