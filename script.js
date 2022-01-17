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


document.getElementById("add-new").addEventListener("click", addnewFunction);
// 1.
// function addnewFunction(){
//     let html = '';
//     html +=  '<div id="first-row">';
//     html += '<input type="text" name="product-name" id="product-name"  placeholder="Product-Name">';
//     html += '<input type="number" name="quantity" id="quantity" placeholder="Quantity">';
//     html += '<input type="text"  name="amount" id="amount" placeholder="Amount">';
//     html += '<div>';

// document.getElementById("new-row").append(html);
// // console(html);
// }

// 2.
// function addnewFunction() {
//     let firstrow = document.getElementById("first-row");
//     let pfield = document.createElement("input");
//     let afield = document.createElement("input");
//     let qfield= document.createElement("input");
//     pfield.setAttribute("type","text");
//     pfield.setAttribute("name","product-name");
//     pfield.setAttribute("placeholder","Product-Name");
//     qfield.setAttribute("type","number");
//     qfield.setAttribute("name","quantity");
//     qfield.setAttribute("placeholder","Quantity");
//     afield.setAttribute("type","text");
//     afield.setAttribute("name","amount");
//     afield.setAttribute("placeholder","Amount");

//     firstrow.appendChild(pfield);
//     firstrow.appendChild(qfield);
//     firstrow.appendChild(afield);
// } append(p)p>
// 3. 

function addnewFunction() {
    let firstrow = document.getElementById("first-row");
    let newfield = '<div>';
            newfield += '<input type="text" name="product-name" id="product-name" placeholder="Product-Name">     ';
            newfield += '<input type="number" name="quantity" id="quantity" placeholder="Quantity"> ';
            newfield += '<input type="text" name="amount" id="amount" placeholder="Amount">';
        newfield += '<br><br></div>';
    firstrow.insertAdjacentHTML('beforeend', newfield);
}
