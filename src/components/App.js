import GlobalStyle from "../styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import { UserStorage } from "../contexts/UserContext";

export default function App() {
  return (
    <>
      <UserStorage>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sign-in" element={<Signin />} />
          </Routes>
        </BrowserRouter>
      </UserStorage>
    </>
  );
}
