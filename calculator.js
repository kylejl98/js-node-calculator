const rs = require('readline-sync');
const operations = [
    {symbol: '+', operation: 'Addition'},
    {symbol: '-', operation: 'Subtraction'},
    {symbol: '*', operation: 'Multiplication'},
    {symbol: '/', operation: 'Division'},
]

const getOperation = () => {
    console.log(`\nWhat kind of operation would you like to perform?\nYou can choose from:`)
      operations.map((listItem) => {
            console.log(`    ${listItem.symbol} -> ${listItem.operation}`)
        })
        
    let selectedOperation = rs.question(`>> `);

    if (operations.find(operation => operation.symbol == selectedOperation) != selectedOperation) {
        console.log(`  '${selectedOperation}' was not recognized. Please try again!`)
        selectedOperation = getOperation()
    }

    console.log(`  '${selectedOperation}' was selected`)
    return selectedOperation;
}




// Print welcome message and prompt user
console.log(`==========================`);
console.log(`Welcome to the calculator!`);

getOperation();
