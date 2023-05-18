// DOM elements
const body = document.querySelector('body');
const score = document.querySelector('.sr');
const paper = document.querySelector('.pap');
const scissors = document.querySelector('.scr');
const rock = document.querySelector('.rck');
const canvas = document.querySelector('.play-section');
const menu = document.querySelector('.rul');
const close = document.querySelector('.close');
const rules = document.querySelector('.rules-pic');
const wrap = document.querySelector('.wrap');
const keys = document.querySelectorAll('.sticks');
const upperTriangle = document.querySelector('.fr-line');
const lowerTriangle = document.querySelector('.sc-line');
const gameSection = document.querySelector('.game-section');
const placeHOlder = document.querySelectorAll('.h1');
const holeOne = document.querySelector('.hole-1');
const holeTwo = document.querySelector('.hole-2');
// DOM elements
const rps = ['pap', 'rck', 'scr']
// const rule = ['pap', 'rck', 'scr','pap']
const randomNomber = Math.ceil(Math.random() * 3)
console.log(rps[randomNomber - 1])
const player1 = rps[randomNomber - 1];
let player2,
    scorePoint = 0

rock.addEventListener('click', (e) => {
    player2 = rock.classList[0]
    evaluate()
})

paper.addEventListener('click', (e) => {
    player2 = paper.classList[0]
    evaluate()
})

scissors.addEventListener('click', (e) => {
    player2 = scissors.classList[0]
    evaluate()
})
function evaluate() {
    let contn 
    if (player1 === player2) {
        contn = false;
       
    } else {
        contn = true;
        console.log(player2,player1)
    }
    switch(contn){
        case false:
           window.location.reload();
            break;
        case true:
            let p1 = rps.indexOf(player2);
            let p2 = rps.indexOf(player1);
            console.log(p1,p2);
            let winner=  p1 > p2 ? "player1": "player2"
            console.log(winner)
            let img = [paper,rock,scissors]
            holeOne.appendChild(img[p1])
            console.log(img[p1])
            if (winner === 'player2'){
                scorePoint +=1;
                score.innerText = scorePoint;
            }
    }

}





// rules pop up
menu.addEventListener('click', () => {
    rules.style.display = 'flex';
    rules.style.transform = 'translateY(0)'
    wrap.addEventListener('click', () => {
        rules.style.display = 'none';
    });
});

close.addEventListener('click', () => {
    rules.style.display = 'none';
});
// rules pop up

// game-part
keys.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.display = 'none';
        canvas.style.background = 'transparent';
        upperTriangle.style.display = 'none';
        lowerTriangle.style.display = 'none';
        canvas.style.width = '27em';
        gameSection.style.display = "flex";
})})
// game-part

