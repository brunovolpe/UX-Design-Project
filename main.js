$(document).ready(function(){ //always use JQuerry in this scope!!!!
    if(window.location.href == 'http://127.0.0.1:5501/index.html'){    // Check what page are the user this i how we can separete the JS 
                                                                            // Document so functions are not going to be messy!
    $('<div/>',{
        id : 'main',
        class: 'fullContent',
    }).appendTo('body')       // This is our Background image! You can change image in Style.css
    $('<h1/>',{
        text: 'Come and Experience KØGE',
        class: 'heading',
    }).appendTo('#main');       // this is our first heading on mine page 
    $('<div/>',{
        id: 'btnContainer',
    }).appendTo('.fullContent') // here i create btn container so i can put buttons inside
    $('<button/>',{
        text: "KØGE's map",
        class: 'btn',
        id: 'kogeMap',
    }).appendTo('#btnContainer');
    $('<button/>',{
        text: "Personalized map",
        class: 'btn',
        id: 'personalizedMap',
    }).appendTo('#btnContainer');   // i Just append the btn's to the container.

    //Now we create Functions when click on button to send you to the right HTML file 
    $('#personalizedMap').click(function(){
        window.location.href = 'http://127.0.0.1:5501/personalized.html';
    })
    $("#kogeMap").click(function(){
        window.location.href = 'http://127.0.0.1:5501/kogeMap.html';
    })
    
}else if(window.location.href == 'http://127.0.0.1:5501/personalized.html'){        // checking!!!
    
    
        $('<div/>',{
            class: 'goBackButton',
        }).appendTo('body');                                            // create! Back button
        $('body').addClass('fullContent');                              //put background!
        $('body').append($(document.createElement('div')).prop({
            type: 'div',
            class:'firstSection',
        }))                                                             //container for buttons
        $('.firstSection').append(
            $(document.createElement('button')).prop({
                type: 'button',
                innerHTML: 'Eating/Drinking',
                class: 'btn',
                value: 'Super',
                id: 'eatDrink',
            })
        ).append($(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'Active',
            class: 'btn',
            id: 'active',
        })).append($(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'Relax',
            class: 'btn',
            id: 'relax',
        })).append($(document.createElement('button')).prop({
            type:'button',
            innerHTML : 'Culture',
            class:'btn',
            id:'culture',
        })).append($(document.createElement('button')).prop({
            type:'button',
            innerHTML: 'explore',
            class: 'btn',
            id: 'explore',                                                              //Create all button's needed!
        })).append($(document.createElement('h1')).prop({
            type: 'text',
            innerHTML: 'You Feel Like',
            class: 'uFeelLike',
        }));                                                                            //Dont forget about headings
        $('.goBackButton').click(function(){
            window.location.href = 'http://127.0.0.1:5501/index.html';
        })
        $('#eatDrink').click(function(){
            window.location.href = 'http://127.0.0.1:5501/eatAndDrink.html'
        })
        $('#active').click(function(){
            window.location.href = 'http://127.0.0.1:5501/active.html';
        })
        $('#relax').click(function(){
            window.location.href = 'http://127.0.0.1:5501/relax.html'
        })
        $('#culture').click(function(){
            window.location.href = 'http://127.0.0.1:5501/culture.html'
        })
        $('#explore').click(function(){
            window.location.href = 'http://127.0.0.1:5501/explore.html'
        })
                                                                                // all function on the page !
}else if(window.location.href == 'http://127.0.0.1:5501/kogeMap.html'){              //checking
    $('<div/>',{
        class: 'kogeMapWillBeHere',
    }).appendTo('body');                        // here we need to insert the link for maps!
    $('<div/>',{
        class: 'goBackButton',
    }).appendTo('body');                    //go back button
    $('<div/>',{
        class: 'iconsMenu',
    }).appendTo('body');                        //icons menu on bottom
    $('.goBackButton').click(function(){
        window.location.href = 'http://127.0.0.1:5501/index.html';
    })
            
        
}else if(window.location.href == 'http://127.0.0.1:5501/eatAndDrink.html'){             //checking
    $('<div/>',{
        class: 'goBackButton',
    }).appendTo('body');                                                      //go back button
    $('<div/>',{
        class: 'eatDrinkContent',
    }).appendTo('body');                                                    //background img
    $('<h1/>',{
        text: 'Food & Drinks',
        class: 'headingForEatAndDrink',
    }).appendTo('body');                                               //heading
    $('body').append($(document.createElement('div')).prop({
        type: 'div',
        class:'firstSection',
    }))                                                              //container For Buttons
    $('.firstSection').append(
        $(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'cafes',
            class: 'btn',
            value: 'Super',
            id: 'eatDrink',
        })
    ).append($(document.createElement('button')).prop({
        type: 'button',
        innerHTML: 'bars',
        class: 'btn',
    })).append($(document.createElement('button')).prop({
        type: 'button',
        innerHTML: 'restaurant',
        class: 'btn',
    }));                                                             //buttons createed
    $('.goBackButton').click(function(){
        window.location.href = 'http://127.0.0.1:5501/personalized.html';
    })
}else if(window.location.href == 'http://127.0.0.1:5501/active.html'){
    $('<div/>',{
        class: 'backgroundActive',

    }).appendTo('body');                                                   //background img
    $('<div/>',{
        class: 'goBackButton',
    }).appendTo('body');                                                     //go back button
    $('body').append($(document.createElement('div')).prop({
        type: 'div',
        class:'firstSection',
    }))                                                             //container For Buttons
    $('.firstSection').append(
        $(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'Family',
            class: 'btn',
            value: 'Super',
            id: 'familybtn',
        })
    ).append($(document.createElement('button')).prop({
        type: 'button',
        innerHTML: 'Adults',
        class: 'btn',
        id: 'adultsbtn',
    }))
    $('<h1/>',{
        text: 'Active',
        class: 'headingForEatAndDrink',
    }).appendTo('body');                                                             //buttons createed
    $('#familybtn').click(function(){
        window.location.href = 'http://127.0.0.1:5501/family.html';
    })
    $('#adultsbtn').click(function(){
        window.location.href = 'http://127.0.0.1:5501/adults.html';
    })
    $('.goBackButton').click(function(){
        window.location.href = 'http://127.0.0.1:5501/personalized.html';
    })
}else if(window.location.href == 'http://127.0.0.1:5501/family.html'){
    $('<div/>',{
        class: 'backgroundFamily',

    }).appendTo('body');
    $('<div/>',{
        class: 'goBackButton',
    }).appendTo('body');
    $('body').append($(document.createElement('div')).prop({
        type: 'div',
        class:'firstSection',
    }))
    $('.firstSection').append(
        $(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'indoor',
            class: 'btn',
            id: 'indoorbtn',
        })
    ).append($(document.createElement('button')).prop({
        type: 'button',
        innerHTML: 'outdoor',
        class: 'btn',
        id: 'outdoorbtn',
    }))
    $('<h1/>',{
        text: 'Family',
        class: 'headingForEatAndDrink',
    }).appendTo('body');
    $('#indoorbtn').click(function(){
        window.location.href = 'http://127.0.0.1:5501/familyIndoor.html';
    })
    $('#outdoorbtn').click(function(){
        window.location.href = 'http://127.0.0.1:5501/familyOutdoor.html';
    })
    $('.goBackButton').click(function(){
        window.location.href = 'http://127.0.0.1:5501/active.html';
    })
}else if(window.location.href == 'http://127.0.0.1:5501/adults.html'){
    $('<div/>',{
        class: 'backgroundAdults',

    }).appendTo('body');
    $('<div/>',{
        class: 'goBackButton',
    }).appendTo('body');
    $('body').append($(document.createElement('div')).prop({
        type: 'div',
        class:'firstSection',
    }))
    $('.firstSection').append(
        $(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'indoor',
            class: 'btn',
            id: 'adultIndoor',
        })
    ).append($(document.createElement('button')).prop({
        type: 'button',
        innerHTML: 'outdoor',
        class: 'btn',
        id: 'outdoorAdults',
    }))
    $('<h1/>',{
        text: 'adults',
        class: 'headingForEatAndDrink',
    }).appendTo('body');
    $('#adultIndoor').click(function(){
        window.location.href = 'http://127.0.0.1:5501/adultIndoor.html';
    })
    $('#outdoorAdults').click(function(){
        window.location.href = 'http://127.0.0.1:5501/adultOutdoor.html';
    })
    $('.goBackButton').click(function(){
        window.location.href = 'http://127.0.0.1:5501/active.html';
    })
}else if(window.location.href == 'http://127.0.0.1:5501/relax.html'){
    $('<div/>',{
        class: 'backgroundRelax',

    }).appendTo('body');
    $('<div/>',{
        class: 'goBackButton',
    }).appendTo('body');
    $('body').append($(document.createElement('div')).prop({
        type: 'div',
        class:'firstSection',
    }))
    $('.firstSection').append(
        $(document.createElement('button')).prop({
            type: 'button',
            innerHTML: '1day trip',
            class: 'btn',
            id: 'oneDayTrip',
        })
    ).append($(document.createElement('button')).prop({
        type: 'button',
        innerHTML: 'moredays',
        class: 'btn',
        id: 'moreDays',
    }))
    $('<h1/>',{
        text: 'relax',
        class: 'headingForEatAndDrink relaxHeading',
    }).appendTo('body');
    $('#oneDayTrip').click(function(){
        window.location.href = 'http://127.0.0.1:5501/oneDay.html';
    })
    $('#moreDays').click(function(){
        window.location.href = 'http://127.0.0.1:5501/moreDays.html';
    })
    $('.goBackButton').click(function(){
        window.location.href = 'http://127.0.0.1:5501/personalized.html';
    })
}else if(window.location.href == 'http://127.0.0.1:5501/moreDays.html'){
    $('<div/>',{
        class: 'goBackButton',
    }).appendTo('body');
    $('<div/>',{
        class: 'backgroundRelax',

    }).appendTo('body');
    $('body').append($(document.createElement('div')).prop({
        type: 'div',
        class:'firstSection',
    }))
    $('.firstSection').append(
        $(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'Accomodation',
            class: 'btn',
            value: 'Super',
            id: 'Accomodation',
        })
    ).append($(document.createElement('button')).prop({
        type: 'button',
        innerHTML: 'food & Drinks',
        class: 'btn',
        id: 'foodDrinks',
    })).append($(document.createElement('button')).prop({
        type: 'button',
        innerHTML: 'beach',
        class: 'btn',
        id: 'beach',
    })).append($(document.createElement('button')).prop({
        type:'button',
        innerHTML : 'spa',
        class:'btn',
    })).append($(document.createElement('button')).prop({
        type:'button',
        innerHTML: 'forest',
        class: 'btn',
    })).append($(document.createElement('h1')).prop({
        type: 'text',
        innerHTML: 'relax',
        class: 'relaxHeadingMoreDays',
    })).append($(document.createElement('h2')).prop({
        innerHTML:'/more days/',
        class: 'oneDayTrip',
    }));
    $('.goBackButton').click(function(){
        window.location.href = 'http://127.0.0.1:5501/relax.html';
    })
   
}else if(window.location.href == 'http://127.0.0.1:5501/oneDay.html'){
    $('<div/>',{
        class: 'goBackButton',
    }).appendTo('body');

    $('<div/>',{
        class: 'backgroundRelax',
    }).appendTo('body');
    $('body').addClass('fullContent');
    $('body').append($(document.createElement('div')).prop({
        type: 'div',
        class:'firstSection',
    }))
    $('.firstSection').append(
        $(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'beach',
            class: 'btn',
            value: 'Super',
            id: 'beach',
        })
    ).append($(document.createElement('button')).prop({
        type: 'button',
        innerHTML: 'spa',
        class: 'btn',
        id: 'spa',
    })).append($(document.createElement('button')).prop({
        type: 'button',
        innerHTML: 'forest',
        class: 'btn',
        id: 'forest',
    })).append($(document.createElement('h1')).prop({
        type: 'text',
        innerHTML: 'relax',
        class: 'relaxHeading1Day',
    })).append($(document.createElement('h2')).prop({
        type:'text',
        innerHTML: '/1 day trip/',
        class: 'oneDayTrip',
    }));
    $('.goBackButton').click(function(){
        window.location.href = 'http://127.0.0.1:5501/relax.html';
    })
   
}else if(window.location.href == 'http://127.0.0.1:5501/culture.html'){
    $('<div/>',{
        class: 'goBackButton',
    }).appendTo('body');
    $('body').addClass('backgroundCulture');
    $('body').append($(document.createElement('div')).prop({
        type: 'div',
        class:'firstSection',
    }))
    $('.firstSection').append(
        $(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'indoor',
            class: 'btn',
            value: 'Super',
            id: 'indoorCulture',
        })
    ).append($(document.createElement('button')).prop({
        type: 'button',
        innerHTML: 'outdoor',
        class: 'btn',
        id: 'outdoorCulture',
    })).append($(document.createElement('h1')).prop({
        type: 'text',
        innerHTML: 'Culture',
        class: 'relaxHeadingMoreDays',
    }));
    $('.goBackButton').click(function(){
        window.location.href = 'http://127.0.0.1:5501/personalized.html';
    })
}else if(window.location.href == 'http://127.0.0.1:5501/explore.html'){
    $('<div/>',{
        class: 'goBackButton',
    }).appendTo('body');
    $('body').addClass('exploreBackground');
    $('body').append($(document.createElement('div')).prop({
        type: 'div',
        class:'firstSectionExplore',
    }))
    $('.firstSectionExplore').append(
        $(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'Treasure hunt for kids',
            class: 'btn',
            value: 'Super',
            id: 'treasure',
        })
    ).append($(document.createElement('button')).prop({
        type: 'button',
        innerHTML: 'riddle hunt',
        class: 'btn',
        id: 'foodDrinks',
    })).append($(document.createElement('button')).prop({
        type: 'button',
        innerHTML: 'nature hiking',
        class: 'btn',
        id: 'beach',
    })).append($(document.createElement('button')).prop({
        type:'button',
        innerHTML : 'bronze path',
        class:'btn',
    })).append($(document.createElement('button')).prop({
        type:'button',
        innerHTML: 'sightseing tour',
        class: 'btn',
    })).append($(document.createElement('button')).prop({
        type:'button',
        innerHTML: 'Local gastronomy tour',
        class: 'btn',
    })).append($(document.createElement('button')).prop({
        type:'button',
        innerHTML: 'outdoor sleeping',
        class: 'btn',
    })).append($(document.createElement('h1')).prop({
        type: 'text',
        innerHTML: 'explore',
        class: 'exploreHeading',
    }));
    $('.goBackButton').click(function(){
        window.location.href = 'http://127.0.0.1:5501/personalized.html';
    })

}

//Now i am out of JQuerry scope so i can write pure js 

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
    
});
console.log(window.location.href)