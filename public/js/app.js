//snow
let btnSnow = document.querySelector('body');
let Snow = document.querySelector('.snow-cavas');
btnSnow.addEventListener('click', function () {
    const newSnow = document.createElement("div");
    newSnow.className = "snow";
    const random = Math.floor((Math.random() * 100));
    newSnow.style.left = `${random}%`;
    Snow.append(newSnow);
})
//light
let btnLight = document.querySelector('body');
btnLight.addEventListener('click', function (e) {
    const newLight = document.createElement("div");
    newLight.className = "light";
    newLight.style.left = `${e.clientX}px`;
    newLight.style.top = `${e.clientY}px`;
    btnLight.append(newLight);
})
//check inf
function checkEmailAndName() {
    const name = document.querySelector('#Name').value;
    const email = document.querySelector('#Email').value;
    const reName = /^((\S)(\w{1,})\s?){2,}$/;
    const reEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    if(validateCheck(name,reName,'Name ERROR') && validateCheck(email,reEmail,'Email ERROR')){
        return true;
    }
    return false;
}

function validateCheck(name,regex,notice) {
    if (regex.test(name)) {
        return true
    }
    else {
        alert(notice);
        return false;
    }
}

// reveal 
window.addEventListener('scroll', reveal());
function reveal(){
    let reveals = document.querySelectorAll('.row-fac');
    for(let i = 0; i < reveals; i++){
        console.log(revealTop)
        let windowHeight = windowHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        if(revealTop < windowHeight -100){
        reveals[i].classList.add('.active');
        }
        else{
            reveals[i].classList.remove('.active');
        }
    }
}