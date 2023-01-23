import { FunctionComponent, memo } from "react";

interface LoginFormProps {
    
}
 
const LoginForm: FunctionComponent<LoginFormProps> = () => {
    return ( 
        <main className="form-signin w-50 m-auto my-auto">
            <form>
                <div className="head text-center">
                    <i className="fa-solid fa-code pe-2 fs-2"></i><br/><span className="fs-3">GF Desenvolvimento</span>
                    <h1 className="h4 my-4 fw-normal">Please sign in</h1>
                </div>

                <div className="form-floating my-2">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating my-2">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted text-center">© 2017–2022</p>
            </form>
        </main>
     );
}
 
export default memo(LoginForm);