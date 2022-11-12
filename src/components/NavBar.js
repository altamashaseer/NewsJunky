import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './Context';
import Search from './Search';
import logo from '../media/logo.png'

const NavBar = () => {
    const { setQuery } = useGlobalContext();

    // const ref = useRef(null)
    // const AboutModal=()=>{
    //     ref.current.click();
    // }

    return (
        <div id='navbar'>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id='n-main'>
                <div class="container-fluid">
                    <Link className="navbar-brand" onClick={() => { setQuery('general') }} to="/"> <img id='logo' src={logo} alt="logo" /> </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href={'url'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li ><Link className="dropdown-item" onClick={() => { setQuery('business') }} to="/business">Business</Link></li>
                                    <li ><Link className="dropdown-item" onClick={() => { setQuery('health') }} to="/health">Health</Link></li>
                                    <li ><Link className="dropdown-item" onClick={() => { setQuery('science') }} to="/science">Science</Link></li>
                                    <li ><Link className="dropdown-item" onClick={() => { setQuery('sports') }} to="/sports">Sports</Link></li>
                                    <li ><Link className="dropdown-item" onClick={() => { setQuery('technology') }} to="/technology">Technology</Link></li>
                                    <li ><Link className="dropdown-item" onClick={() => { setQuery('entertainment') }} to="/entertainment">Entertainment</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" aria-current="page" onClick={() => { setQuery('about') }} to="/about">About</Link>
                            </li>
                        </ul>
                        <Search searchText={(text) => setQuery(text)} />
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default NavBar
