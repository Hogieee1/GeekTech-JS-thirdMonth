
const box = document.querySelector(".box")
const btn = document.querySelector('#btn')

let posX = 0;
let posY = 0;
let chek = false
let chekUp = false


const move = () =>
{
    if (runing === true) {
        
        if (posX <= 300 && chek === false) {
            posX += 7;
            box.style.left = `${posX}px`;
            setTimeout(move, 30);
        } else if (posX >= 300 && posY <= 300) {
            posY += 7;
            box.style.top = `${posY}px`;
            setTimeout(move, 30);
        } else if (posX > 0 && posY >= 300) {
            chek = true
            posX -= 7;
            box.style.left = `${posX}px`;
            setTimeout(move, 30);
        } else if (chekUp === false && posY > 0) {
            if (posY === 7) chek = false
            posY -= 7;
            box.style.top = `${posY}px`;
            setTimeout(move, 30);
        }
    }
}

let runing = true;
btn.addEventListener('click', () => {
    runing = true;
    move();
})



// ==================================================

const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const title = document.querySelector('#title')


let count = 0


const cnt = document.createElement('span')

start.addEventListener('click', function ()  {

    
    title.append(cnt)

    let id = setInterval(() => {
            count++
            cnt.textContent = count

    }, 1000);


    stop.addEventListener('click', () => {
        clearInterval(id)
        
    })
})