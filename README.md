# Shortless
### Hide YouTube shorts from your subscription feed

## Purpose

This extension is a bare minimum Javascript function injected into the page, with the purpose of hiding all YouTube shorts.

## What it does

When installed it will execute the following code; both following page load, and whenever the extension icon is clicked.

```javascript
(function() {
  document.querySelectorAll('[href*="shorts"]').forEach(function(elem){elem.parentElement.parentElement.parentElement.style.display='none'});
})();
```

## Notes
- The script will not run against any pages except for: https://www.youtube.com/feed/subscriptions
- New shorts will render into the DOM when scrolling down and loading additional thumbnails. Currently this requires another execution via extension icon to hide those elements.

## Credit

- Marek (Idea and Javascript)
- Lawrence Lagerlof ([Extension Boilerplate](https://github.com/llagerlof/fresh-chrome-extension))