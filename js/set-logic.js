
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

set.checkMyCards = (cards) => {
    let counter = 0;
    for(let i = 0; i< cards.length; i++){
        for(let x = 0; x< cards.length; x++){
            for(let y = 0; y< cards.length; y++){ 
                if((cards[i].color == cards[x].color || cards[i].color == cards[y].color) || (cards[i].number == cards[x].number || cards[i].number == cards[y].number) || (cards[i].filling == cards[x].filling || cards[i].filling == cards[y].filling) || (cards[i].shape == cards[x].shape || cards[i].shape == cards[y].shape)) {
                    console.log("bad")
                }else {
                    counter++;
                }
            }
        }
    }
    return counter;
   
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
console.log(setBoard)

console.log(set.checkMyCards(setBoard));

