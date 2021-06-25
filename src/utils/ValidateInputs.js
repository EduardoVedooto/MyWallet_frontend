const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //eslint-disable-line
const validDecimal = /^(\d+(?:[\.\,]\d{1,2})?)$/; //eslint-disable-line

const Validate = (data, from) => {
  if (from === "signup") {
    const { name, email, password, confirmPassword } = data;
    if (name.length > 40 || name.trim().length === 0) {
      return {
        result: false,
        message: "Nome não pode passar de 40 caracteres e não pode ser vazio"
      };
    }
    if (!validEmail.test(email)) {
      return {
        result: false,
        message: "Email inválido"
      };
    }
    if (password.length < 6) {
      return {
        result: false,
        message: "Senha de, no mínimo, 6 caracteres"
      };
    }
    if (password !== confirmPassword) {
      return {
        result: false,
        message: "As senhas não são iguais"
      };
    }
  } else if (from === "signin") {
    if (!validEmail.test(data.email)) {
      return {
        result: false,
        message: "E-mail inválido"
      };
    }
  } else if (from === "newEntry") {
    const { value, description } = data;
    if (!validDecimal.test(value) || parseFloat(value.replace(",", ".")) === 0) {
      return {
        result: false,
        message: "Valor inválido"
      };
    }

    if (!description.trim().length) {
      return {
        result: false,
        message: "Descrição não pode estar vazia"
      };
    }
  }
  return { result: true };
}

export default Validate;