// Event-listener-
document.getElementById("quantity").addEventListener("keypress", onlyNumberKey);
document.getElementById("amount").addEventListener("keypress", validateFloatKeyPress);
document.getElementById("tax").addEventListener("keypress", validateFloatKeyPress);
document.getElementById("shipping").addEventListener("keypress", validateFloatKeyPress);
document.getElementById("discount").addEventListener("keypress", validateFloatKeyPress);
document.getElementById("quantity").addEventListener("input", getSubtotal);
document.getElementById("amount").addEventListener("input", getSubtotal);
document.getElementById("tax").addEventListener("input", getTotal);
document.getElementById("shipping").addEventListener("input", getTotal);
document.getElementById("discount").addEventListener("input", getTotal);
document.getElementById("add-new").addEventListener("click", addnewFunction);

// function to show only number-
function onlyNumberKey(evt) {

    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
        evt.preventDefault();
        return false;
    }
    return true;

}
// can show decimal numbers-
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
// count subtotal-
function getSubtotal() {
    let subtotal;
    let quantity = parseFloat(document.getElementsById("quantity").value);
    let amount = parseFloat(document.getElementsById("amount").value);
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
// count total-
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

// add field dynamically-
function addnewFunction() {
    let firstrow = document.getElementById("first-row");
    let newfield = '<div>';
    newfield += '<input type="text" name="product-name" id="product-name" placeholder="Product-Name">     ';
    newfield += '<input type="number" name="quantity" id="quantity" placeholder="Quantity"> ';
    newfield += '<input type="text" name="amount" id="amount" placeholder="Amount">';
    newfield += '<br><br></div>';
    firstrow.insertAdjacentHTML('beforeend', newfield);
}
