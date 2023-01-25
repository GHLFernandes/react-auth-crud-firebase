import { FunctionComponent } from "react";

interface ErroTextProps {
    erro: string;
}
 
const ErroText: FunctionComponent<ErroTextProps> = ( props ) => {
    const { erro } = props;

    if(erro === '') return null;

    return (  <small className="text-danger"> { erro } </small>);
}
 
export default ErroText;