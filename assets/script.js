
// CE N'EST PAS LE BON EXO, VOIR APRES.

// const buttonAjoute = document.getElementById("buttonAjoute").addEventListener("click", addElement);
// const nouvelleDiv = document.querySelector(".nouvelleDiv");
// console.log(nouvelleDiv);
// // let text = "";
// // console.log(textInput);
// // const buttonEfface = document.getElementsByClassName("buttonEfface");
// function addElement (){

//     const textInput = document.querySelector("input").value;
//     const p1 = document.createElement("p");
//     const p2 = document.createElement("p");
//     nouvelleDiv.appendChild(p1);
//     p1.textContent = textInput;     // ou .innerText
//     p2.textContent = "lorem ipsus.....";
//     nouvelleDiv.classList.add("para");
    //.toggle pour le darkmode
// console.log(p1);
// console.log(p2);
// } 



// EXO CITATIONS.

// let citationEnsemble = [

//     "La plus grande gloire de la vie ne réside pas dans la chute, mais dans le fait de se relever chaque fois que l'on tombe. - Mandela",
//     "La façon de commencer est d'arrêter de parler et de commencer à faire. - Disney",
//     "Votre temps est limité, alors ne le gaspillez pas en vivant les échecs de la vie de quelqu'un d'autre. Ne vous laissez pas piéger par le dogme - qui consiste à vivre avec les résultats de la pensée des autres - Disney",
//     "Si la vie était prévisible, elle cesserait d'être la vie, et serait sans saveur. - Steve Jobs",
//     "Si vous regardez ce que vous avez dans la vie, vous aurez toujours plus. Si vous regardez ce que vous n'avez pas dans la vie, vous n'en aurez jamais assez. - Winfrey",
//     "Si vous fixez vos objectifs à un niveau ridiculement élevé et que vous échouez, vous échouerez par-dessus le succès de tous les autres. - Cameron",
//     "La vie est ce qui se passe quand on est occupé à faire d'autres plans. - John Lennon",
//     "Répandez l'amour partout où vous allez. Que personne ne vienne jamais à vous sans en sortir plus heureux. - Mére Terese",
//     "Dis-moi et j'oublie. Enseignez-moi et je me souviens. Faites-moi participer et j'apprends. - Benjamin Frenklin",

// ]; 

// const button = document.querySelector("#button");
// button.addEventListener("click", function Generateur(){

//         //per far si che all'inizio il paragrafo sia vuoto e che a ogni riavviamento si rilanci da zero;

//        let allPar = document.querySelectorAll("p");
//         allPar.forEach((par) => {

//                  par.innerText = "";
//         });

//     const input = document.querySelector("#inputNombreCit").value;
//     for(let i = 0; i < input ; i++){

//         newPar = document.createElement("p");
//         newPar.innerText = citationEnsemble[Math.floor(Math.random()*citationEnsemble.length)];
//         document.body.appendChild(newPar)
    
//     }
// } );


// EXO CITATIONS AVEC 3 MORCEAUX DE PHRASES (bonus)


let citationEnsemble = [[" on peut", " tu peux", " les gens doivent"],[" vivre ensemble"," jouer"," marquer"],[" l'histoire"," toujours"," dans la planette"]]; 
const button = document.querySelector("#button");
button.addEventListener("click", function Generateur(){

        //pour que à chaque click on repart à zero avec un paragraph vide.
        let allPar = document.querySelectorAll("p");
        allPar.forEach((par) => {
             par.innerText = "";
        });

    const input = document.querySelector("#inputNombreCit").value;
    if(Number(input)){
        for(let i = 0; i < input ; i++){
            
                newPar = document.createElement("p");
                newPar.setAttribute("class", "newPar");
                newPar.innerText = citationEnsemble[0][ Math.floor(Math.random()*citationEnsemble.length)] + citationEnsemble[1][ Math.floor(Math.random()*citationEnsemble.length)]  + citationEnsemble[2][ Math.floor(Math.random()*citationEnsemble.length)] ;
                document.body.appendChild(newPar); 
        }
        }else{
            alert("Vous n'avez pas inserer un nombre");
    }
} );



// BONUS EXO AVEC JSON

// let citationEnsemble = [[" on peut", " tu peux", " les gens doivent"],[" vivre ensemble"," jouer"," marquer"],[" l'histoire"," toujours"," dans la planette"]];

// let citationEnsemble // je peux l'enlever car on le definie apres. 
// comment importer le json avec fetch method.
// fetch("./assets/json.json")
// .then(response => response.json())
// .then(data => citationEnsemble = data);
// const button = document.querySelector("#button");
// button.addEventListener("click", function Generateur(){

//         //per far si che all'inizio il paragrafo sia vuoto e che a ogni riavviamento si rilanci da zero;

//        let allPar = document.querySelectorAll("p");
//         allPar.forEach((par) => {

//                  par.innerText = "";
//         });

//     const input = document.querySelector("#inputNombreCit").value;
//     for(let i = 0; i < input ; i++){
        
//         newPar = document.createElement("p");
//         newPar.innerText = citationEnsemble[0][ Math.floor(Math.random()*citationEnsemble.length)] + citationEnsemble[1][ Math.floor(Math.random()*citationEnsemble.length)]  + citationEnsemble[2][ Math.floor(Math.random()*citationEnsemble.length)] ;
//         document.body.appendChild(newPar); 
        
//     }
// } );

















// PERMETTRE DE GENERER UNE CITATION AVEC UNE MISE EN PAGE HTML ALEATOIRE (police, couleur, couleur de fond, image de fond etc.) 
// PERMETTRE L'EXPORT DE LA MISE EN PAGE EN IMAGE .JPG












    








