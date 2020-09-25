
let Button=document.getElementById("btn")
Button.addEventListener("click", total);
function total(e) {
    e.preventDefault();

let ProductName=document.getElementById("proName").value;
let itemQuantity=document.getElementById("unit").value;
let itemPrice=200;
let itemName= ("undefined");
discount10= 0.1* itemPrice; 
discount20= 0.2* itemPrice;
discount30= 0.3* itemPrice;
discount40= 0.4* itemPrice;
if (itemQuantity > 0 && itemQuantity <=3){
    document.getElementById("display").innerHTML = (` You bought ${itemQuantity} ${ProductName} you will be paying #${itemQuantity*(itemPrice-discount10)} at 10% discount`) ;
}
else if (itemQuantity > 3 && itemQuantity <=6) {
    document.getElementById("display").innerHTML = (` You bought ${itemQuantity} ${ProductName}  you will be paying #${itemQuantity*(itemPrice-discount20)} at 20% discount`);
}
else if (itemQuantity > 6 && itemQuantity <=8) {

document.getElementById("display").innerHTML = (` You bought ${itemQuantity} ${ProductName} you will be paying #${itemQuantity*(itemPrice-discount30)} at 30% discount`);
}
else if (itemQuantity > 8 && itemQuantity <=10) {
document.getElementById("display").innerHTML = (`You bought ${itemQuantity} ${ProductName} you will be paying #${itemQuantity*(itemPrice-discount40)} at 40% discount` );
}
else{
document.getElementById("display").innerHTML = (`See you some other time we dont have ${ProductName} at the moment`);
    
}




}