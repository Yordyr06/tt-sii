interface res {
  message: string;
  bool: boolean;
}

export const response: res = {
  message: "",
  bool: false,
}

export const validation = {
  number: (number: string): res => {
    const regex = /^[0-9]{16}$/;
    if (!regex.test(number)) {
      response.message = "Número de tarjeta inválido";
      return response;
    }
    response.bool = true;
    response.message = "Número de tarjeta válido";
    return response;
  },
  name: (name: string): res => {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚ ]{0,20}$/;
    if (!regex.test(name)) {
      response.message = "Nombre inválido";
      return response;
    }
    response.bool = true;
    response.message = "Nombre válido"
    return response;
  },
  date: (date: string): res => {
    const regex = /^(0[1-9]|1[0-2])\/(2[2-7])$/
    if (!regex.test(date)) {
      response.message = "Fecha inválida";
      return response;
    }
    response.bool = true;
    response.message = "Fecha válida";
    return response;
  },
  cvv: (cvv: string): res => {
    const regex = /^[0-9]{3}$/;
    if (!regex.test(cvv)) {
      response.message = "CVV inválido";
      return response;
    }
    response.bool = true;
    response.message = "CVV válido";
    return response;
  }

}

// export const validateNumber = (number: string): res => {
//   const regex = /^[0-9]{16}$/;
//   if (!regex.test(number)) {
//     response.message = "Número de tarjeta inválido";
//     return response;
//   }
//   response.bool = true;
//   response.message = "Número de tarjeta válido";
//   return response;
// }

// export const validateName = (name: string): res => {
//   const regex = /^[a-zA-ZáéíóúÁÉÍÓÚ ]{0,20}$/;
//   if (!regex.test(name)) {
//     response.message = "Nombre inválido";
//     return response;
//   }
//   response.bool = true;
//   response.message = "Nombre válido"
//   return response;
// }

// export const validationDate = (date: string): res => {
//   const regex = /^(0[1-9]|1[0-2])\/(2[2-7])$/
//   if (!regex.test(date)) {
//     response.message = "Fecha inválida";
//     return response;
//   }
//   response.bool = true;
//   response.message = "Fecha válida";
//   return response;
// }

// export const validateCvv = (cvv: string): res => {
//   const regex = /^[0-9]{3}$/;
//   if (!regex.test(cvv)) {
//     response.message = "CVV inválido";
//     return response;
//   }
//   response.bool = true;
//   response.message = "CVV válido";
//   return response;
// }