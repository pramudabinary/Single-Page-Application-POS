$('#btnCusSave').click(function () {

    $('#tblCustomer>tr').off('click');

    let cusid = $("#txtCusID").val();
    let cusname = $("#txtCusName").val();
    let cusaddress = $("#txtCusAddress").val();
    let cusemail = $("#txtCusEmail").val();
    let cusdob = $("#txtCusDOB").val();
    let cusnic = $("#txtCusNIC").val();
    let cuscontact = $("#txtCusContact").val();

    clearAll();

    let roww = "<tr><td>" + cusid + "</td><td>" + cusname + "</td><td>" + cusaddress + "</td><td>" + cusemail + "</td><td>" + cusdob + "</td><td>" + cusnic + "</td><td>" + cuscontact + "</td></tr>"
    $('#tblCustomer').append(roww);


    $('#tblCustomer>tr').click(function () {
        let id = $($(this).children().get(0)).text();
        let name = $($(this).children().get(1)).text();
        let address = $($(this).children().get(2)).text();
        let email = $($(this).children().get(3)).text();
        let dob = $($(this).children().get(4)).text();
        let nic = $($(this).children().get(5)).text();
        let contact = $($(this).children().get(6)).text();

        $("#txtCusID").val(id);
        $("#txtCusName").val(name);
        $("#txtCusAddress").val(address);
        $("#txtCusEmail").val(email);
        $("#txtCusDOB").val(dob);
        $("#txtCusNIC").val(nic);
        $("#txtCusContact").val(contact);
    });
    let customer = new Customer(cusid, cusname, cusaddress, cusemail, cusdob, cusnic, cuscontact);
    customerTable.push(customer);
});

function clearAll() {
    $("#txtCusID").val("");
    $("#txtCusName").val("");
    $("#txtCusAddress").val("");
    $("#txtCusEmail").val("");
    $("#txtCusDOB").val("");
    $("#txtCusNIC").val("");
    $("#txtCusContact").val("");

    $("#txtCusID").focus();
    $("#txtCusName").focus();
    $("#txtCusAddress").focus();
    $("#txtCusEmail").focus();
    $("#txtCusDOB").focus();
    $("#txtCusNIC").focus();
    $("#txtCusContact").focus();
}

let cusRegexid = /^(C)[0-9]{1,3}$/;
let cusRegexname = /^[A-z]{1,9}$/;
let cusRegexaddress = /^[A-z]{1,9}$/;
let cusRegexemail = /^[a-z]{1,20}(@)[a-z]{1,10}(.)[a-z]{1,5}$/;
let cusRegexnic = /^[0-9]{1,20}$/;
let cusRegexcontact = /^[0-9]{1,5}[-][0-9]{1,10}$/;


$('#txtCusID').on('keydown', function (event) {
    if (event.key == 'Enter') {
        $('#txtCusName').focus();
    }
    let inputid = $('#txtCusID').val();
    if (cusRegexid.test(inputid)) {
        $('#txtCusID').css('border', '2px solid green');
    } else {
        $('#txtCusID').css('border', '2px solid red');
    }
});

$('#txtCusName').on('keydown', function (event) {
    if (event.key == 'Enter') {
        $('#txtCusAddress').focus();
    }
    let inputname = $('#txtCusName').val();
    if (cusRegexname.test(inputname)) {
        $('#txtCusName').css('border', '2px solid green');
    } else {
        $('#txtCusName').css('border', '2px solid red');
    }
});

$('#txtCusAddress').on('keydown', function (event) {
    if (event.key == 'Enter') {
        $('#txtCusEmail').focus();
    }
    let inputaddress = $('#txtCusAddress').val();
    if (cusRegexaddress.test(inputaddress)) {
        $('#txtCusAddress').css('border', '2px solid green');
    } else {
        $('#txtCusAddress').css('border', '2px solid red');
    }
});

$('#txtCusEmail').on('keydown', function (event) {
    if (event.key == 'Enter') {
        $('#txtCusDOB').focus();
    }
    let inputemail = $('#txtCusEmail').val();
    if (cusRegexemail.test(inputemail)) {
        $('#txtCusEmail').css('border', '2px solid green');
    } else {
        $('#txtCusEmail').css('border', '2px solid red');
    }
});

$('#txtCusDOB').on('keydown', function (event) {
    if (event.key == 'Enter') {
        $('#txtCusNIC').focus();
    }
});

$('#txtCusNIC').on('keydown', function (event) {
    if (event.key == 'Enter') {
        $('#txtCusContact').focus();
    }
    let inputnic = $('#txtCusNIC').val();
    if (cusRegexnic.test(inputnic)) {
        $('#txtCusNIC').css('border', '2px solid green');
    } else {
        $('#txtCusNIC').css('border', '2px solid red');
    }
});

$('#txtCusContact').on('keydown', function (event) {
    if (event.key == 'Enter') {
        $('#btnCusSave').focus();
    }
    let inputcontact = $('#txtCusContact').val();
    if (cusRegexcontact.test(inputcontact)) {
        $('#txtCusContact').css('border', '2px solid green');
    } else {
        $('#txtCusContact').css('border', '2px solid red');
    }
});

$('#btnCusSave').on('keypress', function (event) {
    if (event.key == 'Enter') {
        alert('Customer Saved');
    }
});

$("#txtCusID,#txtCusName,#txtCusAddress,#txtCusEmail,#txtCusDOB,#txtCusNIC,#txtCusContact").on('keydown', function (event) {
    if (event.key == 'Tab') {
        event.preventDefault();
    }
})



