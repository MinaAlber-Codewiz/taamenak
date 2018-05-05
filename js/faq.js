// WHEN PAGE IS SUCCESSFULLY LOADED
$(document).ready(function(){

    // CACHE DOM ELEMENTS
    var faqQuestionsContainer = $('.faq-questions');
    var faqQuestion = $('.faq-question');
    var expandCollapseQuestion = $('.expand-collapse-question');

    // IF EXPAND OR COLLAPSE QUESTION IS CLICKED
    expandCollapseQuestion.click(function(){
        $(this).closest('div.faq-question').toggleClass('question-expanded');
    });

});
