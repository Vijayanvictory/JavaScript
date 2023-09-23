function cont(){

    const number = parseInt(prompt("Enter a number: "));
    const number2 = parseInt(prompt("Enter a number: "));

    if (number > number2) {
        console.log(number +">"+number2);
    }

    else if (number < number2) {
        console.log(number +"<"+ number2);
      }

      else {
        console.log(number +"=="+number2);
   }
}cont();