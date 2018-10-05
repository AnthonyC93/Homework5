var questions={
    q1={
        question:"Who directed the 2017 movie Interstellar",
        options=["Christopher Nolan","Michael Bay","Spike Lee","Michael Scott"],
        imgSrc:"",
        answer:"Christopher Nolan"
    },

    q2={
        question:"",
        options=[],
        imgSrc:"",
        answer:""
    },

    q3={
        question:"",
        options=[],
        imgSrc:"",
        answer:""
    },

    q4={
        question:"",
        options=[],
        imgSrc:"",
        answer:""
    },

    q5={
        question:"",
        options=[],
        imgSrc:"",
        answer:""
    },

    q6={
        question:"",
        options=[],
        imgSrc:"",
        answer:""
    },

    q7={
        question:"",
        options=[],
        imgSrc:"",
        answer:""
    },

    q8={
        question:"",
        options=[],
        imgSrc:"",
        answer:""
    },

    q9={
        question:"",
        options=[],
        imgSrc:"",
        answer:""
    },

    q10={
        question:"",
        options=[],
        imgSrc:"",
        answer:""
    },

   
}

function makeNewCard(n){

    //h2 for question itself. centered.
    //p for options
    //h3 for timer



    $("#mainContainer").append("<h2>"+questions.q1.question+"</h2>").append("<p>"+questions.q1.options[0]+"</p>")
}

function randomArrayIndex(array){
    var rando = Math.floor(Math.random()*array.length)
    
    return rando;
}

makeNewCard(1);


//generate random index number
//going to remove items in arrays as game goes. that way don't need to go crazy with for loops checking random numbers 