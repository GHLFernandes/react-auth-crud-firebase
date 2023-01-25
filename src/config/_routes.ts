import { lazy } from "react";

const LoginPage = lazy(async () => await import('../pages/auth/Login'));
const RegisterPage = lazy(async () => await import('../pages/auth/Register'));
const LogoutPage = lazy(async () => await import('../pages/auth/Logout'));
const ChangePassPage = lazy(async () => await import('../pages/auth/ChangePass'));
const HomePage = lazy(async () => await import('../pages/Home'));

interface IRoute {
    path: string;
    component: any;
    name: string;
    protected: boolean;
}

const _routes: IRoute[] = [
    {
        path: '/',
        component: HomePage,
        name: 'Home Page',
        protected: true
    },
    {
        path: '/register',
        component: RegisterPage,
        name: 'Register Page',
        protected: false
    },
    {
        path: '/login',
        component: LoginPage,
        name: 'Login Page',
        protected: false
    },
    {
        path: '/change-pass',
        component: ChangePassPage,
        name: 'Change Password Page',
        protected: true
    },
    {
        path: '/logout',
        component: LogoutPage,
        name: 'Logout Page',
        protected: true
    },
    // {
    //     path: '/forget',
    //     exact: true,
    //     component: ForgotPasswordPage,
    //     name: 'Forgot Password Page',
    //     protected: false
    // },
    // {
    //     path: '/reset',
    //     exact: true,
    //     component: ResetPasswordPage,
    //     name: 'Reset Password Page',
    //     protected: false
    // }
];

export default _routes;