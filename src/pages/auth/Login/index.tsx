import { FunctionComponent, memo } from "react";
import LoginForm from "./components/LoginForm";

interface LoginProps {
    
}
 
const Login: FunctionComponent<LoginProps> = () => {
    return ( 
        <div className="container w-75 h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <LoginForm />
            </div>
        </div>
     );
}
 
export default memo(Login);