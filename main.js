

function popUpCreator(h,imgClass,adres,link,tel,rating,location,){
    let popUpContainer = document.createElement('div');
    let heading = document.createElement('h3');
    let img = document.createElement('div');
    let details = document.createElement('div');
    let address = document.createElement('p');
    let linktoWeb = document.createElement('a');
    let number = document.createElement('p');
    let ratingImg = document.createElement('div');
    let det = document.createElement('p');
    let x= document.createElement('h6')                 // first we create all elements we need! for this function
    let header = document.createElement('div');
    let ratingContainer = document.createElement('div');
    let imgContainer = document.createElement('div');


    heading.innerHTML = h;
    det.innerHTML = location;
    address.innerHTML = adres;
    linktoWeb.innerHTML = link;
    number.innerHTML = tel;
    ratingContainer.innerHTML = rating;                           //then we write HTML inside!

    details.classList.add('details');
    heading.classList.add('headingPopUp');
    img.classList.add(imgClass);
    imgContainer.classList.add('imgContainer');
    ratingImg.classList.add('fa'); 
    address.classList.add('changeColor');
    number.classList.add('changeColor');
    linktoWeb.classList.add('link')
    ratingImg.classList.add('fa-star');
    ratingImg.classList.add('checked');
    ratingContainer.classList.add('checked');
    header.classList.add('header-row')
    popUpContainer.classList.add('popUpContainer')                      // Now we add Style to those elements 
    
    linktoWeb.setAttribute('href', link);                               // set attribute if we need!
    imgContainer.appendChild(img);
    popUpContainer.appendChild(imgContainer);
    header.appendChild(ratingContainer)
    header.appendChild(ratingImg);
    header.appendChild(heading);
    popUpContainer.appendChild(header);
    details.appendChild(det);
    details.appendChild(address);
    details.appendChild(linktoWeb);
    details.appendChild(number);
    
    popUpContainer.appendChild(details);
    
  
    document.body.appendChild(popUpContainer);                      //most import to see our elements wee need to append them to the DOM!!
}

function bedClick(){

    let body = document.getElementsByTagName('body');
    //bedCreater();
    let bed = document.getElementsByClassName('iconBed');
    let imgOn = document.getElementsByClassName('iconContainer');
    console.log(imgOn)

    if(imgOn.length < 1){
        let popUpClasses = document.getElementsByClassName('popUpContainer');
        bedCreater();
        bedCreater('1');
        bedCreater('2');
        bedCreater('3');
        bedCreater('4');
        bedCreater('5');
        imgOn[0].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Danhostel','imgForPopUp','Vamdrupvej 1, 4600 Køge','www.danhostel-koege.dk','+45 61 18 12 03','3.8',' ')
                popUpClasses[0].classList.add('firstBed')

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        })
        imgOn[1].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator("Annette's Annex",'imgForPopUp','Pedersvej 22, 4600 Køge','www.visitkoege.dk','+45 60 84 14 30','4.6',' ')
                popUpClasses[0].classList.add('firstBed')

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        })
        imgOn[2].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Danhostel','imgForPopUp','Vamdrupvej 1, 4600 Køge','www.danhostel-koege.dk','+45 61 18 12 03','3.8',' ')
                popUpClasses[0].classList.add('firstBed')

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        })
        imgOn[3].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Danhostel','imgForPopUp','Vamdrupvej 1, 4600 Køge','www.danhostel-koege.dk','+45 61 18 12 03','3.8',' ')
                popUpClasses[0].classList.add('firstBed')

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        })
        imgOn[4].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Danhostel','imgForPopUp','Vamdrupvej 1, 4600 Køge','www.danhostel-koege.dk','+45 61 18 12 03','3.8',' ')
                popUpClasses[0].classList.add('firstBed')

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        })
        imgOn[5].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Danhostel','imgForPopUp','Vamdrupvej 1, 4600 Køge','www.danhostel-koege.dk','+45 61 18 12 03','3.8',' ')
                popUpClasses[0].classList.add('firstBed')

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        })
    }else{

        for(let i =imgOn.length; i>0; i--){
            imgOn[i-1].remove();
        }
    }
   
    
    
}
    
//popUpCreator('Straedet Koge','imgForPopUp','Olbycenter 104, 4600 Koge','www.straedetkoge.dk','+45 50 93 86 27','4.5','Shopping street')
function bedCreater(counter){
    let imgContainer = document.createElement('div');
    let img = document.createElement('div');
    let string = 'iconContainer' + counter;
    imgContainer.classList.add('iconContainer')
    imgContainer.classList.add(string);
    img.classList.add('iconBed');

    imgContainer.appendChild(img);
    document.body.appendChild(imgContainer)
    return;
}