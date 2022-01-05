quantity.addEventListener("keypress",onlyNumberKey(evt)());
function onlyNumberKey(evt) {

    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}


function validateFloatKeyPress(el, evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    var number = el.value.split('.');
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    //just one dot (thanks ddlab)
    if (number.length > 1 && charCode == 46) {
        return false;
    }
    //get the carat position
    var caratPos = getSelectionStart(el);
    var dotPos = el.value.indexOf(".");
    if (caratPos > dotPos && dotPos > -1 && (number[1].length > 1)) {
        return false;
    }
    return true;
}

//thanks: http://javascript.nwbox.com/cursor_position/
function getSelectionStart(o) {
    if (o.createTextRange) {
        var r = document.selection.createRange().duplicate()
        r.moveEnd('character', o.value.length)
        if (r.text == '') return o.value.length
        return o.value.lastIndexOf(r.text)
    } else return o.selectionStart
}

// document.getElementById("quantity").addEventListener("keypress",onlyNumberKey(evt))

// document.getElementById("amount").addEventListener("keypress",getSubtotal())

// quantity.addEventListener("keypress",onlyNumberKey(evt)());
// amount.addEventListener("keypress",getSubtotal());


function getSubtotal() {
    let subtotal;
    let quantity = parseFloat(document.getElementById("quantity").value);
    if (!quantity) {
        quantity = 0;
    }
    quantity = parseFloat(quantity);
    

    let amount = parseFloat(document.getElementById("amount").value);
    if (!amount) {
        amount = 0;
    }
    amount = parseFloat(amount);

    subtotal = quantity * amount;
    console.log('subtotal', subtotal);
    document.getElementById("subtotal").innerHTML = " " + subtotal;
}


// document.getElementById("tax").addEventListener("keypress",getSubtotal())

// document.getElementById()
function getTotal() {
    let total;

    let subtotal = document.getElementById("subtotal").innerHTML;
    if (!subtotal) {
        subtotal = 0;
    }
    subtotal = parseFloat(subtotal);
    console.log('subtotal', subtotal);

    let tax = document.getElementById("tax").value;
    if (!tax) {
        tax = 0;
    }
    tax = parseFloat(tax);
    console.log('tax', tax);

    let shipping = document.getElementById("shipping").value;
    if (!shipping) {
        shipping = 0;
    }
    shipping = parseFloat(shipping);
    console.log('shipping', shipping);

    let discount = document.getElementById("discount").value;
    if (!discount) {
        discount = 0;
    }
    discount = parseFloat(discount);
    console.log('discount', discount);

    total = (subtotal + tax + shipping) - discount;
    console.log(parseFloat(total));
    document.getElementById("total").innerHTML = " " + total;
}