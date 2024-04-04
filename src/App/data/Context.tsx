import { createContext, useContext } from 'react';
import { useData } from './index';
import { validations } from './validations';
import type { FC } from 'react';
import type { CreditCard } from './index';

interface MyContext {
  data: CreditCard[];
  loading: boolean;
  error: Error | null;
  creditCard: CreditCard;
  getData: () => CreditCard[];
  addData: (newData: CreditCard) => void;
  setData: (newData: CreditCard[]) => void;
  deleteData: (value: CreditCard) => void;
  clearFields: () => void;
  setCreditCard: (value: CreditCard) => void;
  validations: typeof validations;
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
    deleteData,
    clearFields,
    creditCard,
    setCreditCard
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
      validations,
      clearFields,
      creditCard,
      setCreditCard
    }}> { children }
    </AppContext.Provider>
  )
}