import { ChangeEvent, FormEvent, useState } from "react";
import { ItemInterface, useItemContext } from "../../context/itemContext";
import Select from "react-select";
import * as S from "./styled";

type OptionType = {
  index: number;
  label: string;
  quantidade: number;
  value: number;
};

type propsItem = "descricao" | "quantidade";

const defaultValueItem = {
  descricao: "",
  quantidade: 0,
};

const Vendas = () => {
  const [item, setItem] = useState<ItemInterface>(defaultValueItem);
  const { getItems, registrarVenda } = useItemContext();
  const options: OptionType[] = getItems().map((x, i) => ({
    label: x.descricao,
    index: i,
    quantidade: x.quantidade,
    value: i
  }));
  const [selectedOption, setSelectedOption] = useState<OptionType>(options[0]);
  const handleChange = (option: any) => {
    setSelectedOption(option);
  };

  const changeValue = (e: ChangeEvent<HTMLInputElement>, key: propsItem) => {
    setItem((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    registrarVenda(item.quantidade, selectedOption.index);
    setItem(defaultValueItem);
    alert("Venda Registrada com sucesso!");
  };

  return (
    <S.Wrapper>
      <form onSubmit={(e) => onSubmit(e)}>
        <S.WrapperSelect>
          <label htmlFor="items-select">Item</label>
          <Select
            value={selectedOption}
            onChange={(option) => handleChange(option)}
            options={options}
            id="items-select"
          />
        </S.WrapperSelect>
        <label htmlFor="input-quantidade">Quantidade</label>
        <input
          id="input-quantidade"
          type="number"
          value={item.quantidade}
          placeholder="Quantidade"
          onChange={(e) => changeValue(e, "quantidade")}
          min={1}
          max={selectedOption.quantidade}
        />
        <button type="submit">Salvar</button>
      </form>
    </S.Wrapper>
  );
};

export default Vendas;
