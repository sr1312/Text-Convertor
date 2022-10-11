function binaryCode(str) {
    var string = document.uppercase.comment.value;
    let strOut = "";
    for (var i = 0; i < string.length; i++) {
        strOut += string[i].charCodeAt(0).toString(2);
    }
    return strOut
}