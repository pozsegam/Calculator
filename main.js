function add(num1,num2){
    console.log( num1+num2);
}

function subtract(num1,num2){
    console.log (num1-num2);
}

function multiply(num1,num2){
    console.log (num1*num2) ;
}

function divide(num1,num2){
    console.log (num1/num2);
}

function operate(operator, num1,num2){
    switch(operator){
        case '+':
            add(num1,num2);
        break;
        case '-':
            subtract(num1, num2);
        break;
        case 'x':
            multiply(num1, num2);
        break;
        case '÷':
            divide(num1, num2);
        break;
    }
}

operate('+',5,3);
operate('-',5,3);
operate('÷',5,3);
operate('x',5,3);
