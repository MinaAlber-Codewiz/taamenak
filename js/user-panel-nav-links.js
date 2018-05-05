// WHEN PAGE IS SUCCESSFULLY LOADED
$(document).ready(function(){

    // CACHE DOM ELEMENTS\
    var link = $('.user-panel-link');

    link.click(function(){
        $(this).parent().toggleClass('user-panel-link-expanded');
    })

});
