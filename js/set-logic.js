// 

// SetDeck = {
//     myCards = []

// }
//   class Deck {

//     constructor (numbers, filling, color, shape) {
//         this.numbers = numbers
//         this.filling = filling
//         this.color = color
//         this.shape = shape
//     }
//   }


//   SetDeck.numbers =[1, 2, 3];
//   setDeck.filling = ['full', 'empty', 'lined'];
//   setDeck.color =['red', 'blue', 'green'];
//   setDeck.shape =  ['square', 'circle', 'triangle'];


// for(let i = 0; i< numbers.length; i++){
//     for(let x = 0 ; x< filling.length; x++){
//         for( let y = 0; y< color.length; y++){
//             for(let z = 0 ; shape.length; z++){
//                 myCards.push(new Deck(numbers[i], filling[x], color[y], shape[z]))
//             }
//         }
//     }
// }

// console.log(setDeck.myCards);
    



let myDeck = [];


  //let obj = new Deck(2, "ds", "dasda", "das");
  let newObject = {number: 2,
fill: "dsada",
color: "dsasd",
shape: "dsaasd"};
  console.log(newObject)


  let numbers =[1, 2, 3];
  let filling = ['full', 'empty', 'lined'];
  let color =['red', 'blue', 'green'];
  let shape =  ['square', 'circle', 'triangle'];




// for(let i = 0; i< numbers.length; i++){
//     for(let x = 0 ; x< filling.length; x++){
//         for( let y = 0; y< color.length; y++){
//             for(let z = 0 ; shape.length; z++){
//                 let myNewOne ={number: numbers[i], fill: filling[x], color: color[y], shape: shape[z]};
//                 myDeck.push(myNewOne)
//             }
//         }
//     }
// }


let firstSet = [{
    number: numbers[0],
    filling: filling[0],
    color: color[0],
    shape: shape[0]
},{
    number: numbers[1],
    filling: filling[1],
    color: color[2],
    shape: shape[1]
},
{
    number: numbers[0],
    filling: filling[2],
    color: color[2],
    shape: shape[2]
},
{
    number: numbers[0],
    filling: filling[2],
    color: color[2],
    shape: shape[1]
},
{
    number: numbers[0],
    filling: filling[2],
    color: color[1],
    shape: shape[1]
},
{
    number: numbers[0],
    filling: filling[1],
    color: color[1],
    shape: shape[1]
},
{
    number: numbers[0],
    filling: filling[1],
    color: color[1],
    shape: shape[1]
},
{
    number: numbers[0],
    filling: filling[1],
    color: color[1],
    shape: shape[0]
},
{
    number: numbers[0],
    filling: filling[1],
    color: color[1],
    shape: shape[1]
},
{
    number: numbers[0],
    filling: filling[1],
    color: color[2],
    shape: shape[1]
},
{
    number: numbers[0],
    filling: filling[1],
    color: color[2],
    shape: shape[1]
},
{
    number: numbers[2],
    filling: filling[1],
    color: color[2],
    shape: shape[1]
},
]



//console.log(myDeck)

console.log(firstSet);