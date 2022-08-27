let setting1 = document.getElementById('11')
let body = document.querySelector('body')
setting1.onclick = () => {
    if (setting1.checked) {
        body.style.backgroundColor = '#cbcbcb'
        content.style.color = '#000000'

    } else {
        body.style.backgroundColor = '#a97901';
        content.style.color = '#000000'
    }
}


let elem = document.getElementById('9')
elem.onclick = () => {
    document.location.href = "#shadow";
}

let state1 = document.getElementById('state1')
let state3 = document.getElementById('state3')
let arrayNodes = content.childNodes
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')
state1.onclick = () => {
    state = 1
    for (let i = arrayNodes.length-1; i>0; --i) {
        arrayNodes[i].remove()
    }
    topBlock = 40
    counter = 0
    readFile2(array.toString())

}

state3.onclick = () => {
    console.log(array)
    state = 3

    for (let i = arrayNodes.length-1; i>0; --i) {
        arrayNodes[i].remove()
    }
    topBlock = 40
    counter = 0
    readFile2(array.toString())
}
let font = 22
minus.onclick = () => {
    if (font < 16) return
    font = font - 2
    content.style.fontSize = font + 'px'
}
plus.onclick = () => {
    if (font > 26) return
    font = font + 2
    content.style.fontSize = font + 'px'
}







