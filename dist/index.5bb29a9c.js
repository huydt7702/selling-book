const handlePayment = (()=>{
    const payment = document.querySelector(".payment");
    const name = document.querySelector(".name-payment");
    const price = document.querySelector(".price-payment");
    const total = document.querySelector(".total-payment");
    const image = document.querySelector(".img-payment");
    const quantily = document.querySelector(".quantily-payment");
    const userName = document.querySelector(".user-name");
    if (typeof userName.innerText === "string") var newUserName = userName.innerText.replace("@gmail.com", "");
    const cart = {
        name: name.innerText,
        price: price.innerText,
        total: total.innerText,
        image: image.src,
        quantily: quantily.innerText,
        userName: newUserName,
        gmail: userName.innerText
    };
    localStorage.setItem("payment", JSON.stringify(cart));
})();

//# sourceMappingURL=index.5bb29a9c.js.map
