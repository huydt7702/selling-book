// tăng só trên ô giỏ hàng
let pickBtn = document.getElementsByClassName("product__main-info-cart-btn")[0];
let cartInfo = document.getElementsByClassName("header__notice")[0];
pickBtn.onclick = function() {
    let currentCount = Number(cartInfo.textContent);
    currentCount++;
    cartInfo.textContent = currentCount;
};
/* let minusBtn = document.getElementsByClassName('product__main-info-cart-quantity-minus')[0];
let plusBtn = document.getElementsByClassName('product__main-info-cart-quantity-plus')[0];
var valueBtn = document.getElementsByClassName('product__main-info-cart-quantity-total')[0].value

minusBtn.onclick() = function(){

    valueBtn.textContent=  valueBtn--;
}
plusBtn.onclick() = function(){
    valueBtn.textContent=  valueBtn++;
}*/ // Phần gửi kiểm tra form
let submitBtn = document.getElementById("formgroupcomment");
submitBtn.onsubmit = function(event) {
    event.preventDefault();
    let nameIn = document.getElementById("form-name");
    let commentIn = document.getElementById("pwd");
    let contentIn = document.getElementById("formcontent");
    //kiểm tra xem có đủ 100 ký tự hay k
    if ($("textarea#formcontent").val().length < 100) {
        alert("Bạn phải nhập  tr\xean 100 k\xfd tự");
        return;
    } else {
        // kiểm tra từ cấm
        let bWord = [
            "xấu",
            " hư ",
            " lỗi",
            "đểu"
        ];
        for(i = 0; i < bWord.length; i++)if ($("textarea#formcontent").val().toLowerCase().indexOf(bWord[i]) > -1) {
            alert("C\xf3 tồn tại từ cấm");
            return;
        }
    }
    // lấy giờ
    var currentdate = new Date();
    var datetime = currentdate.getFullYear() + "-" + currentdate.getMonth() + "-" + currentdate.getDate() + " " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    // thêm nội dung vào trang web
    let reviewer = document.getElementsByClassName(" item-reviewer")[0];
    var ul = document.createElement("ul");
    ul.innerHTML = `
<ul class = item-reviewer>
<div class="comment-item-user">
    <img src="https://i.pinimg.com/originals/83/9f/40/839f40f099e578577f8e775bf29ce8f0.jpg" alt="Muzan" class="comment-item-user-img">
    
    <li><b> ${nameIn.value} </b></li> 
 </div>

<br>
<li>${datetime}</li>
<li>
   <h4> ${contentIn.value}</h4>
</li>
</ul> `;
    reviewer.prepend(ul);
};

//# sourceMappingURL=product.16875ec5.js.map
