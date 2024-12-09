const text = "This is dummy text";
let index = 0;
function autowritetext() {
    document.body.innerText = text.slice(0, index)
        index++;

        if(index>text.length-1) {
            index = 0;
        }
}

setInterval(autowritetext, 100);
