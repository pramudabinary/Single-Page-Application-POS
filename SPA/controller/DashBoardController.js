$("#customerbtn").click(function () {
    $("#txtCusID").focus();
    $("#home").css("display", "none");
    $("#customer").css("display", "block");
    $("#item").css("display", "none");
    $("#order").css("display", "none");
});

$("#homebtn").click(function () {
    $("#home").css("display", "block");
    $("#item").css("display", "none");
    $("#order").css("display", "none");
    $("#customer").css("display", "none");
});
$("#itembtn").click(function () {
    $("#home").css("display", "none");
    $("#customer").css("display", "none");
    $("#item").css("display", "block");
    $("#order").css("display", "none");
});

$("#orderbtn").click(function () {
    $("#home").css("display", "none");
    $("#customer").css("display", "none");
    $("#item").css("display", "none");
    $("#order").css("display", "block");
});