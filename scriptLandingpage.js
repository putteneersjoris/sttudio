// click on the buttons and console.log("id");

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
}




// let idFoo = ['ontwerpContent','onderzoekContent','omgevingContent']
// let idCounter = ['countOntwerp', 'countOnderzoek', 'countOmgeving']
// let pickid = Math.round(Math.floor(Math.random()*3))

// function setRandomId() {
//     document.getElementById(idFoo[pickid]).style.display = 'block'
//         if(idCounter[pickid] == 'countOntwerp' ){
//             countOntwerp ++
//             document.getElementById('revealTitleOntwerp').id = 'ontwerpClick'
//         }
//         if(idCounter[pickid] == 'countOnderzoek' ){
//             countOnderzoek ++ 
//             document.getElementById('revealTitleOnderzoek').id = 'onderzoekClick'
//         }
//         if(idCounter[pickid] == 'countOmgeving' ){
//             countOmgeving ++
//             document.getElementById('revealTitleOmgeving').id = 'omgevingClick'
//         }
//     }
    
// window.onload = setRandomId;

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