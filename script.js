// A $( document ).ready() block.




$( document ).ready(function() {
    console.log( "ready!" );
    $( "target" ).toggle();

    $( "#button" ).click(function() {
        $( "#pp" ).toggle();

        alert('fff');
      });



});