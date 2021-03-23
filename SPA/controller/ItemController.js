$('#btnItemSave').click(function () {

    $('#tblItem>tr').off('click');

    let itemid = $("#txtItemCode").val();
    let itemname = $("#txtIName").val();
    let itemqty = $("#txtIQty").val();
    let itemprice = $("#txtIPrice").val();

    clearAll();

    let roww = "<tr><td>" + itemid + "</td><td>" + itemname + "</td><td>" + itemqty + "</td><td>" + itemprice + "</td></tr>"
    $('#tblItem').append(roww);

    $('#tblItem>tr').click(function () {
        let itemcode = $($(this).children().get(0)).text();
        let itemname = $($(this).children().get(1)).text();
        let itemqty = $($(this).children().get(2)).text();
        let itemprice = $($(this).children().get(3)).text();

        $("#txtItemCode").val(itemcode);
        $("#txtIName").val(itemname);
        $("#txtIQty").val(itemqty);
        $("#txtIPrice").val(itemprice);
    });

    let item = new Item(itemid, itemname, itemqty, itemprice);
    ItemTable.push(item);

    loadAllItemToTheTable();
});


function clearAll() {
    $("#txtItemCode").val("");
    $("#txtIName").val("");
    $("#txtIQty").val("");
    $("#txtIPrice").val("");

    $("#txtItemCode").focus();
    $("#txtIName").focus();
    $("#txtIQty").focus();
    $("#txtIPrice").focus();
}


let itemRegexcode = /^(I)[0-9]{1,3}$/;
let itemRegexname = /^[A-z]{1,9}$/;
let itemRegexqty = /^[0-9]{1,10}$/;
let itemRegexprice = /^[0-9]{1,20}$/;

$('#txtItemCode').on('keydown', function (event) {
    if (event.key == 'Enter') {
        $('#txtIName').focus();
    }
    let inputcode = $('#txtItemCode').val();
    if (itemRegexcode.test(inputcode)) {
        $('#txtItemCode').css('border', '2px solid green');
    } else {
        $('#txtItemCode').css('border', '2px solid red');
    }
});

$('#txtIName').on('keydown', function (event) {
    if (event.key == 'Enter') {
        $('#txtIQty').focus();
    }
    let inputname = $('#txtIName').val();
    if (itemRegexname.test(inputname)) {
        $('#txtIName').css('border', '2px solid green');
    } else {
        $('#txtIName').css('border', '2px solid red');
    }
});

$('#txtIQty').on('keydown', function (event) {
    if (event.key == 'Enter') {
        $('#txtIPrice').focus();
    }
    let inputqty = $('#txtIQty').val();
    if (itemRegexqty.test(inputqty)) {
        $('#txtIQty').css('border', '2px solid green');
    } else {
        $('#txtIQty').css('border', '2px solid red');
    }
});

$('#txtIPrice').on('keydown', function (event) {
    if (event.key == 'Enter') {
        $('#btnItemSave').focus();
    }
    let inputprice = $('#txtIPrice').val();
    if (itemRegexprice.test(inputprice)) {
        $('#txtIPrice').css('border', '2px solid green');
    } else {
        $('#txtIPrice').css('border', '2px solid red');
    }
});

$('#btnItemSave').on('keypress', function (event) {
    if (event.key == 'Enter') {
        alert('Item Saved');
    }
});

$("#txtItemCode,#txtIName,#txtIQty,#txtIPrice").on('keydown', function (event) {
    if (event.key == 'Tab') {
        event.preventDefault();
    }
})


// ==================================================================================

//Functions - CRUD operations
// save customer
function saveItem(code, name, qty, price) {
    let item = new Item(code, name, qty, price);
    itemTable.push(item);

    // load the table
    loadAllCustomerToTheTable();
    return true;
}

//get all customers
function getAllCustomers() {
    return itemTable;
}

//delete customer
function deleteItem(icode) {
    let item = searchCustomer(icode);
    if (item != null) {
        let indexNumber = itemTable.indexOf(item);
        itemTable.splice(indexNumber, 1);
        return true;
    } else {
        return false;
    }
}

// search customer
function searchItem(id) {
    for (var i in itemTable) {
        if (itemTable[i].getItemCode() == id) return itemTable[i];
    }
    return null;
}


function updateItem(code, name, qty, price) {
    let item = searchitem(id);
    if (item != null) {
        item.setItemName(name)
        item.setItemQty(qty)
        item.setItemPrice(price);
        return true;
    } else {
        return false;
    }
}

// ==============================================================================

//Other function
function loadAllItemToTheTable() {
    let allItems = getAllItems();
    $('#tblItem').empty(); // clear all the table before adding for avoid duplicate
    for (var i in allItems) {
        let code = allItems[i].getItemCode();
        let name = allItems[i].getItemName();
        let qty = allItems[i].getItemQty();
        let price = allItems[i].getItemPrice();

        var row = `<tr><td>${code}</td><td>${name}</td><td>${qty}</td><td>${price}</td></tr>`;
        $('#tblItem').append(row);
    }
}

function clearAllCustomerText() {
    $("#txtItemCode").val("");
    $("#txtIName").val("");
    $("#txtIQty").val("");
    $("#txtIPrice").val("");
}

