let kisnyul;   //deklaralas
kisnyul = 'kisnyul';  //inicializalas

let kisroka = 'kisroka';

kisroka = "45";
console.log(typeof kisroka);
console.log(typeof Number(kisroka)); //atalakitja a kisroka valtozo tipusat stringrol numberre

let num = 3;

let num2 = "eloszor string";
console.log(typeof num2);  //eloszor string
num2 = 4; //dinamikusan tipusos, be tudunk adni neki szamot is ertekkent, hiaba volt az elso ertek string
console.log(typeof num2); //aztan number

console.log(typeof kisnyul);
console.log(typeof num);

console.log(kisnyul + kisroka); //osszefuzi a stringeket
console.log(3 + 4); //osszeadja a szamokat
console.log(kisnyul + 3); //gyengen tipusos, a szamot stringge alakitja, es osszefuzi a kisnyullal
console.log(typeof [1, 2]); //object a tipusa, mert minden object a JS-ben, ami nem primitiv tipus

//primitiv tipusok: number, string, boolean
//objectek: primitiv tipusok kombinaciojabol jon letre

console.log(addNumbers(kisnyul, 3));

function addNumbers(num1, num2) {
    if (typeof num1 == "number" && typeof num2 == "number") { //emiatt nekem vizsgalnom kell a tipust
        return num1 + num2;
    } else if (typeof num1 == "number") {
        return 'yayyy';
    } else if (typeof num2 == "number") {
        return 'jajjj';
    } else {
        return 'miccsinaaaalszbmeg';
    }
}

//ketfajta fuggveny letezik - ketfelekeppen definialhatjuk, mit fog csinalni
//1.nem returnol semmit

let myVariable = 4;

function updateMyVariable() {
    myVariable = 5;
}

console.log(myVariable);
console.log('uj valtozo');
console.log(updateMyVariable()); //nem returnoltem semmit, csak vegrehajtja a fuggvenyt, undefined
console.log(myVariable); //de mivel vegrehajtotta, az ertek megvaltozott

//2. returnol vmit

let myVariable2 = 3;

function updateMyVariable2() {
    myVariable2 = 10;
    return myVariable2;
    //return myVariable2 = 10;
}

console.log(myVariable2);
console.log('uj valtozo');
//console.log(updateMyVariable2()); //10

let sum = updateMyVariable2() + 2; //a fuggveny altal returnolt erteket tarolhatod egy uj valtozoban is
console.log(sum);  //12

//parameterek
function updateNumber(myNumber) { //mindig adjuk meg a valtozo nevet parameterkent, amibe az erteket teheti
    myNumber = myNumber * 2;
    return myNumber;
}

console.log('param');
console.log(updateNumber()); //NaN: not a number
console.log(updateNumber(2)) //beteszi a myNumber valtozoba a parameterkent megadott erteket

//akarhany parameter
function csinaljVmiLogikat(elso, masodik, harmadik) {
    /*let sum = elso + masodik + harmadik;
    return sum;*/
    return elso + masodik + harmadik; //returnnel veget er a muvelet
    console.log('ez nem fog vegrehajtodni'); //return utani muvelet nem hajtodik vegre!
}

console.log(csinaljVmiLogikat(21, 38, 5));

//a parameterek lehetnek kulonbozo tipusuak
function csinaljVmiLogikatKulonbozoTipusuParameterekkel(szamok, stringek) {
    szamok.push(2);
    stringek.push('szo');
    return szamok.concat(stringek); //fuzd ossze a ket arrayt
}

let myStrings = ['alma', 'baba'];
console.log(csinaljVmiLogikatKulonbozoTipusuParameterekkel([1, 2, 3], myStrings));

let piroskaJatekai = { //object
    kisvasut: 120, //valtozo letrehozasa ertekkel, key - value, ugyanugy lehet barmilyen tipus
    plusskigyo: 30
}

//parse-olas, vegigparsolom az objectet, azaz megfogom vmelyik valtozoja erteket, es csinalok vele vmit
//zarojel nelkul csak osszefuzi a stringge alakitott ertekeket - gyengen tipusossag!
console.log("Piroska jatekainak hosszusaga osszesen: " + piroskaJatekai.kisvasut + piroskaJatekai.plusskigyo);

//ugyanugy, mint a matekban, a zarojeles muveletet vegzi el eloszor:
console.log("Piroska jatekainak hosszusaga osszesen: " + (piroskaJatekai.kisvasut + piroskaJatekai.plusskigyo));

//fat arrow
let sum = (x, y) => {
    return x + y;
} //anonim fuggveny valtozohoz rendelve
let sum_old = function (x, y) {
    return x + y;
} //anonim fuggveny valtozohoz rendelve

function sum2(x, y) {
    return x + y;
} //nevesitett fuggveny, nem felulirhato

sum(2, 4);
sum2(3, 5);

//anonim fuggveny felulirhato
sum = (x, y) => {
    return x * y;
}
