const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");

const quiz = {
    question: "HTML stands for?",
    option1: "Hyper Text Markup Language",
    option2: "Home Tool Markup Language",
    answer: "Hyper Text Markup Language"
};

question.innerText = quiz.question;
option1.innerText = quiz.option1;
option2.innerText = quiz.option2;

option1.onclick = function() {

    if (option1.innerText === quiz.answer) {
        document.getElementById("result").innerText =
            "Correct Answer";
    }
};

option2.onclick = function() {

    document.getElementById("result").innerText =
        "Wrong Answer";
};


async function getJoke() {

    const response =
        await fetch("https://official-joke-api.appspot.com/random_joke");

    const data =
        await response.json();

    document.getElementById("joke").innerText =
        data.setup + " - " + data.punchline;
}