import { FunctionComponent, lazy, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import { auth } from "./config/firebase";

const LoginPage = lazy(async () => await import('./pages/auth/Login'))
const RegisterPage = lazy(async () => await import('./pages/auth/Register'))
const LogoutPage = lazy(async () => await import('./pages/auth/Logout'))
const Home = lazy(async () => await import('./pages/Home'))

const AppRouter: FunctionComponent = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [ loggedIn, setLoggendIn] = useState<boolean>(false);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user)
            {
                console.log('User detected.');
                setLoggendIn(true);
                localStorage.setItem('user', JSON.stringify(user));
            }
            else
            {
                console.log('No user detected');
                setLoggendIn(false);
            }
      
            setLoading(false);
        })
      }, []);

      if (loading)
      return (
        <div className="container w-75 h-100 ">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="spinner-border text-success m-auto my-auto" role="status">
                   <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
      )
      
    return ( 
        <Router>
            <Navbar loggedIn={loggedIn} />
            <Routes>
                <Route path='/' element={
                    <AuthRoute>
                        <Home />
                    </AuthRoute>
                } />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/logout' element={
                    <AuthRoute>
                        <LogoutPage />
                    </AuthRoute>
                } />
            </Routes>
        </Router>
     );
}
 
export default AppRouter;