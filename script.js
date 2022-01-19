// Event-listener-
document.getElementById("tax").addEventListener("keypress", validateFloatKeyPress);
document.getElementById("tax").addEventListener("input", getTotal);

document.getElementById("add-new").addEventListener("click", addnewFunction);

document.getElementById("shipping").addEventListener("keypress", validateFloatKeyPress);
document.getElementById("shipping").addEventListener("input", getTotal);


document.getElementById("discount").addEventListener("input", getTotal);
document.getElementById("discount").addEventListener("keypress", validateFloatKeyPress);


document.getElementById("amount").addEventListener("keypress", validateFloatKeyPress);
document.getElementById("amount").addEventListener("input", getSubtotal);

document.getElementById("quantity").addEventListener("keypress", onlyNumberKey);
document.getElementById("quantity").addEventListener("input", getSubtotal);

var quant_amount = {};
 
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
    let quantity = parseFloat(document.getElementById("quantity").value);
    let amount = parseFloat(document.getElementById("amount").value);

    quantity = quantity ? quantity : 0;
    amount = amount ? amount : 0;

    quant_amount[1] = {'amount' :  amount, "quantity" : quantity};
    sub_total();
}
// count total-
function getTotal() {
    let total;
    let subtotal  = document.getElementById("subtotal").innerHTML;
    let shipping  = document.getElementById("shipping").value
    let tax       = document.getElementById("tax").value;
    let discount  = document.getElementById("discount").value;

    subtotal = subtotal ? subtotal : 0;
    shipping = shipping ? shipping : 0;
    discount = discount ? discount : 0; 
    tax      = tax ? tax : 0; 

    tax      = parseFloat(tax);
    subtotal = parseFloat(subtotal);
    shipping = parseFloat(shipping);
    discount = parseFloat(discount)
;
    total    = (subtotal + tax + shipping) - discount;
    document.getElementById("total").innerHTML = " " + total;
}

// add field dynamically-
function addnewFunction() {
    let firstrow = document.getElementById("first-row");
    let amount   = document.getElementsByClassName("ets-amount");
    let quantity = document.getElementsByClassName("ets-quantity");

    let newfield  = '<div>';
        newfield += '<input class="product-name"  type="text" name="product-name"  placeholder="Product-Name">     ';
        newfield += '<input class="ets-quantity" data-length="'+(quantity.length + 1)+'" id="quantity-'+(quantity.length + 1)+'" type="number" name="quantity" placeholder="Quantity"> ';
        newfield += '<input class="ets-amount"  data-length="'+(quantity.length + 1)+'" id="amount-'+(amount.length + 1)+'" type="text" name="amount"  placeholder="Amount">';
        newfield += '<br><br></div>';
    firstrow.insertAdjacentHTML('beforeend', newfield);


    for (let i = 1; i < amount.length; i++) {
        quantity[i].addEventListener('keypress', validateFloatKeyPress, false);
        amount[i].addEventListener('keypress', validateFloatKeyPress, false);

        quantity[i].addEventListener("input", calculate_sub_total, false);
        amount[i].addEventListener("input", calculate_sub_total, false);
    }
}

function calculate_sub_total(event){
    let length = this.getAttribute('data-length');
    let quantity = parseFloat(document.getElementById("quantity-"+length).value);
    let amount = parseFloat(document.getElementById("amount-"+length).value);

    quantity = quantity ? quantity : 0;
    amount = amount ? amount : 0;
    quant_amount[length] = {'amount' :  amount, "quantity" : quantity};

    sub_total();
}


function sub_total() {
    if(quant_amount) {
        let old_subtotal = 0;
        for(const [key, value] of Object.entries(quant_amount)){
            old_subtotal += value.amount * value.quantity;
        }
        document.getElementById("subtotal").innerHTML = " " + old_subtotal;
    }
}