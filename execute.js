// this code will be executed when clicking on extension icon
setTimeout(function() {
  document.querySelectorAll('[href*="shorts"]').forEach(function(elem){elem.parentElement.parentElement.parentElement.style.display='none'});
  console.log('execute.js executed');
},1000);