
// Input
// Name1, Name2, Club1, Club2

// Output
// NameCompatibility (from API) and ClubCompatibility (from matrix)
// witty description 
var name1 = "";
var name2 = "";



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
    xbx: { xbx: 99, pka: 87, on: 32}
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

const clubSelect = document.getElementById("clubSelect");

clubSelect.addEventListener( "change" , () => {
    console.log( clubSelect.value );
});

function updateResults(c1, c2){
    let results = cvalue;
    //same club
    if (c1 == 'ep' && c2 == 'ep'){
        cvalue = 89
    }
    else if (c1 == xbx && c2 == xbx){
        cvalue = 94
    }
    else if (c1 == on && c2 == on){
        cvalue = 99
    }
    else if (c1 == pka && c2 == pka){
        cvalue = 98
    }
    else if (c1 == xcd && c2 == xcd){
        cvalue = 98
    }
    else if (c1 == athlete && c2 == athlete){
        cvalue = 89
    }
    else if (c1 == chorale && c2 == chorale){
        cvalue = 99
    }
    else if (c1 == none && c2 == none){
        cvalue = 89
    }
    //same club
    //ep
    else if ((c1 == ep && c2 == xbx) || (c1 == xbx && c2 == ep)){
        cvalue = 7
    }
    else if ((c1 == ep && c2 == on) || (c1 == on && c2 == ep)){
        cvalue = 0
    }
    else if ((c1 == ep && c2 == pka) || (c1 == pka && c2 == ep)){
        cvalue = 35
    }
    else if ((c1 == ep && c2 == xcd) || (c1 == xcd && c2 == ep)){
        cvalue = 46
    }
    else if ((c1 == ep && c2 == athlete) || (c1 == athlete && c2 == ep)){
        cvalue = 80
    }
    else if ((c1 == ep && c2 == chorale) || (c1 == chorale && c2 == ep)){
        cvalue = 21
    }
    else if ((c1 == ep && c2 == none) || (c1 == none && c2 == ep)){
        cvalue = 17
    }
    //ep
    //xbx
    else if ((c1 == xbx && c2 == on) || (c1 == on && c2 == xbx)){
        cvalue = 68
    }
    else if ((c1 == xbx && c2 == pka) || (c1 == pka && c2 == xbx)){
        cvalue = 57
    }
    else if ((c1 == xbx && c2 == xcd) || (c1 == xcd && c2 == xbx)){
        cvalue = 68
    }
    else if ((c1 == xbx && c2 == athlete) || (c1 == on && c2 == athlete)){
        cvalue = 9
    }
    else if ((c1 == xbx && c2 == chorale) || (c1 == chorale && c2 == xbx)){
        cvalue = 92
    }
    else if ((c1 == xbx && c2 == none) || (c1 == none && c2 == xbx)){
        cvalue = 68
    }
    //xbx
    //on
    else if ((c1 == on && c2 == pka) || (c1 == pka && c2 == on)){
        cvalue = 10
    }
    else if ((c1 == on && c2 == xcd) || (c1 == xcd && c2 == on)){
        cvalue = 3
    }
    else if ((c1 == on && c2 == athlete) || (c1 == athlete && c2 == on)){
        cvalue = 2
    }
    else if ((c1 == on && c2 == chorale) || (c1 == chorale && c2 == on)){
        cvalue = 98
    }
    else if ((c1 == on && c2 == none) || (c1 == none && c2 == on)){
        cvalue = 93
    }
    //on
    //pka
    else if ((c1 == pka && c2 == xcd) || (c1 == xcd && c2 == pka)){
        cvalue = 89
    }
    else if ((c1 == pka && c2 == athlete) || (c1 == athlete && c2 == pka)){
        cvalue = 99
    }
    else if ((c1 == pka && c2 == athlete) || (c1 == athlete && c2 == pka)){
        cvalue = 52
    }
    else if ((c1 == pka && c2 == none) || (c1 == none && c2 == pka)){
        cvalue = 89
    }
    //pka
    //xcd
    else if ((c1 == xcd && c2 == athlete) || (c1 == athlete && c2 == xcd)){
        cvalue = 67
    }
    else if ((c1 == xcd && c2 == chorale) || (c1 == chorale && c2 == xcd)){
        cvalue = 52
    }
    else if ((c1 == xcd && c2 == none) || (c1 == none && c2 == xcd)){
        cvalue = 7
    }
    //xcd
    //athlete
    else if ((c1 == athlete && c2 == chorale) || (c1 == chorale && c2 == athlete)){
        cvalue = 2
    }
    else if ((c1 == athlete && c2 == none) || (c1 == none && c2 == athlete)){
        cvalue = 9
    }
    //athlete
    //chorale
    else if ((c1 == chorale && c2 == none) || (c1 == none && c2 == chorale)){
        cvalue = 28
    }
    //chorale
    value.textContent = count
}
var percentage = 0;
const percentage1 = document.getElementById("calcResults");


calcButton.addEventListener('click', async ()=> {
   
    clearResults();
    percentage = parseInt(await getPercent());
    const divider = document.createElement('div');


    const calcInnerHTML = `
    <h1 class="calcPercent">${percentage}
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
    <h1 class="calcPercent">${percentage}
    </h1>
    `;

    divider.innerHTML = calcInnerHTML;

    percentage1.appendChild(divider);


}
    
function clearResults(){
    percentage1.innerHTML = "";
}


