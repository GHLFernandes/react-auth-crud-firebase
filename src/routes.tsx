import { FunctionComponent, Suspense, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import { auth } from "./config/firebase";
import { UserAuthContextProvider } from './common/contexts/UserAuthContext';
import _routes from "./config/_routes";

const AppRouter: FunctionComponent = () => {
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ loggedIn, setLoggendIn ] = useState<boolean>(false);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user){
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
                <Suspense fallback={loading &&
                    <div className="spinner-border text-success m-auto my-auto" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }>
                    <Routes>
                    {_routes.map((route, index) => 
                        <>
                            <Route
                                key={index}
                                path={route.path} 
                                element ={
                                    (route.protected)
                                        ?
                                        <AuthRoute><route.component  /></AuthRoute>
                                        :
                                        <route.component />
                                }
                            />
                        </>
                    )}
                    </Routes>
                </Suspense>
            </Router>
        </UserAuthContextProvider>
     );
}
 
export default AppRouter;