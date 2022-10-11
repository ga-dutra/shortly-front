import FormWrapper from "../common/FormWrapper";
import Logo from "../common/Logo";
import Header from "../common/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }
  function sendForm() {}
  return (
    <>
      <Header page={"signin"}>
        <p>Entrar</p>
        <p onClick={() => navigate("/sign-up")}>Cadastrar-se</p>
      </Header>
      <Logo></Logo>
      <FormWrapper>
        <form
          onSubmit={(e) => {
            console.log("tentei enviar");
            e.preventDefault();
            sendForm();
          }}
        >
          <input
            placeholder="E-mail"
            name="email"
            type="email"
            required
            onChange={(e) => {
              handleForm({ name: e.target.name, value: e.target.value });
            }}
          ></input>
          <input
            placeholder="Senha"
            name="password"
            type="password"
            required
            onChange={(e) => {
              handleForm({ name: e.target.name, value: e.target.value });
            }}
          ></input>
          <button>Entrar</button>
        </form>
      </FormWrapper>
    </>
  );
}
