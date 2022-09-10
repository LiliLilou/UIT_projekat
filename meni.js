const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener ('click', () => container.classList.add ('show-nav'))
close.addEventListener ('click', () => container.classList.remove ('show-nav'))

const panels = document.querySelectorAll('.panel')

panels.forEach ((panel) => {
    panel.addEventListener('click', () => {
    removeActiveClasses ()
        panel.classList.add('active')
    })
})

function removeActiveClasses () {
    panels.forEach ( panel => {
        panel.classList.remove ('active')
    })
}

function posalji() {
    let uzorak_ime = document.querySelector("#ime").value;
    let uzorak_prezime = document.querySelector("#prezime").value;
    let uzorak_email = document.querySelector("#email").value;
    let uzorak_lozinka = document.querySelector("#lozinka").value;
    let uzorak_potvrda = document.querySelector("#potvrdalozinke").value;
    if (uzorak_ime === "" || uzorak_ime === null) {
        document.getElementById('ime').style.border = "4px solid red";
        alert("Niste uneli korisničko ime!");
        return false;
    }
    else if (uzorak_prezime === "" || uzorak_prezime === null) {
        document.getElementById('prezime').style.border = "4px solid red";
        alert("Niste uneli prezime!");
        return false;
    }
    else if (uzorak_email === "" || uzorak_email === null) {
        document.getElementById('email').style.border = "4px solid red";
        alert("Niste uneli email!");
        return false;
    }
    else if (uzorak_lozinka === "" || uzorak_lozinka === null) {
        document.getElementById('lozinka').style.border = "4px solid red";
        alert("Niste uneli lozinku!");
        return false;
    }
    else if (uzorak_potvrda === "" || uzorak_potvrda === null) {
        document.getElementById('potvrda').style.border = "4px solid red";
        alert("Niste potvrdili lozinku!");
        return false;
    }
    else if (uzorak_lozinka != uzorak_potvrda) {
        alert("Lozinka nije ispravna!")
        return false;
    }
    else {
        alert("Uspešno ste poslali podatke!")
        return true;
    }
}




const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

console.log(img)

let idx = 0

let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})

