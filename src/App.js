import { Route, Routes } from 'react-router-dom';
import Blogs from './components/pages/Blogs/Blogs';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Home from './components/pages/HomePage/Home';
import Login from './components/pages/Authentication/Login';
import Registar from './components/pages/Authentication/Registar';
import Products from './components/pages/Products/Products';
import NotFound from './components/pages/NotFound/NotFound';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import RequireAuth from './components/shared/RequireAuth';
import Purchase from './components/pages/Purchase/Purchase';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registar' element={<Registar />} />
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
