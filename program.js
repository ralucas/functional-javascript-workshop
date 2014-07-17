/**
function upperCaser(input) {
    return input.toUpperCase();   
}
    
module.exports = upperCaser;
**/

function repeat(operation, num) {
    while(num > 0) {
        num--;
        operation();
        return repeat(operation, num); 
    }
}
    
module.exports = repeat;
