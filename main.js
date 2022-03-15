//   Eating Categories 
let firstCategories = ['Eating/Drinking', 'Active','Relax','Culture','Explore'];
let cafesDrinksRestorants = ['Cafes', 'Drinks', 'Resturants'];
let cafesList = ['Snack/Breakfast','Cafe','Bakeries'];
let drinks = ['Juice','Bars'];
let restorants = ['International','Veggie/Vegan','Meat','Seafood','Danish Traditional'];
 
let listElement = document.createElement('ul');
let listEating = document.createElement('ul');
let listCafes = document.createElement('ul');
let listDrinks = document.createElement('ul');
let listRestorants = document.createElement('ul');
 
 

let eatingDrinking = document.getElementById('Eating/Drinking');
 
 
eatingDrinking.addEventListener('click', showEatDrink);
 
// Action Categories 
 
let activeList = ['Family','Adults'];
let familyList = ['Indoor','Outdoors'];
let adultList = ['Indoor','Outdoors'];
let indoorFamily = ['Swimming Pool','Cafe Braetspil(board games)','FaFla(ceramics)'];
let outDoorsFamily = ['Rent a cyckle','Cars festival','Fishing','Treasure hunt for kids, Riddle Hunt for adults','Bronze Path','Canoe','Camping'];
let indoorAdults = ['Yoga','Shopping Street'];
let outdoorAdults = ['Bronze Path','Rent a cyckle','Martkets in the historical square','Riddle Hunt','Golf','Shoping street','Canoe','Fishing'];
 
let listActive = document.createElement('ul');
let listFamily = document.createElement('ul');
let listFamilyIndoor = document.createElement('ul');
let listFamilyOutdoor = document.createElement('ul');
let listAdults = document.createElement('ul');
let listAdultsIndoor = document.createElement('ul');
let listAdultsOutdoor = document.createElement('ul');
 
let activeListShowDown = document.getElementById('Active');
activeListShowDown.addEventListener('click', showActive)
 
//show Relax Categories
let relaxList = ['1Day','2+ days'];
let oneDay = ['Beach','Spa','River','Forest'];
let secondDay = ['Museums','Accomodations','Cinema'];
 
let listRelax = document.createElement('ul');
let listOneDay = document.createElement('ul');
let listSecondDay = document.createElement('ul');
 
let activeRelaxButton = document.getElementById('Relax');
activeRelaxButton.addEventListener('click',showRelax);
 
//show Culture Categories
let cultureList = ['Indoor','Outdoor'];
let cultureListIndoor= ['Koge Museum','Art Gallery','Church','Fafla Ceramics','Cinema','Art space'];
let cultureListOutdoor= ['Puzzle','Events','Music'];
 
let listCulture = document.createElement('ul');
let listCultureIndoor = document.createElement('ul');
let listCultureOutdoor = document.createElement('ul');
 
let activeCultureButton = document.getElementById('Culture');
activeCultureButton.addEventListener('click',showCulture);
 
//show Explore 
let exploreList = ['Treasure hunt for kids','Nature hiking Trails','Local Gastronomy Tour','Bronze Path','Sleep outdoors','Sightseeing tour','Riddle hunt']
 
let listExplore = document.createElement('ul');
 
let activeExploreButton = document.getElementById('Explore');
activeExploreButton.addEventListener('click',showExplore)
 
 
let count = true;
function showEatDrink(){
    if(count){
        buttonMaker(cafesDrinksRestorants, listEating);
        count = false;
 
        let eatingContainer = document.getElementsByTagName('ul')[1];
        let lastElement = eatingContainer.lastElementChild;
        let firstElement = eatingContainer.firstElementChild;
        let previousFromTheLastOne = lastElement.previousElementSibling;
        firstElement.addEventListener('click', showCafes);
        previousFromTheLastOne.addEventListener('click', showDrinks);
        lastElement.addEventListener('click',showRestorant);
        console.log(listElement)
        listElement.remove();
    }
}
function buttonMaker(input,listContainer){
    input.forEach(name => {
        let buttonElement = document.createElement('button');
        buttonElement.textContent = name; 
        listContainer.appendChild(buttonElement);

        buttonElement.setAttribute('id',name );
        
    })
    document.body.appendChild(listContainer);
}
function showCafes (){
    buttonMaker(cafesList, listCafes);
}
function showDrinks(){
    buttonMaker(drinks,listDrinks);
}
function showRestorant(){
    buttonMaker(restorants, listRestorants);
 
}
// here start Active fun
function showActive(){
    buttonMaker(activeList, listActive);
 
    let activityContainer = document.getElementsByTagName('ul')[1];
 
    let lastElement = activityContainer.lastElementChild;
    let firstElement = activityContainer.firstElementChild;
 
    firstElement.addEventListener('click', showFamily);
    lastElement.addEventListener('click',showAdult);
}
function showFamily(){
    buttonMaker(familyList, listFamily);
    let firstElement = listFamily.firstElementChild ; 
    let lastElement = listFamily.lastElementChild;
 
    firstElement.addEventListener('click', showFamilyIndoors);
    lastElement.addEventListener('click', showFamilyOutdoors)
}
function showFamilyIndoors(){
    buttonMaker(indoorFamily, listFamilyIndoor);
}
function showFamilyOutdoors(){
    buttonMaker(outDoorsFamily, listFamilyOutdoor);
}
function showAdult(){
    buttonMaker(adultList, listAdults);
    let firstElement = listAdults.firstElementChild;
    let lastElement = listAdults.lastElementChild;
 
    firstElement.addEventListener('click', showAdultIndoor);
    lastElement.addEventListener('click',showAdultOutdoor);
 
}
function showAdultIndoor(){
    buttonMaker(indoorAdults, listAdultsIndoor);
}
function showAdultOutdoor(){
    buttonMaker(outdoorAdults, listAdultsOutdoor);
}
// here start function for relax
 
function showRelax(){
    buttonMaker(relaxList, listRelax);
    let firstElement = listRelax.firstElementChild;
    let lastElement = listRelax.lastElementChild;
 
    firstElement.addEventListener('click', showOneDay);
    lastElement.addEventListener('click', moreDays)
}
function showOneDay(){
    buttonMaker(oneDay,listOneDay);
}
function moreDays(){
    buttonMaker(secondDay,listSecondDay);
}
// here start function for  Culture
function showCulture(){
    buttonMaker(cultureList,listCulture);
    let firstElement = listCulture.firstElementChild;
    let lastElement= listCulture.lastElementChild;
 
    firstElement.addEventListener('click',showCultureIndoor);
    lastElement.addEventListener('click', showCultureOutdoor)
}
function showCultureIndoor(){
    buttonMaker(cultureListIndoor,listCultureIndoor);
    classToButtons()
}
function showCultureOutdoor(){
    buttonMaker(cultureListOutdoor,listCultureOutdoor);
}
// here start function for Explore 
function showExplore(){
    buttonMaker(exploreList,listExplore);
}
function classToButtons(){
    let btnArr = document.getElementsByTagName('button');
    console.log();
   for(let i = 0 ; i< btnArr.length; i++){
       btnArr[i].classList.add('btn')
   }
}
classToButtons()

function personalizedMap(){
    buttonMaker(firstCategories, listElement);
    
    classToButtons();
}
