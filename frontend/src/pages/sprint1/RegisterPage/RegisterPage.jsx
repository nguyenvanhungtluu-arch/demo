// import React, { useState } from 'react';

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({ username: '', password: '' });

//   return (
//     <div style={{ maxWidth: '300px', margin: '50px auto', textAlign: 'center' }}>
//       <h2>Đăng Ký Thành Viên</h2>
//       <input 
//         type="text" 
//         placeholder="Tên đăng nhập" 
//         style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
//       />
//       <input 
//         type="password" 
//         placeholder="Mật khẩu" 
//         style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
//       />
//       <button style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none' }}>
//         Đăng Ký
//       </button>
//       <br />
//       <a href="/" style={{ fontSize: '12px' }}>Quay lại trang chủ</a>
//     </div>
//   );
// };

// export default RegisterPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const RegisterPage = () => {
  // 1. Tạo State để lưu giá trị ô nhập và lỗi
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  // 2. Hàm kiểm tra lỗi (Bản chất của Validation)
  const validate = () => {
    let newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = "Tên đăng nhập không được để trống";
    }
    
    if (!formData.email.includes('@')) {
      newErrors.email = "Email không đúng định dạng (thiếu @)";
    }
    
    if (formData.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Trả về true nếu không có lỗi
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Dữ liệu hợp lệ! Đang gửi lên hệ thống...");
      // Gọi API gửi dữ liệu ở đây
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-form register-form">
        <h2>Tạo tài khoản</h2>
        <p>Chào mừng bạn đến với FreshMart</p>
        
        <div className="name-row">
          <div className="input-group">
            <label>Họ</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Tên</label>
            <input type="text" />
          </div>
        </div>

        <div className="input-group">
          <label>Email</label>
          <input type="email" />
        </div>

        <div className="input-group">
          <label>Số điện thoại</label>
          <input type="text" />
        </div>

        <div className="input-group">
          <label>Mật khẩu</label>
          <input type="password" />
        </div>

        <div className="input-group">
          <label>Nhập lại mật khẩu</label>
          <input type="password" />
        </div>

        <button className="btn-login" style={{ marginTop: '30px' }}>Đăng ký</button>

        <p className="register-link">
          Đã có tài khoản? <Link to="/login"><span>Đăng nhập</span></Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;