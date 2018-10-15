var proj4_data;
var proj4_data_search;
/*var cart = new ShoppingCart("jadrn053");*/
$(document).ready(function() {
    $.get("/jadrn053/servlets/AjaxDB1", handleData);
    proj4_data = new Array();
   /* $('#count').text(cart.size());*/


    $('#searchbutton').on('click', function() {

        console.log("search");
        if($('#searchtextbox').val() != "")
            var query = "SELECT * FROM product where description like '%25"+$('#searchtextbox').val()+"%25' or features like '%25"+$('#searchtextbox').val()+"%25';";
        console.log(query);
        var url = "/jadrn053/servlets/GetProducts?queryValue="+query;
        $.get(url, handleDataQ);

    });

   /* function handleDataSearch(response)
    {

        $('#content').html(response);

        console.log(response);


        var tmpArray = explodeArray(response, ';');
        console.log(tmpArray);
        for (var i = 0; i < tmpArray.length; i++)
        {

            innerArray = explodeArray(tmpArray[i], '|');
            console.log(innerArray);

            proj4_data[i] = innerArray;
            console.log(proj4_data[i]);
        }



    }*/



    $('#nikon').on('click', function () {

        tmpString = "";
        for(var i=0; i < (proj4_data.length)-1; i++)
        {
            if(proj4_data[i][2] == 1)
            {
                console.log("Yes");

                tmpString += "<div class='col-md-4'><div class='card mb-4 box-shadow'>"
                tmpString += "<img class='card-img-top' width= '200px' height = '200px' id = 'resize' src=\"/~jadrn053/file_upload/_uploadDIR_/" + proj4_data[i][0] + ".jpg\" alt=\"" + proj4_data[i][9] + "\"" + " />"
                tmpString += "<p id = 'productcss'><u>Click here to view Product</u><span id = 'invisible' style='visibility: hidden'>" + proj4_data[i][0] + "</span></p>"
                tmpString += "<div class='card-body'> <div class='card-text'>" + proj4_data[i][3] + "</div> <div class='d-flex justify-content-between align-items-center'> <div class='btn-group'>"
                if (proj4_data[i][8] == 0) {
                    tmpString += "<div class='card-text'> Coming Soon</div>"
                }
                else {
                    tmpString += "<div class='card-text'> in stock</div>"
                }
                tmpString += "</div> <small class='text-muted'>" + "$" + proj4_data[i][7] + "</small> </div> </div> </div> </div>";

                var handle = document.getElementById('conten');
                handle.innerHTML = tmpString;
            }
        }

    });

    $('#Canon').on('click', function () {

        tmpString = "";
        for(var i=0; i < (proj4_data.length)-1; i++)
        {
            if(proj4_data[i][2] == 2)
            {
                console.log("Yes");

                tmpString += "<div class='col-md-4'><div class='card mb-4 box-shadow'>"
                tmpString += "<img class='card-img-top' width= '200px' height = '200px' id = 'resize' src=\"/~jadrn053/file_upload/_uploadDIR_/" + proj4_data[i][0] + ".jpg\" alt=\"" + proj4_data[i][9] + "\"" + " />"
                tmpString += "<p id = 'productcss'><u>Click here to view Product</u><span id = 'invisible' style='visibility: hidden'>" + proj4_data[i][0] + "</span></p>"
                tmpString += "<div class='card-body'> <div class='card-text'>" + proj4_data[i][3] + "</div> <div class='d-flex justify-content-between align-items-center'> <div class='btn-group'>"
                if (proj4_data[i][8] == 0) {
                    tmpString += "<div class='card-text'> Coming Soon</div>"
                }
                else {
                    tmpString += "<div class='card-text'> in stock</div>"
                }
                tmpString += "</div> <small class='text-muted'>" + "$" + proj4_data[i][7] + "</small> </div> </div> </div> </div>";

                var handle = document.getElementById('conten');
                handle.innerHTML = tmpString;
            }
        }

    });

    $('#Olympus').on('click', function () {

        tmpString = "";
        for(var i=0; i < (proj4_data.length)-1; i++)
        {
            if(proj4_data[i][2] == 3)
            {
                console.log("Yes");

                tmpString += "<div class='col-md-4'><div class='card mb-4 box-shadow'>"
                tmpString += "<img class='card-img-top' width= '200px' height = '200px' id = 'resize' src=\"/~jadrn053/file_upload/_uploadDIR_/" + proj4_data[i][0] + ".jpg\" alt=\"" + proj4_data[i][9] + "\"" + " />"
                tmpString += "<p id = 'productcss'><u>Click here to view Product</u><span id = 'invisible' style='visibility: hidden'>" + proj4_data[i][0] + "</span></p>"
                tmpString += "<div class='card-body'> <div class='card-text'>" + proj4_data[i][3] + "</div> <div class='d-flex justify-content-between align-items-center'> <div class='btn-group'>"
                if (proj4_data[i][8] == 0) {
                    tmpString += "<div class='card-text'> Coming Soon</div>"
                }
                else {
                    tmpString += "<div class='card-text'> in stock</div>"
                }
                tmpString += "</div> <small class='text-muted'>" + "$" + proj4_data[i][7] + "</small> </div> </div> </div> </div>";

                var handle = document.getElementById('conten');
                handle.innerHTML = tmpString;
            }
        }

    });

    $('#Lumix').on('click', function () {

        tmpString = "";
        for(var i=0; i < (proj4_data.length)-1; i++)
        {
            if(proj4_data[i][2] == 4)
            {
                console.log("Yes");

                tmpString += "<div class='col-md-4'><div class='card mb-4 box-shadow'>"
                tmpString += "<img class='card-img-top' width= '200px' height = '200px' id = 'resize' src=\"/~jadrn053/file_upload/_uploadDIR_/" + proj4_data[i][0] + ".jpg\" alt=\"" + proj4_data[i][9] + "\"" + " />"
                tmpString += "<p id = 'productcss'><u>Click here to view Product</u><span id = 'invisible' style='visibility: hidden'>" + proj4_data[i][0] + "</span></p>"
                tmpString += "<div class='card-body'> <div class='card-text'>" + proj4_data[i][3] + "</div> <div class='d-flex justify-content-between align-items-center'> <div class='btn-group'>"
                if (proj4_data[i][8] == 0) {
                    tmpString += "<div class='card-text'> Coming Soon</div>"
                }
                else {
                    tmpString += "<div class='card-text'> in stock</div>"
                }
                tmpString += "</div> <small class='text-muted'>" + "$" + proj4_data[i][7] + "</small> </div> </div> </div> </div>";

                var handle = document.getElementById('conten');
                handle.innerHTML = tmpString;
            }
        }

    });

    $('#Pentax').on('click', function () {

        tmpString = "";
        for(var i=0; i < (proj4_data.length)-1; i++)
        {
            if(proj4_data[i][2] == 5)
            {
                console.log("Yes");

                tmpString += "<div class='col-md-4'><div class='card mb-4 box-shadow'>"
                tmpString += "<img class='card-img-top' width= '200px' height = '200px' id = 'resize' src=\"/~jadrn053/file_upload/_uploadDIR_/" + proj4_data[i][0] + ".jpg\" alt=\"" + proj4_data[i][9] + "\"" + " />"
                tmpString += "<p id = 'productcss'><u>Click here to view Product</u><span id = 'invisible' style='visibility: hidden'>" + proj4_data[i][0] + "</span></p>"
                tmpString += "<div class='card-body'> <div class='card-text'>" + proj4_data[i][3] + "</div> <div class='d-flex justify-content-between align-items-center'> <div class='btn-group'>"
                if (proj4_data[i][8] == 0) {
                    tmpString += "<div class='card-text'> Coming Soon</div>"
                }
                else {
                    tmpString += "<div class='card-text'> in stock</div>"
                }
                tmpString += "</div> <small class='text-muted'>" + "$" + proj4_data[i][7] + "</small> </div> </div> </div> </div>";

                var handle = document.getElementById('conten');
                handle.innerHTML = tmpString;
            }
        }

    });

    $('#Leica').on('click', function () {

        tmpString = "";
        for(var i=0; i < (proj4_data.length)-1; i++)
        {
            if(proj4_data[i][2] == 6)
            {
                console.log("Yes");

                tmpString += "<div class='col-md-4'><div class='card mb-4 box-shadow'>"
                tmpString += "<img class='card-img-top' width= '200px' height = '200px' id = 'resize' src=\"/~jadrn053/file_upload/_uploadDIR_/" + proj4_data[i][0] + ".jpg\" alt=\"" + proj4_data[i][9] + "\"" + " />"
                tmpString += "<p id = 'productcss'><u>Click here to view Product</u><span id = 'invisible' style='visibility: hidden'>" + proj4_data[i][0] + "</span></p>"
                tmpString += "<div class='card-body'> <div class='card-text'>" + proj4_data[i][3] + "</div> <div class='d-flex justify-content-between align-items-center'> <div class='btn-group'>"
                if (proj4_data[i][8] == 0) {
                    tmpString += "<div class='card-text'> Coming Soon</div>"
                }
                else {
                    tmpString += "<div class='card-text'> in stock</div>"
                }
                tmpString += "</div> <small class='text-muted'>" + "$" + proj4_data[i][7] + "</small> </div> </div> </div> </div>";

                var handle = document.getElementById('conten');
                handle.innerHTML = tmpString;
            }
        }

    });

    $('#Sony').on('click', function () {

        tmpString = "";
        for(var i=0; i < (proj4_data.length)-1; i++)
        {
            if(proj4_data[i][2] == 7)
            {
                console.log("Yes");

                tmpString += "<div class='col-md-4'><div class='card mb-4 box-shadow'>"
                tmpString += "<img class='card-img-top' width= '200px' height = '200px' id = 'resize' src=\"/~jadrn053/file_upload/_uploadDIR_/" + proj4_data[i][0] + ".jpg\" alt=\"" + proj4_data[i][9] + "\"" + " />"
                tmpString += "<p id = 'productcss'><u>Click here to view Product</u><span id = 'invisible' style='visibility: hidden'>" + proj4_data[i][0] + "</span></p>"
                tmpString += "<div class='card-body'> <div class='card-text'>" + proj4_data[i][3] + "</div> <div class='d-flex justify-content-between align-items-center'> <div class='btn-group'>"
                if (proj4_data[i][8] == 0) {
                    tmpString += "<div class='card-text'> Coming Soon</div>"
                }
                else {
                    tmpString += "<div class='card-text'> in stock</div>"
                }
                tmpString += "</div> <small class='text-muted'>" + "$" + proj4_data[i][7] + "</small> </div> </div> </div> </div>";

                var handle = document.getElementById('conten');
                handle.innerHTML = tmpString;
            }
        }

    });

    $('#AllProducts').on('click', function ()
    {

        tmpString = "";
        for(var i=0; i < (proj4_data.length)-1; i++)
        {
            console.log("Yes");

            tmpString += "<div class='col-md-4'><div class='card mb-4 box-shadow'>"
            tmpString += "<img class='card-img-top' width= '200px' height = '200px' id = 'resize' src=\"/~jadrn053/file_upload/_uploadDIR_/" + proj4_data[i][0] + ".jpg\" alt=\"" + proj4_data[i][9] + "\"" + " />"
            tmpString += "<p id = 'productcss'><u>Click here to view Product</u><span id = 'invisible' style='visibility: hidden'>" + proj4_data[i][0] + "</span></p>"
            tmpString += "<div class='card-body'> <div class='card-text'>" + proj4_data[i][3] + "</div> <div class='d-flex justify-content-between align-items-center'> <div class='btn-group'>"
            if (proj4_data[i][8] == 0) {
                tmpString += "<div class='card-text'> Coming Soon</div>"
            }
            else {
                tmpString += "<div class='card-text'> in stock</div>"
            }
            tmpString += "</div> <small class='text-muted'>" + "$" + proj4_data[i][7] + "</small> </div> </div> </div> </div>";

            var handle = document.getElementById('conten');
            handle.innerHTML = tmpString;
        }

    });

    $('#Lumix').on('click', function () {

        tmpString = "";
        for(var i=0; i < (proj4_data.length)-1; i++)
        {
            if(proj4_data[i][2] == 4)
            {
                console.log("Yes");

                tmpString += "<div class='col-md-4'><div class='card mb-4 box-shadow'>"
                tmpString += "<img class='card-img-top' width= '200px' height = '200px' id = 'resize' src=\"/~jadrn053/file_upload/_uploadDIR_/" + proj4_data[i][0] + ".jpg\" alt=\"" + proj4_data[i][9] + "\"" + " />"
                tmpString += "<p id = 'productcss'><u>Click here to view Product</u><span id = 'invisible' style='visibility: hidden'>" + proj4_data[i][0] + "</span></p>"
                tmpString += "<div class='card-body'> <div class='card-text'>" + proj4_data[i][3] + "</div> <div class='d-flex justify-content-between align-items-center'> <div class='btn-group'>"
                if (proj4_data[i][8] == 0) {
                    tmpString += "<div class='card-text'> Coming Soon</div>"
                }
                else {
                    tmpString += "<div class='card-text'> in stock</div>"
                }
                tmpString += "</div> <small class='text-muted'>" + "$" + proj4_data[i][7] + "</small> </div> </div> </div> </div>";

                var handle = document.getElementById('conten');
                handle.innerHTML = tmpString;
            }
        }

    });

    $( '#conten' ).delegate('p', 'click', function() {
        	var skuDetails = $(this).text();
        	console.log(skuDetails);
        	var skuSel = skuDetails.substring(skuDetails.length -7);

            		localStorage.setItem('SelectedSku', skuSel);
            		var ViewProduct = "http://jadran.sdsu.edu/jadrn053/ViewProduct.html";
            		window.location.href = ViewProduct;

    	});

});


function handleDataQ(response)
{
    proj4_data_search = new Array();
    $('#content').html(response);
    console.log(response);
    var tmpArray = explodeArrays(response, ';');
    console.log(tmpArray);
    for (var i = 0; i < tmpArray.length; i++)
    {

        innerArray = explodeArrays(tmpArray[i], '|');
        console.log(innerArray);

        proj4_data_search[i] = innerArray;
        console.log(proj4_data_search[i]);
    }
    all_product();


}

function explodeArrays(item, delimiter) {

    console.log("HI1");

    tempArray = new Array(1);
    console.log("HI2");

    var Count = 0;
    var tempString = new String(item);


    while (tempString.indexOf(delimiter) > 0)
    {
        console.log("HI3");

        tempArray[Count] = tempString.substr(0, tempString.indexOf(delimiter));


        tempString = tempString.substr(tempString.indexOf(delimiter) + 1, tempString.length - tempString.indexOf(delimiter) + 1);


        Count = Count + 1

    }
    tempArray[Count] = tempString;
    return tempArray;

}

function all_product()
{
    console.log("All");
    tmpString = "";
    for(var i=0; i < (proj4_data_search.length)-1; i++)
    {
        console.log("Yes");

        tmpString+= "<div class='col-md-4'><div class='card mb-4 box-shadow'>"
        tmpString+= "<img class='card-img-top' width= '200px' height = '200px' id = 'resiz' src=\"/~jadrn053/file_upload/_uploadDIR_/"+ proj4_data_search[i][0]+".jpg\" alt=\""+proj4_data_search[i][9]+"\""+" />"
        tmpString+= "<p id = 'productcss'><u>Click here to view Product</u><span id = 'invisible' style='visibility: hidden'>" + proj4_data_search[i][0] + "</span></p>"
        tmpString+= "<div class='card-body'> <div class='card-text'>" + proj4_data_search[i][3] + "</div> <div class='d-flex justify-content-between align-items-center'> <div class='btn-group'>"
        if(proj4_data_search[i][8] == 0)
        {
            tmpString+= "<div class='card-text'> Coming Soon</div>"
        }
        else
        {
            tmpString+= "<div class='card-text'> in stock</div>"
        }
        tmpString+= "</div> <small class='text-muted'>" + "$"  + proj4_data_search[i][7] + "</small> </div> </div> </div> </div>";

        var handle = document.getElementById('conten');
        handle.innerHTML = tmpString;
    }

 /*   if(proj4_data_search.length <1)
    {
        tmpString +=
    }*/
}

function handleData(response)
{

    $('#content').html(response);

    console.log(response);


    var tmpArray = explodeArray(response, ';');
    console.log(tmpArray);
    for (var i = 0; i < tmpArray.length; i++)
    {

        innerArray = explodeArray(tmpArray[i], '|');
        console.log(innerArray);

        proj4_data[i] = innerArray;
        console.log(proj4_data[i]);
    }
    all_products();

}

function explodeArray(item, delimiter) {

    console.log("HI1");

    tempArray = new Array(1);
    console.log("HI2");

    var Count = 0;
    var tempString = new String(item);


    while (tempString.indexOf(delimiter) > 0)
    {
        console.log("HI3");
        tempArray[Count] = tempString.substr(0, tempString.indexOf(delimiter));
        tempString = tempString.substr(tempString.indexOf(delimiter) + 1, tempString.length - tempString.indexOf(delimiter) + 1);
        Count = Count + 1
    }
    tempArray[Count] = tempString;
    return tempArray;

}

function all_products()
{
    console.log("All");
    tmpString = "";
    for(var i=0; i < (proj4_data.length)-1; i++)
    {
        console.log("Yes");

        tmpString+= "<div class='col-md-4'><div class='card mb-4 box-shadow'>"
        tmpString+= "<img class='card-img-top' width= '200px' height = '200px' id = 'resiz' src=\"/~jadrn053/file_upload/_uploadDIR_/"+ proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][9]+"\""+" />"
        tmpString+= "<p id = 'productcss'><u>Click here to view Product</u><span id = 'invisible' style='visibility: hidden'>" + proj4_data[i][0] + "</span></p>"
        tmpString+= "<div class='card-body'> <div class='card-text'>" + proj4_data[i][3] + "</div> <div class='d-flex justify-content-between align-items-center'> <div class='btn-group'>"
        if(proj4_data[i][8] == 0)
        {
            tmpString+= "<div class='card-text'> Coming Soon</div>"
        }
        else
        {
            tmpString+= "<div class='card-text'> in stock</div>"
        }
        tmpString+= "</div> <small class='text-muted'>" + "$"  + proj4_data[i][7] + "</small> </div> </div> </div> </div>";

        var handle = document.getElementById('conten');
        handle.innerHTML = tmpString;
    }
}
