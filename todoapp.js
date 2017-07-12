$(document).ready(function(){
    $('#submittodo').click(function(){
        $('#todoform').submit()
    })

    $('#todoform').submit(function(e){
        e.preventDefault();
    })
    $('.todo').hover(function(){
        $(this).find('.close').css('visibility', 'visible')
    }, function(){
        $(this).find('.close').css('visibility', 'hidden')
    })
})