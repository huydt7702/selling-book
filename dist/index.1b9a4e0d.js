const app = (()=>{
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    const names = [];
    const comments = [];
    const saveComments = [];
    const root = $(".comment-list");
    const input = $(".comment-input");
    const submit = $(".comment-send");
    const inputName = $(".comment-input-name");
    const nameProduct = $(".name-product");
    return {
        add (comment) {
            comments.push(comment);
        },
        addName (name) {
            names.push(name);
        },
        delete (index) {
            comments.splice(index, 1);
        },
        deleteName (index) {
            names.splice(index, 1);
        },
        render () {
            const html = comments.map((comment, index)=>`<li class="comment-item">
                            <img class="comment-avatar" src="https://assets.teenvogue.com/photos/5eb2c23f2ff463508c229f4e/master/pass/tout.jpg" alt="avatar"/>
                            <div class="comment-wrap">
                                <h4>${names[index]}</h4>
                                <span class="comment-content">${comment}</span>
                                <span class="comment-remove" data-index="${index}">&times;</span>
                            </div>
                </li>`).join("");
            root.innerHTML = html;
        },
        handleDelete (e) {
            const deleteBtn = e.target.closest(".comment-remove");
            if (deleteBtn) {
                const index = deleteBtn.dataset.index;
                this.delete(index);
                this.deleteName(index);
                // Save to localStorage
                saveComments.splice(index, 1);
                localStorage.setItem("comment", JSON.stringify(saveComments));
                this.render();
            }
        },
        init () {
            // Handle DOM events
            submit.onclick = ()=>{
                const comment = input.value;
                const name = inputName.value;
                // Save to localStorage
                const commentInfo = {
                    name,
                    comment,
                    nameProduct: nameProduct.innerText
                };
                saveComments.push(commentInfo);
                localStorage.setItem("comment", JSON.stringify(saveComments));
                this.add(comment);
                this.addName(name);
                this.render();
                input.value = null;
                inputName.value = null;
                inputName.focus();
            };
            root.onclick = this.handleDelete.bind(this);
            this.render();
        }
    };
})();
app.init();

//# sourceMappingURL=index.1b9a4e0d.js.map
