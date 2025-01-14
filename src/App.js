import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./screens/home/Home";
import Createpost from "./screens/createpost/Createpost";
import Postdetail from "./screens/postdetail/Postdetail";
import Editpost from "./screens/editpost/Editpost";
import Themeswitch from "./components/switch/Themeswitch";
import Login from "./screens/login/Login";
import SignUp from "./screens/Signup/SignUp";
import { useThemeContext } from './hooks/useThemeContext';
import { AuthContext } from "./context/AuthContext";
import React, { lazy, useContext } from "react";
import NotFoundPage from "./screens/NotFoundPage";
import Trial from "./screens/Trial";
import Testing from "./screens/Testing";
import ProfilePage from "./screens/ProfilePage";
import UserDetails from "./screens/UserDetails";
import './App.css'
const OtherComponent = React.lazy(() => import('./screens/UserDetails'));

function App() {

  const { theme } = useThemeContext();
  const { user, isAuthenticated } = useContext(AuthContext)


  return (
    <div className={`App ${theme}bg`}>
      <BrowserRouter>
        <Navbar />
       
        <div className="container">
          {isAuthenticated ?
            <Routes>
              <Route path="/" element={user ? <Home /> : <Navigate to='/login' />} />
              <Route path="/create" element={user ? <Createpost /> : <Navigate to='/login' />} />
              <Route path="/post/:id" element={user ? <Postdetail /> : <Navigate to='/login' />} />
              <Route path="/edit/:id" element={user ? <Editpost /> : <Navigate to='/login' />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to='/' />} />
              <Route path="/signup" element={!user ? <SignUp /> : <Navigate to='/' />} />
              <Route path="*" element={<NotFoundPage />} />

              <Route path="/trial" element={<Trial />}>
                <Route index element={<Login />} />
                <Route path="testing" element={<Testing />} />
                <Route path=":id" element={
                  <React.Suspense fallback="Loading...">
                    <OtherComponent />
                  </React.Suspense>
                } />
              </Route>
                <Route path="/profile" element={<ProfilePage />} />
            </Routes> : <h1>Loading...</h1>
          }
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
