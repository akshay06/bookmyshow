const predefinedArray = [100, 101, 102, 103, 104, 105];

const actualListDiv = document.querySelector("#actualArray");
const finalArrayDiv = document.querySelector("#finalArray");
const submitBtn = document.querySelector("#submitBtn");
const userInputDiv = document.querySelector("#userInput");
const duplicateElementsDiv = document.querySelector("#duplicateElements");
const errorDiv = document.querySelector("#errorDiv");
const allowedRegex = /^[0-9\,\-]*$/;

let singleNumbersList = [];
let allRangesArray = [];
let rangeList = [];
submitBtn.disabled = true;

actualListDiv.innerHTML = '['+predefinedArray+']';

function validateInput(ev) {
  const userInput = ev.target.value;
  if (userInput === '') {
    errorDiv.innerHTML = 'Please enter numbers or range';
  } else if (isNaN(userInput.charAt(0))) {
    errorDiv.innerHTML = 'Input should start with a number';
  } else if (isNaN(userInput.charAt(userInput.length-1))) {
    errorDiv.innerHTML = 'Input should end with a number';
  } else if (!allowedRegex.test(userInput)) {
    errorDiv.innerHTML = 'Sorry, Only numbers, comma & hyphen is allowed, remove spaces as well';
  } else if(userInput.includes('--') || userInput.includes(',,') || userInput.includes(',-')  || userInput.includes('-,')) {
    errorDiv.innerHTML = 'Invalid input, remove extra commas & hyphen';
  } else {
    errorDiv.innerHTML = '';
    splitInputToArray(userInput);
  }
  if (errorDiv.innerHTML !== '') {
    submitBtn.disabled = true;
    errorDiv.style.opacity = 1;
  } else {
    errorDiv.style.opacity = 0;
    submitBtn.disabled = false;
  }
}

function splitInputToArray(userInput) {
  const inputArray = userInput.split(',');
  inputArray.forEach(input => {
    if(input.includes('-')) {
      rangeList.push(input);
    } else {
      singleNumbersList.push(Number(input))
    }
  });
  rangeList.forEach(range => {
    const rangeNumbers = range.split('-');
    const firstNumber = Number(rangeNumbers[0]);
    const lastNumber = Number(rangeNumbers[1]);
    if(rangeNumbers.length > 2) {
      errorDiv.innerHTML = 'Invalid range, please enter single hyphen seperated range';
    } else if (firstNumber > lastNumber) {
      errorDiv.innerHTML = 'Invalid range, please enter in ascending order';
    } else {
      errorDiv.innerHTML = '';
      // for(let i=firstNumber; i<= lastNumber; i++) {
      //   rangeArray.push(i);
      // }
      // return rangeArray;
    }
  });
}

function onSubmit(ev) {
  ev.preventDefault();
  if (errorDiv.innerHTML !== '' || userInputDiv.value === '') {
    submitBtn.disabled = true;
    return false;
  }
  let finalArrayToShow = [];
  let duplicateElements = [];
  rangeList.forEach(range => {
    const rangeNumbers = range.split('-');
    const firstNumber = Number(rangeNumbers[0]);
    const lastNumber = Number(rangeNumbers[1]);
    for(let i=firstNumber; i<= lastNumber; i++) {
      if(finalArrayToShow.includes(i) || duplicateElements.includes(i)) {
        continue;
      }
      if (predefinedArray.includes(i)) {
        duplicateElements.push(i);
      } else {
        finalArrayToShow.push(i);
      }
    }
  });
  singleNumbersList.forEach(i => {
    if(finalArrayToShow.includes(i) || duplicateElements.includes(i)) {
      return;
    }
    if (predefinedArray.includes(i)) {
      duplicateElements.push(i);
    } else {
      finalArrayToShow.push(i);
    }
  });
  finalArrayToShow = [...predefinedArray,...finalArrayToShow];
  finalArrayDiv.innerHTML = '['+finalArrayToShow+']';
  duplicateElementsDiv.innerHTML = '['+duplicateElements+']';
  if (duplicateElements.length === 0) {
      duplicateElementsDiv.innerHTML = '[]';
  }
}

function resetArray(ev) {
  finalArrayDiv.innerHTML = '[ ]';
  duplicateElementsDiv.innerHTML = '[ ]';
}