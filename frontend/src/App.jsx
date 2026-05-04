import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import './App.css';
// Chú ý đường dẫn có thêm folder /sprint1/ và tên folder của từng trang
import HomePage from './pages/sprint1/HomePage/HomePage';
import LoginPage from './pages/sprint1/LoginPage/LoginPage';
import RegisterPage from './pages/sprint1/RegisterPage/RegisterPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;