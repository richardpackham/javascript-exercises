const fibonacci = function(ind) {
    let int = parseInt(ind)
    if (int < 0){
        return "OOPS"
    }
    else if (int == 0){
        return 0
    }   
    else if (int == 1){
        return 1
    }
    else {
        let fib = [0,1];
        let fibPrev = fib.length-1;
        let fibTwoPrev = fibPrev-1;
        
        for (let i=1; int > fibPrev; i++){
            if ((fib[fibPrev] + fib[fibTwoPrev])== i ){
                fib.push(i);
            }
            fibPrev = fib.length-1;
            fibTwoPrev = fibPrev-1;
        }
        return fib[int]
    }
};
fibonacci()
// Do not edit below this line
module.exports = fibonacci;
