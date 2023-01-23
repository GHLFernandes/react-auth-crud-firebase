import { FunctionComponent, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LoginPage = lazy(async () => await import('./pages/Login'))

const AppRouter: FunctionComponent = () => {
    return ( 
        <Router>
            <Navbar />
            <Suspense fallback={<p> Carregando...</p>}>
                <Routes>
                    <Route index element={<LoginPage />} />
                </Routes>
            </Suspense>
        </Router>
     );
}
 
export default AppRouter;