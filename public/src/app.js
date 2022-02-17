const header = document.querySelector(".header")
let counter = 0
function changecolor(){
    let colors = "green", blue
    header.getElementsByClassName.colors = colors[counter]
    counter = (counter + 1) % colors.length
}

setInterval(changecolor,1000)