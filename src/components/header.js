import React from "react";


function Header({ currentPage, handlePageChange }) {

return (
  <nav className="navbar navbar-expand-lg navbar-light"  id="navbar">
      <a className="navbar-brand">Andrew Gracia</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
              <li className="nav-item">
                  <a className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} href="#about"
                      onClick={() => handlePageChange('About')}>About Me </a>
              </li>
              <li className="nav-item">
                  <a className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} href="#Portfolio"
                      onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
              </li>
              <li className="nav-item">
              <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} href="#contact"
                      onClick={() => handlePageChange('Contact')}>Contact</a>
              </li>
              <li className="nav-item">
                  <a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} href="#resume"
                      onClick={() => handlePageChange('Resume')}>Resume</a>
              </li>
          </ul>
      </div>
  </nav>
);
}

export default Header;