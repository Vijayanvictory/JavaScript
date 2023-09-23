
function ifdemo(){
    let age=prompt("Enter the number");
    if(age>=90 && age<=100)
     console.log("S grade");

    else if(age>80 && age<=90)
        console.log("A grade");
    
    else if(age>70 && age<=80)
        console.log("B grade");

    else if(age>60 && age<=70)
        console.log("C grade");

    else if(age>50 && age<=60)
        console.log("D grade");

    else if(age>40 && age<=50)
        console.log("E grade");

    else if(age>0 && age<=40)
        console.log("Student has failed");

    else
        console.log("invalid marks");     
}
ifdemo();