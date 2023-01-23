import { FunctionComponent, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LoginPage = lazy(async () => await import('./pages/auth/Login'))
const RegisterPage = lazy(async () => await import('./pages/auth/Register'))
const LogoutPage = lazy(async () => await import('./pages/auth/Logout'))

const AppRouter: FunctionComponent = () => {
    return ( 
        <Router>
            <Navbar />
            <Suspense fallback={<p> Carregando...</p>}>
                <Routes>
                    <Route index element={<LoginPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/logout' element={<LogoutPage />} />
                </Routes>
            </Suspense>
        </Router>
     );
}
 
export default AppRouter;