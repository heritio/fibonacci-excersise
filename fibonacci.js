var makeSequence = function(n){
    if(n === 1){
        return [0, 1];
    }else{
        let s = makeSequence(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
}
var ourSequence = makeSequence(100);


const fibonacci = function(num) {
    if(num < 0) return "OOPS";
    let result = null;
    for(let i = 0; i < ourSequence.length; i++){
        if(ourSequence[i] != ourSequence[num]){
            continue;
        }else{
            result = ourSequence[i];
        }
    }
    return result;
}

module.exports = fibonacci
