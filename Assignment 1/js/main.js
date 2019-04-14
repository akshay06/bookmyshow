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
  singleNumbersList = inputArray.filter(input => !input.includes('-')).map(input => Number(input));
  const rangeList = inputArray.filter(input => {
    if(input.includes('-')) {
      return true;
    }
  });
  allRangesArray = rangeList.map(range => {
    const rangeNumbers = range.split('-');
    const firstNumber = Number(rangeNumbers[0]);
    const lastNumber = Number(rangeNumbers[1]);
    let rangeArray = [];
    if(rangeNumbers.length > 2) {
      errorDiv.innerHTML = 'Invalid range, please enter single hyphen seperated range';
    } else if (firstNumber > lastNumber) {
      errorDiv.innerHTML = 'Invalid range, please enter in ascending order';
    } else {
      for(let i=firstNumber; i<= lastNumber; i++) {
        rangeArray.push(i);
      }
      errorDiv.innerHTML = '';
      return rangeArray;
    }
  });
}

function onSubmit(ev) {
  ev.preventDefault();
  if (errorDiv.innerHTML !== '' || userInputDiv.value === '') {
    submitBtn.disabled = true;
    return false;
  }
  let allRange = [];
  let finalArrayToShow = [];
  let duplicateElements = [];
  let finalArray = [];
  allRangesArray.forEach(singleArray => {
    allRange.push(...singleArray);
  });
  finalArray.push(...predefinedArray,...singleNumbersList, ...allRange);
  finalArray.forEach(val => {
    if(!finalArrayToShow.includes(val)) {
      finalArrayToShow.push(val);
      finalArrayDiv.innerHTML = '['+finalArrayToShow+']';
    } else {
      duplicateElements.push(val);
      duplicateElementsDiv.innerHTML = '['+duplicateElements+']';
    }
  });
  if (duplicateElements.length === 0) {
      duplicateElementsDiv.innerHTML = '[]';
  }
}

function resetArray(ev) {
  finalArrayDiv.innerHTML = '[ ]';
  duplicateElementsDiv.innerHTML = '[ ]';
}