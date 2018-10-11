var questions =[
    q1= {
        question: "Who is the american football team in New York?",
        options: ["giants", "bengals", "patriots", "red sox"],
        imgSrc: "",
        answer: "giants"
    },
    
    q2= {
        question: "Who is the american football team in Seattle?",
        options: ["seahawks", "jets", "bucaneers", "saints"],
        imgSrc: "",
        answer: "seahawks"
    },

    q3= {
        question: "Who is the american football team in Miami, Florida?",
        options: ["seahawks", "dolphins", "bucaneers", "jets"],
        imgSrc: "",
        answer: "dolphins"
    },
    q4= {
        question: "Who is the american football team in Tampa Bay, Florida?",
        options: ["texans", "dolphins", "bucaneers", "jets"],
        imgSrc: "",
        answer: "bucaneers"
    },
    q5= {
        question: "Who is the american football team in New Orleans?",
        options: ["giants", "dolphins", "saints", "jets"],
        imgSrc: "",
        answer: "saints"
    },
    q6= {
        question: "Who is the american football team in Cleveland?",
        options: ["browns", "yankees", "cowboys", "jets"],
        imgSrc: "",
        answer: "browns"
    },
    q7= {
        question: "Who is the absolutely awful american football team in philadephia?",
        options: ["seahawks", "eagles", "bucaneers", "jets"],
        imgSrc: "",
        answer: "eagles"
    },
    q8= {
        question: "Who is the american football team in Los Angeles?",
        options: ["rams", "idk", "chargers", "jaguars"],
        imgSrc: "",
        answer: "rams"
    },
    q9= {
        question: "Who is the american football team in Jacksonville, Florida?",
        options: ["steelers", "ravens", "bucaneers", "jaguars"],
        imgSrc: "",
        answer: "jaguars"
    },
    q10= {
        question: "Who is the american football team in Green Bay?",
        options: ["packers", "kings", "rams", "jets"],
        imgSrc: "",
        answer: "packers"
    }
];
var questionBeingPlayed;
var seconds;
var wrong=0;
var right=0;
// var startingQuestions = questions.slice();
// var startingQuestions = [].concat(questions);
var startingQuestions = [
    q1= {
        question: "Who is the american football team in New York?",
        options: ["giants", "bengals", "patriots", "red sox"],
        imgSrc: "",
        answer: "giants"
    },
    
    q2= {
        question: "Who is the american football team in Seattle?",
        options: ["seahawks", "jets", "bucaneers", "saints"],
        imgSrc: "",
        answer: "seahawks"
    },

    q3= {
        question: "Who is the american football team in Miami, Florida?",
        options: ["seahawks", "dolphins", "bucaneers", "jets"],
        imgSrc: "",
        answer: "dolphins"
    },
    q4= {
        question: "Who is the american football team in Tampa Bay, Florida?",
        options: ["texans", "dolphins", "bucaneers", "jets"],
        imgSrc: "",
        answer: "bucaneers"
    },
    q5= {
        question: "Who is the american football team in New Orleans?",
        options: ["giants", "dolphins", "saints", "jets"],
        imgSrc: "",
        answer: "saints"
    },
    q6= {
        question: "Who is the american football team in Cleveland?",
        options: ["browns", "yankees", "cowboys", "jets"],
        imgSrc: "",
        answer: "browns"
    },
    q7= {
        question: "Who is the absolutely awful american football team in philadephia?",
        options: ["seahawks", "eagles", "bucaneers", "jets"],
        imgSrc: "",
        answer: "eagles"
    },
    q8= {
        question: "Who is the american football team in Los Angeles?",
        options: ["rams", "idk", "chargers", "jaguars"],
        imgSrc: "",
        answer: "rams"
    },
    q9= {
        question: "Who is the american football team in Jacksonville, Florida?",
        options: ["steelers", "ravens", "bucaneers", "jaguars"],
        imgSrc: "",
        answer: "jaguars"
    },
    q10= {
        question: "Who is the american football team in Green Bay?",
        options: ["packers", "kings", "rams", "jets"],
        imgSrc: "",
        answer: "packers"
    }
];
var startingLength=questions.length;
//since I want to remove q object from array to keep random easy, I need to remove after evaluation is made because answer is inside it.
function randomArrayIndex(array){
    var rando = Math.floor(Math.random()*array.length)

     return rando;
}


$("#start").on("click",function(){
    newQuestion();    
})

function restart(){
    questions=startingQuestions.slice();
    console.log("OG array that is now being played is: " + questions);
    $("#restart").remove();
    newQuestion();
  }

$(".btn-block").on("click",function(){
    var guess = event.target.innerHTML;
    if(guess===questionBeingPlayed.answer){        
        correctGuess();
    }else{
        wrongGuess();
    }
})

function startTimer(){
   var timer = $("#timer");
   var timerRowWidth=$("#timerCol").width();
   var count=0
   var rgb =0;
   timer.css("color","rgb(0,0,0)");
   timer.css("margin-right","initial")

   var time=30;
   timer.html(time)

    seconds = setInterval(function(){
        rgb=rgb+11;
        count=count+(timerRowWidth/30);        
       time--;
       timer.html(time);
        timer.css("margin-right",count);
        timer.css("color","rgb("+rgb+",0,0)")

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

     randomIndex = randomArrayIndex(qObject.options);
     $(".op4").html(qObject.options[randomIndex]);
     qObject.options.splice(randomIndex,1);

    //  console.log("new card generated. startingQuestions = " + startingQuestions)
}

function newQuestion(){
    var randIndex = randomArrayIndex(questions);
    questionBeingPlayed=questions[randIndex];
    console.log("question: "+questionBeingPlayed.question);
    console.log("options: "+questionBeingPlayed.options);
    console.log("answer: "+ questionBeingPlayed.answer)
    questions.splice(randIndex,1);
    changeCard(questionBeingPlayed);
    $(".btn-block").css("display","initial");
    startTimer();
}
function wrongGuess(){
    clearInterval(seconds);
    wrong++;
    $(".btn-block").css("display","none")
    $(".header").html("Sorry! the correct answer is "+questionBeingPlayed.answer);
    $("#timer").html("");
    waitAndSwitch();

}
function correctGuess(){
    clearInterval(seconds);
    right++;
    $(".btn-block").css("display","none")
    $(".header").html("nice");
    $("#timer").html("");
    waitAndSwitch();
}
function timeUp(){
    clearInterval(seconds);
    wrong++;
    $(".btn-block").css("display","none")
    $(".header").html("time. you're out of it");
    $("#timer").html("");
    waitAndSwitch();
}

function waitAndSwitch(){
    setTimeout(function(){
        
        if(questions.length===0){
            endGame();
            return;
        }
        
        newQuestion();
    },3000)
}

function endGame(){
    $(".btn-block").css("display","none")
    var score = Math.round((right/startingLength)*100)
    $(".header").html("games over. you got "+right+" out of "+startingLength+" correct<br>"+"that's a "+score+"%");
    //make restart button that sets questions = startingQuestions and calls newQuestions(). shoud be simple. 
    $("#buttons").append("<button onclick='restart()' type='button'class='btn btn-dark' id='restart'>Restart</button>");
}
//five 