

function copyText(){
    var button = document.getElementById('copy')
    var textarea = document.getElementById('area');
    textarea.select();   
    document.execCommand("copy");   
    button.innerHTML= "Copied";
  }
  
  // counter
  var textArea = document.getElementById('area');
  let char = document.getElementById('char');
  let word = document.getElementById('word');
  
  textArea.addEventListener('input', function () {
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
  
  // download
  window.onload = function() 
  {
  var txt = document.getElementById('area');
  document.getElementById('link').onclick = function(code) 
    {
  this.href = 'data:text/plain;charset=utf-11,' + encodeURIComponent(txt.value);
    };
  };
  
  
  
  // for copy text
  function copyText(){
  
      var button = document.getElementById('copy')
      var textarea = document.getElementById('area');
  
      textarea.select();
      document.execCommand("copy");
      button.innerHTML= "Copied";
  }