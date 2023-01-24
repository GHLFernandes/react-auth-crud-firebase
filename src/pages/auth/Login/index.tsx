import { FunctionComponent, memo } from "react";
import LoginForm from "./components/LoginForm";

interface LoginProps {
    
}
 
const Login: FunctionComponent<LoginProps> = () => {
    return ( 
        <div className="container w-75 h-100 ">
            <div className="row h-100 justify-content-center align-items-center">
                <LoginForm />
                <p className="mt-5 mb-3 text-muted text-center">© 2023</p>
            </div>
        </div>
     );
}
 
export default memo(Login);