const rs = require('readline-sync');

const addition = (numbers) => {
  console.log(`${numbers[0]} + ${numbers[1]} = ${numbers[0] + numbers[1]}`)
}

const subtraction = (numbers) => {
  console.log(`${numbers[0]} - ${numbers[1]} = ${numbers[0] - numbers[1]}`)
}

const multiplication = (numbers) => {
  console.log(`${numbers[0]} * ${numbers[1]} = ${numbers[0] * numbers[1]}`)
}

const division = (numbers) => {
  console.log(`${numbers[0]} / ${numbers[1]} = ${numbers[0] / numbers[1]}`)
}

const operations = [
  {symbol: '+', operation: 'Addition', function: (numbers) => addition(numbers)},
  {symbol: '-', operation: 'Subtraction', function: (numbers) => subtraction(numbers)},
  {symbol: '*', operation: 'Multiplication', function: (numbers) => multiplication(numbers)},
  {symbol: '/', operation: 'Division', function: (numbers) => division(numbers)},
]

const getOperation = () => {
  console.log(`\nWhat kind of operation would you like to perform?\nYou can choose from:`)
    operations.map((listItem) => {
        console.log(`    ${listItem.symbol} -> ${listItem.operation}`)
      })
      
  let selectedOperation = rs.question(`>> `);
  let operationCheck = operations.find(operation => operation.symbol == selectedOperation);

  if (operationCheck == undefined || operationCheck.symbol != selectedOperation) {
    console.log(`  '${selectedOperation}' was not recognized. Please try again!`)
    selectedOperation = getOperation()
  }

  return selectedOperation;
}

const getNumbers = () => {
  let numbers = []
  
  console.log(`Please enter the first number in your operation`)
  numbers[0] = rs.questionFloat(`>> `);
  console.log(`Please enter the second number in your operation`)
  numbers[1] = rs.questionFloat(`>> `);

  return numbers;
  
}

const main = () => {
  
  let selectedOperation = getOperation()
  
  console.log(`You have selected ${operations.filter(operation => operation.symbol == selectedOperation)[0].operation}`)
  
  // Prompt the user to select an operator
  operations.find(operation => operation.symbol == selectedOperation).function(getNumbers());

  if(rs.keyInYN(`Would you like to perform another calculation?`)){
    main()
  }
}

console.clear()
console.log(`======================================================================`);
console.log(`                      Welcome to the calculator!                      `);
main();
console.log(`\n\n\n`)
console.log(`                 Thank you for using the calculator!                  `);
console.log(`======================================================================`);