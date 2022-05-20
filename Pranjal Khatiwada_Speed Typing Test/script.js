//Variable Declaration
const words = document.getElementById('words');
const texts = document.getElementById('texts');
const score = document.getElementById('score');
const after_game_ends = document.getElementById('after-game-ends');
const level_form = document.getElementById('level-form');
const difficulty_select = document.getElementById('difficulty');

//Different sentences to show 
//Hard sentences
const hard = ['Why didnt you tell me Dulce was giving you a hard time?',
'Even the ambulance siren was hard to hear.',
'Lets just say I learned the hard way that I can take care of myself.',
'It was hard to explain how her beauty was different than so many others, but it was.',
'Her healing magic zapped him hard enough almost to right his head.',
'He landed on the hard ground with a curse and darted to his feet, chasing her down again.',
'At the effort he put in the difficult words, she looked up at him, her clear blue eyes vexed.',
'Hes a good boy, but now hes going through a difficult stage.',
'In 65 B.C. Jerusalem was captured by Pompey after a difficult siege.',
'Even, however, with this reservation, it is difficult to resist the mass of evidence as a whole.'
];

//Medium sentences
const medium = ['This is a hard website.',
'I pondered the meaning long and hard.',
'Cinema is a medium of mass entertainment.',
'He turned around and hugged her hard.',
'I sensed it was a difficult one on his part.',
'It was difficult to describe the depth of her feelings.',
'Why did everything have to be so difficult?',
'That shouldnt be too difficult to arrange.',
'As a theologian it is difficult to class him.',
'It was difficult for him to please both pope and king.' 
];

//Easy sentences
const easy = ['How are you?',
'What is your name?',
'What is nepal?',
'Its hard to explain',
'Ugh, how hard it is!',
'He was breathing hard.',
'Talon went down hard.',
'How you doin?',
'Hello there mate!!!',
'I hate science.'
];

// Generating random words from the given above words 
let randomwordeasy;
let randomwordmedium;
let randomwordhard;

//Other Variables
let scores = 0;

// Used text focus to instantly type..
texts.focus(); 

//Function generated for random words

//For generating Hard Words
function Hardword() {
    return hard[
        Math.floor(Math.random() * hard.length)
    ];
}

//For generating Medium Words
function Mediumword() {
    return medium[
        Math.floor(Math.random() * medium.length)
    ];
}

//For generating Easy Words
function Easyword() {
    return easy[
        Math.floor(Math.random() * easy.length)
    ];
}

//adding word to the page - DOM

//adding hard words
function addHardWord(){
    randomwordhard = Hardword();
    words.innerHTML = randomwordhard;
}

//adding medium words
function addMediumWord(){
    randomwordmedium = Mediumword();
    words.innerHTML = randomwordmedium;
}

//adding easy words
function addEasyWord(){
    randomwordeasy = Easyword();
    words.innerHTML = randomwordeasy;
} 

//For Time Interval update
let start = document.querySelector(".start");
var initial = 50;
let time = document.querySelector(".time-shower")

start.addEventListener("click",function(){
    time.innerHTML = initial;
    x= setInterval(timer, 1000);

}) 

function timer (){
    var seconds = initial - 1;
    initial--;
    time.innerHTML= 'Time Left:' + seconds + 's';
    if(seconds === 0){ 
        gameEnd();
    }  
}

//Updating scoreboard

//Updating easy words
function updateScoreboardeasy(){
    addEasyWord(); 
    scores++;
    score.innerHTML = scores;
}

//Updating hard words
function updateScoreboardhard(){
    addHardWord(); 
    scores++;
    score.innerHTML = scores;
}

//Updating medium words
function updateScoreboardmedium(){
    addMediumWord(); 
    scores++;
    score.innerHTML = scores;
}

//Game end -- When the game ends 
function gameEnd(){
    after_game_ends.innerHTML = `
    <h1>Time Finished</h1>
    <p>Your Score is ${scores}</p>
    <button onclick="location.reload()">Reload</button>
    `;
    after_game_ends.style.display = 'flex';
}

// Generating event listener's

//For easy words
texts.addEventListener('input', e => {
    const inserteasy = e.target.value;
    if(inserteasy === randomwordeasy) {   
        addeasytime();
        updateScoreboardeasy();
        e.target.value='';  
        
    }  
});

//For hard words
texts.addEventListener('input', e => {
    const inserthard = e.target.value;
    if(inserthard === randomwordhard) { 
        addhardtime(); 
        updateScoreboardhard();
        e.target.value='';   
    }  
});

//For medium words
texts.addEventListener('input', e => {
    const insertmedium = e.target.value;
    if(insertmedium === randomwordmedium) {  
        addmediumtime();
        updateScoreboardmedium();
        e.target.value='';   
    }  
});   

//For Difficulty 
var select = document.getElementById('difficulty');
select.addEventListener("mouseout",function(){
    var value = select.options[select.selectedIndex].value;
    if(value=="Hard"){
        addHardWord();
    }

    else if (value=="Medium"){
        addMediumWord();
    }
   
    else if (value=="Easy"){
        addEasyWord();
    }

}); 


//To add time upon giving the correct answers

//Add easy time 
function addeasytime() { 
    clearInterval(x); 
    time.innerHTML = initial;
    z = setInterval(addeasytimer, 1000);

    function addeasytimer (){ 
    var seconds = initial + 2;
    initial--; 
    time.innerHTML= 'Time Left:' + seconds + 's'; 
    if(seconds === 0){ 
        gameEnd();
    } 
}   
    addeasytimer(); 
};  

//Add medium time 
function addmediumtime() { 
    clearInterval(x); 
    time.innerHTML = initial;
    p = setInterval(addmediumtimer, 1000);

    function addmediumtimer (){ 
    var seconds = initial + 4;
    initial--; 
    time.innerHTML= 'Time Left:' + seconds + 's'; 
    if(seconds === 0){ 
        gameEnd();
    } 
}   
    addmediumtimer(); 
};  

//Add hard time 
function addhardtime() { 
    clearInterval(x); 
    time.innerHTML = initial;
    k = setInterval(addhardtimer, 1000);

    function addhardtimer (){ 
    var seconds = initial + 6;
    initial--; 
    time.innerHTML= 'Time Left:' + seconds + 's'; 
    if(seconds === 0){ 
        gameEnd();
    } 
}   
    addhardtimer(); 
};   