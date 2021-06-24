import { NewEntryContainer, Button } from "./style";
import Form from "../../styles/Form";
import Header from "./Header";
import { useState } from "react";
import { BiChevronLeftCircle } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import { useHistory } from "react-router-dom";
import Validate from "../../utils/ValidateInputs";
import axios from "axios";

const NewEntry = () => {
  const history = useHistory()
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const { type, id } = history.location.state;

  if (!type || !id) history.push("/signin");

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
      <Button onClick={() => history.goBack()}>
        <IconContext.Provider value={{ size: "1.8em" }}>
          <BiChevronLeftCircle />
        </IconContext.Provider>
        <span>Voltar</span>
      </Button>
    </NewEntryContainer>
  );
}

export default NewEntry;