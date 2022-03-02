import { ChangeEvent, FormEvent, useState } from "react";
import { ItemInterface, useItemContext } from "../../context/itemContext";
import * as S from "../cadastros/styled";

type propsItem = "descricao" | "quantidade";

const Estoques: React.FC = () => {
  const [item, setItem] = useState<ItemInterface>({
    descricao: "",
    quantidade: 0,
  });

  const { addItem } = useItemContext();

  const changeValue = (e: ChangeEvent<HTMLInputElement>, key: propsItem) => {
    setItem((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addItem(item);
    setItem({ descricao: "", quantidade: 0 });
    alert("Cadastro feito com sucesso!");
  };

  return (
    <S.Wrapper>
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="input-descricao">Descrição</label>
        <input
          id="input-descricao"
          type="text"
          value={item.descricao}
          placeholder="Descrição"
          onChange={(e) => changeValue(e, "descricao")}
          required
        />
        <label htmlFor="input-quantidade">Quantidade</label>
        <input
          id="input-quantidade"
          type="number"
          value={item.quantidade}
          placeholder="Quantidade"
          onChange={(e) => changeValue(e, "quantidade")}
          min={1}
        />
        <button type="submit">Salvar</button>
      </form>
    </S.Wrapper>
  );
};

export default Estoques;
