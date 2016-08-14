console.log("Chess Lab TV Loaded");

// Chess Solutions Section
var chessPack = new ChessPack();



//---
$('#img_chess').on({
    'click': function(){
       chessPack.doNextButton();
    }
});

function button_doPrev() {
    chessPack.doPrevButton();
}

function button_doNext() {
    chessPack.doNextButton();
}

//---

function init_getPackID(pageHtml) {

    var packID = chessPack.getPackID(pageHtml);

    chessPack.init(packID);
}

//---------------------


// Chess Solutions Section
var chessSolutions = new ChessSolutions();

$('#button_hint_solution').on({
    'click': function(){
        button_showSolution();
    }
});

function button_showSolution() {

   var chessImageName = chessPack.getImageName();
   var solution  = chessSolutions.getChessSolution(chessImageName);

   _setTxtValue("text_hint_solution", solution);
}

function _setTxtValue(tagId, txtValue) {
  $('#' + tagId).text(txtValue);
}
