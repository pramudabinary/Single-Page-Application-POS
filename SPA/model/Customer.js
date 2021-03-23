function Customer(id, name, address, email, dob, nic, contact) {
    var __id = id;
    var __name = name;
    var __address = address;
    var __email = email;
    var __dob = dob;
    var __nic = nic;
    var __contact = contact;
}

this.getCustomerID = function () {
    return __id;
}

this.getCustomerName = function () {
    return __name;
}

this.getCustomerAddress = function () {
    return __address;
}

this.getCustomerEmail = function () {
    return __email;
}

this.getCustomerDob = function () {
    return __dob;
}

this.getCustomerNic = function () {
    return __nic;
}

this.getCustomerContact = function () {
    return __contact;
}

this.setCustomerID = function (newId) {
    __id = newId;
}

this.setCustomerName = function (newName) {
    __name = newName;
}

this.setCustomerAddress = function (newAddress) {
    __address = newAddress;
}

this.setCustomerEmail = function (newEmail) {
    __email = newEmail;
}

this.setCustomerDob = function (newDob) {
    __dob = newDob;
}

this.setCustomerNic = function (newNic) {
    __nic = newNic;
}

this.setCustomerID = function (newContact) {
    __contact = newContact;
}