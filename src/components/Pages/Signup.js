import FormWrapper from "../FormWrapper";
import Logo from "../Logo";
import Header from "../Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
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
      <Header page={"signup"}>
        <p onClick={() => navigate("/sign-in")}>Entrar</p>
        <p>Cadastrar-se</p>
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
            placeholder="Nome"
            name="name"
            type="text"
            required
            onChange={(e) => {
              handleForm({ name: e.target.name, value: e.target.value });
            }}
          ></input>
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
          <input
            placeholder="Confirmar senha"
            name="repeated_password"
            type="password"
            required
            onChange={(e) => {
              handleForm({ name: e.target.name, value: e.target.value });
            }}
          ></input>
          <button>Criar conta</button>
        </form>
      </FormWrapper>
    </>
  );
}
