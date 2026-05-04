import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#74d69b', // Màu xanh đậm chuẩn
      padding: '40px 50px',
      display: 'flex',          // Quan trọng: Dàn hàng ngang
      justifyContent: 'space-between',
      marginTop: '50px'
    }}>
      <div style={footerCol}>
        <h4 style={footerTitle}>Fresh Mart</h4>
        <p>Xanh từ nguồn - Sạch đến bàn ăn</p>
      </div>
      
      <div style={footerCol}>
        <h4 style={footerTitle}>Hỗ trợ</h4>
        <p>Phương thức thanh toán</p>
        <p>Chính sách giao hàng</p>
        <p>Chính sách đổi trả</p>
      </div>

      <div style={footerCol}>
        <h4 style={footerTitle}>Liên hệ</h4>
        <p>Email: support@freshmart.com</p>
        <p>Hotline: 1900 1234</p>
      </div>

      <div style={footerCol}>
        <h4 style={footerTitle}>Kết nối</h4>
        <div style={{ fontSize: '20px', display: 'flex', gap: '10px' }}>
          <span>f</span> <span>d</span> <span>o</span>
        </div>
      </div>
    </footer>
  );
};

const footerCol = { flex: 1 };
const footerTitle = { marginBottom: '15px', borderBottom: '1px solid #5abf84', paddingBottom: '5px' };
export default Footer;