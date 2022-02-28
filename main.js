let prevNum = "";
let currentNum="";
let currentOperator ="";

const sound = new Audio('bubbleShort.wav');
sound.volume = 0.2;

let allBtns = document.querySelectorAll('button');
allBtns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        sound.play();
    })  
});


let currentDisplayText = document.querySelector('.current-number');
let prevDisplayText = document.querySelector('.prev-number');

let numberBtn = document.querySelectorAll('.number');
numberBtn.forEach((btn) =>{
    btn.addEventListener('click', (e)=>{
        handleNum(e.target.textContent);
    })
})

let operatorBtn = document.querySelectorAll('.operator')
operatorBtn.forEach((btn) =>{
    btn.addEventListener('click', (e)=>{
        handleOperator(e.target.textContent);
    })
})

let equalBtn = document.querySelector('.equal');
equalBtn.addEventListener('click',()=>{
    if(currentNum ==='0'){
        displayRes("ERROR");
        return;}
    compute(currentOperator);
});

function compute(op){
    let res = 0;
       switch(op){
            case '+':
                res = Number(currentNum) + Number(prevNum)
                displayRes(res);
            break;
            case '-':
               res= Number(prevNum -currentNum);
               displayRes(res)
            break;
            case 'x':
               res = Number(prevNum*currentNum)
               displayRes(res);
            break;
            case '÷':
               res = Number(prevNum/currentNum)
               displayRes(Math.fround(res));
            break;
       }
}

function displayRes(val){
    displayCurrent(val);
    displayPrev("")
}


function handleOperator(operator){
    currentOperator = operator;
    prevNum = currentNum;
    currentNum="";
    displayPrev(prevNum);
    displayCurrent(currentOperator)
}


function handleNum(number){
    if(currentOperator===""){
        currentNum +=number;
        displayCurrent(currentNum)
        return;
    }
    currentNum+=number;
    displayCurrent(currentNum);
}

function displayCurrent(val){
    currentDisplayText.textContent = val;
}

function displayPrev(val){
    prevDisplayText.textContent = val;
}


let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clear);

function clear(){
    displayCurrent("");
    displayPrev("")
    currentOperator ="";
    currentNum = "";
    prevNum="";
}
