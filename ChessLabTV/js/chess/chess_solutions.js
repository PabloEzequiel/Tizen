/**
 * ChessSolutions object
 * Some Day this would be a JSON Object
 */
function ChessSolutions()
{

    var hashmap = {};


    /**
     * Example:
     * var chessSoltions = new ChessSolutions();
     * chessSoltions.getChessSolution("chess_mate1_00002.png");
     * @Public function
     */
     this.getChessSolution = function(imagenName)
     {
        var key = imagenName.replace(".png", "");

        console.log("ChessSolutions.getChessSolution('"+key+"')");

        return _get_chess_solution(key);
    }


    //--[Everything under it is private, except "init" method at finish]--


    /**
     * @private
     */
    function _put_chess_solution(key, value) {
        hashmap[key] = value;
    }

    /**
     * @private
     */
    function _get_chess_solution(key) {
         var solution = hashmap[key];

         console.log("_get_chess_solution['"+key+"','"+solution+"']");

         return solution;
    }



    /**
     * How can I create HashMap in a JS file (in JQM)
     * http://stackoverflow.com/questions/14725751/how-can-i-create-hashmap-in-a-js-file-in-jqm
     * @private
     */
    function _chessProblems_utf8_put(key, value) {
        _put_chess_solution(key, value);
    }

    /**
     * I bring it from Android ChessLab project
     * I replace "chessProblems_utf8.put" by "_chessProblems_utf8_put"
     * to get compatibility
     * @private
     */
    function _initUTF8() {

        console.log("ChessSolutions._initUTF8()");

        /*
                Black
                T	C	A	D	R	A	C	T
                ♟	♟	♟	♟	♟	♟	♟	♟

                ♙	♙	♙	♙	♙	♙	♙	♙
                T	C	A	D	R	A	C	T
                white
        */

       // Mate en #1
        _chessProblems_utf8_put("chess_mate1_00000","1. Tg8#        ");
        _chessProblems_utf8_put("chess_mate1_00001","1. Cd7#        ");
        _chessProblems_utf8_put("chess_mate1_00002","1. dxe8=C#     ");
        _chessProblems_utf8_put("chess_mate1_00003","1. fxg8=C#     ");
        _chessProblems_utf8_put("chess_mate1_00004","1. f8=D#       ");
        _chessProblems_utf8_put("chess_mate1_00005","1. Cg6#        ");
        _chessProblems_utf8_put("chess_mate1_00006","1. Cd6#        ");
        _chessProblems_utf8_put("chess_mate1_00007","1. Td8#        ");
        _chessProblems_utf8_put("chess_mate1_00008","1. f3#         ");

       // Mate en #2
        _chessProblems_utf8_put("chess_mate2_00000","1. Db8+ Cxb8 2. Tf8#        ");
        _chessProblems_utf8_put("chess_mate2_00001","1. Dxa7+ Rxa7 2. Ta3#        ");
        _chessProblems_utf8_put("chess_mate2_00002","1. Txc6+ bxc6 2. Aa6#        ");
        _chessProblems_utf8_put("chess_mate2_00003","1. Dxc6+ bxc6 2. Aa6#        ");
        _chessProblems_utf8_put("chess_mate2_00004","1. Cb5+ cxb5 2. Cb7#        ");
        _chessProblems_utf8_put("chess_mate2_00005","1. Df6 Dxf6 2. Txe8#        ");
        _chessProblems_utf8_put("chess_mate2_00006","1. Dxf7+ Rxf7 2. Axe6#        ");
        _chessProblems_utf8_put("chess_mate2_00007","1. Df6 exf6 2. Txe8#        ");
        _chessProblems_utf8_put("chess_mate2_00008","1. Dxf8+ Dxf8 2. Txh7#        ");
        _chessProblems_utf8_put("chess_mate2_00009","1. Dg7+ Cxg7 2. Ch6#        ");
        _chessProblems_utf8_put("chess_mate2_00010","1. De6+ Cxe6 2. Ch6#        ");
        _chessProblems_utf8_put("chess_mate2_00011","1. Dh6+ Rxh6 2. Af8#        ");

       // Mate en #3
        _chessProblems_utf8_put("chess_mate3_00000","1. Dg6 fxg6 2. Txg7+ Rf8 3. Cxg6#        ");
        _chessProblems_utf8_put("chess_mate3_00001","1. Dd8+ Rxd8 2. Cc6+ Re8 3. Td8#        ");
        _chessProblems_utf8_put("chess_mate3_00002","1. Tg6+ fxg6 2. Dh8+ Rxh8 3. Txf8#        ");
        _chessProblems_utf8_put("chess_mate3_00003","1. Ce7+ Rh8 2. Txh7+ Rxh7 3. Th1#        ");
        _chessProblems_utf8_put("chess_mate3_00004","1. Dh6+ Axh6 2. Cg5+ Rh8 3. Th7#        ");
        _chessProblems_utf8_put("chess_mate3_00005","1. Th8+ Axh8 2. Dh7+ Rf8 3. Dxh8#        ");
        _chessProblems_utf8_put("chess_mate3_00006","1. Cf6+ Axf6 2. Dxg6+ Ag7 3. Dh7#        ");
        _chessProblems_utf8_put("chess_mate3_00007","1. Dd8+ Rxd8 2. Ag5+ Re8 3. Td8#        ");
        _chessProblems_utf8_put("chess_mate3_00008","1. Dxh4+ Rxh4 2. Th7+ Rg5 3. h4#        ");
        _chessProblems_utf8_put("chess_mate3_00009","1. Cxh7+ Txh7 2. Dh6+ Txh6 3. Axh6#        ");
        _chessProblems_utf8_put("chess_mate3_00010","1. Dxd4 Cxd4 2. Cf6+ Rf8 3. Ah6#        ");
        _chessProblems_utf8_put("chess_mate3_00011","1. Dh6 Dxe5 2. Dxh7+ Rxh7 3. Rg2#        ");
        _chessProblems_utf8_put("chess_mate3_00012","1. Cc7+ Dxc7 2. Dxf7+ Axf7 3. Axf7#        ");
        _chessProblems_utf8_put("chess_mate3_00013","1. Dg7+ Txg7 2. hxg7+ Rg8 3. Th8#        ");
        _chessProblems_utf8_put("chess_mate3_00014","1. Dxh7+ Cxh7 2. Axh7+ Rf8 3. Cg6#        ");
        _chessProblems_utf8_put("chess_mate3_00015","1. Axb7+ Rxb7 2. Dxb5+ Rc8 3. Dc6#        ");
        _chessProblems_utf8_put("chess_mate3_00016","1. Th7+ Rxh7 2. Dh2+ Rg7 3. Dh6#        ");

       // Mate en #4
        _chessProblems_utf8_put("chess_mate4_00000","1. g4+ fxg4+ 2. Cxg4+ g5 3. De8+ Dg6 4. Cf6#        ");
        _chessProblems_utf8_put("chess_mate4_00001","1. Dxh7+ Rxh7 2. Th3+ Axh3 3. Txh3+ Rg6 4. Th6#     ");
        _chessProblems_utf8_put("chess_mate4_00002","1. Dxe5+ Cxe5 2. Af6+ Rh6 3. Ag7+ Rh5 4. Th6#       ");
        _chessProblems_utf8_put("chess_mate4_00003","1. Dd6+ Re8 2. Ad7+ Rd8 3. Axb5+ Rc8 4. Aa6#        ");
        _chessProblems_utf8_put("chess_mate4_00004","1. Cg6+ Rh7 2. Cf8+ Rh8 3. Dh7+ Txh7 4. Cg6#        ");
        _chessProblems_utf8_put("chess_mate4_00005","1. Txh7+ Rxh7 2. Cf8+ Rg7 3. Dh7+ Rxf8 4. Df7#      ");
        _chessProblems_utf8_put("chess_mate4_00006","1. Th7+ Rxh7 2. De7+ Tf7 3. Dxf7+ Rh6 4. Dg7#       ");
        _chessProblems_utf8_put("chess_mate4_00007","1. Txc5+ Rb6 2. Dc7+ Ra7 3. Txa5+ Da6 4. Ad4#       ");
        _chessProblems_utf8_put("chess_mate4_00008","1. Ah5+ Cg6 2. Txh7 Tg1+ 3. Rxg1 Axe2 4. Axg6#      ");
        _chessProblems_utf8_put("chess_mate4_00009","1. Tf8+ Cxf8 2. Dxf8+ Re5 3. f4+ Axf4 4. gxf4#      ");
        _chessProblems_utf8_put("chess_mate4_00010","1. Ce7+ Rh8 2. Cxg6+ Dxg6 3. Dxf8+ Dg8 4. Dxg8#     ");
        _chessProblems_utf8_put("chess_mate4_00011","1. Axh7+ Rh8 2. Ag8+ Dh6 3. Txh6+ Axh6 4. Dh7#      ");
        _chessProblems_utf8_put("chess_mate4_00012","1. Af8+ Txf8 2. Td3 Ae1 3. Th3+ Ah4 4. Txh4#        ");
        _chessProblems_utf8_put("chess_mate4_00013","1. Cg5 Axf2+ 2. Rh1 Txa8 3. Dh7+ Rf8 4. Dh8#        ");
        _chessProblems_utf8_put("chess_mate4_00014","1. Txb8+ Ra7 2. Dd4+ Rxb8 3. Te8+ Rc7 4. Dd8#       ");
        _chessProblems_utf8_put("chess_mate4_00015","1. Ag5+ Tf6 2. Axf6+ gxf6 3. Dg7+ Re8 4. Df7#       ");

       // Chess Training BBVA mates simples ...
        _chessProblems_utf8_put("chess_train_001_00000","1. Th1#      ");
        _chessProblems_utf8_put("chess_train_001_00001","1. Aa6#      ");
        _chessProblems_utf8_put("chess_train_001_00002","1. Th1#      ");
        _chessProblems_utf8_put("chess_train_001_00003","1. Td8#      ");
        _chessProblems_utf8_put("chess_train_001_00004","1. Tg1#      ");
        _chessProblems_utf8_put("chess_train_001_00005","1. Axh7#     ");
        _chessProblems_utf8_put("chess_train_001_00006","1. Dxf7#     ");
        _chessProblems_utf8_put("chess_train_001_00007","1. Dxh7#     ");
        _chessProblems_utf8_put("chess_train_001_00008","1. Dh5#      ");
        _chessProblems_utf8_put("chess_train_001_00009","1. Td8#      ");
        _chessProblems_utf8_put("chess_train_001_00010","1. Te8#      ");
        _chessProblems_utf8_put("chess_train_001_00011","1. Cg6#      ");
        _chessProblems_utf8_put("chess_train_001_00012","1. fxg8=C#   ");
        _chessProblems_utf8_put("chess_train_001_00013","1. Aa6#      ");
        _chessProblems_utf8_put("chess_train_001_00014","1. f8=D#     ");
        _chessProblems_utf8_put("chess_train_001_00015","1. Dc6#      ");
        _chessProblems_utf8_put("chess_train_001_00016","1. dxe8=C#   ");
        _chessProblems_utf8_put("chess_train_001_00017","1. Cd7#      ");

       // Negras ganan ...
        _chessProblems_utf8_put("chess_train_002_00000","1 ... Cf3#   ");
        _chessProblems_utf8_put("chess_train_002_00001","1 ... Dxc2#   ");
        _chessProblems_utf8_put("chess_train_002_00002","1 ... Ah3+ 2. Rxh3 Df1#   ");
        _chessProblems_utf8_put("chess_train_002_00003","1 ... Cf4+ 2. Cxf4 Dh1#   ");
        _chessProblems_utf8_put("chess_train_002_00004","1 ... Txh3+ 2. gxh3 Dh2#   ");
        _chessProblems_utf8_put("chess_train_002_00005","1 ... Dxh3+ 2. Rxh3 Th1#   ");
        _chessProblems_utf8_put("chess_train_002_00006","1 ... Dxe4+ 2. Dxe4 T6f2#   ");
        _chessProblems_utf8_put("chess_train_002_00007","1 ... Dg1+ 2. Rxg1 Te1#   ");
        _chessProblems_utf8_put("chess_train_002_00008","1 ... Dg2+ 2. Rxg2 Txg3#   ");
        _chessProblems_utf8_put("chess_train_002_00009","1 ... Txe2 2. Dxe2 Dc3#   ");
        _chessProblems_utf8_put("chess_train_002_00010","1 ... Ta4+ 2. Axa4 b4#   ");
        _chessProblems_utf8_put("chess_train_002_00011","1 ... Dg1+ 2. Txg1 Cf2#   ");
        _chessProblems_utf8_put("chess_train_002_00012","1 ... Dh3 2. gxh3 Cxh3#   ");
        _chessProblems_utf8_put("chess_train_002_00013","1 ... Df3+ 2. Cxf3 exf3+ 3. Rf1 Td1#   ");
        _chessProblems_utf8_put("chess_train_002_00014","1 ... Df1+ 2. Ag1 Df3+ 3. Axf3 Axf3#   ");
        _chessProblems_utf8_put("chess_train_002_00015","1 ... Axg5+ 2. Rxg5 f6+ 3. Rg6 Dg4#   ");
        _chessProblems_utf8_put("chess_train_002_00016","1 ... Dg2+ 2. Dxg2 Txe1+ 3. Df1 Txf1#   ");
        _chessProblems_utf8_put("chess_train_002_00017","1 ... Tc1+ 2. Rxc1 Te1+ 3. Cxe1 Dxe1#   ");

       // Blancas ganan I
        _chessProblems_utf8_put("chess_train_003_00000"," 1. Tc1 Dxa4 2. Txc8#    ");
        _chessProblems_utf8_put("chess_train_003_00001"," 1. Td7 Dxd7 2. Cf6+ Rh8 3. Cxd7    ");
        _chessProblems_utf8_put("chess_train_003_00002"," 1. Ad6 Rg8 2. Te8    ");
        _chessProblems_utf8_put("chess_train_003_00003"," 1. f5 Txg3 2. f6    ");
        _chessProblems_utf8_put("chess_train_003_00004"," 1. Te8+ Rh7 2. Dxd5 Txd5 3. Txc8    ");
        _chessProblems_utf8_put("chess_train_003_00005"," 1. g7 Rxg7 2. Cf5+    ");
        _chessProblems_utf8_put("chess_train_003_00006"," 1. d4+ cxd4 2. Ta5+ Re6 3. Ta6+    ");
        _chessProblems_utf8_put("chess_train_003_00007"," 1. b6 cxb6 2. a6 bxa6 3. c6 Rf6 4. c7 Re7 5. c8=D    ");
        _chessProblems_utf8_put("chess_train_003_00008"," 1. Dg1+ Dxg1 2. g8=D+    ");
        _chessProblems_utf8_put("chess_train_003_00009"," 1. Te8 Txc7 2. Rd6+    ");
        _chessProblems_utf8_put("chess_train_003_00010"," 1. Cf6+ gxf6 2. Ae6+    ");
        _chessProblems_utf8_put("chess_train_003_00011"," 1. Ch6+ Rh8 2. Dxe5 Dxe5 3. Cxf7+ Rg8 4. Cxe5    ");
        _chessProblems_utf8_put("chess_train_003_00012"," 1. Da3+ Rxa3 2. Cc2#    ");
        _chessProblems_utf8_put("chess_train_003_00013"," 1. Ad6 Dxb3 2. Tf8#    ");
        _chessProblems_utf8_put("chess_train_003_00014"," 1. Tb1 Dxc5 2. Txb7#    ");
        _chessProblems_utf8_put("chess_train_003_00015"," 1. Db3+ Dxb3 2. Te8+ Rf7 3. Tf8#    ");
        _chessProblems_utf8_put("chess_train_003_00016"," 1. Dxd7 Txd7 2. Te8+ Rh7 3. Tcc8 Dc1+ 4. Txc1    ");
        _chessProblems_utf8_put("chess_train_003_00017"," 1. Th8+ Rxh8 2. Axg7+ Txg7 3. Dxd5    ");
        _chessProblems_utf8_put("chess_train_003_00018"," 1. Ce7+ Dxe7 2. Dxh7+ Rxh7 3. Th5+ Rg8 4. Th8#    ");

       // Blancas ganan II
        _chessProblems_utf8_put("chess_train_004_00000"," 1. Dg4 Dxg4 2. Txe8+ Af8 3. Ce7+ Rh8 4. Txf8#      ");
        _chessProblems_utf8_put("chess_train_004_00001"," 1. Te8+ Af8 2. Txf8+ Rxf8 3. Cf5+ Rg8 4. Df8+ Rxf8 5. Td8#      ");
        _chessProblems_utf8_put("chess_train_004_00002"," 1. Cg5 Axc2 2. Axb7      ");
        _chessProblems_utf8_put("chess_train_004_00003"," 1. Ch6+ Rf8 2. Cf5 exf5 3. Txh7      ");
        _chessProblems_utf8_put("chess_train_004_00004"," 1. Cxd5 cxd5 2. Dxh7+ Rxh7 3. Th5+ Rg8 4. Th8#      ");
        _chessProblems_utf8_put("chess_train_004_00005"," 1. Txd8 Dxd8 2. Td1 De7 3. Td7 Dxd7 4. Df6      ");
        _chessProblems_utf8_put("chess_train_004_00006"," 1. e6 Axe6 2. Ad4 f6 3. Dg4 Rf7 4. Tfe1      ");
        _chessProblems_utf8_put("chess_train_004_00007"," 1. Txe5 Dxe5 2. Cg6 Dxh2 3. Cde7#      ");
        _chessProblems_utf8_put("chess_train_004_00008"," 1. b4 Dd8 2. Dxf6+ Rxf6 3. Ab2#      ");
        _chessProblems_utf8_put("chess_train_004_00009"," 1. Cf6+ gxf6 2. exf6 Dg4 3. Dxf8+ Rxf8 4. Td8#      ");
        _chessProblems_utf8_put("chess_train_004_00010"," 1. Ca6+ Ra8 2. Cxc7+ Rb8 3. Ca6+ Ra8 4. Tb7 Txc2 5. Tb8+ Txb8 6. Cc7#      ");
        _chessProblems_utf8_put("chess_train_004_00011"," 1. Ag8 Txg8 2. Rf7 Txg6 3. fxg6 h5 4. g7+ Rh7 5. g8=D+ Rh6 6. Dg6#      ");
        _chessProblems_utf8_put("chess_train_004_00012"," 1. axb5 axb5 2. d5 Axf2+ 3. Rxf2 Cd8 4. Dd3      ");
        _chessProblems_utf8_put("chess_train_004_00013"," 1. Dxh6+ gxh6 2. Tg7+ Rh8 3. Ag8 Txg8 4. Txg8+ Rh7 5. T1g7#      ");
        _chessProblems_utf8_put("chess_train_004_00014"," 1. Txb2 Dxb2 2. Dxc8+ Cxc8 3. d7 Cb6 4. d8=D+      ");
        _chessProblems_utf8_put("chess_train_004_00015"," 1. Txd3 Dxd3 2. Te8+ Rh7 3. Dxd3+ Txd3 4. Txa8      ");
        _chessProblems_utf8_put("chess_train_004_00016"," 1. Te7 Db7+ 2. Ae4 Dxe4+ 3. Tgxe4 Axe7 4. Txe7      ");
        _chessProblems_utf8_put("chess_train_004_00017"," 1. Th4 Da3 2. Dxg7+ Rxg7 3. h8=D+ Txh8 4. Tg4+ Rh6 5. Th1#      ");
        _chessProblems_utf8_put("chess_train_004_00018"," 1. Txg7+ Rxg7 2. Tg1+ Rh8 3. Dxe5+ dxe5 4. Axe5+ f6 5. Axf6+ Txf6 6. Tg8#      ");


    }

    /**
     * Init for ChessSolutions class
     */
    function  init() {

        console.log("ChessSolutions.init()");
        _initUTF8();
    };

    init();

};
