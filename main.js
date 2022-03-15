$(document).ready(function(){
    // Lets put the heading 
    $('<div/>',{
        id : 'main',
        class: 'fullContent',
    }).appendTo('body')
    let heading = $('<div/>',{
        text: 'Come and Experience KØGE',
        class: 'heading',
    }).appendTo('.fullContent');
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
    
   
    $('#kogeMap').click(function(){
        if($('#main').hasClass('fullContent')){
            $('<div/>',{
                class: 'goBackButton',
            }).appendTo('body')
            
            $('.fullContent').addClass('show');
            $('.goBackButton').click(function(){
                $('#main').removeClass('show');
                $(this).removeClass('goBackButton');
            })
            
        }
    })
    $('#personalizedMap').click(function(){
        $('<div/>',{
            class: 'goBackButton',
        }).appendTo('body');
        $('.fullContent').addClass('show');
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
            })
        ).append($(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'Active',
            class: 'btn',
        })).append($(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'Relax',
            class: 'btn',
        })).append($(document.createElement('button')).prop({
            type:'button',
            innerHTML : 'Culture',
            class:'btn',
        })).append($(document.createElement('button')).prop({
            type:'button',
            innerHTML: 'Active',
            class: 'btn',
        })).append($(document.createElement('h1')).prop({
            type: 'text',
            innerHTML: 'You Feel Like',
            class: 'uFeelLike',
        }));
        $('.goBackButton').click(function(){
            $(this).removeClass('goBackButton');
            $('.firstSection').addClass('show');
            console.log('asdasd');
            $('#main').removeClass('show');
        })
    })
   
});