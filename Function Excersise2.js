function findTriangleType(){
    let side1 = 10
    let side2 = 10
    let side3 = 10
    if(side1 == side2 == side3){
        console.log("Equilateral triangle.");
    }
    else if(side1 == side2 && side2 == side3){
        console.log("Isosceles triangle.");
    }   
    else{
        console.log("Scalene triangle.");
    }
}findTriangleType();