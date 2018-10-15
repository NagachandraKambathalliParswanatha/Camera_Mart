var innerArray;
var valu;
var cart = new ShoppingCart("jadrn053");
$(document).ready(function(){
	var SelectedSku = localStorage.getItem("SelectedSku");
	var url = "/jadrn053/servlets/DisplayBySku?SelectedSku="+SelectedSku;
	$.get(url, handleData);
    innerArray = new Array();
    valu = new Array();
    $('#count').text(cart.size());
    $('#rehide').hide();
    $('#SayMes').hide();
    $('#SayMes1').hide();
    $('#SayMes2').hide();

	 function handleData(response)
        {
            console.log("js2");
            $('#contento').html(response);
            console.log(response);
            var tmpArray = explodeArray(response, ';');
            console.log(tmpArray);
            for (var i = 0; i < 1; i++)
            {
                innerArray = explodeArray(tmpArray[i], '|');
                console.log(innerArray);


            }
             all_products()
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
            tmpString = "";

            console.log("Yes");

            tmpString += "<div class='col-md-8'><div class='card mb-8 box-shadow'>"
            tmpString += "<img class='card-img-top' id = 'resize' src=\"/~jadrn053/file_upload/_uploadDIR_/" + innerArray[0] + ".jpg\" alt=\"" + innerArray[9] + "\"" + "  />"
            tmpString += "<div class='card-body'> <div class='card-text'>" + "DESCRIPTION:  " + innerArray[4] + "</div>" + "<div class='card-text'>" + "FEATURES:  " + innerArray[5] + "</div>"
            tmpString += "<div class='card-text'>" + "MANUFACTURERID:  " + innerArray[3] + "</div>" + "<div class='d-flex justify-content-between align-items-center'><div class='btn-group'>"
            if (innerArray[8] == 0) {
                tmpString += "<div class='card-text'> ComingSoon  </div>"

            }
            else {
                tmpString += "<div class='card-text'>" + "Last " + innerArray[8] + " in stock" + "</div>"
            }

            tmpString += "</div> <small class='text-muted'>" + "$" + innerArray[7] + "</small> </div> </div>";
            /*tmpString += "<div class='col-md-8'><div class='card mb-8 box-shadow'>"*/
            /*tmpString += "Quantity:<input class='q_box' id='q" + innerArray[0] + "' type='number' value='1' min='1' style=\"width:200px;\" style=\"height:5px;\"><br></br>"*/
            tmpString+= "<button onclick='cartadd(\""+innerArray[0]+"\")' id="+innerArray[0]+" type='button' class='btn btn-secondary my-2' style=\"width:200px;\" style=\"height:5px;\">Add to Cart</button><br></br> </div> </div>"
            var handle = document.getElementById('contento');
            handle.innerHTML = tmpString;
        }



});

function cartadd(val) {

    $('#rehide').show();
    tempString = "";
    if (innerArray[8] == 0)
    {
        $('#SayMes2').show();
        tempString += "<div class='col-md-8'><div class='card mb-8 box-shadow'>"
        tempString += "<p><a href='proj2.html' class='btn btn-primary my-2'>ContinueShopping</a></p></div></div>"
        var handle = document.getElementById('rehide');
        handle.innerHTML = tempString;
        return;
    }
    else {
        tempString += "<div class='col-md-8'><div class='card mb-8 box-shadow'>"
        tempString += "<p><a href='proj2.html' class='btn btn-primary my-2'>Coninue Shopping</a><a href='CartView.html' class='btn btn-secondary my-2'>Go to Cart</a></p></div></div>"
        var handle = document.getElementById('rehide');
        handle.innerHTML = tempString;
    }

    console.log("Hellllo");
    console.log(val);
    sku= val;
   /* quant= "q"+ sku;
    quant=$('#'+quant).val();*/
    console.log(quant);
    /*if(quant <= 0)
    {
        $('#SayMes1').show();
        $('#SayMes').hide();
        return;
    }*/
    var quant = 1;
    for(var i=0; i < innerArray.length; i++) {
        if(innerArray[0] == sku ) {
            prc=innerArray[7];
            $('#SayMes').show();
            $('#SayMes1').hide();
            break;
        }
    }
    cart.add(sku,quant,prc);
    $('#count').text(cart.size());

    /*updateDisplay();*/
}

/*function updateDisplay() {
    console.log("DisplayUpdate")
    var cartArrays = cart.getCartArray();
    var toWrites="";
    var TotalPrice = 0;
    var TaxPrice = 0;
    var ShippingPrice = 0;
    var productQty = 0;
    var productPrice = 0;
    var productTitle;
    if(cart.size() > 0) {
        var toWrites = "<table class='displaycart'><tr><th><h5>Product</h5></th><th><h5>Quantity</h5></th><th><h5>Price</h5></th><th></th><th></th><th></th></tr>";

        for(i=0; i < cartArrays.length; i++) {

            productQty += parseInt(cartArrays[i][1]);
            itemPrice = parseFloat(cartArrays[i][2]);
            itemPrice = Math.round(itemPrice * 100)/100;
            productPrice += parseFloat(cartArrays[i][2]);
            productPrice = Math.round(productPrice * 100)/100;
            productTitle= $.trim(cartArrays[i][3]);


            toWrites += "<tr><td class='frow'>"+cartArrays[i][3]+"</td>";
            toWrites += "<td>"+cartArrays[i][1]+"</td>";
            toWrites += "<td class='p_row'>$"+Math.round(cartArrays[i][2] * 100)/100+"</td>";
            toWrites += "<td><input type='button' id="+cartArrays[i][0]+" value='Remove' name='delete_button' class='deletebutton'/></td>";
            toWrites += "<td><label>Quantity </label><input class='q_box1' type='number' value='1' min='1' id= 'q"+cartArrays[i][0]+"'/></td><td><input type='button'id="+cartArrays[i][0]+" value='Update' name='updateQty' class='qbutton'/></td></tr>";
            console.log("DisplayUpdate1")


        }
        ShippingPrice = 5;/!*parseInt(productQty, 10) * 2;*!/
        prodPrice = ShippingPrice + productPrice;
        TaxPrice = parseFloat(prodPrice * 0.0775);
        TaxPrice = Math.round(TaxPrice * 100)/100;
        TotalPrice = parseFloat(productPrice)+  parseFloat(TaxPrice) + parseFloat(ShippingPrice);
        TotalPrice = Math.round(TotalPrice * 100)/100;
        toWrites +="<tr><td>Shipping Charges:&nbsp;&nbsp;&nbsp;&nbsp;$"+ShippingPrice+"</td><td>Tax: &nbsp;&nbsp;&nbsp;&nbsp;$"+TaxPrice+"</td><td>Total: &nbsp;&nbsp;&nbsp;&nbsp;$"+TotalPrice+"</td></tr></table>";
        toWrites += "<input type='button' id='c_shop' class='orderbuttons' value='Continue Shopping'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' id='c_checkout' value='Proceed to Check Out' class='orderbuttons'</table>";
        console.log("DisplayUpdate2")
    }
    else
    {
        toWrites += "<h3>Your cart appears to be empty Please visit the Products page\n" +
            "to add items to your cart</h3>";
        console.log("DisplayUpdate3")
    }
    $('#cart-inline').html(toWrites);





}*/
/*function cartadd(val){
    sku= val;
    quant= "q"+sku;
    quant=$('#'+quant).val();
    for(var i=0; i < proj4_data.length; i++) {

        if(proj4_data[i][0] == sku ) {
            prc=proj4_data[i][6];
            ptitle= proj4_data[i][2]
            break;
        }
    }
    cart.add(sku,quant,prc,ptitle);
    updateDisplay();
}*/
