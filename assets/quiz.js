var questions =[
    q1= {
        question: "Who directed the 2017 movie Interstellar",
        options: ["Christopher Nolan", "Michael Bay", "Spike Lee", "Michael Scott"],
        imgSrc: "",
        answer: "Christopher Nolan"
    },
    
    q2= {
        question: "Who was a terrible manager, but decent human being?",
        options: ["michael scott","gumby","idk","out of options"],
        imgSrc: "",
        answer: "michael scott"
    },

    q3= {
        question: "why am I putting so much damn work into this like damn",
        options: ["want more money","the people need to see my work","need to automate job","really like this shit"],
        imgSrc: "",
        answer: "want more money"
    },

    // q4= {
    //     question: "",
    //     options: [],
    //     imgSrc: "",
    //     answer: ""
    // },
    // q5= {
    //     question: "",
    //     options: [],
    //     imgSrc: "",
    //     answer: ""
    // },

    // q6= {
    //     question: "",
    //     options: [],
    //     imgSrc: "",
    //     answer: ""
    // },

    // q7= {
    //     question: "",
    //     options: [],
    //     imgSrc: "",
    //     answer: ""
    // },

    // q8= {
    //     question: "",
    //     options: [],
    //     imgSrc: "",
    //     answer: ""
    // },

    // q9= {
    //     question: "",
    //     options: [],
    //     imgSrc: "",
    //     answer: ""
    // },

    // q10= {
    //     question: "",
    //     options: [],
    //     imgSrc: "",
    //     answer: ""
    // }

   
]
var questionBeingPlayed;
var answers=[];
var seconds;
var wrong=0;
var right=0;
var startingQuestions = questions;
var startingLength=questions.length;
//since I want to remove q object from array to keep random easy, I need to remove after evaluation is made because answer is inside it.
console.log(questions)
function randomArrayIndex(array){
    var rando = Math.floor(Math.random()*array.length)

     return rando;
}


$("#start").on("click",function(){
    newQuestion();    
})

$(".btn-block").on("click",function(){
    var guess = event.target.innerHTML;
    console.log(guess);

    if(guess===questionBeingPlayed.answer){        
        correctGuess();
    }else{
        wrongGuess();
    }
})

function startTimer(){
 
   var timer = $("#timer");
   var timerRowWidth=$("#timerCol").width();
   console.log("width: "+timerRowWidth)
   var count=0
   $("#timer").css("color","#d83838");
   var hex =383;
   
   var time=30;
    timer.html(time)

    seconds = setInterval(function(){
        hex+33;
        count=count+(timerRowWidth/30);        
        console.log("width: "+timerRowWidth)
        console.log("count= "+count)
       time--;
       timer.html(time);
    //    $("#timerRow").css("margin-top",count+"px");
        //set rgb changing thing
        timer.css("margin-right",count);
        console.log($("#timer").css("color"));

       if(time===0){
        timeUp();
       }
   },1000)

}

function changeCard(qObject){
    //change card header to question
    $(".header").html(qObject.question);

     //change op1.html and remove option from array. can't place in function because I can't remove the item from array before passing back random index
    var randomIndex = randomArrayIndex(qObject.options);
    $(".op1").html(qObject.options[randomIndex]);
    qObject.options.splice(randomIndex,1);

     //change op2.html
     randomIndex = randomArrayIndex(qObject.options);
     $(".op2").html(qObject.options[randomIndex]);
     qObject.options.splice(randomIndex,1);

     //change op3.html
     randomIndex = randomArrayIndex(qObject.options);
     $(".op3").html(qObject.options[randomIndex]);
     qObject.options.splice(randomIndex,1);

    console.log(qObject.options)
     randomIndex = randomArrayIndex(qObject.options);
     $(".op4").html(qObject.options[randomIndex]);
     qObject.options.splice(randomIndex,1);
     console.log(qObject.options)
}

function newQuestion(){
    var randIndex = randomArrayIndex(questions);
    // questionBeingPlayed = questions[0];
    questionBeingPlayed=questions[randIndex];
    questions.splice(randIndex,1);
    changeCard(questionBeingPlayed);
    $(".btn-block").css("display","initial");
    startTimer();
}
function wrongGuess(){
    clearInterval(seconds);
    wrong++;
    $(".btn-block").css("display","none")
    $(".header").html("Sorry! the correct answer is "+questionBeingPlayed.answer)
    console.log("Sorry! the correct answer is "+questionBeingPlayed.answer)
    // $("#buttons").html("<img src='https://media.giphy.com/media/623MNjlyhkR7n2GLPQ/giphy.gif'>")
    $("#timer").html("");
    waitAndSwitch();

}
function correctGuess(){
    clearInterval(seconds);
    right++;
    $(".btn-block").css("display","none")
    $(".header").html("nice");
    console.log("correct!");
    $("#timer").html("");
    waitAndSwitch();
}
function timeUp(){
    clearInterval(seconds);
    wrong++;
    $(".btn-block").css("display","none")
    console.log("time's up dumbass");
    $(".header").html("time. you're out of it");
    $("#timer").html("");
    waitAndSwitch();
}
function populateAnswers(){
    for(var q in questions){
        answers.push(questions[q].answer)
    }
}
function waitAndSwitch(){
    setTimeout(function(){
        
        if(questions.length===0){
            endGame();
        }
        
        newQuestion();
    },3000)
}

function endGame(){
    $(".btn-block").css("display","none")
    var score = Math.round((right/startingLength)*100)
    $(".header").html("games over. you got "+right+" out of "+startingLength+" correct<br>"+"that's a "+score+"%");
    console.log("games over. you got "+right+" out of "+startingLength+" correct<br>"+"that's a "+score+"%");
    //make restart button that sets questions = startingQuestions and calls newQuestions(). shoud be simple. 
}
//five 