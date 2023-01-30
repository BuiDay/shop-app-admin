import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import '../src/assets/styles/App.css';
import MainLayout from './components/MainLayout/MainLayout';
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Customer from './pages/Customer';
import Enquiries from './pages/Enquiries';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='reset-password' element={<ResetPassword/>} />
        <Route path='forgot-password' element={<ForgotPassword/>} />
        <Route path='admin' element={<MainLayout/>}>
          <Route index element={<Dashboard/>} />
          <Route path='customers' element={<Customer/>} />
          <Route path='enquiries' element={<Enquiries/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
