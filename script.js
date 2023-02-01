const dict = {
    "obama" : [ "Born in Hawaii",
                "Left-Handed",
                "Written four books",
                "Went to Harvard Law School",
                "Honoured with the Nobel Peace Prize 2009",
                "44th President of US",
                "First African-American President"],
    "gandhi" : ["Father of India",
                "Dandi March",
                "42nd Round Table Conference",
                "Ahimsa",
                "Hai Ram",
                "Not related to Indira Gandhi",
                "Freedom Fighter"]
            }
const people = ["obama", "gandhi"]
const person = people[1]
var hints = []
for (var i = 0; i<dict[person].length;i++){
    hints[i] = dict[person][i]
}
const alertContainer = document.querySelector("[data-alert-container]")
document.getElementById("1").innerHTML = hints[0]
var counter = 1

startInteraction()

function startInteraction(){
    document.addEventListener("click", handleMouseClick);
}

function stopInteraction() {
    document.removeEventListener("click", handleMouseClick);
}

function handleMouseClick(e){
    if (e.target.matches("[data-enter]")){
        console.log("Submitted")
        submitGuess()
        return
    }
}

function submitGuess() {
    const guess = document.getElementById("guess").value
    console.log(guess)
    console.log(person)
    if (guess === person) {
        showAlert("You Win")
        return
    }
    else {
        if(counter >= 7){
            stopInteraction()
            showAlert(person)
        }
        counter = counter + 1
        const index = counter.toString()
        console.log(index)
        document.getElementById(index).innerHTML = addHint(index)
        startInteraction()
    }
}

function addHint(i) {
    const s = hints[i-1]
    return s
}

function showAlert(message, duration = 1000) {
    const alert = document.createElement("div")
    alert.textContent = message
    alert.classList.add("alert")
    alertContainer.prepend(alert)
    if(duration == null) return
    setTimeout(() => {
        alert.classList.add("hide")
        alert.addEventListener("transitionend", () => {
            alert.remove()
        })
    }, duration)
}