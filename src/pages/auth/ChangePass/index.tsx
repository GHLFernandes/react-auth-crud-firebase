import React, { FC, memo, useState } from "react";
import styled from "styled-components";
import { useUserAuth } from "../../../common/contexts/UserAuthContext";
import { useNavigate } from "react-router-dom";
import LogoForm from "../../../components/LogoForms";
import { auth } from "../../../config/firebase";

interface ChangePassProps {
    
}

const StyledChangePass = styled.main`

@media(min-width: 720px){
    width: 55vw;
}

@media(min-width: 1020px){
    width: 35vw;
}
`;
const ChangePass: FC<ChangePassProps> = ( props ) => {
    const { changePass, erro, setErro } = useUserAuth();
    const [changing, setChanging] = useState(false);
    const [currentPass, setCurrentPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirm, setConfirm] = useState('');

    const navigate = useNavigate();
    const user = auth.currentUser;

    const handleSumbit = async (e: React.FormEvent<HTMLFormElement>):Promise<void> => {
        e.preventDefault();

        if(newPass !== confirm){
            setErro('Make sure your passwords are maching');
            throw new Error('Deu ruim');
        }

        if (erro !== '') setErro('');

        setChanging(true);

        await changePass(user, newPass)
        .then(() => {
            console.log('Pass Changed!');
            navigate('/');
        })
        .catch((error: { code: any; message: any; }) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setChanging(false);
            setErro({ errorCode, errorMessage });
        })
    }

    return ( 
        <StyledChangePass className="form-signin m-auto my-auto">
            <form onSubmit={(e) => handleSumbit(e)}>
                <div className="head text-center">
                    <LogoForm />
                    <h1 className="h4 my-4 fw-normal">Change Password</h1>
                </div>

                <div className="form-floating my-2">
                    <input 
                        type="password"
                        autoComplete="current-password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Current Password"
                        value={currentPass}
                        onChange={(e) => setCurrentPass(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Current Password</label>
                </div>
                <div className="form-floating my-2">
                    <input 
                        type="password"
                        autoComplete="new-password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="New Password"
                        value={newPass}
                        onChange={(e) => setNewPass(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">New Password</label>
                </div>
                <div className="form-floating my-2">
                    <input 
                        type="password"
                        autoComplete="confirm-password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Confirm New Password"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Confirm New Password</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit" disabled={changing}>
                {(changing) && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}
                   Change Password
                </button>
            </form>
        </StyledChangePass>
     );

}
 
export default memo(ChangePass);