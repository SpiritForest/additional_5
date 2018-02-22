module.exports = function check(str, bracketsConfig) {

    var arrLength, check, counterOpenBracket = 0, counterCloseBracket = 0;
    var searchSub = '', summ = 0;
    arrLength = bracketsConfig.length;

//check of quantity of open and close brackets
    for (i = 0; i < arrLength; i++) {
        for (k = 0; k < str.length; k++) {
            if (bracketsConfig[i][0] == str.charAt(k)) counterOpenBracket++;
            if (bracketsConfig[i][1] == str.charAt(k)) counterCloseBracket++;
        }
    }
    check = (counterCloseBracket == counterOpenBracket);

    for (i = 0; i < arrLength; i++) {
        for (k = 0; k < str.length; k++) {
            if (bracketsConfig[i][0] == str.charAt(k)) summ++;
            if (bracketsConfig[i][1] == str.charAt(k)) summ--;
            if (summ < 0) return false;
        }
    }

    check = (counterCloseBracket == counterOpenBracket);

    //closing opening case like this "[)"
   if (arrLength > 1) {
        outer:
    for (i = 0; i < arrLength; i++) {
        for (k = 1+i; k < arrLength; k++) {
            if (bracketsConfig[i][0] == "|" || bracketsConfig[k][1] == "|") continue;
            searchSub = bracketsConfig[i][0] + bracketsConfig[k][1];
            if (str.indexOf(searchSub) > -1) {
                check = false;
                break outer;
            }
            }
        }
    }


    return check;
}
