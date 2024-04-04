import { createContext, useContext } from 'react';
import { useData } from './index';
import { response, validations } from './validations';
import type { CreditCard } from './useStorage';
// import type { Res, Validations } from './validations';s
import type { FC } from 'react';

interface MyContext {
  data: CreditCard[];
  loading: boolean;
  error: Error | null;
  getData: () => void;
  addData: (newData: CreditCard) => void;
  setData: (newData: CreditCard[]) => void;
  deleteData: (value: CreditCard) => void;
  response: typeof response;
  validations: typeof validations
}

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext<MyContext | undefined>(undefined);
export const useAppContext = (): MyContext => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe ser utilizado dentro de un AppProvider');
  }
  return context;
}

export const AppProvider: FC<Props> = ({ children }) => {
  const {
    data,
    loading,
    error,
    getData,
    addData,
    setData,
    deleteData 
  } = useData();
  
  return (
    <AppContext.Provider value={{
        data,
        loading,
        error,
        getData,
        addData,
        setData,
        deleteData,
        response,
        validations
      }}>
      { children }
    </AppContext.Provider>
  )
}