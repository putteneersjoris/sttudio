




//make the menu expand when scrolling fown or up

let scrollDistance = 50

const fadeOutElement = document.getElementById("menubarExpandMenuText");
let isAnimating = false;

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll >= scrollDistance  && !isAnimating) {
        fadeOutElement.style.animation = 'fadeOutColor 1s forwards';
        isAnimating = true;
    } else if (currentScroll < scrollDistance  && isAnimating) {
        fadeOutElement.style.animation = 'fadeInColor 1s forwards';
        isAnimating = false;
    }
});











// get the right id
let ontwerp  = document.getElementById("ontwerp")
let onderzoek  = document.getElementById("onderzoek")
let omgeving  = document.getElementById("omgeving")

let revealTitleOntwerp = document.getElementById('revealTitleOntwerp')
let revealTitleOnderzoek = document.getElementById('revealTitleOnderzoek')
let revealTitleOmgeving = document.getElementById('revealTitleOmgeving')

ontwerp.addEventListener('click', displayOntwerpContent)
onderzoek.addEventListener('click', displayOnderzoekContent)
omgeving.addEventListener('click', displayOmgevingContent)


let onwerpContent = document.getElementById('ontwerpContent')
let onderzoekContent = document.getElementById('onderzoekContent')
let omgevingContent = document.getElementById('omgevingContent')

countOntwerp = 0
countOnderzoek = 0
countOmgeving = 0


function checkIfNone (){


    if (ontwerpContent.style.display === "none" && omgevingContent.style.display === "none" && onderzoekContent.style.display === "none") {
        console.log("The style is set to 'none'.");
        ontwerpContent.style.display = 'block'
        document.getElementById('ontwerpClick').id = 'revealTitleOntwerp'      
        
        
    } else {
        document.getElementById('revealTitleOntwerp').style.position = "relative"  
        console.log("The style is not set to 'none'.");
        // ontwerpContent.style.display = 'none'
        // countOntwerp++
        
      }
}


function displayOntwerpContent(){
    // let bar = document.getElementById('revealTitleOntwerp')
    
    countOntwerp++
    if(countOntwerp % 2 != 1){
        ontwerpContent.style.display = 'none'
        document.getElementById('ontwerpClick').id = 'revealTitleOntwerp'
    }
    else {
        
        document.getElementById('revealTitleOntwerp').id = 'ontwerpClick'
        ontwerpContent.style.display = 'block'
        onderzoekContent.style.display = 'none'
        countOnderzoek = 0
        omgevingContent.style.display = 'none'
        countOmgeving = 0
        if(document.getElementById('onderzoekClick')){
            document.getElementById('onderzoekClick').id = 'revealTitleOnderzoek'
        }
        if(document.getElementById('omgevingClick')){
            document.getElementById('omgevingClick').id = 'revealTitleOmgeving'
        }
    }
    // checkIfNone ()
}


function displayOnderzoekContent(){
    
    
    countOnderzoek++
    if(countOnderzoek % 2 != 1){
        onderzoekContent.style.display = 'none'
        document.getElementById('onderzoekClick').id = 'revealTitleOnderzoek'

        // -----
        
    }
    else {
        document.getElementById('revealTitleOnderzoek').id = 'onderzoekClick'
        onderzoekContent.style.display = 'block'
        omgevingContent.style.display = 'none'
        countOmgeving = 0
        ontwerpContent.style.display = 'none'
        countOntwerp = 0
        if(document.getElementById('ontwerpClick')){
            document.getElementById('ontwerpClick').id = 'revealTitleOntwerp'
        }
        if(document.getElementById('omgevingClick')){
            document.getElementById('omgevingClick').id = 'revealTitleOmgeving'
        }
        // document.getElementById('omgevingClick').id = 'revealTitleOmgeving'
        
    }
    // checkIfNone ()
}
function displayOmgevingContent(){
    
    countOmgeving++
    if(countOmgeving % 2 != 1){
        omgevingContent.style.display = 'none'   
        document.getElementById('omgevingClick').id = 'revealTitleOmgeving'
    }
    else {
        document.getElementById('revealTitleOmgeving').id = 'omgevingClick'
        omgevingContent.style.display = 'block'
        onderzoekContent.style.display = 'none'
        countOnderzoek = 0
        ontwerpContent.style.display = 'none'
        countOntwerp = 0
        if(document.getElementById('onderzoekClick')){
            document.getElementById('onderzoekClick').id = 'revealTitleOnderzoek'
        }
        if(document.getElementById('ontwerpClick')){
            document.getElementById('ontwerpClick').id = 'revealTitleOntwerp'
        }
    }
    // checkIfNone ()
}





let idFoo = ['ontwerpContent']
let idCounter = ['countOntwerp']
let pickid = 0

function setRandomId() {
    document.getElementById(idFoo[pickid]).style.display = 'block'
        if(idCounter[pickid] == 'countOntwerp' ){
            countOntwerp ++
            document.getElementById('revealTitleOntwerp').id = 'ontwerpClick'
        }
        if(idCounter[pickid] == 'countOnderzoek' ){
            countOnderzoek ++ 
            document.getElementById('revealTitleOnderzoek').id = 'onderzoekClick'
        }
        if(idCounter[pickid] == 'countOmgeving' ){
            countOmgeving ++
            document.getElementById('revealTitleOmgeving').id = 'omgevingClick'
        }
    }
    
window.onload = setRandomId;






// startupscreen

// set logo bottom right
let startupLogo = document.getElementById('contentLogo')
// startupLogo.style.color = 'white'

const startupScreenContainer =  document.createElement('div');
startupScreenContainer.setAttribute("id", "startupScreenContainer");



const testing = document.body.appendChild(startupScreenContainer)

// const startupScreenContainer = document.getElementById("startupScreenContainer")

const startupscreen = document.getElementById("startupscreen")
// startupscreen.innerHTML = 'sttudiascxZXdasdaszxdo'
// startupscreen.style.color = "red"

startupScreenContainer.id = "startupScreenContainer"

const startupScreen = document.createElement('div')
startupScreen.id = "startupScreen"

const startupScreenChildA = document.createElement('img')
startupScreenChildA.className = "startupScreenChild"
startupScreenChildA.src = "1b.png"
const startupScreenChildB = document.createElement('img')
startupScreenChildB.className = "startupScreenChild"
startupScreenChildB.src = "1b.png"
const startupScreenChildC = document.createElement('img')
startupScreenChildC.className = "startupScreenChild"
startupScreenChildC.src = "1b.png"
const startupScreenChildD = document.createElement('img')
startupScreenChildD.className = "startupScreenChild"
startupScreenChildD.src = "1b.png"
startupScreenChildD.style.transform = "rotate(45deg)"


startupScreenContainer.appendChild(startupScreen);

startupScreen.appendChild(startupScreenChildA)
startupScreen.appendChild(startupScreenChildB)
startupScreen.appendChild(startupScreenChildC)
startupScreen.appendChild(startupScreenChildD)

const intervalThatImagesChange = 20
const timeAnimatinFinished = 3300//5000


function randomTransformByTime(counter, randomTime, child, randomAngle, endPos, intervalThatImagesChange, timeAnimatinFinished, delay){
    if (counter % randomTime ==0){ 
        child.style.transform = `rotate(${randomAngle*45}deg)`
    }
    if (counter >= (timeAnimatinFinished/intervalThatImagesChange)-delay){ 
        child.style.transform = `rotate(${endPos*45 }deg)`
    }
}

// set body animation on startup
// const bodyTag = document.querySelectorAll("body")
document.body.style.animation = 'scrolling 12s'


console.log('body seelcterd');

let counter =0
var setImageRotation = setInterval(() => {
    counter ++
    // console.log(counter);
    
    randomTransformByTime(counter,Math.round(Math.random()*200), startupScreenChildA, Math.round(Math.random()*10), 0,intervalThatImagesChange, timeAnimatinFinished, 75 )
    randomTransformByTime(counter,Math.round(Math.random()*300), startupScreenChildB, Math.round(Math.random()*11), 1,intervalThatImagesChange, timeAnimatinFinished, 80 )
    randomTransformByTime(counter,Math.round(Math.random()*400), startupScreenChildC, Math.round(Math.random()*12), 2, intervalThatImagesChange, timeAnimatinFinished, 100 )
    randomTransformByTime(counter,Math.round(Math.random()*500), startupScreenChildD, Math.round(Math.random()*13), 3,intervalThatImagesChange, timeAnimatinFinished, 80
    )
    
    
    
}, intervalThatImagesChange);

setTimeout(() => {
    startupScreenContainer.style.display = "none"
    startupscreen.style.color = "black"
    startupScreenContainer.remove()
    console.log("div is removeed");
    clearInterval(setImageRotation)

    // let startupLogo = document.getElementById('contentLogo')
// startupLogo.style.color = 'black'
    
}, timeAnimatinFinished);

