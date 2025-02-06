import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import logo from '../../assets/LOGO.png';
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-primary text-white"
        style={{
          paddingLeft: '50px',
          paddingRight: '50px',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-white" onClick={() => navigate('/')}>
            <img src={logo} alt="Logo" width="200px" height="50px" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  onClick={() => navigate('/')}
                  style={{ padding: '8px 16px', cursor: 'pointer' }}
                >
                  Beranda
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  onClick={() => navigate('/jual')}
                  style={{ padding: '8px 16px', cursor: 'pointer' }}
                >
                  Jual
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  onClick={() => navigate('/beli')}
                  style={{ padding: '8px 16px', cursor: 'pointer' }}
                >
                  Beli
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  onClick={() => navigate('/track-order')}
                  style={{ padding: '8px 16px', cursor: 'pointer' }}
                >
                  Track Order
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* CSS untuk efek hover */}
      <style>
        {`
          .nav-link:hover {
            color: #ffcc00 !important;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 5px;
            transition: all 0.3s ease;
          }
        `}
      </style>
    </div>
  );
}

export default Navbar;