function createProductDropdown7() {
    google.script.run.withSuccessHandler(productDropDown7).getProductList7();

    
}

      //POPULATE PAGE DROPDOWNS
function productDropDown7(values) { //Ref: https://stackoverflow.com/a/53771955/2391195
  var list = document.getElementById('sku');   
  for (var i = 0; i < values.length; i++) {
    var option = document.createElement("option");
    option.value = values[i];
    option.text = values[i];
    list.appendChild(option);
  }
}



var a =document.getElementById("price").value;
var a1 =document.getElementById("price1").value;
var a2 =document.getElementById("price2").value;
var a3 =document.getElementById("price3").value;
var a4 =document.getElementById("price4").value;
var a5 =document.getElementById("price5").value;
var a6 =document.getElementById("price6").value;
var a7 =document.getElementById("price7").value;



  var b =document.getElementById("pcs").value;
var b1 =document.getElementById("pcs1").value;
var b2 =document.getElementById("pcs2").value;
var b3 =document.getElementById("pcs3").value;
var b4 =document.getElementById("pcs4").value;
var b5 =document.getElementById("pcs5").value;
var b6 =document.getElementById("pcs6").value;
var b7 =document.getElementById("pcs7").value;


function ProductTotal1(v){

var c = a * b;
var c1 = a1 * b1;
var c2 = a2 * b2;
var c3 = a3 * b3;
var c4 = a4 * b4;
var c5 = a5 * b5;
var c6 = a6 * b6;
var c7 = a7 * b7;


}


function SubTotal(){

var dv = getElementById("dvCost").value;
var dis = getElementById("disCount").value;
var adv = getElementById("adVance").value;


var gTotal = c+c1+c2+c3+c4+c5+c6+c7+dv-dis-adv;
document.getElementById("gTotal").value=gTotal;


}
