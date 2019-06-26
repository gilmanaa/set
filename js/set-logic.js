
window.set = {}

let myDeck = [];

  let numbers =[1, 2, 3];
  let filling = ['full', 'empty', 'lined'];
  let color =['red', 'blue', 'green'];
  let shape =  ['square', 'circle', 'triangle'];


for(let i = 0; i< numbers.length; i++){
    for(let x = 0 ; x< filling.length; x++){
        for( let y = 0; y< color.length; y++){
            for(let z = 0 ; z< shape.length; z++){
                let myNewOne ={number: numbers[i], fill: filling[x], color: color[y], shape: shape[z]};
                myDeck.push(myNewOne)
            }
        }
    }
}

set.shuffleCards = (myDeck) => {
    
        let j, x, i;
        for (i = myDeck.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = myDeck[i];
            myDeck[i] = myDeck[j];
            myDeck[j] = x;
        }
        return myDeck;
}

set.shuffleCards(myDeck);

console.log(myDeck)


let mySelected = [];



set.counter = 0;
set.checkMyCards = (cards) => {
   
            if(cards[0]['number'] == cards[1]['number'] && cards[0]['number'] == cards[2]['number'] ){
               set.counter++;
                
            }
            if(cards[0]['fill'] == cards[1]['fill']  && cards[0]['fill'] == cards[2]['fill'] ){
                set.counter++;
            }


            if(cards[0]['color'] == cards[1]['color'] && cards[0]['color'] == cards[2]['color'] ){
                set.counter++;
            }

            if(cards[0]['shape'] == cards[1]['shape'] && cards[0]['shape'] == cards[2]['shape'] ){
                set.counter++;
            }

        if(set.counter === 3 || set.counter == 1){
            console.log("Great");
        }else {
            console.log("Set");
        }
    }



// document.querySelector('.selected').addEventListener( "click", (e) => {
//     mySelected.push(e.target);
//     if(mySelected.length >= 2){
//         set.checkMyCards(mySelected);
//     }
// })

let setBoard = []

set.newSet = (myDeck) => {
    for(let x = myDeck.length-1; x> myDeck.length-13; x--){
        setBoard.push(myDeck[x]);
    }
    return setBoard;
}
set.newSet(myDeck);


let checkCards = [
    {number: 1, fill: "empty", color: "green", shape: "circle"},
    {number: 1, fill: "lined", color: "green", shape: "circle"},
    {number: 1, fill: "full", color: "green", shape: "circle"}
]

console.log(set.checkMyCards(checkCards));

