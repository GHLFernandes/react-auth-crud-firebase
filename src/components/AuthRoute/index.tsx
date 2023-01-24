import { FunctionComponent, memo } from "react";
import { Navigate } from 'react-router-dom'
import { auth } from "../../config/firebase";


interface AuthRouteProps {
    children: JSX.Element
}
 
const AuthRoute: FunctionComponent<AuthRouteProps> = ( props ): any => {
    const { children } = props;

    if (!auth.currentUser)
    {
        console.log('No user detected, redirecting');
        return <Navigate to="/login" />;
    }
    
    return (
        <div className="container w-75 h-100 ">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="m-auto my-auto"> 
                    {children}
                </div>
            </div>
        </div>
    );
}
 
export default memo(AuthRoute);