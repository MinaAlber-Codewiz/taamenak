// WHEN PAGE IS SUCCESSFULLY LOADED
$(document).ready(function(){

    var expiringPolicies = $('.expiring-policies-checkbox');
    var expiringPoliciesDays = $('.expiring-policies-days');

    expiringPolicies.click(function(){
        if($(this).is(':checked')){
            expiringPoliciesDays.fadeIn();
        } else{
            expiringPoliciesDays.fadeOut();
        }
    });

});
