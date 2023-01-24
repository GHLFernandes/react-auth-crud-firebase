import { FunctionComponent, memo } from "react";
import styled from "styled-components";

const Dropdown = styled.ul`

    @media(min-width: 1020px){
        margin-left: -130px;
    }
`;

 
const Account: FunctionComponent = () => {
    return ( 
        <div className="dropdown">
            <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
            </a>
            <Dropdown className="dropdown-menu text-small">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/logout">Sign out</a></li>
            </Dropdown>
        </div>
     );
}
 
export default memo(Account);