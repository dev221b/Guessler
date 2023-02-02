const dict = {
    "obama" : [ "Born in Hawaii",
                "Left-Handed",
                "Written four books",
                "Went to Harvard Law School",
                "Honoured with the Nobel Peace Prize 2009",
                "44th President of US",
                "First African-American President",
                "obama.jpeg"
            ],
    "gandhi" : ["Father of India",
                "Dandi March",
                "42nd Round Table Conference",
                "Ahimsa",
                "Hai Ram",
                "Not related to Indira Gandhi",
                "Freedom Fighter",
                "gandhi.jpeg"            
            ]
            }
const people = ["obama", "gandhi"]
const person = people[1]
var hints = []
for (var i = 0; i<dict[person].length;i++){
    hints[i] = dict[person][i]
}
const alertContainer = document.querySelector("[data-alert-container]")
var counter = 1
// const firstHint = document.getElementById("1")
// danceHint(firstHint)
// firstHint.innerHTML = hints[0]
window.onload = () => {
    setTimeout(() => {
        const firstHint = document.getElementById("1")
        danceHint(firstHint)
        firstHint.innerHTML = hints[0]
    }, 2000); 
    // ( () => {
    //     const firstHint = document.getElementById("1")
    //     danceHint(firstHint)
    //     setTimeout( () => {
    //         firstHint.innerHTML = hints[0]
    //     }, 500)
    // }, 500)
}

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
    if (guess.localeCompare(person) == 0) {
        document.getElementById("pic").src = hints[7]
        showAlert("You Win")
        stopInteraction()
        return
    }
    else {
        
        if(counter >= 7){
            stopInteraction()
            document.getElementById("pic").src = hints[7]
            showAlert(person)
        }
        counter = counter + 1
        const index = counter.toString()
        console.log(index)
        const hinter = document.getElementById(index)
        hinter.innerHTML  = addHint(index)
        hinter.innerHTML.animation = 
        danceHint(hinter)
        startInteraction()
    }
}

function addHint(i) {
    const s = hints[i-1]
    return s
}

function showAlert(message, duration = 5000) {
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

function danceHint(box) {
    // console.log("Dance")
    //     setTimeout(() => {
    //         // box.style.animation = "dance 1s 1"
    //         box.classList.add("dance")
    //         box.addEventListener("animationend", () => {
    //         box.classList.remove("dance")
    //         }, {once: true})
            
    //     }, 200 )

    
        setTimeout(() => {
            console.log("Dance")
            box.classList.add("dance")
            box.addEventListener("animationend", () => {
            box.classList.remove("dance")
        }, {once: true})
        }, 100 )
    }