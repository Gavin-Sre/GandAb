import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary navbar-dark">
        <div className="container-fluid">
            <Link href="/" className="navbar-brand">Navbar</Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                {/* Hamburger Menu when collapse*/}
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link href="/about" className="nav-link">About</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  );
}

export default Navbar