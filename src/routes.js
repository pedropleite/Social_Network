import Home from './screens/Home';
import About from './screens/About/index.js';
import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import CreatePost from './screens/CreatePost';
import Search from './screens/Search';
import Post from './screens/Post';
import EditPost from './screens/EditPost';

import { useAuthValue } from './store/AuthContext';
import { Routes, Route, Navigate } from 'react-router-dom';

const Paths = () => {
    const { user } = useAuthValue();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Post />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
            <Route path="/posts/create" element={user ? <CreatePost /> : <Navigate to="/login" />} />
            <Route path="/posts/edit" element={user ? <EditPost /> : <Navigate to="/login" />} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>
    );
};

export default Paths;
