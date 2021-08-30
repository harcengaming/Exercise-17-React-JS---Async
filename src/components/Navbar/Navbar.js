import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
    return(
        <div className="Navbar">
            <h2>Menampilkan data API Pokemon</h2>
            <div className="space-link">
                <Link to="/signup" id="link">Daftar</Link>
                <Link to="/login" id="link">Masuk</Link>
                <Link to="/main" id="link">Main</Link>
            </div>
        </div>
    )
    
}

export default Navbar;