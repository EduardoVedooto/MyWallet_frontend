import { NewEntryContainer } from "./style";
import Form from "../../styles/Form";
import Header from "./Header";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Validate from "../../utils/ValidateInputs";
import axios from "axios";
import Footer from "./Footer";
import Loader from "react-loader-spinner";
import ModalComponent from "../../components/ModalComponent";

const NewEntry = () => {
  const history = useHistory()
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [isWaitingServer, setWaitingServer] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const state = history.location?.state;

  if (!state) {
    history.push("/signin")
    return null;
  };
  const { type, id } = state;

  function handleSubmit(e) {
    e.preventDefault();
    setWaitingServer(true);
    const validation = Validate({ value, description }, "newEntry");
    if (!validation.result) {
      setWaitingServer(false);
      setErrorMessage(validation.message);
      setModalOpen(true);
      return;
    };

    const promise = axios.post(`http://localhost:4000/finances/${id}`,
      { value: value.replace(",", "."), description },
      { params: { type } }
    );
    promise.then(() => {
      history.push("/home");
      setWaitingServer(false);
    });
    promise.catch(e => {
      console.error(e.response.data);
      window.alert(e.response.data);
      setWaitingServer(false);
    });
  }

  function handleChange({ target }) {
    const { placeholder, value } = target;
    if (placeholder === "Valor") setValue(value);
    else setDescription(value);
  }

  function CloseModal() {
    setModalOpen(false);
  }

  return (
    <NewEntryContainer>
      <ModalComponent display={isModalOpen} close={CloseModal} message={errorMessage} />
      <Header type={type} />
      <Form onSubmit={handleSubmit}>
        <input placeholder="Valor" required onChange={handleChange} />
        <input placeholder="Descrição" required onChange={handleChange} />
        <button>{isWaitingServer ?
          <Loader
            type="ThreeDots"
            color="#fff"
            height={20}
            width={75}
          /> :
          "Salvar"}</button>
      </Form>

      <Footer />

    </NewEntryContainer>
  );
}

export default NewEntry;