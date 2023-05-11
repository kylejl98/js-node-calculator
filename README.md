INSTRUCTIONS GIVEN FOR THIS ASSIGNMENT
===

You are going to create a terminal-based calculator program using Node.

📣  Getting Started:
Download the readline-sync npm package for this project.

🛠 Requirements:
Ask the user, "What operation would you like to perform?"
Then the user enters one of these options: "/" "*" "-" "+"
If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
After the user enters a valid operation, ask the user, "Please enter the first number"
The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result
For example, if the user entered addition "+" and the first number was 3 and the second number was 4, the result printed would be: "The result is 7"

NOTE: Please do not use the `eval()` method - it is never recommended.


💡 Tip:
Break down the project into small, solvable steps. i.e.:
When the program prompts the user for an operation, how should it be stored?
How will you check the proper operation was entered? etc..

🏆 BONUS (Optional)
Handle remainders properly (modulo). Example : 9 divided by 4 would print 2.25
Make the program more elegant by allowing the user to enter an entire operation on one line such as: "6 / 6" or "5 * 3" (Hint use arguments to solve this)

📒 Resources:
https://www.w3schools.com/nodejs/ref_readline.asp
https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/
https://www.codecademy.com/articles/getting-user-input-in-node-js
