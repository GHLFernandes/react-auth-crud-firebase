import { FunctionComponent, memo } from "react";
import RegisterForm from "./components/RegisterForm";

interface RegisterProps {
    
}
 
const Register: FunctionComponent<RegisterProps> = () => {
    return ( 
        <div className="container w-75 h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <RegisterForm />
            </div>
        </div>
     );
}
 
export default memo(Register);