const cardsArray = [
    {
      name: 'cop',
      img: '/img/cop.jpg',
    },
    {
      name: 'esse',
      img: '/img/esse.jpg',
    },
    {
      name: 'firetruck',
      img: '/img/firetruck.jpg',
    },
    {
      name: 'high',
      img: '/img/high.jpg',
    },
    {
      name: 'mcqueen',
      img: '/img/mcqueen.jpg',
    },
    {
      name: 'papi',
      img: '/img/papi.jpg',
    },
    {
      name: 'purple',
      img: '/img/purple.jpg',
    },
    {
      name: 'retard',
      img: '/img/retard.jpg',
    },
    {
      name: 'stripweathers',
      img: '/img/stripweathers.jpg',
    },
    {
      name: 'trailertruck',
      img: '/img/trailertruck.jpg',
    },
    {
      name: 'verde',
      img: '/img/verde.jpg',
    },
    {
      name: 'woman',
      img: '/img/woman.jpg',
    },
  ]



// let gameGrid = cardsArray.concat(cardsArray);
// let firstGuess = '';
// let secondGuess = '';
// let count = 0;
// let previousTarget = null


// gameGrid.sort(() => 0.5 - Math.random())


// const game = document.getElementById('game');
// const grid = document.createElement('section');
// grid.setAttribute('class', 'grid');
// game.appendChild(grid);

// gameGrid.forEach(item => {
//   const card = document.createElement('div');
//   card.classList.add('card');
//   card.dataset.name = item.name;
//   card.style.backgroundImage = `url(${item.img})`;
//   grid.appendChild(card);
// });

// // Add event listener to grid
// grid.addEventListener('click', function(event) {
//   //...
//   if (count < 2) {
//     count++
//     if (count === 1) {
//       // Assign first guess
//       firstGuess = clicked.dataset.name
//       clicked.classList.add('selected')
//     } else {
//       // Assign second guess
//       secondGuess = clicked.dataset.name
//       clicked.classList.add('selected')
//     }
//     // If both guesses are not empty...
//     if (firstGuess !== '' && secondGuess !== '') {
//       // and the first guess matches the second match...
//       if (firstGuess === secondGuess) {
//         // run the match function
//         match()
//       }
//     }
//   }
// })

// // Add match CSS
// const match = () => {
//   var selected = document.querySelectorAll('.selected')
//   selected.forEach(card => {
//     card.classList.add('match')
//   })
// }


let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = item.name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${item.img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

const match = () => {
  let selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
}

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', function (event) {
  let clicked = event.target;
  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected')) {
    return;
  }
  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }
    if (firstGuess !== '' && secondGuess !== '') {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
      } else {
        setTimeout(resetGuesses, delay);
      }
    }
    previousTarget = clicked;
  }
});