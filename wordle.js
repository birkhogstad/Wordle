row = 0
col = 0
word = ""
locked = false

//Testing with "ROBOT" as solution, to be randomized:
solution = ""
generateWord()


//TODO
function generateWord() {
    //random
    solution = "ROBOT"
}


//Helping method for check
function occurance(word, l) {
    let c = 0;
    for (let i = 0; i < word.length; i++) {

        if (word.charAt(i) == l) {
            c += 1;
        }
    }
    return c;
}


function check() {
    if (col != 5) {
        return
    }
    solved = true
    for (let i = 0; i < word.length; i++) {
        //Checking letter at index 'i' in word
        current = word.charAt(i)
        //Getting key from keyboard on website
        key = document.getElementById(current.toLowerCase())
        
        //If cur letter not in solution
        if (!solution.includes(current)) {

            if (!key.classList.contains("wrong")) {
                key.classList.add("wrong")
                key.style.backgroundColor = "lightgrey"
                solved = false
            }
            continue
        }
        //Else, getting current box
        box = document.getElementById((row * 5) + i)

        //If cur in correct pos:
        if (solution.charAt(i) == current) {
            key.classList.add("good")
            key.style.backgroundColor = "lightgreen"
            box.style.backgroundColor = "lightgreen"
            continue
        }

        solved = false
        //If only 1 occurance or theres more cur letter in solution than given word, it's yellow
        if (occurance(word, current) == 1 || occurance(word, current) <= occurance(solution, current)) {
            box.style.backgroundColor = "lightyellow"
            if (!key.classList.contains("good")) {
                key.classList.add("ok")
                key.style.backgroundColor = "lightyellow"
            }
            continue
        }

        
        //If not, it can be partly correct based on other placements
        green = 0
        for (let j = 0; j < word.length; j++) {
            if (word.charAt(j) == current && word.charAt(j) == solution.charAt(j)) {
                green++
            }
        }
        console.log("row: " + row + "   i: " + i)
        console.log(current + "| green: " + green + " | prev occ: " + occurance(word.substring(0, word.length), current))
        if (green + occurance(word.substring(0, i), current) < occurance(solution, current)) {
            box.style.backgroundColor = "lightyellow"
            continue
        }
        

        
    }
    if (solved) {
        locked = true
        document.getElementById("result").innerHTML = "Good job! You found the solution in " + (row + 1) + " attempts!"
    }
    if (row == 5) {
        document.getElementById("result").innerHTML = "Unlucky! The solution was: " + solution
    } else {        
        row++
        col = 0
        word = ""
    }
}


function fill(letter) {
    if (col < 5) {
        if (!document.getElementById(letter.toLowerCase()).classList.contains("wrong")) {
            console.log("letter is not wrong")
            current = document.getElementById((row * 5) + col)
            current.innerHTML = letter.toUpperCase()
            col++
            word += letter
        } else {
            console.log("letter '" + letter + "' is unavailiable")
        }
    } else {
        console.log("Row filled: " + col)
    }
}


function remove() {
    if (col > 0) {
        col--
        current = document.getElementById((row * 5) + col)
        current.innerHTML = ""

        word = word.substring(0, col)
    }
}


document.onkeydown = function () {
    if (!locked) {
        switch (window.event.keyCode) {

            case 8:
                remove();
                break
            case 13:
                check();
                break

            case 65:
                fill("A");
                break
            case 66:
                fill("B");
                break
            case 67:
                fill("C");
                break
            case 68:
                fill("D");
                break
            case 69:
                fill("E");
                break
            case 70:
                fill("F");
                break
            case 71:
                fill("G");
                break
            case 72:
                fill("H");
                break
            case 73:
                fill("I");
                break
            case 74:
                fill("J");
                break
            case 75:
                fill("K");
                break
            case 76:
                fill("L");
                break
            case 77:
                fill("M");
                break
            case 78:
                fill("N");
                break
            case 79:
                fill("O");
                break
            case 80:
                fill("P");
                break
            case 81:
                fill("Q");
                break
            case 82:
                fill("R");
                break
            case 83:
                fill("S");
                break
            case 84:
                fill("T");
                break
            case 85:
                fill("U");
                break
            case 86:
                fill("V");
                break
            case 87:
                fill("W");
                break
            case 88:
                fill("X");
                break
            case 89:
                fill("Y");
                break
            case 90:
                fill("Z");
                break
        }
    }
}