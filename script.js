const clickSound = new Audio('click.mp3');
const winSound = new Audio('win.mp3');
const matchSound = new Audio('match.mp3');
const emojis = ["😭","😭","😡","😡","😂","😂","😍","😍","🔥","🔥","😎","😎","🎃","🎃","⚽","⚽"]
let shufEmojis = emojis.sort(()=>(Math.random() > .5) ? 2 : -1);
for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shufEmojis[i];
    box.onclick = function(){
        clickSound.play();
        this.classList.add('boxOpen');
        setTimeout(function(){
            if(document.querySelectorAll('.boxOpen').length > 1){
                if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
                    matchSound.play();
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                    if (document.querySelectorAll('.boxMatch').length == emojis.length) {
                        winSound.play();
                        document.querySelector('.line').innerHTML = "You won!👑"
                    }
                } else{
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                }
            }
        },500)
    }
    document.querySelector('.game').appendChild(box);

}