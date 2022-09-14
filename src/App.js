import { Route, Routes } from 'react-router-dom';
// import Blogs from './components/pages/Blogs/Blogs';
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
import Payment from './components/pages/Payment/Payment';
import MyOrders from './components/pages/Dashboard/MyOrders';
import AddReview from './components/pages/Dashboard/AddReview';
import MyProfile from './components/pages/Dashboard/MyProfile';
import ManageAllOrders from './components/pages/Dashboard/ManageAllOrders';
import MakeAdmin from './components/pages/Dashboard/MakeAdmin';
import AddProduct from './components/pages/Dashboard/AddProduct';
import ManageProducts from './components/pages/Dashboard/ManageProducts';
import RequireAdmin from './components/shared/RequireAdmin';
import ComingSoon from './components/pages/Blogs/ComingSoon';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/shared/Loader';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import { useEffect } from 'react';
import { fetchUser } from './app/Slices/userSlice';
import useProducts from './hooks/useProducts';

function App() {
  const [firebaseUser, firebaseLoading] = useAuthState(auth);
  const { user, isloading } = useSelector((state) => state.user);
  const [products] = useProducts([])
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(firebaseUser))
  }, [])
  if (isloading || firebaseLoading || !products || !products?.length) return <Loader />
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>}>
          <Route path='myorders' element={<MyOrders />} />
          <Route path='addreview' element={<AddReview />} />
          <Route path='/dashboard' exact={true} element={<MyProfile />} />
          <Route path='manageOrders' element={<RequireAdmin>
            <ManageAllOrders />
          </RequireAdmin>} />
          <Route path='makeadmin' element={
            <RequireAdmin>
              <MakeAdmin />
            </RequireAdmin>
          } />
          <Route path='addproduct' element={<RequireAdmin>
            <AddProduct />
          </RequireAdmin>} />
          <Route path='manageproducts' element={<RequireAdmin>
            <ManageProducts />
          </RequireAdmin>} />
        </Route>

        <Route path='/blogs' element={<ComingSoon />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registar' element={<Registar />} />
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>} />
        <Route path='/payment/:id' element={
          <RequireAuth>
            <Payment />
          </RequireAuth>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
