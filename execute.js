// this code will be executed when the extension's button is clicked
(function() {
  document.querySelectorAll('[href*="shorts"]').forEach(function(elem){elem.parentElement.parentElement.parentElement.style.display='none'});
  console.log('execute.js executed');
})();