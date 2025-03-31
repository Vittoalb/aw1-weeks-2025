/* Same of week 03, but without any internal methods */
import dayjs from 'dayjs';

function Answer(id, text, email, userId, date, score = 0) {
  this.id = id;
  this.text = text;
  this.email = email;
  this.userId = userId;
  this.score = score;
  this.date = dayjs(date);
}

class Question {
  constructor(id, text, email, score, date) {
    this.id = id;
    this.text = text;
    this.email = email;
    this.score = score;
    this.date = date;
    this.answers = [];
  }

  init() {
    // Aggiungi risposte di esempio
    this.answers = [
      { id: 1, text: "Yes, because it's more versatile.", email: "user1@example.com", score: 5, date: "2024-02-29" },
      { id: 2, text: "No, Python is better for data science.", email: "user2@example.com", score: 3, date: "2024-03-01" },
    ];
  }

  getAnswers() {
    return this.answers;
  }
}

//export delle funzioni singolarmente
export { Question, Answer };