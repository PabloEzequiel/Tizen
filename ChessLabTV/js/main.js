var backEventListener = null;


//PABLO
// ICONS:
// https://www.samsungdforum.com/TizenUxGuide/02/02_samsung_applications.html

// PABLO
// To work ok on TV, register keys is mandatory
// https://www.samsungdforum.com/TizenGuide/tizen3551/index.html

// https://www.samsungdforum.com/TizenGuide/tizen231/index.html


/*
tizen.tvinputdevice.registerKey("ArrowLeft");   //37
tizen.tvinputdevice.registerKey("ArrowUp");     //38
tizen.tvinputdevice.registerKey("ArrowRight");  //39
tizen.tvinputdevice.registerKey("ArrowDown");   //40

tizen.tvinputdevice.registerKey("Enter");       //13
tizen.tvinputdevice.registerKey("Return");      //10009
*/

tizen.tvinputdevice.registerKey("ColorF0Red");    //403
tizen.tvinputdevice.registerKey("ColorF1Green");  //404
tizen.tvinputdevice.registerKey("ColorF2Yellow"); //405
tizen.tvinputdevice.registerKey("ColorF3Blue");   //406

tizen.tvinputdevice.registerKey("0");   //48
tizen.tvinputdevice.registerKey("1");   //49
tizen.tvinputdevice.registerKey("2");   //50
tizen.tvinputdevice.registerKey("3");   //51


var unregister = function() {
    if ( backEventListener !== null ) {
        document.removeEventListener( 'tizenhwkey', backEventListener );
        backEventListener = null;
        window.tizen.application.getCurrentApplication().exit();
    }
}

//Initialize function
var init = function () {
	




    // register once
    if ( backEventListener !== null ) {
        return;
    }

    // TODO:: Do your initialization job
    console.log("init() called");

    var backEvent = function(e) {
        if ( e.keyName == "back" ) {
            try {
                if ( $.mobile.urlHistory.activeIndex <= 0 ) {
                    // if first page, terminate app
                    unregister();
                } else {
                    // move previous page
                    $.mobile.urlHistory.activeIndex -= 1;
                    $.mobile.urlHistory.clearForward();
                    window.history.back();
                }
            } catch( ex ) {
                unregister();
            }
        }
    }

    // add eventListener for tizenhwkey (Back Button)
    document.addEventListener( 'tizenhwkey', backEvent );
    backEventListener = backEvent;
};

$(document).bind( 'pageinit', init );
$(document).unload( unregister );

function setFocusVisible(index1,state){
	var list = $.mobile.activePage.find("a[href]");
	$item = list[index1];
	if (state) {
		$item.focus();
	}
	else {
		$item.blur();
	}
}

function changePage(index){

	var list = $.mobile.activePage.find("a[href]");
	$item = list[index];
	var path = $item.getAttribute("href");

	$.mobile.changePage(path);

	console.log("changePage list  ::>" + list[0] + "," +list[1] + "," +list[2] + "," +list[3]     );
	console.log("changePage $item ::>" + $item);
	console.log("changePage path  ::>" + path);

  if (isHomePage(index)) {
      console.log(">> TvKeyCode.KEY_ENTER index en Home Page");
  } else {
     init_getPackID(path);
  }

}



/**
 * Pablo: Si es el HomePage --> No hago cosas ...
 */
function isHomePage(index) {

  if (index==0 || index==1) {
     console.log(" ES HOME PAGE="+index);
     return true;

  }

  return false;

}

var index  = 0;
var MAX    = 2;
var TOTAL  = 10;

function handelPageOne(e) {

  // console.log("EVENTO handelPageOne  --->>> !!!!! " + e.keyCode + " index: " + index);
  printChessPackInfo();

	switch(e.keyCode){


		case TvKeyCode.KEY_UP:

      if (index == MAX){
        index = index -MAX;
        setFocusVisible(index+MAX,false);
        setFocusVisible(index,true);
      }else if(index != 0  && index >0){
        index--;
      }

      setFocusVisible(index+1,false);
      setFocusVisible(index,true);

			break;


	case TvKeyCode.KEY_DOWN:

		if (index == 0){
			index = index +MAX;
			setFocusVisible(index-MAX,false);
			setFocusVisible(index,true);
		}
		else if(index != TOTAL && index < TOTAL){
			index++;
			setFocusVisible(index-1,false);
			setFocusVisible(index,true);
		}
		break;


    // Buttons ChessLabTV
    // - A : Prev
    // - B : Next
    // - C : solution
    // - D : Next Package
	case TvKeyCode.KEY_LEFT:
    case TvKeyCode.KEY_RED:
    case TvKeyCode.KEY_PREVIOUS:
    case TvKeyCode.KEY_1:

      if (isHomePage(index)) {
          console.log(">> TvKeyCode.KEY_RED en Home: Nada");
      } else {
         button_doPrev();
      }
      break;

    case TvKeyCode.KEY_RIGHT:  
    case TvKeyCode.KEY_GREEN:
    case TvKeyCode.KEY_NEXT: 
    case TvKeyCode.KEY_2:

      if (isHomePage(index)) {
          console.log(">> TvKeyCode.KEY_GREEN en Home: Nada");
      } else {
         button_doNext();
      }
      break;

    case TvKeyCode.KEY_YELLOW:
    case TvKeyCode.KEY_PLAY:
    case TvKeyCode.KEY_3:
    	
      if (isHomePage(index)) {
          console.log(">> TvKeyCode.KEY_YELLOW en Home: Nada");
      } else {
         button_showSolution();
      }
      break;

    case TvKeyCode.KEY_ENTER:
      changePage(index);
			break;

	/*
    case TvKeyCode.KEY_BLUE:
    case TvKeyCode.KEY_INFO:
    case TvKeyCode.KEY_0:
      button_showInfo();
      break;
      */


		default:
			break;

  }
}

function bindKeyToPage1(){
	console.log("function bindKeyToPage1 index=" + index);
//	index = 0;
	setFocusVisible(index,true);
	document.body.removeEventListener("keydown",handelPageOne,false);
	document.body.addEventListener("keydown",handelPageOne ,false);
}

$(document).on("pageshow", "#one", bindKeyToPage1);
$(document).on("pageshow", "#two", bindKeyToPage1);
$(document).on("pageshow", "#three", bindKeyToPage1);


//--- Pablo ---
$(document).on("pageshow", "#chess_packs_home", bindKeyToPage1);

$(document).on("pageshow", "#chess_packs_page_m001", bindKeyToPage1);
$(document).on("pageshow", "#chess_packs_page_m002", bindKeyToPage1);
$(document).on("pageshow", "#chess_packs_page_m003", bindKeyToPage1);
$(document).on("pageshow", "#chess_packs_page_m004", bindKeyToPage1);

$(document).on("pageshow", "#chess_packs_page_T001", bindKeyToPage1);
$(document).on("pageshow", "#chess_packs_page_T002", bindKeyToPage1);
$(document).on("pageshow", "#chess_packs_page_T003", bindKeyToPage1);
$(document).on("pageshow", "#chess_packs_page_T004", bindKeyToPage1);
