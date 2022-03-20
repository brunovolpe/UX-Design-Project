

function popUpCreator(h,imgage,adres,link,tel,des,location){
    let popUpContainer = document.createElement('div');
    let heading = document.createElement('h3');
    let img = document.createElement('div');
    let details = document.createElement('div');
    let address = document.createElement('p');
    let linktoWeb = document.createElement('a');
    let number = document.createElement('p');
    let ratingImg = document.createElement('div');
    let det = document.createElement('p');
    let x= document.createElement('h6');
    let description = document.createElement('p');                  // first we create all elements we need! for this function

    heading.innerHTML = h;
    det.innerHTML = 'Details';
    address.innerHTML = adres;
    linktoWeb.innerHTML = link;
    number.innerHTML = tel;
    description.innerHTML = des;
    x.innerHTML = 'Description'                             //then we write HTML inside!

    details.classList.add('details');
    heading.classList.add('headingPopUp');
    img.classList.add('imgForPopUp');
    ratingImg.classList.add('ratingImg');
    x.classList.add('descTag');
    description.classList.add('description');
    popUpContainer.classList.add('popUpContainer')                      // Now we add Style to those elements 
    
    linktoWeb.setAttribute('href', link);                               // set attribute if we need!

    popUpContainer.appendChild(heading);
    popUpContainer.appendChild(img)
    details.appendChild(det);
    details.appendChild(address);
    details.appendChild(linktoWeb);
    details.appendChild(number);
    details.appendChild(ratingImg);
    popUpContainer.appendChild(details);
    popUpContainer.appendChild(x);
    popUpContainer.appendChild(description);
    document.body.appendChild(popUpContainer);                      //most import to see our elements wee need to append them to the DOM!!
}
//popUpCreator('Garant Cykler v/ Allan Friis','exploreBackground','Amagerbrogade','www.google.com','+50 32 75 58','loasd sadfasfo nasipjd asofnasjfnaskl dnasklf nka lsnfklasnk lfnasklfnaksl nfklansfk','body')