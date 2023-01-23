import { FunctionComponent, memo, useState  } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import LogoForm from "../../../../../components/LogoForms";
import { useUserAuth } from "../../../../../common/contexts/UserAuthContext";
import GoogleButton from 'react-google-button'

interface LoginFormProps {
    
}

const StyledLoginForm = styled.main`

    @media(min-width: 720px){
        width: 55vw;
    }

    @media(min-width: 1020px){
        width: 35vw;
    }
`;
 
const LoginForm: FunctionComponent<LoginFormProps> = () => {
    const { signIn, googleSignIn, erro, setErro } = useUserAuth();
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [authenticating, setAuthenticating] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleSumbit = async (e: React.FormEvent<HTMLFormElement>):Promise<void> => {
        e.preventDefault();

        if (erro !== '') setErro('');

        setAuthenticating(true);

        await signIn(email, pass)
        .then((result: any) => {
            console.log(result);
            navigate('/')
        })
        .catch((error: { message: any; }) => {
            console.log(error);
            setAuthenticating(false);
            setErro(error.message);
        })
    }

    const handleGoogleSignIn = async (): Promise<void> => {
        if (erro !== '') setErro('');

        setAuthenticating(true);

        await googleSignIn()
        .then((result: any) => {
            console.log(result);
            navigate('/')
        })
        .catch((error: { message: any; }) => {
            console.log(error);
            setAuthenticating(false);
            setErro(error.message);
        })
      }

    return ( 
        <StyledLoginForm className="form-signin m-auto my-auto">
            <form onSubmit={(e) => handleSumbit(e)}>
                <div className="head text-center">
                    <LogoForm />
                    <h1 className="h4 my-4 fw-normal">Please sign in</h1>
                </div>

                <div className="form-floating my-2">
                    <input 
                        type="email"
                        autoComplete="username"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating my-2">
                    <input 
                        type="password"
                        autoComplete="current-password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit" disabled={authenticating}>Sign in</button>
                <GoogleButton className='g-btn mt-3 w-100 rounded-2' type='dark' onClick={ async () => await handleGoogleSignIn() }/>
                <p className="mt-5 mb-3 text-muted text-center">© 2023</p>
            </form>
        </StyledLoginForm>
     );
}
 
export default memo(LoginForm);