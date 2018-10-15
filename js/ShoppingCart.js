/*
     kambathalli parswanatha, Nagachandra
     Jadran Id: Jadrn053
     Project #2
     spring 2018
*/
function ShoppingCart(owner) {
    this.owner = $.trim(owner);
    this.skuArray = new Array();
    this.qtyArray = new Array();
    this.prcArray = new Array();
    /*this.titleArray = new Array();*/


    this.getCookieValues = function() {
        var raw_string = document.cookie;
        var arr = new Array();
        if(raw_string == undefined)
            return;
        var tmp = raw_string.split(";");
        var myValue = null;
        for(i=0; i < tmp.length; i++)
            if(tmp[i].indexOf(owner) != -1)
                myValue = tmp[i].split("=");
        if(!myValue)
            return;
        arr = myValue[1].split("||");
        for(i=0; i < arr.length; i++) {
            var pair = arr[i].split("|");
            if(pair[0] == undefined || pair[1] == undefined || pair[2] == undefined) continue;
            this.skuArray[i] = pair[0];
            this.qtyArray[i] = pair[1];
            this.prcArray[i] = pair[2];
            /*this.titleArray[i] = pair[3];*/
            console.log("getcookie");
        }
    }


    this.writeCookie = function() {
        var toWrite = this.owner+"=";
        for(i=0; i < this.skuArray.length; i++)
            toWrite += this.skuArray[i] + "|" + this.qtyArray[i] +  "|" + this.prcArray[i]  + "||";//
        toWrite = toWrite.substring(0,toWrite.length - 2);
        document.cookie = toWrite;
        console.log("writecookie");
    }


    this.add = function(sku, quant, prc) {
        sku = $.trim(sku);
        quant = $.trim(quant);
        prc = $.trim(prc);
       /* title= $.trim(title);*/
        this.getCookieValues();
        var found = false;
        for(i=0; i < this.skuArray.length; i++)
            if(this.skuArray[i] == sku) {
                this.qtyArray[i] = parseInt(quant,10) + parseInt(this.qtyArray[i],10);
                this.prcArray[i] = parseFloat(parseInt(this.qtyArray[i], 10) * prc);
                /*this.titleArray[i] = title;*/
                found = true;
            }
            console.log("addcookie");
        if(!found) {
            this.skuArray.push(sku);
            this.qtyArray.push(quant);
            this.prcArray.push(parseFloat(parseInt(quant, 10) * prc));
            /*this.titleArray.push(title);*/
            console.log("addcookie1");
        }
        this.writeCookie();
    }

    this.setQuantity = function(sku, quant, prc) {
        sku = $.trim(sku);
        var found = false;
        if(sku == "") return;
        quant = $.trim(quant);
        prc = $.trim(prc);
        /*title= $.trim(title);*/
        this.getCookieValues();

        for(i=0; i < this.skuArray.length; i++)
            if(this.skuArray[i] == sku) {
                this.qtyArray[i] = parseInt(quant,10);
                this.prcArray[i] = parseFloat(parseInt(this.qtyArray[i], 10) * prc);

                found = true;
            }
        if(found)
            this.writeCookie();
    }

    this.delete = function(sku) {
        sku = $.trim(sku);
        var index = -1;
        this.getCookieValues();
        for(i=0; i < this.skuArray.length; i++)
            if(this.skuArray[i] == sku)
                index = i;
        if(index != -1) {
            this.skuArray.splice(index,1);
            this.qtyArray.splice(index,1);
            this.prcArray.splice(index,1);   //
            /*this.titleArray.splice(index,1);*/   //
        }
        if(this.skuArray.length == 0) {
            document.cookie = this.owner + "= ;expires=-1";
        }
        else
            this.writeCookie();
    }

    this.size = function() {
        this.getCookieValues();
        var count = 0;
        for(i=0; i < this.qtyArray.length; i++)
            count += parseInt(this.qtyArray[i],10);
        return count;
    }

    this.getCartArray = function() {
        this.getCookieValues();
        var returnArray = new Array();
        for(i=0; i < this.skuArray.length; i++) {
            returnArray[i] = new Array();
            returnArray[i].push(this.skuArray[i]);
            returnArray[i].push(this.qtyArray[i]);
            returnArray[i].push(this.prcArray[i]);
            /*returnArray[i].push(this.titleArray[i]);*/
        }
        return returnArray;
    }

    this.deleteall = function() {
        this.getCookieValues();
        if (this.skuArray.length > 0) {
            this.skuArray.splice(0, this.skuArray.length);
        }
        if (this.qtyArray.length > 0) {
            this.qtyArray.splice(0, this.qtyArray.length);
        }
        if (this.prcArray.length > 0) {
            this.prcArray.splice(0, this.prcArray.length);
        }
       /* if (this.titleArray.length > 0) {
            this.titleArray.splice(0, this.titleArray.length);
        }*/
        if(this.skuArray.length == 0) {
            document.cookie = this.owner + "= ;expires=-1";
        }
        else
            this.writeCookie();

    }
}

