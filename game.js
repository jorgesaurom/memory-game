document.addEventListener('DOMContentLoaded', () => {
    
    const cardArray = [
      {
        name: 'guitarra',
        img:'imggame/guitarra.png'
      },
      {
        name: 'guitarra',
        img:'imggame/guitarra.png'
      },
      {
        name: 'bateria',
        img:'imggame/bateria.jpg'
      },
      {
        name: 'bateria',
        img:'imggame/bateria.jpg'
      },
      {
        name: 'clarinete',
        img:'imggame/clarinete.png'
      },
      {
        name: 'clarinete',
        img:'imggame/clarinete.png'
      },
      {
        name: 'maraca',
        img:'imggame/maraca.png'
      },
      {
        name: 'maraca',
        img:'imggame/maraca.png'
      },
      {
        name: 'piano',
        img:'imggame/piano.png'
      },
      {
        name: 'piano',
        img:'imggame/piano.png'
      },
      {
        name: 'saxofon',
        img:'imggame/saxofon.png'
      },
      {
        name: 'saxofon',
        img:'imggame/saxofon.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
   
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'imggame/interrogante.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
    
    
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'imggame/interrogante.png')
        cards[optionTwoId].setAttribute('src', 'imggame/interrogante.png')
       
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
      
        cards[optionOneId].setAttribute('src', 'imggame/fondo.jpg')
        cards[optionTwoId].setAttribute('src', 'imggame/fondo.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'imggame/interrogante.png')
        cards[optionTwoId].setAttribute('src', 'imggame/interrogante.png')
      
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'felicitaciones , terminaste  el juego'
      }
    }
  

    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard();
  
  })

  /*BOTON*/
  let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})

/*FUNCION CONTADOR*/

 window.ondblclick = updateClock;

let totalTime = 30;

function updateClock() {
  document.getElementById('contador').innerHTML = totalTime;
  if(totalTime==0){

    location.reload()
    alert("se acabo el tiempo, vuele a intentarlo");
  }

  else{
    totalTime-=1;
    setTimeout("updateClock()",1000);
  }
}

