import SigninContainer from "./style";
import Form from "../../styles/Form";
import Title from "../../styles/Title";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Validate from "../../utils/ValidateInputs";
import axios from "axios";

const Signin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    const validation = Validate({ email }, "signin");
    if (!validation.result) {
      return console.log(validation.message);
    }

    const promise = axios.post("http://localhost:4000/signin", { email, password });
    promise.then(({ data }) => {
      sessionStorage.setItem("session", JSON.stringify(data));
      history.push("/home");
    });
    promise.catch(e => console.error(e));
  }

  function handleChange({ target }) {
    if (target.placeholder === "E-mail") setEmail(target.value);
    else setPassword(target.value);
  }

  return (
    <SigninContainer>
      <Title>MyWallet</Title>

      <Form onSubmit={handleSubmit}>
        <input type="text" placeholder="E-mail" onChange={handleChange} required />
        <input minLength="6" type="password" placeholder="Senha" onChange={handleChange} required />
        <button>Entrar</button>
      </Form>
      <Link to="/signup">Primeira vez? Cadastre-se!</Link>
    </SigninContainer>
  );
}

export default Signin;