import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ setIsSidebarExpanded }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    setIsSidebarExpanded(newState);
  };

  const handleLogout = async () => {
    const clearToken = await axios.post('https://ka-store-backend-production.up.railway.app/api/login/logout', {}, {withCredentials: true});
    alert("Berhasil Logout");
    navigate('/login')
  }

  return (
    <div
      style={{
        width: isExpanded ? '250px' : '80px',
        height: '100vh',
        backgroundColor: '#2c3e50',
        color: '#ecf0f1',
        transition: 'width 0.3s ease',
        position: 'fixed',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: isExpanded ? 'space-between' : 'center',
          alignItems: 'center',
          padding: '10px 20px',
          borderBottom: '1px solid #34495e',
        }}
      >
        {isExpanded && <h3 style={{ margin: 0 }}>KA STORE ADMIN</h3>}
        <button
          onClick={toggleSidebar}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: '#ecf0f1',
            cursor: 'pointer',
            fontSize: '20px',
          }}
        >
          {isExpanded ? '←' : '→'}
        </button>
      </div>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        <li
          style={{
            padding: '15px 20px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            borderBottom: '1px solid #34495e',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#1c2a38')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#2c3e50')}  
          onClick={() => navigate("")}
        >
          <i style={{ marginRight: isExpanded ? '10px' : '0' }}>🏠</i>
          {isExpanded && 'Dashboard'}
        </li>
        <li
          style={{
            padding: '15px 20px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            borderBottom: '1px solid #34495e',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#1c2a38')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#2c3e50')}
          onClick={() => navigate("buy-pending")}
        >
          <i style={{ marginRight: isExpanded ? '10px' : '0' }}>📃</i>
          {isExpanded && 'Pending Buy DL List'}
        </li>
        <li
          style={{
            padding: '15px 20px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            borderBottom: '1px solid #34495e',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#1c2a38')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#2c3e50')}
          onClick={() => navigate("sell-pending")}
        >
          <i style={{ marginRight: isExpanded ? '10px' : '0' }}>📃</i>
          {isExpanded && 'Pending Sell DL List'}
        </li>
        <li
          style={{
            padding: '15px 20px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            borderBottom: '1px solid #34495e',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#1c2a38')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#2c3e50')}
          onClick={() => navigate("")}
        >
          <i style={{ marginRight: isExpanded ? '10px' : '0' }}>➕</i>
          {isExpanded && 'Add Order'}
        </li>
        <li
          style={{
            padding: '15px 20px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            borderBottom: '1px solid #34495e',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#1c2a38')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#2c3e50')}
          onClick={() => navigate("history")}
        >
          <i style={{ marginRight: isExpanded ? '10px' : '0' }}>👁️</i>
          {isExpanded && 'Transaction History'}
        </li>
        <li
          style={{
            padding: '15px 20px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            borderBottom: '1px solid #34495e',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#1c2a38')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#2c3e50')}
          onClick={() => navigate("history")}
        >
          <i style={{ marginRight: isExpanded ? '10px' : '0' }}>⚙️</i>
          {isExpanded && 'Setting'}
        </li>
      </ul>

      {/* Logout */}
      <ul
        style={{
          position: 'absolute',
          bottom: '20px',
          listStyle: 'none',
          padding: 0,
          margin: 0,
          width: '100%',
        }}
      >
        <li
          style={{
            padding: '15px 20px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            borderTop: '1px solid #34495e',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#1c2a38')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#2c3e50')}
          onClick={() => handleLogout()}
        >
          <i style={{ marginRight: isExpanded ? '10px' : '0' }}>🚪</i>
          {isExpanded && 'Logout'}
        </li>
      </ul>
    </div>
  );
};

export default SideBar;