Reveal.initialize({
  controls: false,
  progress: true,
  history: true,
  mouseWheel: false,
  rollingLinks: false,

  theme: Reveal.getQueryHash().theme,
  transition: Reveal.getQueryHash().transition || 'default',

  // Optional libraries used to extend on reveal.js
  dependencies: [
    { src: 'vendor/highlight/highlight.js', async: true, callback: function() { window.hljs.initHighlightingOnLoad(); } },
    { src: 'vendor/classList/classList.js', condition: function() { return !document.body.classList; } },
    { src: 'vendor/showdown/showdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'vendor/markdown/data-markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'vendor/zoom/zoom.js', condition: function() { return !!document.body.classList; } },
    { src: '/socket.io/socket.io.js', async: true, condition: function() { return window.location.host === 'localhost:1947'; } },
    { src: 'vendor/speakernotes/client.js', async: true, condition: function() { return window.location.host === 'localhost:1947'; } }
  ]
});