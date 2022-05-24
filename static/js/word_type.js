var inter = window.setInterval(rotateWord, 100);

var toggle = true;

function rotateWord() {
    let curr_val = document.getElementById("rotating-words").innerHTML;
    // growing the word, char by char
    if (curr_val.slice(0,-1) === welcome.slice(0, -1)) {
        // time to start flickering blinking cursor
        document.getElementById("rotating-words").innerHTML = welcome;

        clearInterval(inter);
        window.setInterval(blinkCursor, 500);
    } else {
        document.getElementById("rotating-words").innerHTML = 
            curr_val.slice(0,-1) + welcome[curr_val.length - 1] + curr_val.slice(-1);
    }
}

function blinkCursor() {
    if (toggle) {
        document.getElementById("blinking-cursor").style.visibility = "visible";
    } else {
        document.getElementById("blinking-cursor").style.visibility = "hidden";
    }
    toggle = !toggle;
}