$(document).ready(function () {

    $("#designText").hide();
    $("#designIcon").click(function () {
        $("#designIcon").hide();
        $("#designText").show();
    });
    $("#designText").click(function () {
        $("#designText").hide();
        $("#designIcon").show();
    });


    $("#developmentText").hide();
    $("#developmentIcon").click(function () {
        $("#developmentIcon").hide();
        $("#developmentText").show();
    });
    $("#developmentText").click(function () {
        $("#developmentText").hide();
        $("#developmentIcon").show();

    });

    $("#productText").hide();
    $("#productIcon").click(function () {
        $("#productIcon").hide();
        $("#productText").show();
    });
    $("#productText").click(function () {
        $("#productText").hide();
        $("#productIcon").show();

    });
    $("#1").hover(function () {
        $("#1").fadeOut();
        $("#1").fadeIn();
    });


    $("#2").hover(function () {
        $("#2").fadeOut();
        $("#2").fadeIn();
    });
    $("#3").hover(function () {
        $("#3").fadeOut();
        $("#3").fadeIn();
    });
    $("#4").hover(function () {
        $("#4").fadeOut();
        $("#4").fadeIn();
    });
    $("#5").hover(function () {
        $("#5").fadeOut();
        $("#5").fadeIn();
    });
    $("#6").hover(function () {
        $("#6").fadeOut();
        $("#6").fadeIn();
    });
    $("#7").hover(function () {
        $("#7").fadeOut();
        $("#7").fadeIn();
    });
    $("#8").hover(function () {
        $("#8").fadeOut();
        $("#8").fadeIn();
    });

    $("#target").submit(function (event) {
        alert('** ' + name + '  we have received your message. Thank you for reaching out to us. **')
        event.preventDefault();
    });

});


// $('#1').hover(function () {
//     $(this).stop().animate({
//         opacity: .4
//     }, 200);
//     $('.text').removeClass('hide');
// }, function () {
//     $(this).stop().animate({
//         opacity: 1
//     }, 500);
//     $('.text').addClass('hide');
// });


















