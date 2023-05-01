$(function() {
	$('ul').before("<p>Just Updated</p>");
    $('li.hot').prepend("+");
	$('li#four').after("<li><em>gluten-free</em> soy sauce</li>")
});