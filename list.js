const inputText = document.getElementById("addtask");
const taskList = document.getElementById("task-list");

function fun() {
    if(inputText !== " "){
        const list = document.createElement("li");
        list.classList.add("container");
        const btn1 = document.createElement("button");
        btn1.classList.add("done");
        btn1.innerText = "Done";
        const btn2 = document.createElement("button");
        btn2.classList.add('done','remove');
        btn2.innerText = "Remove";
        list.innerText = inputText.value;
        taskList.appendChild(list);
        list.appendChild(btn1);
        list.appendChild(btn2);

        btn1.addEventListener("click", () => {
            list.style.textDecoration = "line-through"
        });

        btn2.addEventListener("click", () =>{
            list.remove();
        });
    }
    inputText.value = "";
}