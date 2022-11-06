import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './Context';

const NavBar = () => {
    const [Text, setText] = useState('')
    const {setQuery, Query}=useGlobalContext();
    const handleSubmit=(e)=>{
        e.preventDefault();
        setQuery(e.target.value)
        console.log(Query);
    }
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsJunky</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li> */}
                            {/* <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li> */}
                            <li className="nav-item"><Link className="nav-link" onClick={()=>{setQuery('business')}} to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" onClick={()=>{setQuery('health')}}to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" onClick={()=>{setQuery('science')}}to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" onClick={()=>{setQuery('sports')}}to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" onClick={()=>{setQuery('technology')}}to="/technology">Technology</Link></li>
                            <li className="nav-item"><Link className="nav-link" onClick={()=>{setQuery('entertainment')}}to="/entertainment">Entertainment</Link></li>
                        </ul>
                        <form class="d-flex" role="search" onSubmit={handleSubmit}>
                            <input class="form-control me-2" type="search" placeholder="e.g. politics, cricket.." aria-label="Search" value={Text} onChange={(e)=>{setQuery(e.target.value)}}/>
                                <button class="btn btn-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default NavBar
