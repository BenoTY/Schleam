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
    new GameItem("Forza",       "Icons/Forza4.bmp",     3),
    new GameItem("Nicos Donut", "Icons/NDR.jpeg",       2),
    new GameItem("Minecraft",   "Icons/Minecraft.png",  8),
    new GameItem("ThisIsAGame", "Icons/ThisIsAGame.png",4),
    new GameItem("Hallo",       "Icons/Hallo.png",      1),
    new GameItem("Tetris",      "Icons/Tetris.png",     5),
    new GameItem("Scribble",    "Icons/Scribble.png",   7),
    new GameItem("osu!",        "Icons/Osu.png",        9),
    new GameItem("Felix",       "Icons/Felix.jpeg",     6),
    new GameItem("Valorant",    "Icons/Valorant.png",   10),
]


function sortByIndex(){
    var Items = [];

    for(var i = 0; i < AllGames.length; i++){
        var Item = AllGames[i]

        var e = (Items[i] == null);
        console.log(e);
        console.log(i + " Durchlauf");
        if(Items[i] == undefined || Items[i] == null  && Item.index != -1){
            console.log("Position free");
            console.log("AddItem: " + Item.index);
            Items[Item.index] = Item;
        }else{
            console.log("Position not free");
            var nextIndex = getNextFreePosition(Items, AllGames.length);
            console.log(nextIndex);
            console.log("AddSortedItem: " + Item);
            Items[nextIndex] = Item;
        }
    }
    return Items;
}


function getNextFreePosition(array, maxlength){
    for(var i = 0; i < maxlength; i++){
        console.log("Search for free Pos");
        console.log("Free: "+ array[i]);
        if(array[i] == undefined){
            return i;
        }
    }
    return 20;
}
function addItemToList(gameItem){
    if(gameItem == null) 
        return;
    document.getElementById("ListID").innerHTML += 
    `<div class="GameHoverItem"><img id="${gameItem.gameName}" src="${gameItem.imagePath}">${gameItem.gameName}</div>`;
}

function createItems(){
    var sortedList = sortByIndex();
    for(var i = 0 ; i < sortedList.length; i++)
    {
        var game = sortedList[i];

        addItemToList(game);
    }
}

createItems();