let speed = document.querySelector('.speed span')
let up = document.querySelector('#up')
let dawn = document.querySelector('#dawn')

up.onclick = () => {
    s = +speed.innerHTML
    s = s + 20
    speed.innerHTML = s
    dawn.onclick = () => {
        s = +speed.innerHTML
        s = s - 20
        speed.innerHTML = s
    }
}