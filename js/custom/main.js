
function fireRequestCar(){
    var timeFetch = $(this).attr("showTime");
    $(".act-request").hide();
    if (timeFetch != ""){
        $("#act-request-on").fadeIn();
    }
    else{
        $("#act-request-off").fadeIn();
    }

}

$(".act-req-car").click(fireRequestCar);
