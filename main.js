

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
    let icons = document.getElementsByClassName('iconsMenu');
    let imgOn = document.getElementsByClassName('iconContainer');


    if(imgOn.length < 1){
        let popUpClasses = document.getElementsByClassName('popUpContainer');
        bedCreater();
        bedCreater('111');
        bedCreater('112');
        bedCreater('113');
        bedCreater('114');
        bedCreater('115');
        imgOn[0].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Danhostel','imgFirstBed','Vamdrupvej 1, 4600 Køge','www.danhostel-koege.dk','+45 61 18 12 03','3.8',' ')
                popUpClasses[0].classList.add('firstBed')

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        })
        imgOn[1].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator("Annette's Annex",'imgSecBed','Pedersvej 22, 4600 Køge','www.visitkoege.dk','+45 60 84 14 30','4.6','AIRBNB')
                popUpClasses[0].classList.add('secBed')

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        })
        imgOn[2].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Centralhotellet','imgTirthBed','Vestergade 3, 4600 Køge','www.centralhotellet.dk','+45 56 65 06 96','4.2',' ');
                popUpClasses[0].classList.add('tirthBed');

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        })
        imgOn[3].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Hotel Niels Juel','imgFourBed','Toldbodvej 20, 4600 Køge','www.hotelnielsjuel.dk','+45 56 63 18 00','3.7',' ');
                popUpClasses[0].classList.add('fourthBed');

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        })
        imgOn[4].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Comwell Køge Strand','imgFiveBed','Strandvejen 111, 4600 Køge','www.comwell.com','+45 56 65 36 90','4.1',' ')
                popUpClasses[0].classList.add('fifthBed')

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        })
        imgOn[5].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Vallo Camping','imgSixBed','Strandvejen 102, 4600 Køge','www.valloevamping.dk','+45 56 65 28 51','3.9',' ')
                popUpClasses[0].classList.add('sixBed')

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

function EatDrinkClick(){
    let imgOn = document.getElementsByClassName('iconContainer');

    if(imgOn.length < 1){
        let popUpClasses = document.getElementsByClassName('popUpContainer');
        drinksCreater('220');
        drinksCreater('221');
        drinksCreater('222');
        drinksCreater('223');
        drinksCreater('224');
        drinksCreater('225');

        imgOn[0].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Stacys Diner Køge','restaurantOne','Bådehavnen 1, 4600 Køge','www.stacysdiner.dk','+45 31 32 32 12','4.5',' ');
                popUpClasses[0].classList.add('firstRestaurant');

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        });
        imgOn[1].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Bossa Nova','restaurantTwo','Havnen 33, 4600 Køge','www.bossa-nova.nu','+45 51 70 46 33','4.6',' ');
                popUpClasses[0].classList.add('secRestaurant');

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        });
        imgOn[2].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Gelateria Caffee Freddo','restaurantThree','Norregade 8B, 4600 Køge','www.freddo.dk','+45 52 11 25 26','5',' ');
                popUpClasses[0].classList.add('tirthRestaurant');

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        });
        imgOn[3].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('The Old Irish Pub','restaurantFour','Havnen 31, 4600 Køge','www.oldirishpub.dk','+45 42 95 62 32','3.7',' ');
                popUpClasses[0].classList.add('fourRestaurant');

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        });
        imgOn[4].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Braunstain','restaurantFive','Havnen 33, 4600 Køge','www.bossa-nova.nu','+45 51 70 46 33','3.7',' ');
                popUpClasses[0].classList.add('fiveRestaurant');

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        });
        imgOn[5].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator("Kie's Kaffekælder",'restaurantSix','Brogade 26, 4600 Køge','www.kieskaffekaelder.dk','+45 61 71 22 86','4.5',' ');
                popUpClasses[0].classList.add('sixRestaurant');

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        });
    }else{
        for(let i =imgOn.length; i>0; i--){
            imgOn[i-1].remove();
        }
    }
}
function shoppingClick(){
    let imgOn = document.getElementsByClassName('iconContainer');
    if(imgOn.length <1){
        let popUpClasses = document.getElementsByClassName('popUpContainer');
        shoppingCreater('770');
        shoppingCreater('771');
        shoppingCreater('772');
        shoppingCreater('773');
        shoppingCreater('776');
        shoppingCreater('774');
        shoppingCreater('775');

        imgOn[0].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Straedet Køge','ShoppingOne','Ølbycenter 104, 4600 Køge','www.straedetkoge.dk','+45 50 93 86 27','4.8',' ');
                popUpClasses[0].classList.add('firstShopping');

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
function harborClick(){
        let imgOn = document.getElementsByClassName('iconContainer');
        if(imgOn.length <1){
            let popUpClasses = document.getElementsByClassName('popUpContainer');
            shipsCreater('330');
            shipsCreater('331');
            shipsCreater('332');
            shipsCreater('333');
            shipsCreater('334');
            imgOn[0].addEventListener('click', function(){
            
                if(popUpClasses.length < 1){
                    popUpCreator('Ølsemagle Revle','SecShipImg','Revlen 1, 4600 Køge','https://www.visitkoege.dk','','4.5',' ')
                    popUpClasses[0].classList.add('firstShip');
                  
    
                }else{
                    for(let i = popUpClasses.length ; i>0; i--){
                        popUpClasses[i-1].remove();
                        
                    }
                }
                
            })
            imgOn[1].addEventListener('click', function(){
            
                if(popUpClasses.length < 1){
                    popUpCreator('Køge Svømmeland','firstShipImg','Olbycenter 104, 4600 Køge','www.svoemmeland.dk','+45 56 67 27 70','4.5',' ')
                    popUpClasses[0].classList.add('secShip');
                    
                    
    
                }else{
                    for(let i = popUpClasses.length ; i>0; i--){
                        popUpClasses[i-1].remove();
                        
                    }
                }
               
            })
            imgOn[2].addEventListener('click', function(){
            
                if(popUpClasses.length < 1){
                    popUpCreator('Køge Marina','tirthShipImg','Badehavnen 2, 4600 Køge','www.koegemarina.dk','+45 56 66 16 89','4.4',' ')
                    popUpClasses[0].classList.add('tirthShip')
    
                }else{
                    for(let i = popUpClasses.length ; i>0; i--){
                        popUpClasses[i-1].remove();
                    }
                }
                
            })
            imgOn[3].addEventListener('click', function(){
            
                if(popUpClasses.length < 1){
                    popUpCreator('Søndre Strand','forthShipImg',' 4600 Køge','www.visitkoege.dk','','4.1',' ')
                    popUpClasses[0].classList.add('forthShip')
    
                }else{
                    for(let i = popUpClasses.length ; i>0; i--){
                        popUpClasses[i-1].remove();
                    }
                }
            })
            imgOn[4].addEventListener('click', function(){
            
                if(popUpClasses.length < 1){
                    popUpCreator('Strandvejen','fiveShipImg','Strandvejen, 4600 Køge','www.visitkoege.dk','','3.5',' ')
                    popUpClasses[0].classList.add('fiveShip');
    
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
function cultureClick(){
    let imOn = document.getElementsByClassName('iconContainer');
    if(imOn.length < 1){
        let popUpClasses = document.getElementsByClassName('popUpContainer');
        cultureCreater('440');
        cultureCreater('441');
        cultureCreater('442');
        imOn[0].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Køge Festival','fisrtCultureImg','Torvet 10, 4600 Køge','www.kogefestuge.dk','','4.1',' ')
                popUpClasses[0].classList.add('fisrtCulture');

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        })
        imOn[1].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Veteranbiltraef','secondCultureImg','Vintage Car Exposition, 4600 Køge','www.kortilkoge.dk','','4.1',' ')
                popUpClasses[0].classList.add('secondCulture');

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        })
        imOn[2].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Riddlehouse','thirthtCultureImg','Astervej 23d, 4600 Køge','www.escaperoom-riddlehouse.dk','+45 71 74 91 41','4.5',' ')
                popUpClasses[0].classList.add('thirthCulture');

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        })
    }else{
        for(let i =imOn.length; i>0; i--){
            imOn[i-1].remove();
        }
    }

}
function historyClick(){
    let imOn = document.getElementsByClassName('iconContainer');
    if(imOn.length < 1){
        let popUpClasses = document.getElementsByClassName('popUpContainer');
        historyCreater('550');
        imOn[0].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Kø$ Museum','firstHistoryImg','Nøorregade 29, 4600 Køge','www.koes.dk','+45 56 67 60 20','4.5',' ');
                popUpCreator('Køge Museum','secondHistoryImg','Nørregade 4, 4600 Køge','www.koegemuseum.dk','+45 70 70 12 36','4.1',' ');
                popUpCreator('Galleri','thirthHistoryImg','Nørregade 8, 4600 Køge','www.birgitbraender.dk','+45 27 58 86 90','5',' ');
                popUpCreator('Fafla','fourthHistoryImg','Radhusstraedet 3C, 4600 Køge','www.fafla.dk','+45 52 17 23 42','4.8',' ');
                popUpCreator('Køge Church','fifthHistoryImg','Kirkestraede 26, 4600 Køge','www.koegekirke.dk.dk','+45 56 65 02 46','4.4',' ');
                popUpCreator('Nordisk Film','sixthHistoryImg','Antoniestraede 6, 4600 Køge','www.nfbio.dk','+45 70 13 12 11','4.3',' ');

                popUpClasses[0].classList.add('firstHistory');
                popUpClasses[1].classList.add('secondHistory');
                popUpClasses[2].classList.add('thirthHistory');
                popUpClasses[3].classList.add('fourthHistory');
                popUpClasses[4].classList.add('fiveHistory');
                popUpClasses[5].classList.add('sixHistory');
                
            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        })
    }else{
        for(let i =imOn.length; i>0; i--){
            imOn[i-1].remove();
        }
    }
}
function indoorClick(){
    let imOn = document.getElementsByClassName('iconContainer');
    if(imOn.length < 1){
        let popUpClasses = document.getElementsByClassName('popUpContainer');
        indoorCreater('660');
        indoorCreater('661');
        indoorCreater('662');
        imOn[0].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Riddlehouse','SecShipImg','Astervej 23d, 4600 Køge','www.escaperoom-riddlehouse.dk','+45 71 74 91 41','4.5',' ')
                popUpClasses[0].classList.add('fistIndoor');

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        });
        imOn[1].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Riddlehouse','fourthHistoryImg','Astervej 23d, 4600 Køge','www.escaperoom-riddlehouse.dk','+45 71 74 91 41','4.5',' ')
                popUpClasses[0].classList.add('secondIndoor');

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        });
        imOn[2].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Riddlehouse','thirthIndoorImg','Astervej 23d, 4600 Køge','www.escaperoom-riddlehouse.dk','+45 71 74 91 41','4.5',' ')
                popUpClasses[0].classList.add('thirthIndoor');

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        });
    }else{
        for(let i =imOn.length; i>0; i--){
            imOn[i-1].remove();
        }
    }
}
function outdoorClick(){
    let imgOn = document.getElementsByClassName('iconContainer');
    if(imgOn.length < 1){
        let popUpClasses = document.getElementsByClassName('popUpContainer');
        outdoorCreater('880');
        outdoorCreater('881');
        outdoorCreater('882');
        imgOn[0].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Koge River','imgFirstBed','Køge A, Køge Municipality','www.visitkoege.dk','','',' ')
                popUpClasses[0].classList.add('firstOutdoor')

            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        })
        imgOn[1].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Køge Kano og Kajak Klub','imgFirstBed','Søndre Molevej 20, Køge','www.koegekajak.dk','+45 56 63 42 52','4.7',' ')
                popUpClasses[0].classList.add('secondOutdoor')


            }else{
                for(let i = popUpClasses.length ; i>0; i--){
                    popUpClasses[i-1].remove();
                }
            }
        })
        imgOn[2].addEventListener('click', function(){
            
            if(popUpClasses.length < 1){
                popUpCreator('Strandvejen','imgFirstBed','Strandvejen, Køge','www.visitkoege.dk','','3.5',' ')
                popUpClasses[0].classList.add('tirthOutdoor')

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
function drinksCreater(counter){
    let imgContainer = document.createElement('div');
    let img = document.createElement('div');
    let string = 'iconContainer' + counter;
    imgContainer.classList.add('iconContainer')
    imgContainer.classList.add(string);
    img.classList.add('iconDrink');

    imgContainer.appendChild(img);
    document.body.appendChild(imgContainer)
    return;
}
function shipsCreater(counter){
    let imgContainer = document.createElement('div');
    let img = document.createElement('div');
    let string = 'iconContainer' + counter;
    imgContainer.classList.add('iconContainer')
    imgContainer.classList.add(string);
    img.classList.add('iconShip');

    imgContainer.appendChild(img);
    document.body.appendChild(imgContainer)
    return;
}
function cultureCreater(counter){
    let imgContainer = document.createElement('div');
    let img = document.createElement('div');
    let string = 'iconContainer' + counter;
    imgContainer.classList.add('iconContainer')
    imgContainer.classList.add(string);
    img.classList.add('iconCulture');

    imgContainer.appendChild(img);
    document.body.appendChild(imgContainer)
    return;
}
function historyCreater(counter){
    let imgContainer = document.createElement('div');
    let img = document.createElement('div');
    let string = 'iconContainer' + counter;
    imgContainer.classList.add('iconContainer')
    imgContainer.classList.add(string);
    img.classList.add('iconHistory');

    imgContainer.appendChild(img);
    document.body.appendChild(imgContainer)
    return;
}
function indoorCreater(counter){
    let imgContainer = document.createElement('div');
    let img = document.createElement('div');
    let string = 'iconContainer' + counter;
    imgContainer.classList.add('iconContainer')
    imgContainer.classList.add(string);
    img.classList.add('iconIndoor');

    imgContainer.appendChild(img);
    document.body.appendChild(imgContainer)
    return;
}
function outdoorCreater(counter){
    let imgContainer = document.createElement('div');
    let img = document.createElement('div');
    let string = 'iconContainer' + counter;
    imgContainer.classList.add('iconContainer')
    imgContainer.classList.add(string);
    img.classList.add('iconOutDoor');

    imgContainer.appendChild(img);
    document.body.appendChild(imgContainer)
    return;
}
function shoppingCreater(counter){
    let imgContainer = document.createElement('div');
    let img = document.createElement('div');
    let string = 'iconContainer' + counter;
    imgContainer.classList.add('iconContainer')
    imgContainer.classList.add(string);
    img.classList.add('iconShopping');

    imgContainer.appendChild(img);
    document.body.appendChild(imgContainer)
    return;
}

function openOutdoorFamily(x,back){

    let body = document.getElementsByClassName(x);
     if(body.length == 1){
        let map = document.createElement('div');
        map.innerHTML = '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1uFql9oem4WKLlLuFQp0_9nXclBpbsLIA&ehbc=2E312F" width="100%" height="100%"></iframe>';
        map.classList.add('mapOutdoor');
        body[0].appendChild(map)
        let goBack = document.createElement('div');
        goBack.innerHTML = '<a href='+ back+' class="goBackButton"></a>';
        body[0].appendChild(goBack);
     }else{
        for(let i =body.length; i>0; i--){
            imgOn[i-1].remove();
        }
     }
  
}
