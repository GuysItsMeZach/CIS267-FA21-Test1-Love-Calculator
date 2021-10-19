
// Input
// Name1, Name2, Club1, Club2

// Output
// NameCompatibility (from API) and ClubCompatibility (from matrix)
// witty description 


const descriptionDictionary = [
    {start:0, end: 10, description: "not a chance, fool."},
    {start:11, end: 45, description: "prolly not"},
    {start:46, end: 85, description: "bet"},
    {start:86, end: 100, description: "things look good"},
];

function getDescription( score) {

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

