// WHEN PAGE IS SUCCESSFULLY LOADED
$(document).ready(function(){

    // CACHE DOM ELEMENTS
    var openCompanyDetailsBtn = $('.open-company-more-details');
    var companyMoreDetails = $('.company-more-details');

    openCompanyDetailsBtn.click(function(){
        $(this).next().addClass('expand-company-details');
    });

});
