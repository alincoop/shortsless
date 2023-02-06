// this code will be executed after page load
(function() {
  document.querySelectorAll('[href*="shorts"]').forEach(function(elem){elem.parentElement.parentElement.parentElement.style.display='none'});
  console.log('pageload.js executed');
})();