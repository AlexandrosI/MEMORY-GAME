const cardArray =[
    {
        name:'fries',
        img:'images/fries.png'
    },

    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },

    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'fries',
        img:'images/fries.png'
    },

    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },

    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },

]


//The sort() sorts the elements of an array. 
// The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1

cardArray.sort( () =>0.5- Math.random())
console.log(cardArray);

//grab the div with id="grid"
const gridDisplay =document.querySelector('#grid');


//create the board
function createBoard() {
    for(let i=0; i<cardArray.length; i++) {
        const card = document.createElement('img');
        gridDisplay.appendChild(card) // add the images
        card.setAttribute('src', 'images/blank.png') //display the blank.png image
        card.setAttribute('data-id',i)  // give every element an id
        card.addEventListener('click',flipCard); // add an event if clicked
        
    }
}

createBoard()

//create a function to flip a card once it is clicked

function flipCard() {
    const cardId=this.getAttribute('data-id');
console.log('clicked', cardId);
}