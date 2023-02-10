import React, { useState } from 'react';
import './MainLayout.css'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineUser,} from 'react-icons/ai'
import {SiBrandfolder,SiBloglovin} from 'react-icons/si'
import {BiCategoryAlt,BiColorFill} from 'react-icons/bi'
import {FaClipboardList,FaPen,FaClipboard} from 'react-icons/fa'
import {IoIosNotifications} from 'react-icons/io'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import UserAvatar from '../../assets/images/avatar5.jpg'
const { Header, Sider, Content } = Layout;




const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const {
      token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate();

    return (
        <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <h2>Nhat Bui</h2>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['']}
            onClick={({key})=>{
              if(key == 'signout'){

              }else{
                navigate(key)
              }
            }}
            items={[
              {
                key: '',
                icon: <AiOutlineDashboard className='fs-4'/>,
                label: 'Dashboard',
              },
              {
                key: 'customers',
                icon: <AiOutlineUser className='fs-4'/>,
                label: 'Customers',
              },
              {
                key: 'catalog',
                icon: <AiOutlineShoppingCart className='fs-4'/>,
                label: 'Catalog',
                children:[
                  {
                    key: 'product',
                    icon: <AiOutlineShoppingCart className='fs-4'/>,
                    label: 'Add Product',
                  },
                  {
                    key: 'product-list',
                    icon: <AiOutlineShoppingCart className='fs-4'/>,
                    label: 'Product List',
                  },
                  {
                    key: 'brand',
                    icon: <SiBrandfolder className='fs-4'/>,
                    label: 'Brand',
                  },
                  {
                    key: 'brand-list',
                    icon: <SiBrandfolder className='fs-4'/>,
                    label: 'Brand List',
                  },
                  {
                    key: 'category',
                    icon: <BiCategoryAlt className='fs-4'/>,
                    label: 'Category',
                  },
                  {
                    key: 'category-list',
                    icon: <BiCategoryAlt className='fs-4'/>,
                    label: 'Category List',
                  },
                  {key: 'color',
                    icon: <BiColorFill className='fs-4'/>,
                    label: 'Color',
                  },
                  {
                    key: 'color-list',
                    icon: <BiColorFill className='fs-4'/>,
                    label: 'Color List',
                  },
                ]
              },
              {
                key: 'orders',
                icon: <FaClipboardList className='fs-4'/>,
                label: 'Orders',
              },
              {
                key: 'blogs',
                icon: <SiBloglovin className='fs-4'/>,
                label: 'Blogs',
                children:[
                  {
                    key: 'blog',
                    icon: <SiBloglovin className='fs-4'/>,
                    label: 'Add Blog',
                  },
                  {
                    key: 'blog-list',
                    icon: <SiBloglovin className='fs-4'/>,
                    label: 'Blog List',
                  },
                  {
                    key: 'blog-category',
                    icon: <FaPen className='fs-4'/>,
                    label: 'Add Blog Category',
                  },
                  {
                    key: 'blog-category-list',
                    icon: <FaPen className='fs-4'/>,
                    label: 'Blog Category List',
                  },
                ]
              },
              {
                key: 'enquiries',
                icon: <FaClipboard className='fs-4'/>,
                label: 'Enquiries',
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header className='d-flex justify-content-end ps-1 pe-5' style={{ padding: 0, background: colorBgContainer }}>
            <div className="d-flex gap-3 align-items-center">
              <div className='icon-notifications position-relative'> 
                <IoIosNotifications/> 
                <span className='badge bg-danger p-1 position-absolute'>3</span>
              </div>
              <div className="d-flex gap-3 align-items-center dropdown">
                <div  className='avatar'> 
                  <img className='img-fluid' src={UserAvatar} alt="" />
                </div>
                <div role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <h5 className='m-0'>Bui Van Duy Nhat</h5>
                  <p className='m-0 p-0'>buivanduynhat@gmail.com</p>
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link className="dropdown-item" to="/">View Profile</Link>
                  <Link className="dropdown-item" to="/">Sign out</Link>
                </div>
              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <ToastContainer 
              position="top-right"
              autoClose={250}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    );
};

export default MainLayout;