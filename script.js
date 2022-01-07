document.getElementById("quantity").addEventListener("keypress", onlyNumberKey);
function onlyNumberKey(evt) {

    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
        evt.preventDefault();
        return false;
    }
    return true;

}

document.getElementById("amount").addEventListener("keypress", validateFloatKeyPress);
document.getElementById("tax").addEventListener("keypress", validateFloatKeyPress);
document.getElementById("shipping").addEventListener("keypress", validateFloatKeyPress);
document.getElementById("discount").addEventListener("keypress", validateFloatKeyPress);

function validateFloatKeyPress(evt) {
    var theEvent = evt || window.event;
    var regex = /[0-9]|\./;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key)
            ;
    }

    if (!regex.test(key)
    ) {
        theEvent.returnValue = false;

        if (theEvent.preventDefault) theEvent.preventDefault();

    }
}

document.getElementById("quantity").addEventListener("input", getSubtotal);
document.getElementById("amount").addEventListener("input", getSubtotal);
function getSubtotal() {
    let subtotal;
    let quantity = parseFloat(document.getElementById("quantity").value);
    let amount = parseFloat(document.getElementById("amount").value);
    if (!quantity) {
        quantity = 0;
    }
    if (!amount) {
        amount = 0;
    }
    quantity = parseFloat(quantity);
    amount = parseFloat(amount);

    subtotal = quantity * amount;
    document.getElementById("subtotal").innerHTML = " " + subtotal;
}

document.getElementById("tax").addEventListener("input", getTotal);
document.getElementById("shipping").addEventListener("input", getTotal);
document.getElementById("discount").addEventListener("input", getTotal);

function getTotal() {
    let total;
    let subtotal = document.getElementById("subtotal").innerHTML;
    let shipping = document.getElementById("shipping").value
    let tax = document.getElementById("tax").value;
    let discount = document.getElementById("discount").value;
    if (!subtotal) {
        subtotal = 0;
    }
    if (!tax) {
        tax = 0;
    }
    if (!shipping) {
        shipping = 0;
    }
    if (!discount) {
        discount = 0;
    }
    subtotal = parseFloat(subtotal);
    tax = parseFloat(tax);
    shipping = parseFloat(shipping);
    discount = parseFloat(discount);
    total = (subtotal + tax + shipping) - discount;
    document.getElementById("total").innerHTML = " " + total;
}