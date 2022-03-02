import { createContext, useContext, useState } from "react";

export interface ItemInterface {
  descricao: string;
  quantidade: number;
}

type PropsItemContext = {
  addItem: (newItem: ItemInterface) => void;
  getItems: () => Array<ItemInterface>;
  registrarVenda: (quantidade: number, index: number) => void;
};

const defaultState: PropsItemContext = {
  addItem: () => {},
  getItems: () => [],
  registrarVenda: () => {},
};

const ItemContext = createContext<PropsItemContext>(defaultState);

const ItemProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<Array<ItemInterface>>([]);
  const getItems = () => items;
  const addItem = (newItem: ItemInterface) =>
    setItems((prevState) => [...prevState, newItem]);
  const registrarVenda = (quantidade: number, index: number) => {
    const _items = items;
    _items[index].quantidade = _items[index].quantidade - quantidade;
    setItems([..._items]);
  };
  return (
    <ItemContext.Provider
      value={{
        addItem,
        getItems,
        registrarVenda,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

const useItemContext = () => useContext(ItemContext);

export { ItemProvider, useItemContext };
