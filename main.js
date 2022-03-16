$(document).ready(function(){
    if(window.location.href == 'http://127.0.0.1:5501/index.html'){

 
    // Lets put the heading 
    $('<div/>',{
        id : 'main',
        class: 'fullContent',
    }).appendTo('body')
    $('<h1/>',{
        text: 'Come and Experience KØGE',
        class: 'heading',
    }).appendTo('#main');
    $('<div/>',{
        id: 'btnContainer',
    }).appendTo('.fullContent')
    $('<button/>',{
        text: "KØGE's map",
        class: 'btn',
        id: 'kogeMap',
    }).appendTo('#btnContainer');
    $('<button/>',{
        text: "Personalized map",
        class: 'btn',
        id: 'personalizedMap',
    }).appendTo('#btnContainer');
    $('#personalizedMap').click(function(){
        window.location.href = 'http://127.0.0.1:5501/personalized.html';
    })
    $("#kogeMap").click(function(){
        window.location.href = 'http://127.0.0.1:5501/kogeMap.html';
    })
    
}else if(window.location.href == 'http://127.0.0.1:5501/personalized.html'){
    
    
        $('<div/>',{
            class: 'goBackButton',
        }).appendTo('body');
        $('body').addClass('fullContent');
        $('body').append($(document.createElement('div')).prop({
            type: 'div',
            class:'firstSection',
        }))
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
            id: 'explore',
        })).append($(document.createElement('h1')).prop({
            type: 'text',
            innerHTML: 'You Feel Like',
            class: 'uFeelLike',
        }));
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
   
}else if(window.location.href == 'http://127.0.0.1:5501/kogeMap.html'){
    $('<div/>',{
        class: 'kogeMapWillBeHere',
    }).appendTo('body');
    $('<div/>',{
        class: 'goBackButton',
    }).appendTo('body');
    $('<div/>',{
        class: 'iconsMenu',
    }).appendTo('body');
    $('.goBackButton').click(function(){
        window.location.href = 'http://127.0.0.1:5501/index.html';
    })
            
        
}else if(window.location.href == 'http://127.0.0.1:5501/eatAndDrink.html'){
    $('<div/>',{
        class: 'goBackButton',
    }).appendTo('body');
    $('<div/>',{
        class: 'eatDrinkContent',
    }).appendTo('body');
    $('<h1/>',{
        text: 'Food & Drinks',
        class: 'headingForEatAndDrink',
    }).appendTo('body');
    $('body').append($(document.createElement('div')).prop({
        type: 'div',
        class:'firstSection',
    }))
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
    }));
    $('.goBackButton').click(function(){
        window.location.href = 'http://127.0.0.1:5501/personalized.html';
    })
}else if(window.location.href == 'http://127.0.0.1:5501/active.html'){
    $('<div/>',{
        class: 'backgroundActive',

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
    }).appendTo('body');
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
        text: 'Active',
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
        class: 'headingForEatAndDrink',
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
    $('body').addClass('fullContent');
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
        innerHTML: 'relax more days',
        class: 'uFeelLike',
    }));
    $('.goBackButton').click(function(){
        window.location.href = 'http://127.0.0.1:5501/relax.html';
    })
   
}else if(window.location.href == 'http://127.0.0.1:5501/oneDay.html'){
    $('<div/>',{
        class: 'goBackButton',
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
        innerHTML: 'relax for 1day trip',
        class: 'uFeelLike',
    }));
    $('.goBackButton').click(function(){
        window.location.href = 'http://127.0.0.1:5501/relax.html';
    })
   
}else if(window.location.href == 'http://127.0.0.1:5501/culture.html'){
    $('<div/>',{
        class: 'goBackButton',
    }).appendTo('body');
    $('body').addClass('fullContent');
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
        class: 'uFeelLike',
    }));
    $('.goBackButton').click(function(){
        window.location.href = 'http://127.0.0.1:5501/personalized.html';
    })
}else if(window.location.href == 'http://127.0.0.1:5501/explore.html'){
    $('<div/>',{
        class: 'goBackButton',
    }).appendTo('body');
    $('body').addClass('fullContent');
    $('body').append($(document.createElement('div')).prop({
        type: 'div',
        class:'firstSection',
    }))
    $('.firstSection').append(
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
        class: 'uFeelLike',
    }));
    $('.goBackButton').click(function(){
        window.location.href = 'http://127.0.0.1:5501/personalized.html';
    })
}
    
});
console.log(window.location.href)