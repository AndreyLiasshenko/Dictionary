let array = []
let counter2 = 0
let mainInput = document.getElementById('1')
let elements = 0
mainInput.onclick = () => {mainInput.value=''}
mainInput.addEventListener('keydown', function(event) {
    if (event.code === 'Enter') {

        if (mainInput.value === '') {
            return
        }

        let str = mainInput.value.split(' ')
        array[counter2] = str[0] + " --- " + str[1]
        counter2 = counter2 + 1
        let obj = new Content(str[0], '---', str[1]);
        if (elements < 18) {
            obj.createBlock();
        }
        elements++;
    }
})

let save = document.getElementById('6')
save.onclick = () => {saveToPC(array.toString())}

function saveToPC(str = ""){
    let blob = new Blob([str], {type: "text/plain"});
    let link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", `file`);
    link.click();
}