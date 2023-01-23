import { FunctionComponent, memo } from "react";
import styled from "styled-components";
import Account from "./Account";
import { Link } from "react-router-dom";

const Nav = styled.nav`
    @media(min-width: 1020px){
        padding-left: 70px !important;
        padding-right: 70px !important;
    }

    @media(min-width: 720px){
        padding-left: 50px !important;
        padding-right: 50px !important;
    }
`;

const Navbar: FunctionComponent = () => {
    return (
        <Nav className="navbar navbar-expand-lg bg-dark px-3">
            <div className="container-fluid">
                <a className="navbar-brand  text-white" href="#"> 
                    <i className="fa-solid fa-code pe-2"></i><span>GF Desenvolvimento</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div className="collapse navbar-collapse ps-4" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                        <li className="nav-item ">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled text-white-50">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light me-2" type="submit">Search</button>
                    </form>
                
                    { /*WHEN LOGGED OFF */ }
                    <div className="text-end px-4">
                        <Link to='/login'>
                            <button type="button" className="btn btn-outline-light me-2">Login</button>
                        </Link>
                        <Link to='/register'>
                            <button type="button" className="btn btn-warning">Sign-up</button>
                        </Link>
                    </div>

                    { /*WHEN LOGGED IN */ }
                   
                    <Account />
                </div>
            </div>
        </Nav>
 );
}
 
export default memo(Navbar);