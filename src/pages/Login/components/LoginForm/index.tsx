import { FunctionComponent, memo, useState, useEffect  } from "react";
import styled from "styled-components";
import LogoForm from "../../../../components/LogoForms";

interface LoginFormProps {
    
}

const initialState = {
    email: '',
    pass: ''
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
    const [user, setUser] = useState(initialState);
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    const handleSumbit = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        setUser({email, pass})
    }

    useEffect(() => {
        console.log(user);
    }, [user])

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
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted text-center">© 2023</p>
            </form>
        </StyledLoginForm>
     );
}
 
export default memo(LoginForm);