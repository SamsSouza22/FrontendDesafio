import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Register from './pages/auth/Register.jsx';
import Login from './pages/auth/Login.jsx';

const AppRoutes = () => (
<BrowserRouter>
    <Routes>
        <Route element={<Home />} path='/'/>
        <Route path='auth'>
            <Route element={<Register />} path='register'/>
            <Route element={<Login />} path='login'/>
        </Route>
    </Routes>
</BrowserRouter>
);

export default AppRoutes;