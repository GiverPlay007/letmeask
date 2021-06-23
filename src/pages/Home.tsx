import { FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

import illustrationImage from "../assets/images/illustration.svg";
import googleIconImage from "../assets/images/google-icon.svg";
import logoImage from "../assets/images/logo.svg";

import "../styles/auth.scss";
import { database } from "../services/firebase";

export function Home() {
  const [roomCode, setRoomCode] = useState('');
  const { user, signWithGoogle } = useAuth();

  const history = useHistory();

  async function handleCreateRoom() {
    if(!user) {
      await signWithGoogle();
    }

    history.push("/rooms/new");
  }
  
  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if(roomCode.trim() === '') return;

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if(!roomRef.exists()) {
      alert("Essa sala não existe.");
      return;
    }

    history.push(`/rooms/${roomCode}`);
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
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImage} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input 
              type="text"
              onChange={event => setRoomCode(event.target.value)}
              placeholder="Digite o código da sala"
              value={roomCode} 
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