// lọc sản phẩm theo tên
let catSelect = document.getElementById("categorySelect");
let nameSelect = document.getElementById("productNameSelect");
let cickBtnSelect = document.getElementsByClassName("header__search-btn")[0];
// lọc sản phẩm theo phân loại
catSelect.onchange = function() {
    // lựa chọn được select
    let selectId = this.value;
    for(let i1 = 1; i1 < 4; i1++){
        let id = "category" + i1;
        if (selectId == i1) document.getElementById(id).style.display = "block";
        else document.getElementById(id).style.display = "none";
    }
};
cickBtnSelect.onclick = function() {
    let productName = document.getElementsByClassName("product__panel-link");
    for(i = 0; i < productName.length; i++)if (productName[i].textContent == nameSelect.value) {
        alert(productName[i].textContent);
        return;
    }
    alert("Sản phẩm kh\xf4ng c\xf3 trong thư mục");
};
nameSelect.onchange = function() {
    let productName = document.getElementsByClassName("product__panel-link");
    for(i = 0; i < productName.length; i++)if (productName[i].textContent == nameSelect.value) {
        alert(productName[i].textContent);
        return;
    }
    alert("Sản phẩm kh\xf4ng c\xf3 trong thư mục");
};
// bấm vào header hiện danh mục tương ứng
let headernavSearch = document.getElementsByClassName("header__nav-item");
headernavSearch.ondbclick = function() {
    let headernavSearch = document.getElementsByClassName("header__nav-item");
    let searchId = this.value;
    for(let i1 = 1; i1 < 4; i1++){
        let id = "category" + i1;
        if (searchId == i1) document.getElementById(id).style.display = "block";
        else document.getElementById(id).style.display = "none";
    }
} // tạm thời chưa chạy , có thời gian sẽ sửa sau
;

//# sourceMappingURL=category.5d30d2f8.js.map
