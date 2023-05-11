const rs = require('readline-sync');

const addition = (numbers) => {
  console.log(`\n`)
  console.log(`The result is: ${numbers[0] + numbers[1]}`)
}

const subtraction = (numbers) => {
  console.log(`\n`)
  console.log(`The result is: ${numbers[0] - numbers[1]}`)
}

const multiplication = (numbers) => {
  console.log(`\n`)
  console.log(`The result is: ${numbers[0] * numbers[1]}`)
}

const division = (numbers) => {
  console.log(`\n`)
  console.log(`The result is: ${numbers[0] / numbers[1]}`)
}

const operations = [
  {symbol: '+', operation: 'Addition', function: (numbers) => addition(numbers)},
  {symbol: '-', operation: 'Subtraction', function: (numbers) => subtraction(numbers)},
  {symbol: '*', operation: 'Multiplication', function: (numbers) => multiplication(numbers)},
  {symbol: '/', operation: 'Division', function: (numbers) => division(numbers)},
]

const getOperation = () => {

  // Give the user choices for operations
  console.log(`\nWhat kind of operation would you like to perform?\nYou can choose from:`)
    operations.map((listItem) => {
        console.log(`    ${listItem.symbol} -> ${listItem.operation}`)
      })
    
  // Prompt the user to select one of the listed operations, then make sure the operation is supported
  let selectedOperation = rs.question(`\n>> `);
  let operationCheck = operations.find(operation => operation.symbol == selectedOperation);

  // Prompt the user to try again if the operation is invalid
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
  
  //Prompt the user to select an operation
  let selectedOperation = getOperation()
  
  // Confirm the selected operation to the user
  console.log(`\nYou have selected ${operations.filter(operation => operation.symbol == selectedOperation)[0].operation}`)
  console.log(`-----------------------------------`)

  // Get the numbers the user wants to operate on, and perform the operation
  operations.find(operation => operation.symbol == selectedOperation).function(getNumbers());

  // Prompt the user to perform another calculation or to exit
  if(rs.keyInYN(`\nWould you like to perform another calculation?`)){
    main()
  }
}

//Print a welcome message
console.clear()
console.log(`======================================================================`);
console.log(`                      Welcome to the calculator!                      `);

// Call the main program
main();

// Print a goodbye message
console.log(`\n\n\n`)
console.log(`                 Thank you for using the calculator!                  `);
console.log(`======================================================================`);
console.log(`\n\n\n`)