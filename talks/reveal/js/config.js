// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	controls: false,
	progress: true,
	history: true,
	center: true,
	margin: 0.05,
	minScale: 0.1,
	maxScale: 5.0,
	width: 960,
	height: 720,

	theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
	transition: Reveal.getQueryHash().transition || 'linear', // default/cube/page/concave/zoom/linear/fade/none

	// Parallax scrolling
	// parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
	// parallaxBackgroundSize: '2100px 900px',

    math: {
        mathjax: 'http://cdn.mathjax.org/mathjax/latest/MathJax.js',
        config: 'TeX-AMS_HTML-full'  // See http://docs.mathjax.org/en/latest/config-files.html
    },

	// Optional libraries used to extend on reveal.js
	dependencies: [
		{ src: '../lib/js/classList.js', condition: function() { return !document.body.classList; } },
		{ src: '../plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: '../plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: '../plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
		{ src: '../plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
		{ src: '../plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } },
		{ src: '../plugin/math/math.js', async: true }
	]
});