
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

$('.nav-modal-open').on('click', function(e){

    e.preventDefault();
    
    let elem = $(this).attr('rel');

    $('.modal-body').html($('#'+elem).html());

    $('.modal-header h5.modal-title').html($(this).text());

    let myModal = new bootstrap.Modal($('#modalId'));

    myModal.show();


})

function validate ( elem ){
    if( elem.val() == '') {

        console.log('O campo de '+ elem.attr('name') + ' é obrigatório');

        elem.parent().find('.mb-3').show();

        elem.addClass('invalid');

        return false


    }else {
        elem.parent().find('.mb-3').hide();
        elem.removeClass('invalid');
    }
}
