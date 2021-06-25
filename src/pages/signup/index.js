import { SignupContainer } from "./style";
import Title from "../../styles/Title";
import Form from "../../styles/Form";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Validate from "../../utils/ValidateInputs";
import axios from "axios";
import Loader from "react-loader-spinner";
import ModalComponent from "../../components/ModalComponent";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isWaitingServer, setWaitingServer] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setWaitingServer(true);
    const validation = Validate({ name, email, password, confirmPassword }, "signup");
    if (!validation.result) {
      setWaitingServer(false);
      setErrorMessage(validation.message);
      setModalOpen(true);
      return;
    }

    const promise = axios.post("http://localhost:4000/users", { name, email, password, confirmPassword });
    promise.then(() => {
      setWaitingServer(false);
      history.push("/signin")
    });
    promise.catch(e => {
      setWaitingServer(false);
      if (!e.response) {
        setErrorMessage("Servidor fora do ar.");
        setModalOpen(true);
        return;
      }
      console.error(e.response.data);
      if (typeof (e.response.data) === "string") {
        setErrorMessage(e.response.data);
        setModalOpen(true);
      } else {
        setErrorMessage(`${e.response.data.context.label}`);
        setModalOpen(true);
      }
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

  function CloseModal() {
    setModalOpen(false);
  }

  return (
    <SignupContainer>
      <Title>MyWallet</Title>

      <ModalComponent display={isModalOpen} close={CloseModal} message={errorMessage} />

      <Form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nome" onChange={handleChange} required />
        <input name="email" placeholder="E-mail" onChange={handleChange} required />
        <input name="password" minLength="6" type="password" placeholder="Senha" onChange={handleChange} required />
        <input name="confirmPassword" minLength="6" type="password" placeholder="Confirme a senha" onChange={handleChange} required />
        <button>{isWaitingServer ?
          <Loader
            type="ThreeDots"
            color="#fff"
            height={20}
            width={75}
          /> :
          "Cadastrar"}</button>
      </Form>
      <Link to="/signin">Já tem uma conta? Entre agora!</Link>
    </SignupContainer>
  );
}

export default Signup;