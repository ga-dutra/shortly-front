import FormWrapper from "../FormWrapper";
import Logo from "../Logo";
import Header from "../Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignUp } from "../../api/services";

export default function Signup() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }
  async function sendForm() {
    if (form.password !== form.confirmPassword) {
      alert("As senhas digitadas devem ser iguais!");
      return;
    }
    const body = { ...form };
    try {
      await postSignUp(body);
      alert("Usuário criado com sucesso!");
      navigate("/sign-in");
    } catch (error) {
      alert(
        "Não foi possível concluir o cadastro! Por favor, cheque seus dados e tente novamente."
      );
      console.log(error.message);
    }
  }
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
            name="confirmPassword"
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
