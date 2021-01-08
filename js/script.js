
$(document).ready(function() {
    //.FUNZIONE NEXT
    $('.slider .next').click(next);
    //.FUNZIONE PREV
    $('.slider .prev').click(prev);

    //.FUNZIONE DOT
    $('.cercle i').eq(0).click(function() {
        $('.img-container img').removeClass('active');
        $('.img-container img').eq(0).addClass('active');
        $('.cercle i').removeClass('active-cercle');
        $('.cercle i').eq(0).addClass('active-cercle');
    });

    $('.cercle i').eq(1).click(function() {
        $('.img-container img').removeClass('active');
        $('.img-container img').eq(1).addClass('active');
        $('.cercle i').removeClass('active-cercle');
        $('.cercle i').eq(1).addClass('active-cercle');
    });

    $('.cercle i').eq(2).click(function() {
        $('.img-container img').removeClass('active');
        $('.img-container img').eq(2).addClass('active');
        $('.cercle i').removeClass('active-cercle');
        $('.cercle i').eq(2).addClass('active-cercle');
    });

    $('.cercle i').eq(3).click(function() {
        $('.img-container img').removeClass('active');
        $('.img-container img').eq(3).addClass('active');
        $('.cercle i').removeClass('active-cercle');
        $('.cercle i').eq(3).addClass('active-cercle');
    });

});




function next() {

    //.. dichiaro le variabili
    var imgActive = $('img.active');
    var cercleActive = $('.cercle i.active-cercle');

    
    //.rimuovo la classe active

    imgActive.removeClass('active');
    cercleActive.removeClass('active-cercle');
    
    //. aggiungo alla nuova img la classe active
    if (imgActive.hasClass('last')) {
        $('img.first').addClass('active');
    } else {
        imgActive.next().addClass('active');
    }

    //. aggiungo al nuovo cercle la classe active
    if (cercleActive.hasClass('last')) {
        $('.cercle i.first').addClass('active-cercle')
    } else {
        cercleActive.next().addClass('active-cercle');
    }
};

function prev() {

    //.. dichiaro le variabili
    var imgActive = $('img.active');
    var cercleActive = $('.cercle i.active-cercle');

    
    //.rimuovo la classe active

    imgActive.removeClass('active');
    cercleActive.removeClass('active-cercle');
    
    //. aggiungo alla nuova img la classe active
    if (imgActive.hasClass('first')) {
        $('img.last').addClass('active');
    } else {
        imgActive.prev().addClass('active');
    }

    //. aggiungo al nuovo cercle la classe active
    if (cercleActive.hasClass('first')) {
        $('.cercle i.last').addClass('active-cercle')
    } else {
        cercleActive.prev().addClass('active-cercle');
    }
};
