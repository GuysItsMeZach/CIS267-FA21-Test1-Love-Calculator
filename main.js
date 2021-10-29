
// Input
// Name1, Name2, , Club2

// Output
// NameCompatibility (from API) and ClubCompatibility (from matrix)
// witty description 
var name1 = "";
var name2 = "";
var c1 = "none";
var c2 = "none";

const clubSelect1 = document.getElementById("clubSelect1");
const clubSelect2 = document.getElementById("clubSelect2");

clubSelect1.addEventListener("change", () => {
    c1 = clubSelect1.value.toString();
});

clubSelect2.addEventListener("change", () => {
    c2 = clubSelect2.value.toString();
});




var person1name = document.getElementById('floatingInputGrid1');
var person2name = document.getElementById('floatingInputGrid2');
person1name.addEventListener("change", ()=>{
    name1 = person1name.value;
});

person2name.addEventListener("change", ()=>{
    name2 = person2name.value;
});


 
// const value = document.querySelect("#cvalue")



const descriptionDictionary = [
    {start:0, end: 10, description: "not a chance, fool."},
    {start:11, end: 45, description: "prolly not"},
    {start:46, end: 85, description: "bet"},
    {start:86, end: 100, description: "things look good"},
];

function getDescription( score) {
    if( score >= 10){
        description = "not a chance, fool."
    }

}

const clubCompatibilityDictionary = {
    ep: { ep: 89, xbx: 7, on: 0, pka: 35, xcd: 46, athlete: 80, chorale: 21, none: 17},
    xbx: { ep: 7, xbx: 94, on: 68, pka: 57, xcd: 68, athlete: 9, chorale: 92, none: 29},
    on: { ep: 0, xbx: 68, on: 99, pka: 10, xcd: 3, athlete: 2, chorale: 98, none: 93},
    pka: { ep: 35, xbx: 57, on: 10, pka: 98, xcd: 89, athlete: 99, chorale: 52, none: 27},
    xcd: { ep: 46, xbx: 68, on: 3, pka: 89, xcd: 98, athlete: 67, chorale: 52, none: 7},
    athlete: { ep: 80, xbx: 9, on: 2, pka: 99, xcd: 67, athlete: 84, chorale: 2, none: 9},
    chorale: { ep: 21, xbx: 92, on: 98, pka: 52, xcd: 52, athlete: 2, chorale: 99, none: 28},
    none: { ep: 17, xbx: 29, on: 93, pka: 27, xcd: 7, athlete: 9, chorale: 28, none: 13}
    

}; 

let xbxWithPKA = clubCompatibilityDictionary.xbx.pka;

const XBX = 0;
const PKA = 1;
const ON = 2;

const clubCompatibilityMatrix = [
    [ 99, 87, 32],
    [ 99, 87, 32],
    [ 99, 87, 32]
]; 

let xbxWithPKA2 = clubCompatibilityMatrix[XBX][PKA];



var cvalue = 10;
function updateClubs(c1, c2){
    
    //same club
    if (c1 == "ep" && c2 == "ep"){
        cvalue = 89;
    }
     if (c1 == "xbx" && c2 == "xbx"){
        cvalue = 94;
    }
     if (c1 == "on" && c2 == "on"){
        cvalue = 99
    }
     if (c1 == "pka" && c2 == "pka"){
        cvalue = 98;
    }
     if (c1 == "xcd" && c2 == "xcd"){
        cvalue = 98;
    }
     if (c1 == "athlete" && c2 == "athlete"){
        cvalue = 89;
    }
     if (c1 == "chorale" && c2 == "chorale"){
        cvalue = 99;
    }
     if (c1 == "none" && c2 == "none"){
        cvalue = 89;
    }
    //same club
    //"ep"
     if ((c1 == "ep" && c2 == "xbx") || (c1 == "xbx" && c2 == "ep")){
        cvalue = 7;
    }
     if ((c1 == "ep" && c2 == "on") || (c1 == "on" && c2 == "ep")){
        cvalue = 0;
    }
     if ((c1 == "ep" && c2 == "pka") || (c1 == "pka" && c2 == "ep")){
        cvalue = 35;
    }
     if ((c1 == "ep" && c2 == "xcd") || (c1 == "xcd" && c2 == "ep")){
        cvalue = 46;
    }
     if ((c1 == "ep" && c2 == "athlete") || (c1 == "athlete" && c2 == "ep")){
        cvalue = 80;
    }
     if ((c1 == "ep" && c2 == "chorale") || (c1 == "chorale" && c2 == "ep")){
        cvalue = 21;
    }
     if ((c1 == "ep" && c2 == "none") || (c1 == "none" && c2 == "ep")){
        cvalue = 17;
    }
    //"ep"
    //"xbx"
     if ((c1 == "xbx" && c2 == "on") || (c1 == "on" && c2 == "xbx")){
        cvalue = 68;
    }
     if ((c1 == "xbx" && c2 == "pka") || (c1 == "pka" && c2 == "xbx")){
        cvalue = 57;
    }
     if ((c1 == "xbx" && c2 == "xcd") || (c1 == "xcd" && c2 == "xbx")){
        cvalue = 68;
    }
     if ((c1 == "xbx" && c2 == "athlete") || (c1 == "on" && c2 == "athlete")){
        cvalue = 9;
    }
     if ((c1 == "xbx" && c2 == "chorale") || (c1 == "chorale" && c2 == "xbx")){
        cvalue = 92;
    }
     if ((c1 == "xbx" && c2 == "none") || (c1 == "none" && c2 == "xbx")){
        cvalue = 68;
    }
    //"xbx"
    //on
     if ((c1 == "on" && c2 == "pka") || (c1 == "pka" && c2 == "on")){
        cvalue = 10;
    }
     if ((c1 == "on" && c2 == "xcd") || (c1 == "xcd" && c2 == "on")){
        cvalue = 3;
    }
     if ((c1 == "on" && c2 == "athlete") || (c1 == "athlete" && c2 == "on")){
        cvalue = 2;
    }
     if ((c1 == "on" && c2 == "chorale") || (c1 == "chorale" && c2 == "on")){
        cvalue = 98;
    }
     if ((c1 == "on" && c2 == "none") || (c1 == "none" && c2 == "on")){
        cvalue = 93;
    }
    //on
    //"pka"
     if ((c1 == "pka" && c2 == "xcd") || (c1 == "xcd" && c2 == "pka")){
        cvalue = 89;
    }
     if ((c1 == "pka" && c2 == "athlete") || (c1 == "athlete" && c2 == "pka")){
        cvalue = 99;
    }
     if ((c1 == "pka" && c2 == "athlete") || (c1 == "athlete" && c2 == "pka")){
        cvalue = 52;
    }
     if ((c1 == "pka" && c2 == "none") || (c1 == "none" && c2 == "pka")){
        cvalue = 89;
    }
    //"pka"
    //"xcd"
     if ((c1 == "xcd" && c2 == "athlete") || (c1 == "athlete" && c2 == "xcd")){
        cvalue = 67;
    }
     if ((c1 == "xcd" && c2 == "chorale") || (c1 == "chorale" && c2 == "xcd")){
        cvalue = 52;
    }
     if ((c1 == "xcd" && c2 == "none") || (c1 == "none" && c2 == "xcd")){
        cvalue = 7;
    }
    //"xcd"
    //"athlete"
     if ((c1 == "athlete" && c2 == "chorale") || (c1 == "chorale" && c2 == "athlete")){
        cvalue = 2;
    }
     if ((c1 == "athlete" && c2 == "none") || (c1 == "none" && c2 == "athlete")){
        cvalue = 9;
    }
    //"athlete"
    //"chorale"
     if ((c1 == "chorale" && c2 == "none") || (c1 == "none" && c2 == "chorale")){
        cvalue = 28;
    }
    //"chorale"
    console.log(cvalue);
    return cvalue;
}

var percentage = 0;
const percentage1 = document.getElementById("calcResults");

var clubResult = 0;
calcButton.addEventListener('click', async ()=> {
   
    clearResults();
    
    clubResult = parseInt( await clubCompatibilityDictionary[c1][c2]);
    
    percentage = parseInt(await getPercent());
    let avg = (percentage + clubResult)/2;
    const divider = document.createElement('div');

    console.log(clubResult);
    console.log(c2);
    console.log(c1);
    


    const calcInnerHTML = `
    <h1 class="calcPercent">${avg}%
    </h1>
    `;

    divider.innerHTML = calcInnerHTML;

    percentage1.appendChild(divider);

    
});


async function getPercent() {

    var url1 = fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${name1}&fname=${name2}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "love-calculator.p.rapidapi.com",
            "x-rapidapi-key": "17b405297emsh7fe7b5361d8f08fp1267a2jsnc122a8cf8643"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return data.percentage;
        
    })
    .catch(err => {
        console.error(err);
    });

    return url1;
}






function updateResults(){


    const divider = document.createElement('div');


    const calcInnerHTML = `
    <div class="percentagesign">
    <h1 class="calcPercent">${percentage}</h1>
    </div>
    
    `;

    divider.innerHTML = calcInnerHTML;

    percentage1.appendChild(divider);


}

    
function clearResults(){
    percentage1.innerHTML = "";
}


