module.exports = function check(str, bracketsConfig) {
  var stack = [];
  var strArr = str.split("");
  stack[0] = strArr[0];
  var nxtBracket = 1;

  while(nxtBracket < strArr.length){
  stack.push(strArr[nxtBracket]);
  for (var i = 0; i < bracketsConfig.length; i++){
   if (stack[stack.length-2] == bracketsConfig[i][0] && stack[stack.length-1] == bracketsConfig[i][1]){
    stack.pop();
    stack.pop();
   } // end if
  } // end for
    nxtBracket++;
  } // end while
  return stack.length ? false : true;
} //end function
