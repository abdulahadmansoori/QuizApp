

let hideDiv = (divID) => {
    document.getElementById(divID).style.display = "none";
}
let showDiv = (divID) => {
    document.getElementById(divID).style.display = "block";
}

let getQuizDetails = () => {
    let Title = document.getElementById("Title").value;
    let NumberOfQuestion = document.getElementById("NumberOfQuestion").value;
    let Duration = document.getElementById("Duration").value;
    let Passing = document.getElementById("Passing").value;
    if (Title != "" && NumberOfQuestion != "") {
        let i = 0;
        document.getElementById("QuizTitle").innerHTML = Title;
        document.getElementById("QNum").innerHTML += NumberOfQuestion;
        document.getElementById("QDur").innerHTML += Duration += "min";
        document.getElementById("QPC").innerHTML += Passing += "%";
        let quiz = document.getElementById("Questions");
        for (i = 1; i <= NumberOfQuestion; i++) {
            quiz.innerHTML += `
            <div class="Question" id="question ${i}">
                <label for="">Question${i}</label>
                <input id="q${i}" type="text" placeholder="Write Question Here..." required>
                <div class="options">
                    <div class="row">
                        <div class="col-md-3">
                            <input type="text" id="Q${i}Opt01" placeholder="Opt01..." required>
                        </div>
                        <div class="col-md-3">
                            <input type="text" id="Q${i}Opt02" placeholder="Opt02..." required>
                        </div>
                        <div class="col-md-3">
                            <input type="text" id="Q${i}Opt03" placeholder="Opt03..." required>
                        </div>
                        <div class="col-md-3">
                            <input type="text" id="Q${i}Opt04" placeholder="Opt04..." required>
                        </div>
                        <div class="col-md-3">
                            <label for="">Select Right Option</label>
                                <select id="Q${i}RightOpt" name="option" required>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                        </div>
                    </div>
                </div>
            </div>
        `;
        }
        hideDiv("Create_Quiz");
        showDiv("Quiz_Details");
    } else {
        alert("Please Enter Quiz Deatils");
    }
}
var Quiz = {
    title: "",
    duration: 0,
    numberOfQuestion: 0,
    passingCriteria: 0,
    Question: {

    },
};
var Question = {
};
let getQuestion = () => {
    let Title = document.getElementById("Title").value;
    let NumberOfQuestion = document.getElementById("NumberOfQuestion").value;
    let Duration = document.getElementById("Duration").value;
    let Passing = document.getElementById("Passing").value;
    Quiz.title = Title;
    Quiz.numberOfQuestion = NumberOfQuestion;
    Quiz.duration = Duration;
    Quiz.passingCriteria = Passing;
    for (let i = 1; i <= NumberOfQuestion; i++) {
        let question = document.getElementById(`q${i}`).value;
        let opt1 = document.getElementById(`Q${i}Opt01`).value;
        let opt2 = document.getElementById(`Q${i}Opt02`).value;
        let opt3 = document.getElementById(`Q${i}Opt03`).value;
        let opt4 = document.getElementById(`Q${i}Opt04`).value;
        let rightOpt = document.getElementById(`Q${i}RightOpt`).value;
        Quiz.Question[i] = {
            Question: question,
            option: { 'opt1': opt1, 'opt2': opt2, 'opt3': opt3, 'opt4': opt4 },
            rightOpt: rightOpt
        };
    };
    localStorage.setItem(`${Title} Quiz`, JSON.stringify(Quiz));
    document.getElementById("Quiz_Details").style.display = "none";
    document.getElementById("Success_Note").style.display = "block";
}
let cancel = () => {
    document.getElementById("Create_Quiz").style.display = "none";
}
let showStoredQuizes = () => {

    const keys = Object.keys(localStorage);
    for (let i = 0; i < localStorage.length; i++) {
        let key = keys[i];
        const QuizObj = JSON.parse(localStorage.getItem(key));
        console.log(QuizObj, QuizObj.title, QuizObj.duration, QuizObj.numberOfQuestion, QuizObj.passingCriteria);
        document.getElementById("quizCards").innerHTML += `
        <div class="quiz-items" id="quiz-items">
            <div class="row">
                <div class="col-lg-12">
                    <h3>${QuizObj.title}</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8">
                    <h6>Duration : ${QuizObj.duration} MIN</h6>
                    <h6>Number of Question : ${QuizObj.numberOfQuestion}</h6>
                    <h6>Passing Criteria : ${QuizObj.passingCriteria}%</h6>
                    <span>more</span>
                </div>
                <div class="col-lg-4">
                    <div class="startBtn">
                        <span onclick="takeQuiz('${key}');">Take Quiz</span>
                    </div>
                </div>
            </div>
        </div>
     `
    }
}

let showQuiz = (quizkey) => {
    let Quiz = JSON.parse(localStorage.getItem(quizkey));
    let title = Quiz.title;
    let numberOfQuestion = Quiz.numberOfQuestion;
    let duration = Quiz.duration;
    let passingCriteria = Quiz.passingCriteria;
    const keys = Quiz.Question;
    const key = keys;
    console.log(key);
    for (let i = 1; i <= numberOfQuestion; i++) {
        let questions = document.getElementById("questions");
        const key = keys[i];
        questions.innerHTML += `
        <div>
        <label class="question" for="" id="q${i}">Q${i}. ${key.Question}</label>
            <div class="row">
                <div class="col-md-4">
                    <input type="radio" name="${i}opt" value="1" id="Q${i}O1">
                    <label class="option" for="">${key.option.opt1}</label>
                </div>
                <div class="col-md-4">
                    <input type="radio" name="${i}opt" value="2" id="Q${i}O2">
                    <label class="option" for="">${key.option.opt2}</label>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <input type="radio" name="${i}opt" value="3" id="Q${i}O3">
                    <label class="option" for="">${key.option.opt3}</label>
                </div>
                <div class="col-md-4">
                    <input type="radio" name="${i}opt" value="4" id="Q${i}O4">
                    <label class="option" for="">${key.option.opt4}</label>
                    <br>
                </div>
            </div>
        </div>
        `
        console.log(key.Question);
        console.log(key.rightOpt);
        key.option.opt1;
        key.option.opt2;
        key.option.opt3;
        key.option.opt4;
        console.log(key.option.opt1, key.option.opt2, key.option.opt3, key.option.opt4);
        console.log("==================");
    }
    questions.innerHTML += `
        <button id="submit" onclick="calResult('${title} Quiz')">Submit</button>`
    console.log(title, "quiz started, passing Criteria :", passingCriteria, "number Of Question :", numberOfQuestion, "duration :", duration);
}
let calResult = (title) => {
    let Quiz = JSON.parse(localStorage.getItem(title));
    let correctCount = 0;
    let correctAnswers = [];
    let scoreDiv = document.getElementById("score");
    let questionsDiv = document.getElementById("questions");
    questionsDiv.style.display = "none";
    for (let i = 1; i <= Quiz.numberOfQuestion; i++) {
        let option;
        let attampet;
        for (let j = 1; j <= 4; j++) {
            option = document.getElementById(`Q${i}O${j}`);
            if (option.checked) {
                attampet = option.value;
            }
        }
        let rightOpt = Quiz.Question[i].rightOpt;
        if (rightOpt === attampet) {
            correctAnswers[i] = `Q${i} : correct`;
            correctCount += 1;
        } else {
            correctAnswers[i] = `Q${i} : wrong, Right Option : ${rightOpt}`;
        }
    }
    let Status;
    let message;
    let result = (correctCount / +Quiz.numberOfQuestion) * 100;
    if (result >= Quiz.passingCriteria) {
        console.log("passed result : " + result + " " + correctAnswers);
        message = "Passed, Congratulations"
        Status = "Passed";
    }
    else {
        console.log("Quiz Failed! Try again, result : " + result + " " + correctAnswers);
        message = "Quiz Failed! Try again,";
        Status = "Failed";
    }
    scoreDiv.innerHTML += `
        <h3>${title}</h3>
        <h1>${result}</h1>
        <h3>${Status}</h3>
        <p>${message}</p>
        <button id="saveBtn"onclick="location.replace('./index.html')">Home</button>
    `
}

let beReadyDiv;
let takeQuiz = (e) => {
    document.getElementById("beReadyMessage").innerHTML = `You have ${JSON.parse(localStorage.getItem(e)).duration}min to Complete this Quiz,<br> Best Of Luck!`;
    beReadyDiv = e;
    console.log(e);
    hideDiv("available");
    showDiv("beReady");
}

let startQuiz = () => {
    showQuiz(beReadyDiv);
    hideDiv("beReady");
}
let getData = () => {
    localStorage.setItem("HTML Quiz", '{"title":"HTML","duration":"5","numberOfQuestion":"5","passingCriteria":"50","Question":{"1":{"Question":"The correct sequence of HTML tags for starting a webpage is -","option":{"opt1":"Head, Title, HTML, body","opt2":"HTML, Body, Title, Head","opt3":"HTML, Head, Title, Body","opt4":"HTML, Head, Title, Body"},"rightOpt":"4"},"2":{"Question":"HTML stands for -","option":{"opt1":"HighText Machine Language","opt2":"HyperText and links Markup Language","opt3":"HyperText Markup Language","opt4":"None of these"},"rightOpt":"3"},"3":{"Question":"What are the types of unordered or bulleted list in HTML?","option":{"opt1":"disc, square, triangle","opt2":"polygon, triangle, circle","opt3":"disc, circle, square","opt4":"All of the above"},"rightOpt":"3"},"4":{"Question":"Which of the following HTML attribute is used to define inline styles?","option":{"opt1":"style","opt2":"type","opt3":"class","opt4":"None of the above"},"rightOpt":"1"},"5":{"Question":"An HTML program is saved by using the ____ extension.","option":{"opt1":".ht","opt2":".html","opt3":".hml","opt4":"None of the above"},"rightOpt":"2"}}}');
    location.replace("./index.html");
}
showStoredQuizes();