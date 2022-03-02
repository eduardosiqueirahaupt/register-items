import React from "react";
import { useItemContext } from "../../context/itemContext";
import * as S from "./styled";

const Estoques: React.FC = () => {
  const { getItems } = useItemContext();
  return (
    <S.Wrapper>
      <table>
        <tr>
          <th>Descrição</th>
          <th>Quantidade</th>
        </tr>
        {getItems().map((item) => (
          <tr>
            <td>{item.descricao}</td>
            <td>{item.quantidade}</td>
          </tr>
        ))}
      </table>
    </S.Wrapper>
  );
};

export default Estoques;
