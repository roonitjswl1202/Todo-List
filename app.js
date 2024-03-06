let button = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

button.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        let par = event.target.parentElement;
        par.remove();
    }
});
