var cart = new ShoppingCart("jadrn053");
$(document).ready(function ()
{
    Name = localStorage.getItem("Name");
    Address = localStorage.getItem("Address");
    city = localStorage.getItem("city");
    state = localStorage.getItem("state");
    zip = localStorage.getItem("zip");

    updateDisplay();

});

function updateDisplay() {
    console.log("DisplayUpdate")
    var cartArrays = cart.getCartArray();
    var toWrites="";
    var TotalPrice = 0;
    var TaxPrice = 0;
    var ShippingPrice = 0;
    var productQty = 0;
    var productPrice = 0;
    var prodPrice = 0;
    if(cart.size() > 0) {

        var  toWrites = "<table class='table table-striped'><thead><tr><th scope='col'>Product</th><th scope='col'></th><th scope='col'>Quantity</th><th scope='col' class='text-center'></th><th scope='col'class='text-center'>Price </th><th></th><th> </th></tr></thead>";

        for(i=0; i < cartArrays.length; i++) {

            productQty += parseInt(cartArrays[i][1]);
            itemPrice = parseFloat(cartArrays[i][2]);
            itemPrice = Math.round(itemPrice * 100)/100;
            productPrice += parseFloat(cartArrays[i][2]);
            productPrice = Math.round(productPrice * 100)/100;
            /*productTitle= $.trim(cartArrays[i][3]);*/

            toWrites+= " <tbody><tr><td><img class='card-img-top'  id = 'resize' src=\"/~jadrn053/file_upload/_uploadDIR_/"+ cartArrays[i][0]+".jpg\" alt=\""+Image+"\""+" /></td>";


            toWrites += "<td></td>";
            toWrites += "<td>"+cartArrays[i][1]+"</td>";
            toWrites += "<td></td>";
            toWrites += "<td class='p_row'>$"+Math.round(cartArrays[i][2] * 100)/100+"</td>";
            /*
                        toWrites += "<td><input type='button' id="+cartArrays[i][0]+" value='Remove' name='delete_button' class='deletebutton'/></td>";
                        <td class="text-right"><button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
                        <td><input class="form-control" type="text" value="1" /></td>
            */
           /* toWrites += "<td><input class='form-control' type='number' value='1' min='1' id= 'q"+cartArrays[i][0]+"'/></td><td><input type='button'id="+cartArrays[i][0]+" value='Update' name='updateQty' class='qbutton'/></td>";
            toWrites += "<td class='text-right'><input type='button' id= "+cartArrays[i][0]+ " value='Remove' name='delete_button' class='deletebutton'/></td></tr>";*/
            console.log("DisplayUpdate1")

        }
        ShippingPrice = 5;/*parseInt(productQty, 10) * 2;*/
        prodPrice = ShippingPrice + productPrice;
        TaxPrice = parseFloat(prodPrice * 0.0775);
        TaxPrice = Math.round(TaxPrice * 100)/100;
        TotalPrice = parseFloat(productPrice)+  parseFloat(TaxPrice) + parseFloat(ShippingPrice);
        TotalPrice = Math.round(TotalPrice * 100)/100;
        toWrites += "<tr><td></td><td></td><td></td><td></td><td></td><td>Shiping</td><td class='text-right'>$"+ShippingPrice+"</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td>tax</td><td class='text-right'>$"+TaxPrice+"</td></tr> <tr> <td></td> <td></td> <td></td> <td></td> <td></td> <td><strong>Total</strong></td> <td class='text-right'><strong>$"+TotalPrice+"</strong></td></tr>";
/*
        var toWrite  = "<div class='row'><div class='col-sm-12  col-md-6'><button class='btn btn-block btn-light' onclick= \"location.href = 'proj2.html';\" id = 'continue'>Continue Shopping</button></div><div class='col-sm-12 col-md-6 text-right'><button class='btn btn-block btn-success text-uppercase' onclick= \"location.href = 'orderonline.html';\" id = 'CheckOut'>Checkout</button></div></div>";
*/

        console.log("DisplayUpdate2")
    }


    $('#ordersummary').html(toWrites);
    /*$('#count').text(cart.size());*/




}