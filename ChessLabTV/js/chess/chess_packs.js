
// Public ChessID

// PACK: ID (Is the Same that Pack Prefix)
var PACK_ID_M001 = "chess_mate1_";
var PACK_ID_M002 = "chess_mate2_";
var PACK_ID_M003 = "chess_mate3_";
var PACK_ID_M004 = "chess_mate4_";

var PACK_ID_T001 = "chess_train_001_";
var PACK_ID_T002 = "chess_train_002_";
var PACK_ID_T001 = "chess_train_003_";
var PACK_ID_T002 = "chess_train_004_";



// PACK: Prefix (Is the same than Pack ID)
var PACK_M001_PREFIX = PACK_ID_M001;
var PACK_M002_PREFIX = PACK_ID_M002;
var PACK_M003_PREFIX = PACK_ID_M003;
var PACK_M004_PREFIX = PACK_ID_M004;

var PACK_T001_PREFIX = PACK_ID_T001;
var PACK_T002_PREFIX = PACK_ID_T002;
var PACK_T001_PREFIX = PACK_ID_T001;
var PACK_T002_PREFIX = PACK_ID_T002;



// PACK: Size
var PACK_M001_SIZE =  8;    // 00000 to 00008
var PACK_M002_SIZE = 11;    // 00000 to 00011
var PACK_M003_SIZE = 16;    // 00000 to 00016
var PACK_M004_SIZE = 15;    // 00000 to 00015

var PACK_T001_SIZE = 17;    // 00000 to 00017
var PACK_T002_SIZE = 17;    // 00000 to 00017
var PACK_T003_SIZE = 18;    // 00000 to 00018
var PACK_T004_SIZE = 18;    // 00000 to 00018



// PACK: Path
var PACK_M001_PATH = "images/chess/pack_m001/";
var PACK_M002_PATH = "images/chess/pack_m002/";
var PACK_M003_PATH = "images/chess/pack_m003/";
var PACK_M004_PATH = "images/chess/pack_m004/";

var PACK_T001_PATH = "images/chess/pack_T001/";
var PACK_T002_PATH = "images/chess/pack_T002/";
var PACK_T001_PATH = "images/chess/pack_T003/";
var PACK_T002_PATH = "images/chess/pack_T004/";





var ChessPack = function(packID) {

  console.log("ChessPack creation");

  // Constantes
  this.img_chess_number = 0;

  // Init Default and Pointers
  this.PACK_PREFIX =  PACK_M001_PREFIX;
  this.PACK_SIZE   =  PACK_M001_SIZE;
  this.PACK_PATH   =  PACK_M001_PATH;

}


$.extend(ChessPack.prototype, {

      setChessPack: function(packID)
      {
          console.log("ChessPack.setChessPack("+packID+") pp");

          this.img_chess_number = 0;

          if (packID == PACK_ID_M001) {

              console.log("ChessPack.setChessPack(PACK_ID_M001)");

              this.PACK_PREFIX = PACK_M001_PREFIX;
              this.PACK_SIZE   = PACK_M001_SIZE;
              this.PACK_PATH   = PACK_M001_PATH;
              return;
          }

          if (packID == PACK_ID_M002) {

              console.log("ChessPack.setChessPack(PACK_ID_M002)");

              this.PACK_PREFIX = PACK_M002_PREFIX;
              this.PACK_SIZE   = PACK_M002_SIZE;
              this.PACK_PATH   = PACK_M002_PATH;
              return;
          }

          if (packID == PACK_ID_M003) {

              console.log("ChessPack.setChessPack(PACK_ID_M003)");

              this.PACK_PREFIX = PACK_M003_PREFIX;
              this.PACK_SIZE   = PACK_M003_SIZE;
              this.PACK_PATH   = PACK_M003_PATH;
              return;
          }

          if (packID == PACK_ID_M004) {

              console.log("ChessPack.setChessPack(PACK_ID_M004)");

              this.PACK_PREFIX = PACK_M004_PREFIX;
              this.PACK_SIZE   = PACK_M004_SIZE;
              this.PACK_PATH   = PACK_M004_PATH;
              return;
          }

          if (packID == PACK_ID_T001) {

              console.log("ChessPack.setChessPack(PACK_ID_T001)");

              this.PACK_PREFIX = PACK_T001_PREFIX;
              this.PACK_SIZE   = PACK_T001_SIZE;
              this.PACK_PATH   = PACK_T001_PATH;
              return;
          }

          if (packID == PACK_ID_T002) {

              console.log("ChessPack.setChessPack(PACK_ID_T002)");

              this.PACK_PREFIX = PACK_T002_PREFIX;
              this.PACK_SIZE   = PACK_T002_SIZE;
              this.PACK_PATH   = PACK_T002_PATH;
              return;
          }

          if (packID == PACK_ID_T003) {

              console.log("ChessPack.setChessPack(PACK_ID_T003)");

              this.PACK_PREFIX = PACK_T003_PREFIX;
              this.PACK_SIZE   = PACK_T003_SIZE;
              this.PACK_PATH   = PACK_T003_PATH;
              return;
          }

          if (packID == PACK_ID_T004) {

              console.log("ChessPack.setChessPack(PACK_ID_T004)");

              this.PACK_PREFIX = PACK_T004_PREFIX;
              this.PACK_SIZE   = PACK_T004_SIZE;
              this.PACK_PATH   = PACK_T004_PATH;
              return;
          }

          return;
      },

      doNextButton: function()
      {
        console.log("ChessPack.doNextButton()");

        this._next();

        this._setImageSource("img_chess", this._getImageNameWithPath())

        return;
      },

      doPrevButton: function()
      {
        console.log("ChessPack.doPrevButton()");

        this._prev();

        this._setImageSource("img_chess", this._getImageNameWithPath())

        return;
      },


      getImageName: function() {

          console.log("ChessPack.getImageName()");

          var number = this._pad(this.img_chess_number, 5);

          return this.PACK_PREFIX + number + ".png";
      },


      _getImageNameWithPath: function () {

         return this.PACK_PATH + this.getImageName() ;
      },

      _getNextImageName: function() {

        this._next();
        return this._getImageNameWithPath();
      },


      // Utiles
      _pad: function(str, max) {

        console.log("str["+str+", "+max+"]" );

        str = str.toString();
        return str.length < max ? this._pad("0" + str, max) : str;
      },

      _setImageSource: function(imageId, imageSrc) {
        $('#' + imageId).attr('src', imageSrc);
      },

      _next: function() {

        if (this.img_chess_number < this.PACK_SIZE) {
            this.img_chess_number += 1;
        }
        if (this.img_chess_number== this.PACK_SIZE) {
            this.img_chess_number = this.PACK_SIZE;
        }
        if (this.img_chess_number > this.PACK_SIZE) {
            this.img_chess_number = this.PACK_SIZE;
        }

        return this.img_chess_number;
      },


       // chessPack._prev(); --> OK..
       _prev: function() {

        if (this.img_chess_number > 0) {
            this.img_chess_number -= 1;
        }
        if (this.img_chess_number== 0) {
            this.img_chess_number = 0;
        }
        if (this.img_chess_number > this.PACK_SIZE) {
            this.img_chess_number = this.PACK_SIZE;
        }

        return this.img_chess_number;
      },


      // chessPack.init(); --> OK..
      init: function(packID) {
        // Pack Selected
        console.log("ChessPack.init(packID="+packID+")");

        this.setChessPack(packID);

      }

});
