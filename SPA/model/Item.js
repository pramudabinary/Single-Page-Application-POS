function Item(icode, iname, iqty, iprice) {
    var __icode = icode;
    var __iname = iname;
    var __iqty = iqty;
    var __iprice = iprice;
}

this.getItemCode = function () {
    return __icode;
}

this.getItemName = function () {
    return __iname;
}

this.getItemQty = function () {
    return __iqty;
}

this.getItemPrice = function () {
    return __iprice;
}

this.setItemCode = function (newIcode) {
    __icode = newIcode;
}

this.setItemName = function (newIname) {
    __iname = newIname;
}

this.setItemQty = function (newIqty) {
    __iqty = newIqty;
}

this.setItemPrice = function (newIprice) {
    __iprice = newIprice;
}