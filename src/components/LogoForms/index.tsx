import { FunctionComponent } from "react";
import styled from "styled-components";

const StyledLogoForm = styled.div`
    padding-bottom: 50px;   

    span{
        display: block;
        margin-top: 10px;
    }

    @media(min-width: 1020px){
        padding-bottom: 20px;
    }
`;
 
const LogoForm: FunctionComponent = () => {
    return ( 
        <StyledLogoForm>
            <i className="fa-solid fa-code fs-2"></i>
            <span className="fs-3">GF Desenvolvimento</span>
        </StyledLogoForm>
     );
}
 
export default LogoForm;