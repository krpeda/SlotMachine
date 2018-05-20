
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
    requestAnimationFrame(update);
 }
 function update() {

    slotOneRenderer.render(stageOne);
    slotTwoRenderer.render(stageTwo);
    slotThreeRenderer.render(stageThree);
    slotFourRenderer.render(stageFour);
    requestAnimationFrame(update);
 }
 
 function createTextures(array, stage) {
     for (let i = 0; i < 12; i++) {
        var element = array[Math.floor(Math.random() * array.length)]
        var symbol = PIXI.Texture.fromImage("assets/images/" + element.id);
        sprite = new PIXI.Sprite(symbol);
        sprite.position.y = Math.floor(i % 12) * 50;
        sprite.scale.x = 0.75;
        sprite.scale.y = 0.15;      
        stage.addChild(sprite);   
        requestAnimationFrame(update);
     };
     console.log(stage.children);  //amount of symbols 
 }
 
 function spin() {

    var userBalance = document.getElementById("userBalance");
    var balanceValue = parseInt(userBalance.getAttribute("value"), 10);
    var betValue = parseInt(totalBet.getAttribute("value"), 10);

    if (balanceValue >= betValue) { 
    var newValue = balanceValue - betValue;
    userBalance.setAttribute("value", newValue);
    userBalance.innerHTML = newValue;
    
    window.setInterval(function(){
    stageOne.position.y -= 4;
    stageTwo.position.y -= 3.5;
    stageThree.position.y -= 2.5;
    stageFour.position.y -= 4.5;
    requestAnimationFrame(update);
    }, 50);
    
    } else {
        document.getElementById("spinButton").disabled = true;
    }   

}

function increase() {
        var totalBet = document.getElementById("totalBet");
        var newValue = parseInt(totalBet.getAttribute("value"), 10) + 10;
        totalBet.setAttribute("value", newValue);
        totalBet.innerHTML = newValue;
}
function decrease() {
    var totalBet = document.getElementById("totalBet");
    var value = parseInt(totalBet.getAttribute("value"), 10);
    if (value >= 10) {  
        var newValue = value - 10;
        totalBet.setAttribute("value", newValue);
        totalBet.innerHTML = newValue;
    }
    
}