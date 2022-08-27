let content = document.getElementById('5')
let topBlock = 40
let counter = 0
let state = 1
function test(b) {
    counter = counter + 1
    function count (arg) {
        if (arg === 1) return 5 + '%'
        if (arg === 2) return 35 + '%'
        if (arg === 3) return 70 + '%'
    }
    b.style.marginLeft = count(counter)
    b.style.marginTop = topBlock + 'px'

    if (counter >= 3) {
        counter = 0
        topBlock = topBlock + 100
    }
}

class Content {
    //The class that appends a new word
    firstBlock = document.createElement('span')
    secondBlock = document.createElement('span')
    thirdBlock = document.createElement('span')

    constructor(word, transcription, translate, ) {
        this.firstBlock.innerText=word
        this.secondBlock.innerText=transcription
        this.thirdBlock.innerText=translate
    }

    // The main method that create word's block
     createBlock() {
         let block = document.createElement('div')
         block.setAttribute('class', 'contentContainer')

         // ----- REWRITE! -----
         if (state === 1) {
             test(block)
         } else if (state === 3) {
             this.firstBlock.style.float = 'none'
             this.secondBlock.style.float = 'none'
             this.thirdBlock.style.float = 'none'
             block.style.marginTop = '40px'
             block.style.marginLeft = '40px'
         }
         // ----- REWRITE! -----

         block.appendChild(this.firstBlock)
         block.appendChild(this.secondBlock)
         block.appendChild(this.thirdBlock)

         content.appendChild(block)
         this.firstBlock.onclick = () => {
             this.rename(this.firstBlock)
         }
         this.secondBlock.onclick = () => {
             this.rename(this.secondBlock)
         }
         this.thirdBlock.onclick = () => {
             this.rename(this.thirdBlock)
         }
     }

     // The method that renames a field if a user was clicked it
    rename(object) {
        object.onclick = () => {
            let reg = new RegExp(object.innerText);
            let oldWord = object.innerText
            let rewriteInput = document.createElement('input')
            rewriteInput.setAttribute('type', 'text')
            rewriteInput.setAttribute('class', 'rewriteInput')
            object.appendChild(rewriteInput)
            rewriteInput.focus()
            rewriteInput.value = object.innerText
            rewriteInput.addEventListener('keydown', function (event) {
                if (event.code === 'Enter') {
                    object.innerText = rewriteInput.value
                    rewriteInput.remove()

                    // Updating the words' array
                    for (let i = 0; i<array.length; ++i) {
                        if (array[i].toString().indexOf(oldWord) !== -1) {
                            array[i] = array[i].toString().replace(reg, rewriteInput.value)
                        }
                    }

                } else if (event.code === 'Escape') {
                    rewriteInput.remove()
                }
            });
        }
    }
}