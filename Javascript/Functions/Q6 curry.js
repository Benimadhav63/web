// Q6. Write a JavaScript function called curry that takes a function as an argument and returns a curried
// version of that function. The curried function should accept arguments one at a time and return a new
// function until all arguments are provided. Then, it should execute the original function with all arguments.
//  Test the curry function with a function that adds two numbers.

function curry(curried){
    return curried()
    function curried(){
        return fun()
        function fun(){
        
        }
    }
}
function add(num1, num2){
    console.log(num1 + num2)
}
curry(add(5, 6))