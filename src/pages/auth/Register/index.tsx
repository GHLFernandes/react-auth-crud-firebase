import { FunctionComponent, memo } from "react";
import RegisterForm from "./components/RegisterForm";

interface RegisterProps {
    
}
 
const Register: FunctionComponent<RegisterProps> = () => {
    return ( 
        <div className="container w-75">
            <div className="row">
                <RegisterForm />
            </div>
        </div>
     );
}
 
export default memo(Register);