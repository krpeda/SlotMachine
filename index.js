
 function init() {
     stageOne = new PIXI.Container();
     stageTwo = new PIXI.Container();
     stageThree = new PIXI.Container();
     stageFour = new PIXI.Container();

     slotOneRenderer = PIXI.autoDetectRenderer(
         document.getElementById("slotOne").width,
         document.getElementById("slotOne").height, {
             view: document.getElementById("slotOne")
         }
     );
     slotTwoRenderer = PIXI.autoDetectRenderer(
         document.getElementById("slotTwo").width,
         document.getElementById("slotTwo").height, {
             view: document.getElementById("slotTwo")
         }
     );
     slotThreeRenderer = PIXI.autoDetectRenderer(
         document.getElementById("slotThree").width,
         document.getElementById("slotThree").height, {
             view: document.getElementById("slotThree")
         }
     );
     slotFourRenderer = PIXI.autoDetectRenderer(
         document.getElementById("slotFour").width,
         document.getElementById("slotFour").height, {
             view: document.getElementById("slotFour")
         }
     );
     var symbolArray = [{
             id: 'symbol1.png'
         },
         {
             id: 'symbol2.png'
         },
         {
             id: 'symbol3.png'
         },
         {
             id: 'symbol4.png'
         },
         {
             id: 'symbol5.png'
         },
         {
             id: 'symbol6.png'
         },
         {
             id: 'symbol7.png'
         },
         {
             id: 'symbol8.png'
         },
         {
             id: 'symbol9.png'
         },
         {
             id: 'symbol10.png'
         }
     ];

    var stageArray = [stageOne, stageTwo, stageThree, stageFour];
    for (let i = 0; i < stageArray.length; i++) {
        createTextures(symbolArray, stageArray[i]);     
    }
    
 }
 function update() {
    slotOneRenderer.render(stageOne);
    slotTwoRenderer.render(stageTwo);
    slotThreeRenderer.render(stageThree);
    slotFourRenderer.render(stageFour) 
    requestAnimationFrame(update);
 }
 function createTextures(array, stage) {
     for (let i = 0; i < array.length; i++) {
        var element= array[Math.floor(Math.random() * array.length)]
        var symbol = PIXI.Texture.fromImage("assets/images/" + element.id);
        sprite = new PIXI.Sprite(symbol); 
        sprite.position.x = 0;
        sprite.position.y = 0;
        sprite.scale.x = 0.8;
        sprite.scale.y = 0.4;
        stage.addChild(sprite);   
        requestAnimationFrame(update);
     }
 }
 
 function spin() {

}