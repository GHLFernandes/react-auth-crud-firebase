import { FunctionComponent, memo, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import LogoForm from "../../../../../components/LogoForms";
import { useUserAuth } from "../../../../../common/contexts/UserAuthContext";
import ErroText from "../../../../../components/ErroText";


interface RegisterFormProps {
    
}


const StyledRegisterForm = styled.main`

    @media(min-width: 720px){
        width: 55vw;
    }

    @media(min-width: 1020px){
        width: 35vw;
    }
`;
 
const RegisterForm: FunctionComponent<RegisterFormProps> = () => {
    const { signUp, erro, setErro } = useUserAuth();
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');
    const [registering, setRegistering] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleSumbit = async (e: React.FormEvent<HTMLFormElement>):Promise<void> => {
        e.preventDefault();

        if (pass !== confirm)
        {
            setErro('Please make sure your password match.');
            return;
        }

        if (erro !== '') setErro('');

        setRegistering(true);

        await signUp(email, pass)
        .then(() => {
            navigate('/login');
        })
        .catch((error: { code: string | string[]; }) => {
            console.log(error);
            if (error.code === 'auth/weak-password'){
                setErro('Please enter a stronger password.');
            }
            else if (error.code === 'auth/email-already-in-use'){
                setErro('Email already in use.');
            }
            else{
                setErro('Unable to register. Please try again later.')
            }
            navigate('/register');
            setRegistering(false);
        });
    }

    return ( 
        <StyledRegisterForm className="form-signup m-auto my-auto">
            <form onSubmit={(e) => handleSumbit(e)}>
                <div className="head text-center">
                    <LogoForm />
                    <h1 className="h4 my-4 fw-normal">Please sign up</h1>
                </div>

                <div className="form-floating my-2">
                    <input 
                        type="email"
                        autoComplete="username"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating my-2">
                    <input 
                        type="password"
                        autoComplete="current-password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                </div>

                <div className="form-floating my-2">
                    <input 
                        type="password"
                        autoComplete="current-password"
                        className="form-control"
                        id="confirm"
                        placeholder="Confirm Password"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                    />
                    <label htmlFor="confirm">Confirm Password</label>
                </div>
                <ErroText erro={erro}/>

                <button className={`w-100 btn btn-lg btn-primary`} type="submit" disabled={registering}>
                    {(registering) &&  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}
                    Register
                </button>
                <p className="mt-5 mb-3 text-muted text-center">© 2023</p>
            </form>
        </StyledRegisterForm>
     );
}
 
export default memo(RegisterForm);