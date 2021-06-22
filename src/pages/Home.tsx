import { useHistory } from "react-router-dom";
import { Button } from "../components/Button";

import illustrationImage from "../assets/images/illustration.svg";
import googleIconImage from "../assets/images/google-icon.svg";
import logoImage from "../assets/images/logo.svg";

import "../styles/auth.scss";

export function Home() {
  const history = useHistory();

  function navigateToNewRoom() {
    history.push("/rooms/new");
  }

  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImage} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImage} alt="Letmeask" />
          <button className="create-room" onClick={navigateToNewRoom}>
            <img src={googleIconImage} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form>
            <input 
              type="text"
              placeholder="Digite o código da sala" 
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}