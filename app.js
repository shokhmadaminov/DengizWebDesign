let dayNight = document.querySelector('.dayNight')
let menuToggle = document.querySelector('.menuToggle')
let body = document.querySelector('body')
let navigation = document.querySelector('.navigation')




dayNight.onclick = function(){
    body.classList.toggle('dark')
    dayNight.classList.toggle('active')
    if(body.classList == 'dark'){
        body.style.background = "black"
    }else if(body.classList !== 'dark'){
        body.style.background = "white"
    }
}

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}
