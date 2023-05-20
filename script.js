let speed = document.querySelector('.speed span')
let up = document.querySelector('#up')
let dawn = document.querySelector('#dawn')
let items = document.querySelectorAll('.item')
let dates = ['km', 'temp', 'disk']
let vid = document.querySelector('#vid')
let contImg = document.querySelector('.container img')
let two = document.querySelector('#two')
let two_vid = two.querySelector('#vid')
let borders = two.querySelectorAll('.border')
let one = document.querySelector('#one')

let colors = ['black', 'gold', 'silver']
let car_color = {
    "black": "./images/salon1.svg",
    "white": "./images/salon2.svg",
    "gray": "./images/salon3.svg",
}

vid.onclick = () => {
    contImg.src = './images/salon1.svg'
    oneclisks()

    borders.forEach(border => {
        border.onclick = () => {
            let key = border.getAttribute('data-color')
            contImg.src = car_color[key]
        }
        twocliks()
    })
}

function oneclisks() {
    one.style.display = 'none'
    two.style.display = 'flex'
}

function twocliks() {
    two_vid.onclick = () => {
        two.style.display = 'none'
        one.style.display = 'flex'
    }
}

let obsh = 60
let temperatura = 20

items.forEach(item => {
    let data = item.querySelector('.i h1 b')
    let img = item.querySelectorAll('img')
    img[0].onclick = () => {
        console.log(data);
        if (dates[0] = data.innerText) {
            obsh = +data.innerText + 20
            data.innerHTML = obsh
        } else if (dates[1] = data.innerText) {
            console.log(dates[1], data.innerText);
        }
    }
    img[1].onclick = () => {
        obsh = obsh - 20
        err()
        data.innerHTML = obsh
    }
})

function err() {
    if (obsh <= 0) {
        obsh = 0
        alert('Остановитесь!')
    }
}
