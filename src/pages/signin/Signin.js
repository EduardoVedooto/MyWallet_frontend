import { SigninContainer, Title, Form, Input, Button } from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  console.log(validEmail);

  function handleSubmit(e) {
    e.preventDefault();
    if (!validEmail.test(email) || password.length < 6)
      return console.log("Campos inválidos");


    /* Not implemented yet */

  }

  function handleChange({ target }) {
    if (target.placeholder === "E-mail") setEmail(target.value);
    else setPassword(target.value);
  }

  return (
    <SigninContainer>
      <Title>MyWallet</Title>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="E-mail" onChange={handleChange} required />
        <Input minLength="6" type="password" placeholder="Senha" onChange={handleChange} required />
        <Button>Entrar</Button>
      </Form>
      <Link to="/signup">Primeira vez? Cadastre-se!</Link>
    </SigninContainer>
  );
}

export default Signin;