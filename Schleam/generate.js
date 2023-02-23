class GameItem{
    constructor(gameName, imagePath, index = -1)
    {
        this.imagePath = imagePath;
        this.gameName = gameName;
        this.index = index;
    }
}

var AllGames = [
    new GameItem("AmongUs",     "Icons/AmongUs.png",    0),
    new GameItem("Valorant",    "Icons/Valorant.png",   10),
    new GameItem("Forza",       "Icons/Forza4.bmp",     3),
    new GameItem("Nicos Donut", "Icons/NDR.jpeg",       2),
    new GameItem("Minecraft",   "Icons/Minecraft.png",  8),
    new GameItem("ThisIsAGame", "Icons/ThisIsAGame.png",4),
    new GameItem("Hallo",       "Icons/Hallo.png",      1),
    new GameItem("Tetris",      "Icons/Tetris.png",     5),
    new GameItem("Scribble",    "Icons/Scribble.png",   7),
    new GameItem("osu!",        "Icons/Osu.png",        9),
    new GameItem("Felix",       "Icons/Felix.jpeg",     6),
]

function sortByIndex(){
    var Items = new Array(AllGames.length);

    //add only games with a index that is not -1
    for(var i = 0; i<AllGames.length; i++)
    {
        var item = AllGames[i];
        if(item.index != -1){
            Items[item.index] = AllGames[i];
        }
    }


    for(var i = 0; i < AllGames.length; i++){
        var item = AllGames[i];
        
        if(item.index == -1){
            var nextIndex = getNextFreePosition(Items);            
            Items[nextIndex] = item;
            Items[nextIndex].index = nextIndex; 
        }
    }
    return Items;
}


function getNextFreePosition(array){

    for(var i = 0; i<array.length; i++)
    {
        if(array[i] === undefined){
            return i;
        }
    }
}

function addItemToList(gameItem){
    if(gameItem === undefined) 
        return;
    document.getElementById("ListID").innerHTML += 
    `<div class="GameHoverItem" draggable="true" ><img id="${gameItem.gameName}" src="${gameItem.imagePath}">${gameItem.gameName}</div>`;
}

let dragged = null;
function createItems(){
    var sortedList = sortByIndex();
    for(var i = 0 ; i < sortedList.length; i++)
    {
        var game = sortedList[i];
        addItemToList(game);
    }

    var target = document.getElementsByClassName("GameHoverItem");
    for(var i = 0; i < target; i++){
        target[i].addEventListener("dragstart", (event) => {
            dragged = event.target;
        })
    }

}

createItems();

