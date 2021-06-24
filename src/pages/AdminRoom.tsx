import { useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";
import { useRoom } from "../hooks/useRoom";
import { database } from "../services/firebase";

import logoImage from "../assets/images/logo.svg";
import deleteImage from "../assets/images/delete.svg";

import "../styles/room.scss";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  
  const { title, questions } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    if(window.confirm("Tem certeza que você deseja excluir essa pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  return(
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImage} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Encerrar sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>{title}</h1>
          {
            questions.length > 0 && <span>{questions.length} pergunta{questions.length > 1 && "s"}</span>
          }
        </div>

        <div className="question-list">
          {questions.map(question => {
            return(
              <Question 
                key={question.id}
                content={question.content} 
                author={question.author}
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImage} alt="Remover pergunta" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}