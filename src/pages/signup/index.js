import { SignupContainer } from "./style";
import Title from "../../styles/Title";
import Form from "../../styles/Form";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Validate from "../../utils/ValidateInputs";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const validation = Validate({ name, email, password, confirmPassword }, "signup");
    if (!validation.result) {
      return window.alert(validation.message);
    }

    const promise = axios.post("http://localhost:4000/users", { name, email, password, confirmPassword });
    promise.then(() => history.push("/signin"));
    promise.catch(e => {
      if (!e.response) {
        window.alert("Sem conexão com o servidor");
        return window.location.reload();
      }
      window.alert(e.response.data.message)
    });
  }

  function handleChange({ target }) {
    const input = target.name;
    if (input === "name") {
      setName(target.value);
    } else if (input === "email") {
      setEmail(target.value);
    } else if (input === "password") {
      setPassword(target.value);
    } else {
      setConfirmPassword(target.value);
    }
  }


  return (
    <SignupContainer>
      <Title>MyWallet</Title>
      <Form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nome" onChange={handleChange} required />
        <input name="email" placeholder="E-mail" onChange={handleChange} required />
        <input name="password" minLength="6" type="password" placeholder="Senha" onChange={handleChange} required />
        <input name="confirmPassword" minLength="6" type="password" placeholder="Confirme a senha" onChange={handleChange} required />
        <button>Cadastrar</button>
      </Form>
      <Link to="/signin">Já tem uma conta? Entre agora!</Link>
    </SignupContainer>
  );
}

export default Signup;