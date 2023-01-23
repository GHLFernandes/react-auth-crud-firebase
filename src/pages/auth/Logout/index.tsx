import { FunctionComponent, memo } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { useUserAuth } from "../../../common/contexts/UserAuthContext";

interface LogoutProps {
    
}
 
const Logout: FunctionComponent<LogoutProps> = () => {
    const { signOutUser} = useUserAuth();
    const navigate = useNavigate();

    const Logout = () => {
        signOutUser()
        .then(() => navigate('/login'))
        .catch((error: any) => console.log(error));
    }

    return (  <>
    <p className='text-center'>Are you sure you want to logout?</p>
        <div className='text-center'>
            <button className="btn btn-danger mx-2" onClick={() => navigate(-1)}>Cancel</button>
            <button className="btn btn-primary mx-2" onClick={() => Logout()}>Logout</button>
        </div>
    </>);
}
 
export default memo(Logout);