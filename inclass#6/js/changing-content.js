$(function() {
    console.log($('li').text());
    if ($('li').html()=="pine nuts"){
        $('li#two').text("almonds");
    }
    console.log($('li.hot').html())
    $('li.hot').html("<em>" + $('li.hot').html() + "</em>");
    $('li#one').remove();
	
	
	
	

});