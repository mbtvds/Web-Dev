const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", function () {
    const text = input.value;

    if (text === "") {
        return;
    }

    const li = document.createElement("li");

    const left = document.createElement("div");
    left.className = "left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    left.appendChild(checkbox);
    left.appendChild(span);

    const del = document.createElement("span");
    del.textContent = "🗑";
    del.className = "delete";

    checkbox.addEventListener("change", function () {
        li.classList.toggle("done");
    });

    del.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(left);
    li.appendChild(del);
    list.appendChild(li);

    input.value = "";
});
