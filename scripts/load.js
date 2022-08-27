let load = document.getElementById('7')
load.addEventListener('click', loading)

function loading() {
    let loadInput = document.createElement('input')
    loadInput.setAttribute('type', 'file')
    loadInput.setAttribute('class', 'loadInput')
    loadInput.click()
    loadInput.onchange = () => {
        readFile(loadInput)
    }
}

 function readFile(input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function() {
        console.log(reader.result);
        let res = reader.result.split(',')
        for (let i = 0; i<res.length; ++i) {
            array[counter2] = res[i]
            counter2 = counter2 + 1
        }
        console.log(res)
        console.log(array.toString())

        for (let i = 0; i<res.length; ++i) {
            let str = res[i].split(' ')
            let obj = new Content(str[0], str[1], str[2]);
            obj.createBlock();
        }
    };
    reader.onerror = function() {
        console.log(reader.error);
    };
}

function readFile2() {
    let file = new Blob([array.toString()], {type: "text/plain"});
    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function() {
        let res = reader.result.split(',')
        for (let i = 0; i<res.length; ++i) {
            let str = res[i].split(' ')
            let obj = new Content(str[0], str[1], str[2]);
            obj.createBlock();
        }
    };

    reader.onerror = function() {
        console.log(reader.error);
    };
}