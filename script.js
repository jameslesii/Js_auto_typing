const typedTextSpan = document.querySelector('.auto');


const typedArray = [" Lesoo", " James", " Technologies"];

const typingDelay = 100;
const ErasingDelay = 100;
const NewTextDelay = 2000;

let TextArrayIndex = 0;
let CharIndex = 0;

function type() {
    if(CharIndex < typedArray[TextArrayIndex].length){
        typedTextSpan.textContent += typedArray[TextArrayIndex].charAt(CharIndex)
        CharIndex++;
        setTimeout(type,typingDelay);
    }
    else{
        //erase current typedArray
        setTimeout(erase, NewTextDelay);
    }
}

function erase(){
    if(CharIndex > 0) {
        typedTextSpan.textContent = typedArray[TextArrayIndex].substring(0,CharIndex - 1)
        CharIndex--;
        setTimeout(erase, ErasingDelay);
    }
    else{
        TextArrayIndex++;
        if(TextArrayIndex>=typedArray.length) TextArrayIndex=0;
        setTimeout(type, typingDelay + 100);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(type, NewTextDelay + 300);
})


