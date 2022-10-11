console.log("jai mata di")

// for upper case 
function upperCase(){
    var uCase = document.uppercase.comment.value.toUpperCase();
    document.uppercase.comment.value = uCase;
}

//  for lower case
function lowerCase(){
    var lCase = document.uppercase.comment.value.toLocaleLowerCase();
    document.uppercase.comment.value = lCase;

}

// sentence case
function firstLetterUpper(theString) {
	var newString = theString.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
  return newString;
}

function convertToSentenceCase() {
  var string = document.uppercase.comment.value;
  var newString = firstLetterUpper(string);
  //console.log("Converted: "+newString);
document.uppercase.comment.value = newString
}



// for title case
function titleCase() {
    var str = document.uppercase.comment.value;
    var array = str.toLocaleLowerCase().split(" ");
    for(var i = 0; i<array.length; i++){
        array[i] = array[i].charAt(0).toUpperCase()+ array[i].slice(1);
    }
    const newstr = array.join(" ");
    document.uppercase.comment.value = newstr;

  }

  
  

// for clear textbox
function clearBox(){
    document.getElementById('area').value = "";
    
}
 
// for capitalized text
const capitalized = function(){
    const str = document.uppercase.comment.value;
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const string = arr.join(" ");
    document.uppercase.comment.value = string;
}

// for download the text

// function downloadText(file, text) {
//     var element = document.createElement('a');
//     console.log("this is element",element)
//     element.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(text));
//     element.setAttribute('download', file);
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element);
//   }
window.onload = function() 
{
var txt = document.getElementById('area');
document.getElementById('link').onclick = function(code) 
  {
this.href = 'data:text/plain;charset=utf-11,' + encodeURIComponent(txt.value);
  };
};

// main();


//   for alternate case
function alternateCase(){
    var str = document.uppercase.comment.value;
    var newstr = str.toLocaleLowerCase().split("")
    for(var i = 0; i<newstr.length; i+=2){
        newstr[i] = newstr[i].toUpperCase();
    }
    const altString = newstr.join("");
    document.uppercase.comment.value = altString;

}


// for counter 

var textArea = document.getElementById('area');
let char = document.getElementById('char');
let word = document.getElementById('word');

area.addEventListener('input', function () {
    // getting text value from textbox
    let content = this.value;
    // getting text character length
    char.textContent = content.length;


    // remove empty spaces from start and end 
    content.trim();


    let wordList = content.split(/\s/);


    // Remove spaces from between words 
    let words = wordList.filter(function (element) {
        return element != "";
    });

    // count all the words 
    word.textContent = words.length;
});


// for copy text
function copyText(){

    var button = document.getElementById('copy')
    var textarea = document.getElementById('area');

    textarea.select();
    document.execCommand("copy");
    button.innerHTML= "Copied";
}