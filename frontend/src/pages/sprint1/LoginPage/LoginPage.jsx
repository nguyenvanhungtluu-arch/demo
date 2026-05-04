// import React from 'react';

// const LoginPage = () => {
//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <h2>Đăng Nhập</h2>
//       <input type="text" placeholder="Tên đăng nhập" /><br/><br/>
//       <input type="password" placeholder="Mật khẩu" /><br/><br/>
//       <button>Đăng nhập</button>
//     </div>
//   );
// };

// // THIẾU DÒNG NÀY SẼ GÂY LỖI TRONG ẢNH
// export default LoginPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Dùng để chuyển trang bằng code

const LoginPage = () => {
  // 1. Khai báo State để lưu thông tin nhập vào
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // 2. Hàm xử lý khi nhấn nút Đăng nhập
  const handleLogin = (e) => {
    e.preventDefault(); // Ngăn trang web bị load lại
    setError('');

    // Logic giả lập xác thực (Giả sử tài khoản đúng là admin/123456)
    if (credentials.username === 'admin' && credentials.password === '123456') {
      alert("Đăng nhập thành công!");
      
      // Lưu trạng thái đăng nhập vào LocalStorage (Bảo mật cơ bản ở Frontend)
      localStorage.setItem('isLoggedIn', 'true');
      
      // 3. Điều hướng người dùng về trang chủ
      navigate('/');
    } else {
      setError("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  };

  return (
  
    <div className="auth-container"> {/* Thẻ này giúp căn giữa màn hình */}
      <div className="auth-form">     {/* Thẻ này tạo khung màu xanh nhạt */}
        <h2>Đăng Nhập</h2>
        <p>Chào mừng bạn đến với chúng tôi!<br/>Vui lòng nhập thông tin của bạn</p>
        
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Nhập email..." />
        </div>

        <div className="input-group">
          <label>Mật khẩu</label>
          <input type="password" placeholder="Nhập mật khẩu..." />
        </div>

        <a href="#" className="forgot-password">Quên mật khẩu ?</a>

        <button className="btn-login">Đăng nhập</button>

        <p className="register-link">
          Chưa có tài khoản ? <span>Đăng ký</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

