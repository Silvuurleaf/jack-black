const MAX_INDEX = 9;

export default class QuestionBank {
    constructor(questions = populateBank()) {
        this.questions = questions;
        this.currentQuestion = 0;
    }

    get oneQuestion() {
        if (this.currentQuestion === MAX_INDEX) {
            this.currentQuestion = 0;
        }

        return this.questions[this.currentQuestion++].questionString();
    }
}

class Question {
    constructor(description, a, b, c, correct) {
        this.description = description;
        this.a = a;
        this.b = b;
        this.c = c;
        this.correct = correct;
    }

    checkAnswer(c) {
        return this.correct === c;
    }

    questionString() {
        return this.description + " Your options are: \n"
               + "a, " + this.a + "\n"
               + "b, " + this.b + "\n"
               + "c, " + this.c + "\n";
    }
}

function populateBank() {
    let questions = [];
    questions[0] = Q1;
    questions[1] = Q2;
    questions[2] = Q3;
    questions[3] = Q4;
    questions[4] = Q5;
    questions[5] = Q6;
    questions[6] = Q7;
    questions[7] = Q8;
    questions[8] = Q9;
    questions[9] = Q10;
    return questions;
}

const Q1 = new Question("What color is Jack " +
    "Black's hair?", "Brown","Blue", "Orange", 'a');
const Q2 = new Question("Which movie does Jack" +
    "Black play an instrument? ", "School of Rock","Orange County",
    "Jumanji", 'a');
const Q3 = new Question("Which movie is Jack" +
    "Black a geographer? ", "School of Rock","Orange County",
    "Jumanji", 'a');
const Q4 = new Question("What is Jack Black's " +
    "real name? ", "Jackson","Jacob",
    "Jack", 'b');
const Q5 = new Question("What is the name of  " +
    "Jack Black's band?", "Candy Corn","Crazy Cat Daddies",
    "Tenacious D", 'c');
const Q6 = new Question("What movie is Jack Black"
    + "most well known for?", "Orange County",
    "School of Rock", "Jumanji", 'c');
const Q7 = new Question("What is Jack Black's " +
    "favorite candy?", "Unknown",
    "Milk Duds", "Smarties", 'c');
const Q8 = new Question("What is Jack Black's " +
    "favorite candy?", "Unknown",
    "Milk Duds", "Smarties", 'c');
const Q9 = new Question("What is Jack Black's " +
    "worst movie?", "Shallow Hal",
    "School of Rock", "Orange County", 'a');
const Q10 = new Question("What city was Jack " +
    "Black born in?", "Santa Monica",
    "Los Angeles", "Boston", 'a');