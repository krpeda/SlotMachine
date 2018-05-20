

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
    //array of all picture ids
    symbolArray = [{
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
    loader = PIXI.loader;
    for (let i = 0; i < symbolArray.length; i++) {
        var element = symbolArray[i];
        loader.add("assets/images/" + element.id);
    }
    loader.load(startCreation);

}

function update() {
    slotOneRenderer.render(stageOne);
    slotTwoRenderer.render(stageTwo);
    slotThreeRenderer.render(stageThree);
    slotFourRenderer.render(stageFour);
    requestAnimationFrame(update);
}
//create sprites for each reel
function startCreation() {
    var stageArray = [stageOne, stageTwo, stageThree, stageFour];
    for (let i = 0; i < stageArray.length; i++) {
        createTextures(symbolArray, stageArray[i]);
    }
    requestAnimationFrame(update);
}

//create sprites from symbols
function createTextures(array, stage) {
    for (let i = 0; i < 60; i++) {
        //random picture array element
        var element = array[Math.floor(Math.random() * array.length)]
        sprite = new PIXI.Sprite(loader.resources["assets/images/" + element.id].texture);
        sprite.position.y = Math.floor(i % 60) * 50; 
        sprite.scale.x = 0.75;
        sprite.scale.y = 0.15;
        stage.addChild(sprite);
        requestAnimationFrame(update);
    };
    console.log(stage.children); //amount of sprites made
}
// update balance value and spin reels
function spin() {
    var userBalance = document.getElementById("userBalance");
    var balanceValue = parseInt(userBalance.getAttribute("value"), 10);
    var betValue = parseInt(totalBet.getAttribute("value"), 10);
    
    if ( balanceValue >= betValue) {
        var newValue = balanceValue - betValue;
        userBalance.setAttribute("value", newValue);
        userBalance.innerHTML = newValue;
        var timeRun = 0;
        var interval = window.setInterval(function () {
            timeRun++;
            document.getElementById("spinButton").disabled = true;
            if (timeRun == 30) {
                clearInterval(interval);
                document.getElementById("spinButton").disabled = false;
            }
            stageOne.position.y -= 30;
            stageTwo.position.y -= 25;
            stageThree.position.y -= 30;
            stageFour.position.y -= 25;
            requestAnimationFrame(update);
        }, 50);

    } else {
        document.getElementById("spinButton").disabled = true;
    }

}
//increase bet value
function increase() {
    var totalBet = document.getElementById("totalBet");
    var newValue = parseInt(totalBet.getAttribute("value"), 10) + 10;
    if (newValue <= parseInt(userBalance.getAttribute("value"), 10)) {
        totalBet.setAttribute("value", newValue);
        totalBet.innerHTML = newValue;
    }
}
//decrease bet value
function decrease() {
    var totalBet = document.getElementById("totalBet");
    var value = parseInt(totalBet.getAttribute("value"), 10);
    if (value > 10) {
        var newValue = value - 10;
        totalBet.setAttribute("value", newValue);
        totalBet.innerHTML = newValue;
    }

}
//author
function info() {
    alert("Made by Kristjan Erik Pedak (20.05.2018");
}