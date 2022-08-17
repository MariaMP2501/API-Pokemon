//****************************************************************************************************/
//****************************************************************************************************/
//****************************************************************************************************/
//****************************************************************************************************/
//****************************************************************************************************/


//1  les types de variables:

let a; //"let" permeet dee déclarer une variable dans un "bloc" (fonction) mais la variable est utilisable uniquement dans la fonction.
var a; //"var" permet de déclarer une variable qui sera "golbal" utilisable dans toute les fonctions.
const a; //"const" est une instruction permet de déclarer une constante disponible uniquement en lecture.(ne sois pas etre modifier par la suite).




//2 les tableaux:
let a = ['Moi', "toi"]; // ici  a[1]="toi" on commence par 0.
let a = [
    ['Moi', "toi"],
    ['nous', "vous"]
]; //ici nous avons un tableau de tableau : a[1][1]="vous"




//3 Les objets:
let objet = { //ici nous déclarons l'objet "objet" avec plusieur propriété (lettre , numéro , langue) auquelles on assigne des valeurs
    lettre: 'a', //A la difference des tableaux pour retrouver les informations nous utilisons des "." exemple : objet.numero = '1'
    numero: '1',
    langue: 'français'
};




//4 Les fonctions:
function nomdefonction() {
    // ici votre fonction
}
// la fonction ne se lancee pas par magie 
// afin d'appeler cette fonction vous utiliser la methode suivante :

nomdefonction(); //il faut juste dire son nom ( dans votre fichier html avec par exemple un "onclick="nomdefonction();")





//5 operateur :
a++; // ici  : a = a + 1;
a--; // ici : a = a - 1;
a += a; // ici vous aller ajouter "a" à "a" (concat).
a > b; // "a" supperieur à "b"
a < b; // "a" inferieur à "b"
a >= b; // "a" supp ou egale à "b"
a <= b; // "a" inf ou egale à "b"
a == b; // verifie si "a" et "b" sont identique
a != b; // "a" different de "b"
// vous pouvez voir se terme : (!a) qui signifie que a n'est pas posé/n'existe pas/ou est null
//dans les chaines:
"bb" += "aa" = "bbaa";
//vous pouvez transformer un nombre en text comme suit:
a = 1;
'bbb' + a + 'aaa'; // se qui donne : 'bbb1aaa'




//6 Les commandes la plus utile :
console.log(); // vous permet de voir n'importe quelle variable ou élément dans la console sur votre navigateur
alert('aaa');

//****************************************************************************************************/
//****************************************************************************************************/
//****************************************************************************************************/
//****************************************************************************************************/
//****************************************************************************************************/
//                                                 CHEAT
//                                                 CHEAT
//                                                 CHEAT
//                                                 CHEAT


//7 Rappel HTML<--->JS
document.getElementById("ID") // permet de recupérer sur le document HTML un élément par son ID
document.querySelector("element") //ici permet de recupérer sur le document HTML un élément :
    // dans la parathèse si l'element est un 'ID'= #ID
    // dans la parathèse si l'element est une 'class'= .class
    .innerHTML // Permet l'ajout d'html dans l'endroit ciblé
    // imaginons une balise <h2>  avec une class="chocolat" dans laquel on voudrait mettre du texte ,on procède donc comme ça :
document.querySelector(".chocolat").innerHTML = "je mangue du chocolat";
innerHTML //entre dans les balises l'objet souhaité
//en imaginant que vous voulez entrer dans la value de cette objet ,on procède donc comme ça :
document.querySelector(".chocolat").value = "je mange du chocolat"; //dans un <h2> le texte visible n'est pas la "value"
// alors que dna sune textebox si!

const evenement = document.querySelector("element");

evenement.addEventListener("click", (e) => {
    console.log(e);
})

window.addEventListener("mousemove", (e) => {
    console.log(e);
})

document.addEventListener("keypress", (e) => {
    console.log(e.key);
})


//8 cheat api:

fetch("Lien de votre")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    //le resultat est un objet donc on se deéplace dedans comme un objet (objet.langue.c)