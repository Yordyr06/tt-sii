export interface Res {
  number: string;
  name: string;
  date: string;
  cvv: string;
  bool: boolean;
}

export interface Validations {
  number: (number: string) => Res;
  name: (name: string) => Res;
  date: (date: string) => Res;
  cvv: (cvv: string) => Res;
}

export const response: Res = {
  number: "",
  name: "",
  date: "",
  cvv: "",
  bool: false,
}

export const validations: Validations  = {
  number: (number: string): Res => {
    const regex = /^[0-9]{16}$/;
    if (!regex.test(number)) {
      response.number = "Número de tarjeta inválido";
      return response;
    }
    response.number = "Número de tarjeta válido";
    return response;
  },
  name: (name: string): Res => {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚ ]{0,20}$/;
    if (!regex.test(name)) {
      response.name = "Nombre inválido";
      return response;
    }
    response.name = "Nombre válido"
    return response;
  },
  date: (date: string): Res => {
    const regex = /^(0[1-9]|1[0-2])\/(2[2-7])$/
    if (!regex.test(date)) {
      response.date = "Fecha inválida";
      return response;
    }
    response.date = "Fecha válida";
    return response;
  },
  cvv: (cvv: string): Res => {
    const regex = /^[0-9]{3}$/;
    if (!regex.test(cvv)) {
      response.cvv = "CVV inválido";
      return response;
    }
    response.cvv = "CVV válido";
    return response;
  }
}