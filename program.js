/**
function upperCaser(input) {
    return input.toUpperCase();   
}
    
module.exports = upperCaser;

function repeat(operation, num) {
    while(num > 0) {
        num--;
        operation();
        return repeat(operation, num); 
    }
}
    
module.exports = repeat;

function doubleAll(numbers) {
    return numbers.map(function(number) {
       return number*2;
    });
}
    
module.exports = doubleAll;
**/

function getShortMessages(messages) {
    return messages.filter(function(messObj) {
        return messObj.message.length < 50;
    }).map(function(message) {
        return message.message;
    });        
}
    
module.exports = getShortMessages;
