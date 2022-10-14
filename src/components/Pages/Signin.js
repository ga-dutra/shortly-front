import FormWrapper from "../FormWrapper";
import Logo from "../Logo";
import Header from "../Header";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { postSignIn } from "../../api/services";
import { UserContext } from "../../contexts/UserContext";

export default function Signin() {
  const [form, setForm] = useState({});
  const { setUserData, userData } = useContext(UserContext);
  const navigate = useNavigate();

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }
  async function sendForm() {
    const body = { ...form };
    try {
      const response = await postSignIn(body);
      const token = response.data;
      setUserData(token);
      alert("Login realizado com sucesso!");
      navigate("/home");
    } catch (error) {
      alert(
        "Não foi possível realizar o login! Por favor, cheque seus dados e tente novamente."
      );
      console.log(error.message);
    }
  }
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
