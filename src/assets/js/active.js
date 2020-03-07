// Get the container element
//var btnContainer = document.getElementById("Mydiv");

// Get all buttons with class="btn" inside the container
//var btns = btnContainer.getElementsByClassName("nav-link ");

// Loop through the buttons and add the active class to the current/clicked button
/*for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}*/
/*
$('.nav li').click(function(){
  	$('.nav li').removeClass('active');
	$(this).addClass('active');
	/*alert ('hi');*/
/*})*/
/*$(function() {
      $( 'ul.nav li' ).on( 'click', function() {
            $( this ).parent().find( 'li.active' ).removeClass( 'active' );
            $( this ).addClass( 'active' );
      });
});
*/

/*$(document).on('click', '.nav-link.active', function() { 
alert('ff');			
  var href = $(this).attr('href').substring(1); 
  //alert(href); 
  $(this).removeClass('active'); 
  $('.tab-pane[id="' + href + '"]').removeClass('active'); 
  
}); 
$(document).mouseup(function(e) { 
    var container = $("#tablist"); // target ID or class 
    // if the target of the click isn't the container nor a descendant of the container 
    if (!container.is(e.target) && container.has(e.target).length === 0) { 
        // get Event here 
        $('.active').removeClass('active'); 
    } 
}); */


 $( '#topheader .navbar-nav a' ).on('click',  
                    function () { 
				
            $( '#topheader .navbar-nav' ).find( 'li.active' ) 
            .removeClass( 'active' ); 
            $( this ).parent( 'li' ).addClass( 'active' ); 
        });





































