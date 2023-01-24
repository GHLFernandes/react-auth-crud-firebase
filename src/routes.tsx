import { FunctionComponent, Suspense, lazy, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import { auth } from "./config/firebase";
import { UserAuthContextProvider } from './common/contexts/UserAuthContext';

const LoginPage = lazy(async () => await import('./pages/auth/Login'))
const RegisterPage = lazy(async () => await import('./pages/auth/Register'))
const LogoutPage = lazy(async () => await import('./pages/auth/Logout'))
const ChangePass = lazy(async () => await import('./pages/auth/ChangePass'))
const Home = lazy(async () => await import('./pages/Home'))

const AppRouter: FunctionComponent = () => {
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ loggedIn, setLoggendIn ] = useState<boolean>(false);

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

    return ( 
        <UserAuthContextProvider>
            <Router>
                <Navbar loggedIn={loggedIn} />
                <Suspense fallback={
                    <div className="spinner-border text-success m-auto my-auto" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }>
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
                        <Route path='/change-pass' element={
                            <AuthRoute>
                                <ChangePass />
                            </AuthRoute>
                        } />
                    </Routes>
                </Suspense>
            </Router>
        </UserAuthContextProvider>
     );
}
 
export default AppRouter;