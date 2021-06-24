import { NewEntryContainer } from "./style";
import Form from "../../styles/Form";
import Header from "./Header";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Validate from "../../utils/ValidateInputs";
import axios from "axios";
import Footer from "./Footer";

const NewEntry = () => {
  const history = useHistory()
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const state = history.location?.state;

  if (!state) {
    history.push("/signin")
    return null;
  };
  const { type, id } = state;

  function handleSubmit(e) {
    e.preventDefault();
    const validation = Validate({ value, description }, "newEntry");
    if (!validation.result) return window.alert(validation.message);

    const promise = axios.post(`http://localhost:4000/finances/${id}`,
      { value: value.replace(",", "."), description },
      { params: { type } }
    );
    promise.then(() => history.push("/home"));
    promise.catch(e => console.error(e.response.data));
  }

  function handleChange({ target }) {
    const { placeholder, value } = target;
    if (placeholder === "Valor") setValue(value);
    else setDescription(value);
  }

  return (
    <NewEntryContainer>
      <Header type={type} />
      <Form onSubmit={handleSubmit}>
        <input placeholder="Valor" required onChange={handleChange} />
        <input placeholder="Descrição" required onChange={handleChange} />
        <button>Salvar</button>
      </Form>

      <Footer />

    </NewEntryContainer>
  );
}

export default NewEntry;