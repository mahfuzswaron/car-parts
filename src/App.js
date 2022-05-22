import { Route, Routes } from 'react-router-dom';
import Blogs from './components/pages/Blogs/Blogs';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Home from './components/pages/HomePage/Home';
import Login from './components/pages/Login/Login';
import Products from './components/pages/Products/Products';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
