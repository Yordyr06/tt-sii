export interface ValidationsResponse {
  message: string;
  bool: boolean;
}

export interface Validations {
  number: (number: string) => ValidationsResponse;
  name: (name: string) => ValidationsResponse;
  date: (date: string) => ValidationsResponse;
  cvv: (cvv: string) => ValidationsResponse;
  bool: (number: string, name: string, date: string, cvv: string) => boolean;
}

export const validations: Validations  = {
  number: (number: string): ValidationsResponse => {
    const regex = /^[0-9]{16}$/;
    const isValid = regex.test(number);
    const message = isValid ? "Número válido" : "Número inválido";
    return { message, bool: isValid };
  },

  name: (name: string): ValidationsResponse => {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚ ]{0,20}$/;
    const isValid = regex.test(name);
    const message = isValid ? "Nombre válido" : "Nombre inválido";
    return { message, bool: isValid };
  },
  
  date: (date: string): ValidationsResponse => {
    const regex = /^(0[1-9]|1[0-2])\/(2[2-7])$/
    const isValid = regex.test(date);
    const message = isValid ? "Fecha válida" : "Fecha inválida";
    return { message, bool: isValid };
  },
  
  cvv: (cvv: string): ValidationsResponse => {
    const regex = /^[0-9]{3}$/;
    const isValid = regex.test(cvv);
    const message = isValid ? "CVV válido" : "CVV inválido";
    return { message, bool: isValid };
  },

  bool: (number: string, name: string, date: string, cvv: string): boolean => {
    const numberRes = validations.number(number);
    const nameRes = validations.name(name);
    const dateRes = validations.date(date);
    const cvvRes = validations.cvv(cvv);
    
    return numberRes.bool && nameRes.bool && dateRes.bool && cvvRes.bool;
  }
}