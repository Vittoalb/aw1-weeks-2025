import { Answer, Question } from "../models/QAModels.mjs";

const SERVER_URL = "http://localhost:3001";

// tutte le domande
// GET /api/questions
const getQuestions = async () => {
  const response = await fetch(SERVER_URL + "/api/questions");  
  // fetch è una funzione asincrona che ritorna una Promise che serve per gestire le risposte HTTP e ritornare i dati in formato JSON
  // "response" è un oggetto Response che contiene lo stato della richiesta e i dati
  if(response.ok) {
    const questionsJson = await response.json();
    return questionsJson.map(q => new Question(q.id, q.text, q.email, q.userId, q.date));
  }
  else
    throw new Error("Internal server error");
}

// tutte le risposte di una certa domanda
// GET /api/questions/<id>/answers
const getAnswers = async (questionId) => {
  const response = await fetch(`${SERVER_URL}/api/questions/${questionId}/answers`);
  if(response.ok) {
    const answersJson = await response.json();
    return answersJson.map(ans => new Answer(ans.id, ans.text, ans.email, ans.userId, ans.date, ans.score));
  }
  else
    throw new Error("Ops, there is an error on the server.");
}

const API = { getAnswers, getQuestions };
export default API;