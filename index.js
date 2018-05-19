 symbol1 = new Image();
 symbol1.src = "assets/images/symbol1.png"
 symbol2 = new Image();
 symbol2.src = "assets/images/symbol2.png"
 symbol3 = new Image();
 symbol3.src = "assets/images/symbol3.png"
 symbol4 = new Image();
 symbol4.src = "assets/images/symbol4.png"
 symbol5 = new Image();
 symbol5.src = "assets/images/symbol5.png"
 symbol6 = new Image();
 symbol6.src = "assets/images/symbol6.png"
 symbol7 = new Image();
 symbol7.src = "assets/images/symbol7.png"
 symbol8 = new Image();
 symbol8.src = "assets/images/symbol8.png"
 symbol9 = new Image();
 symbol9.src = "assets/images/symbol9.png"
 symbol10 = new Image();
 symbol10.src = "assets/images/symbol10.png"

 function init() {
    var symbolArray = [symbol1, symbol2, symbol3, symbol4, symbol5, symbol6, symbol7, symbol8, symbol9, symbol10];
    symbolArray.forEach(function(element){
    element.addEventListener("load", function(){
        //images have been loaded
    });
 });
    stage = new PIXI.Container();
 }
 
