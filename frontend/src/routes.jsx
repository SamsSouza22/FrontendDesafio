import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Register from './pages/auth/Register.jsx';
import Login from './pages/auth/Login.jsx';
import NavBar from './components/NavBar.jsx';
import PostForm from './components/PostForm.jsx';

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route element={
                <>
                    <NavBar />

                    <Outlet />

                </>
            }>
                <Route element={<Home />} path='/' />
                <Route path='auth'>
                    <Route element={<Register />} path='register' />
                    <Route element={<Login />} path='login' />
                </Route>
                <Route element={<PostForm />} path='post'/> 
            </Route>
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;