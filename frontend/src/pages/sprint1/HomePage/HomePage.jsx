import React from 'react';
import { Link } from 'react-router-dom'; // Dùng Link thay cho thẻ <a>

const HomePage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: '#28a745' }}>🌿 Trang Chủ Nông Sản</h1>
      <p>Chào mừng bạn đến với hệ thống quản lý nông sản sạch.</p>
      
      <div style={{ marginTop: '20px' }}>
        <Link to="/login" style={{ marginRight: '15px', textDecoration: 'none', color: '#007bff' }}>
          Đăng nhập
        </Link>
        <Link to="/register" style={{ textDecoration: 'none', color: '#007bff' }}>
          Đăng ký
        </Link>
      </div>
    </div>
  );
};

export default HomePage;