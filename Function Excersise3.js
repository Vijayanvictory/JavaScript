
function demo(){    
    const num = prompt();
    const low = 30;
    const high = 150;
    
    if (num >= low && num <= high) {
      console.log( num + ' is between the two numbers');
    }
     else {
     console.log( num + ' is NOT between the two numbers');
    }
    }demo();