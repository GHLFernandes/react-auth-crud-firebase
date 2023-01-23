import { FunctionComponent, memo, useState, useEffect } from "react";
import styled from "styled-components";
import LogoForm from "../../../../components/LogoForms";

interface RegisterFormProps {
    
}

const initialState = {
    email: '',
    pass: ''
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
        <StyledRegisterForm className="form-signup m-auto my-auto">
            <form onSubmit={(e) => handleSumbit(e)}>
                <div className="head text-center">
                    <LogoForm />
                    <h1 className="h4 my-4 fw-normal">Please sign up</h1>
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

                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                <p className="mt-5 mb-3 text-muted text-center">© 2023</p>
            </form>
        </StyledRegisterForm>
     );
}
 
export default memo(RegisterForm);