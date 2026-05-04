import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <Link to="/" style={logoStyle}>
        Fresh Mart
      </Link>
      
      {/* Đây là nơi báo lỗi vì thiếu searchContainerStyle */}
      <div style={searchContainerStyle}>
        <input 
          type="text" 
          placeholder="Tìm kiếm trong Fresh Mart" 
          style={searchInputStyle} 
        />
      </div>

      <div style={{ display: 'flex', gap: '15px' }}>
        <Link to="/register" style={btnGhost}>Đăng ký</Link>
        <Link to="/login" style={btnSolid}>Đăng nhập</Link>
      </div>
    </nav>
  );
};

// --- PHẦN KHAI BÁO CÁC BIẾN STYLE (Bị thiếu dẫn đến lỗi) ---

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 50px',
  backgroundColor: '#d9e8d1',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
};

const logoStyle = { 
  fontSize: '24px', 
  fontWeight: 'bold', 
  color: '#2d5a27', 
  fontStyle: 'italic',
  textDecoration: 'none',
  cursor: 'pointer'
};

const searchContainerStyle = {
  flex: 1,
  margin: '0 50px'
};

const searchInputStyle = {
  width: '100%',
  padding: '8px 20px',
  borderRadius: '20px',
  border: '1px solid #ccc',
  outline: 'none'
};

const btnGhost = { 
  textDecoration: 'none', 
  color: '#2d5a27', 
  padding: '8px 20px' 
};

const btnSolid = { 
  ...btnGhost, 
  backgroundColor: 'white', 
  borderRadius: '20px', 
  border: '1px solid #2d5a27' 
};

export default Navbar;