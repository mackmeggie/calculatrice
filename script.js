let numA;
let numB; 
let opChoice;
const display = document.getElementById("values");
let displayValue = display.innerHTML;

//Addition
const add = function(numA, numB) {
    let c = numA + numB;
      if (numA == 0 && numB == 0) {
      let c = 0
    }
    display.innerHTML = c;
    console.log(c);
  };

//Subtraction
const subtract = function(numA, numB) {
    let c = numA - numB;
    display.innerHTML = c;
    console.log(c);
  };

//Multiplication
const multiply = function(numA, numB) {
    let c = numA * numB;
    display.innerHTML = c;
    console.log(c);
}

//Division
const divide = function(numA, numB) {
    let c = numA / numB;
    display.innerHTML = c;
    console.log(c);
}

let addition;
let subtraction;
let multiplication;
let division;

//Operator selection
const operate = function(opChoice) {
    if (opChoice == 'addition') {
        add(numA, numB)
    }
    else if (opChoice == 'subtraction') {
        subtract(numA, numB)
    }
    else if (opChoice == 'multiplication') {
        multiply(numA, numB)
    }
    else if (opChoice == 'division') {
        divide(numA,numB)
    }
}

//Populate display
let seven = document.getElementById('seven');
seven.addEventListener('click', () => {
    display.innerHTML += 7;
})    
   
let eight = document.getElementById('eight');
eight.addEventListener('click', () => {
    display.innerHTML += 8;
}) 

let nine = document.getElementById('nine');
nine.addEventListener('click', () => {
    display.innerHTML += 9;
}) 

let four = document.getElementById('four');
four.addEventListener('click', () => {
    display.innerHTML += 4;
}) 

let five = document.getElementById('five');
five.addEventListener('click', () => {
    display.innerHTML += 5;
}) 

let six = document.getElementById('six');
six.addEventListener('click', () => {
    display.innerHTML += 6;
}) 

let one = document.getElementById('one');
one.addEventListener('click', () => {
    display.innerHTML += 1;
}) 

let two = document.getElementById('two');
two.addEventListener('click', () => {
    display.innerHTML += 2;
}) 

let three = document.getElementById('three');
three.addEventListener('click', () => {
    display.innerHTML += 3;
}) 

let zero = document.getElementById('zero');
zero.addEventListener('click', () => {
    display.innerHTML += 0;
}) 

//Clear Variables
const clearVar = function() {
    numA = '';
    numB = '';
    opChoice = '';
}

//Operator EventListeners
let plus = document.getElementById('plus');
plus.addEventListener('click', () => {
    opChoice = 'addition';
    console.log('addition');
});
plus.addEventListener('click', () =>{
    numA = Number(display.innerHTML);
    console.log(numA)
});
plus.addEventListener('click', () => {
    display.innerHTML = ''
});

let minus = document.getElementById('minus');
minus.addEventListener('click', () => {
    numA = Number(display.innerHTML);
    console.log(numA)
});
minus.addEventListener('click', () => {
    display.innerHTML = ''
    });
minus.addEventListener('click', () => {
    opChoice = 'subtraction';
    console.log('subtraction');
});

let times = document.getElementById('times');
times.addEventListener('click', () => {
    numA = Number(display.innerHTML);
    console.log(numA)
});
times.addEventListener('click', () => {
    display.innerHTML = ''
    });
times.addEventListener('click', () => {
    opChoice = 'multiplication';
    console.log('multiplication');
});

let divy = document.getElementById('divy');
divy.addEventListener('click', () => {
    numA = Number(display.innerHTML);
    console.log(numA)
});
divy.addEventListener('click', () => {
    display.innerHTML = ''
    });
divy.addEventListener('click', () => {
    opChoice = 'division';
    console.log('division')
});

let clearbutt = document.getElementById('clear');
clearbutt.addEventListener('click', () => {
    display.innerHTML = ''
});
clearbutt.addEventListener('click', clearVar);


let equals = document.getElementById('equals');
equals.addEventListener('click', () => {
    numB = Number(display.innerHTML);
    console.log(numB)
});
    equals.addEventListener('click', () => {
   display.innerHTML = ''
});
    equals.addEventListener('click', operate);

