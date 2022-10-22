const wripper = document.querySelector('.wripper')
// console.log(wripper);

const writersNew  = [
    {name : "Stan", surname: "Lee", birthdate: 1922},
    {name : "Ernest", surname: "Hemingway", birthdate: 1899},
    {name : "David", surname: "Chisinau", birthdate: 1899},
    {name : "Mark", surname: "Twain", birthdate: 1904}
  ];

// daca avem un array folosim ciclul for sau foreach
//  care afiseaza elemente

// for (let i = 0; i < writersNew.length; i++) {
//     const objectData = writersNew[i];
//     // console.log(element.name);

//     // daca avem obiecte folosim for in
//     for (const key in objectData) {
//         // primim acces la key
//         let result = `
//         <div class='user'>
//         <p>${key}</p>
//         <p>${objectData[key]}</p>
//         </div>
//         `
//         wripper.innerHTML += result
//     }
// }
function xxx(){
    for (let i = 0; i < writersNew.length; i++) {
        const objectData = writersNew[i];
        // console.log(element.name);
    
        // daca avem obiecte folosim for in
        for (const key in objectData) {
            // primim acces la key
            let result = `
            <div class='user'>
            <p>${key}</p>
            <p>${objectData[key]}</p>
            </div>
            `
            wripper.innerHTML += result
        }
    }
}
// ============== FOR IN =======================

let user = {
    name : "Mark",
     surname: "Twain",
      birthdate: 1904
}

// daca avem obiecte folosim for in

// avem acces la key

for (const key in user) {
 console.log(key);
 console.log(user);
}


//=============== FUNCTION ===================

// daca un sript ( un cod ) sa folosim la mai multe functii
// sau evenimente se face in felul urmatort
// creem o functie si punem ciclul in interiorul
// functiei
//Dupa aia chemam functiia unde noi avem nevoie
// ex in eveniment in alata functie
// let but = document.querySelector('.but')

// but.addEventListener('click', clickBut)
// // am adugat un eveniment
// function clickBut() {
//     console.log(100);
//     xxx()
// }


//========= optimizam ========

let buttons = document.querySelectorAll('.btn > button')
buttons.forEach((button, buttonID) => {
    if (buttonID == 0) {
        button.addEventListener('click', () =>{
            
            xxx() // am chemat functia cu ciclul for 
        })
    }else{
        button.addEventListener('click', ()=>{
            console.log(1111)
        })
    }
})


//==================Legatura dintro functie si un array====

//================= Concatinat doua array=============

let num = [10, 20, 30, 150, 333, 5]
let numSecond = [210, 120, 130, 150, 333, 5]

// chemam un array intro functie

// scrim num array in param functiei
function arrayFunc(num, numSecond){
    let summArray = []
    summArray = summArray.concat(num) // concatinam array
    summArray = summArray.concat(numSecond)
    // return num
    summArray.forEach(number => {
        console.log(number);
    })
}
arrayFunc(num, numSecond)  // chemam functia cu numele array din parametru

// functia primeste datele >>> se duce in param
// console.log(arrayFunc(num)) 