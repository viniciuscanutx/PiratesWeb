import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import './Navbar.css';

const Navbar = () => {
    const [navActive] = useState(false);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!search) return
        navigate(`/search?q=${search}`, { replace: true });
        setSearch("");
    };

    return (
        <nav className="navbar">
            <h2>
                <img src="https://pt.boxcritters.wiki/images/3/38/Chap%C3%A9u_Pirata_%C3%ADcone.png" alt="" />
            </h2>
            <ul className={`nav-links ${navActive ? 'nav-active' : ''}`}>
                    <a href="/" className="dropbtn">Home</a>
                    <a href="/allmovies" className="dropbtn">Movies</a>
                    <a href="/allseries" className="dropbtn">Series</a>
                    </ul>
            <form id='form01' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder=""
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    );
};

export default Navbar;
