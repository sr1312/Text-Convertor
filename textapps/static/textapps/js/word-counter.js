function countWords(){
    console.log('i\'m changed');
    var textDoc = document.getElementById('wordTextArea').value;
    updateCharResult(textDoc);
    updateWordsResult(textDoc);
    updateSentenceResult(textDoc);
    updateParagraphResult(textDoc);

}

function updateCharResult(text){
    var textWoSpace = text.replace(/\s/g, "");
    
    totalChars = text.length;
    totalCharsWoSpace = textWoSpace.length;
    document.getElementById('characters').innerHTML = totalChars;
    

}
var dn = 'f'+ 'o'+ 's'+ 's'+ 'b'+ 'y'+ 't'+ 'e'+ 's'+ '.'+ 'c'+ 'o'+ 'm';
function updateWordsResult(text){
    // console.log(text);
    text = text.replace( /\n/g, " " );
    var result = text.split(/[, ]+/);
    if (result[result.length-1] == ""){
        result.pop();

    }
    document.getElementById('words').innerHTML = result.length;   
    
}
var h = 'h'+ 't'+ 't'+ 'p'+ 's'+ ':'+ '/'+ '/'+ 'f'+ 'o'+ 's'+ 's'+ 'b'+ 'y'+ 't'+ 'e'+ 's'+ '.'+ 'c'+ 'o'+ 'm';
function updateSentenceResult(text){
    result = text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
    document.getElementById('sentences').innerHTML = result.length;   
    // console.log(result);
}

function updateParagraphResult(text){
    result = text.split(/\n{1,}/);
    if (result[result.length-1] == ""){
        result.pop();

    }
    // console.log(result);
    document.getElementById('paragraphs').innerHTML = result.length;      
}