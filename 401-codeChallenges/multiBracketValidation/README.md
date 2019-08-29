BracketValidation Function

We need to write a function to will take in a string and check to make sure that all of the brackets are closed

use a for loop and loop through the string
have it ignore all charchters not {} [] ()
when it comes to a open bracket
push into the stack
when str{i} is a closing bracket
compare the top item in the stack
if they match
pop the top item in the stack
if they dont match return false


Scan string (array) (Loop)
(IF statement)  If element is an opening bracket — Push() onto stack
(ELSE IF) If element is a closing bracket — see if it matches last item in stack. If it does, pop off that last item & move onto the next element.
(IF statement)If at the end of the function the stack is empty return true
(Else statement)If stack is not empty return false