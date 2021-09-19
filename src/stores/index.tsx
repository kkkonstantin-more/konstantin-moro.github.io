import React, { createContext, FC, useContext } from 'react';

import Main from './main';

const stores = {
  mainStore: new Main(),
};

const Context = createContext(stores);

const useStores = () => useContext(Context);

export default useStores;

export const StoreProvider: FC = ({ children }) => <Context.Provider value={stores}>{children}</Context.Provider>;
