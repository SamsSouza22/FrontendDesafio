import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';

const AppRoutes = () => (
<BrowserRouter>
    <Routes>
        <Route element={<Home />} path='/'/>
        <Route element={<Register />} path='/register'/>
        <Route element={<Login />} path='/login'/>
    </Routes>
</BrowserRouter>
);

export default AppRoutes;