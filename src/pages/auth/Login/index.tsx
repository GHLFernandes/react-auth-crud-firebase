import { FunctionComponent, memo } from "react";
import LoginForm from "./components/LoginForm";

interface LoginProps {
    
}
 
const Login: FunctionComponent<LoginProps> = () => {
    return ( 
        <div className="container w-75">
            <div className="row">
                <LoginForm />
            </div>
        </div>
     );
}
 
export default memo(Login);