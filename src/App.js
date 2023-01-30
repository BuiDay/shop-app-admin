import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import '../src/assets/styles/App.css';
import MainLayout from './components/MainLayout/MainLayout';
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Enquiries from './pages/Enquiries';
import BlogList from './pages/BlogList';
import BlogCategoryList from './pages/BlogCategoryList';
import Orders from './pages/Orders';
import ProductList from './pages/ProductList';
import BrandList from './pages/BrandList';
import ColorList from './pages/ColorList';
import CategoryList from './pages/CategoryList';
import AddBlog from './pages/AddBlog';
import AddBlogCategory from './pages/AddBlogCategory';
import AddColor from './pages/AddColor';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='reset-password' element={<ResetPassword/>} />
        <Route path='forgot-password' element={<ForgotPassword/>} />
        <Route path='admin' element={<MainLayout/>}>
          <Route index element={<Dashboard/>} />
          <Route path='customers' element={<Customers/>} />
          <Route path='enquiries' element={<Enquiries/>} />
          <Route path='blog-list' element={<BlogList />} />
          <Route path='blog-category-list' element={<BlogCategoryList />} />
          <Route path='orders' element={<Orders />} />
          <Route path='product-list' element={<ProductList/>} />
          <Route path='brand-list' element={<BrandList/>} />
          <Route path='category-list' element={<CategoryList />} />
          <Route path='color-list' element={<ColorList />} />
          <Route path='blog' element={<AddBlog />} />
          <Route path='blog-category' element={<AddBlogCategory />} />
          <Route path='color' element={<AddColor/>} />
          <Route path='product' element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
