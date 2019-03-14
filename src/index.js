module.exports = function check(str, bracketsConfig) {
  for (let s = 0; s < str.length; s++) {
    for (let a = 0; a < bracketsConfig.length; a++) {
        if ((str.charAt(s) == bracketsConfig[a][1]) && (bracketsConfig[a][0] != bracketsConfig[a][1])) {
            let foundPos = str.indexOf(bracketsConfig[a][1], s);
            if (str.charAt(foundPos - 1) == (bracketsConfig[a][0])) {
                str = str.slice(0, foundPos - 1) + str.slice(foundPos + 1);
                s = 0;
            } else if (str.charAt(foundPos - 1) != (bracketsConfig[a][0])) 
            {return false;}
        } else if ((str.charAt(s) == bracketsConfig[a][1])&&(bracketsConfig[a][0] == bracketsConfig[a][1])&&(str.charAt(s)==str.charAt(s+1))) {
            let foundPos = str.indexOf(bracketsConfig[a][0], s);
            if (str.charAt(foundPos) == (bracketsConfig[a][1])) {
                str = str.slice(0, foundPos) + str.slice(foundPos + 2);
                s = 0;
            } 
        }
    }
}
if (str == "") { return true; }
else { return false; }
}
