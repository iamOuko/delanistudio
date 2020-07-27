$(document).ready(function () {

    // $('.card#design').hover(

    //     function () {
    //         $("#designIcon").hide();
    //         $("#designText").show();
    //     },

    //     function () {
    //         $("#designText").hide();
    //         $("#designIcon").show();
    //     }
    // );

    $("#designIcon").click(function () {
        $("#designIcon").hide();
        $("#designText").toggle();
    });


});