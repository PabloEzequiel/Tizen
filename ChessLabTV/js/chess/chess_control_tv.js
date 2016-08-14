

$( document ).ready(function() {
    console.log( "ready!" );


    // ----------------
    // buttonsImages
    $('#btn_A').on({
        'click': function(){
            button_doPrev();
        }
    });

    $('#btn_B').on({
        'click': function(){
            button_doNext();
        }
    });

    $('#btn_C').on({
        'click': function(){
            button_showSolution();
        }
    });


    // ON OFF BUTTON A
    $('#btn_A').bind('mouseover', function(e) {
      $('#btn_A').attr("src","images/button_A_on.png");
    });

    $('#btn_A').bind('mouseout', function(e) {
      $('#btn_A').attr("src","images/button_A.png");
    });


    // ON OFF BUTTON B
    $('#btn_B').bind('mouseover', function(e) {
      $('#btn_B').attr("src","images/button_B_on.png");
    });

    $('#btn_B').bind('mouseout', function(e) {
      $('#btn_B').attr("src","images/button_B.png");
    });


    // ON OFF BUTTON C
    $('#btn_C').bind('mouseover', function(e) {
      $('#btn_C').attr("src","images/button_C_on.png");
    });

    $('#btn_C').bind('mouseout', function(e) {
      $('#btn_C').attr("src","images/button_C.png");
    });

    // ON OFF BUTTON D
    $('#btn_D').bind('mouseover', function(e) {
      $('#btn_D').attr("src","images/button_D_on.png");
    });

    $('#btn_D').bind('mouseout', function(e) {
      $('#btn_D').attr("src","images/button_D.png");
    });

});
