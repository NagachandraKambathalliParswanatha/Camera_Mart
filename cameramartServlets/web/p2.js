$(document).ready(function() {
    $.get("/jadrn053/servlets/AjaxDB", handleData);
});

function handleData(response){
    console.log(response);

    console.log(response);


    $('#content').html(response);
    console.log(response);
}

