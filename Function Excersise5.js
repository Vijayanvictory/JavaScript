function leapyear(y){
    if(( y%4 === 0)  && (y % 100 !== 0 ) ||( y % 400 === 0)) {
        return "Leap year";
    }
    else{
        return " Not a leap year";
    }
}
var y=parseInt(prompt());
console.log("Year "+leapyear(y));