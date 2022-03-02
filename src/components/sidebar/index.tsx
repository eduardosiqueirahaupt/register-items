import * as S from "./styled";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <S.Wrapper>
      <Link to="/cadastros">
        <span className="menu">Cadastrar Item</span>
      </Link>
      <Link to="/vendas">
        <span className="menu">Registrar Venda</span>
      </Link>
      <Link to="/estoques">
        <span className="menu">Verificar Estoques</span>
      </Link>
    </S.Wrapper>
  );
};

export default Sidebar;
