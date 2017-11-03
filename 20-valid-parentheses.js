//https://leetcode.com/problems/valid-parentheses/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //{([[]})
    var stack = [];
    
    for(var i=0; i<s.length; i++){
        var c = s.charAt(i);
        if(isClosingSymbol(c)){
            var topChar = stack.pop();
            if(!isMatchingSymbols(topChar, c))
                return false;
        }else{
            stack.push(c);
        }
    }
    
    return stack.length === s.length ? false: true;
    
}

function isClosingSymbol(s){
    return (s === '}' || s === ']' || s === ')' ) ? true : false;
}

function isMatchingSymbols(o, c){
  if(o === '{' && c === '}') return true;
  if(o === '(' && c === ')') return true;
  if(o === '[' && c === ']') return true;
  return false;
}

var testStr = "{([])}";
console.log(isValid(testStr));



