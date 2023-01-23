
$(document).ready(function(){
    $('.owl-carousel').owlCarousel();

    let itens = $('.featured-item');

    $('.featured-item a').addClass('btn btn-dark');

    $('.featured-item:first h4').prepend('<span class="badge bg-secondary">Novo</span>');

    

})

$('.featured-item h4').click(function(){
        $(this).css({
        'color': '#ff0',
        'background-color': 'red'
    }) 

})

$('.featured-item:first a').on('click', function(event){

    event.preventDefault();

    alert('Produto esgotado');

})