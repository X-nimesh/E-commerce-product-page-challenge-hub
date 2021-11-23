console.log("connected");


function minus(){
    var num1=document.getElementById("number").innerHTML;
    if(num1==0){

    }
    else{
        // num=num1--;
        num1--;
        document.getElementById("number").innerHTML=num1;
   
        console.log(num1);
    }
}
function add(){
    var num1=document.getElementById("number").innerHTML;
        num1++;
        document.getElementById("number").innerHTML=num1;
   
        console.log(num1);

}
function addItem(){
    let num1=document.getElementById("number").innerHTML;
    console.log(num1);


    // var productadd='<div class="content"><img src="images/image-product-1-thumbnail.jpg" alt="" class="item-pic"><div class="inside"><t class="title">Fall Limited Edition Sneakers</t><div class="price"><p class="price1">$125 x</p><p class="itemNum">1</p><p class="tot">$125</p></div></div><img src="images/icon-delete.svg" alt="" class="delete" ></div>';
    // document.getElementsByClassName("itemNum").innerHTML=num1;
    // var btn=document.getElementsByClassName("checkout");

    document.getElementsByClassName("content")=`
    <img src="images/image-product-1-thumbnail.jpg" alt="" class="item-pic">
                        <div class="inside">
                            <t class="title">Fall Limited Edition Sneakers</t>
                            <div class="price">
                                <p class="price1">$125 x</p>
                                <p class="itemNum">${num1}</p>
                                <p class="tot">$125</p>
                            </div>

                        </div>
                        <img src="images/icon-delete.svg" alt="" class="delete" >
    `;

}
