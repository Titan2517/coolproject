document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contentTasks").style.display = "none";
});

let counter = 0;

let btns = document.querySelectorAll("*[data-modal-btn]");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (event) {
          let atr = event.target.getAttribute('data-modal-btn');
          let modal = document.querySelector(`[data-modal-window = ${atr}]`);
          modal.style.display = "block";
          modal.querySelector(".close_modal_window1").addEventListener('click', () => modal.style.display = "none");
          modal.querySelector(".ready_tasks").addEventListener('click', () => modal.style.display = "none");
    });
}



function moveText(taskText, taskText1, taskText2 ) {
    // Создание элементов
    var div = document.createElement("div");
    div.classList.add("content_tasks");

    var img1 = document.createElement("img");
    img1.src = "/img/png/выполнено.png";
    img1.alt = "cool project";
    img1.classList.add("icons_tasks_done");
    img1.onclick = function() {
        div.remove(); 
        counter--; 
        document.getElementById('score').innerText = counter;
        document.getElementById('score1').innerText = parseInt(document.getElementById('score1').innerText) + 1;
    };
    
    

    var p1 = document.createElement("p");
    p1.classList.add("taskText");
    p1.innerText = taskText; 

    var p3 = document.createElement("p");
    p3.classList.add("taskText2");
    p3.title = taskText2; 
    p3.innerText = taskText2;
    
    var p2 = document.createElement("p");
    p2.classList.add("taskText1");
    
    var formattedDate = taskText1.split('-').reverse().join('-');
    p2.innerText = formattedDate;

    var img2 = document.createElement("img");
    img2.src = "/img/png/удалить.png";
    img2.alt = "cool project";
    img2.classList.add("icons_tasks");
    img2.onclick = function() {
        div.remove(); 
        counter--; 
        document.getElementById('score').innerText = counter;
        
    };

    
    div.appendChild(img1);
    div.appendChild(p1);
    div.appendChild(p3);
    div.appendChild(p2);
    div.appendChild(img2);

    
    var tasksContainer = document.getElementById("tasks");
    tasksContainer.appendChild(div);

    
    var inputs = document.querySelectorAll('.tasks-container input, .tasks-container textarea');

    
    inputs.forEach(function(input) {
        input.value = '';
    });

    counter++;
    document.getElementById('score').innerText = counter;
    
    
    

    
}

let btn = document.querySelector('.ready_tasks');
btn.addEventListener("click", function() {
    let inputValue1 = document.querySelector('#name1').value;
    let inputValue2 = document.querySelector('#date').value;
    let inputValue3 = document.querySelector('#name2').value;
    moveText(inputValue1, inputValue2, inputValue3);
});




document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contentPj",  ).style.display = "none";
});
let btnspj = document.querySelectorAll("*[data-modal-btn]");
for (let i = 0; i < btnspj.length; i++) {
    btnspj[i].addEventListener('click', function (event) {
        let atr = event.target.getAttribute('data-modal-btn');
        let modal = document.querySelector(`[data-modal-window = ${atr}]`);
        modal.style.display = "block";
        modal.querySelector(".close_modal_window").addEventListener('click', () => modal.style.display = "none");
        modal.querySelector(".ready_tasks_pj").addEventListener('click', () => modal.style.display = "none");
    });
}


function moveProjectText(taskText, taskText1, taskText2, taskText3) {
    // Создание элементов
    var div = document.createElement("div");
    div.classList.add("contentPj");

    var div2 = document.createElement("div"); 
    div2.classList.add("contentPj2"); 
    
    
    var img1 = document.createElement("img");
    img1.src = "/img/png/проект.png";
    img1.alt = "cool project";
    img1.classList.add("icons_pj");

    var p1 = document.createElement("p"); 
    p1.classList.add("PjText2");
    p1.innerText = taskText; 

    var p3 = document.createElement("p"); 
    p3.classList.add("PjText");
    p3.title = taskText2; 
    p3.innerText = taskText2;

    var div1 = document.createElement("div"); 
    div1.classList.add("contentPj1"); 
    

    var p4 = document.createElement("p"); 
    p4.classList.add("PjText3");
    p4.id = icons_del;
    p4.title = taskText3; 
    p4.innerText = taskText3;
    
    var p2 = document.createElement("p"); 
    p2.classList.add("PjText4");
    
    var formattedDate = taskText1.split('-').reverse().join('-');
    p2.innerText = formattedDate;

    var img2 = document.createElement("img");
    img2.src = "/img/png/удалить.png";
    img2.alt = "cool project";
    img2.classList.add("icons_pj");
    img2.onclick = function() {
        div.remove(); 
    };

    
    div.appendChild(div2);
    div2.appendChild(img1);
    div2.appendChild(p1);
    div2.appendChild(p3); 
    div1.appendChild(p4);
    div.appendChild(div1);
    div1.appendChild(p2);
    div2.appendChild(img2);

    
    var tasksContainer = document.getElementById("projects");
    tasksContainer.appendChild(div);

    
    var inputs = document.querySelectorAll('.tasks-container input, .tasks-container textarea');

    
    inputs.forEach(function(input) {
        input.value = '';
    });
}

let btnpj = document.querySelector('.ready_tasks_pj');
btnpj.addEventListener("click", function() {
    let inputValue1 = document.querySelector('#namepj1').value;
    let inputValue2 = document.querySelector('#datepj').value;
    let inputValue3 = document.querySelector('#namepj2').value;
    let inputValue4 = document.querySelector('#namepj3').value;
    moveProjectText(inputValue1, inputValue2, inputValue3, inputValue4);
});


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("settings_fonts").style.display = "none";
});

let btnset = document.querySelectorAll("*[data-modal-btn]");
for (let i = 0; i < btnset.length; i++) {
    btnset[i].addEventListener('click', function (event) {
        let atr = event.target.getAttribute('data-modal-btn');
        let modal = document.querySelector(`[data-modal-window = ${atr}]`);
        modal.style.display = "block";
        modal.querySelector(".close_modal_window2").addEventListener('click', () => modal.style.display = "none");
        modal.querySelector(".ready_settings1").addEventListener('click', () => modal.style.display = "none");
    });
}

function moveTextSettings(SettText) {
    var div = document.createElement("div");
    div.classList.add("name_settings");

    var p1 = document.createElement("p");
    p1.classList.add("name_logo");
    p1.innerText = SettText;

    div.appendChild(p1);

    var tasksContainer = document.getElementById("settings_name_logo");
    tasksContainer.appendChild(div);

    var inputs = document.querySelectorAll('.settings-container input');

    inputs.forEach(function(input) {
        input.value = '';
    });
}

let btnse = document.querySelector('.ready_settings1');
btnse.addEventListener("click", function() {
    let inputValue10 = document.querySelector('#settings_name').value;
    let prevNameSettings = document.querySelector('.name_settings');

    if (prevNameSettings) {
        prevNameSettings.remove();
    }

    moveTextSettings(inputValue10);
});

document.addEventListener("DOMContentLoaded", function() {
document.getElementById("float-container").style.display = "none";
});
let btnadd = document.querySelectorAll("*[data-modal-btn]");
for (let i = 0; i < btnadd.length; i++) {
    btnadd[i].addEventListener('click', function (event) {
        let atr = event.target.getAttribute('data-modal-btn');
        let modal = document.querySelector(`[data-modal-window = ${atr}]`);
        modal.style.display = "block";
        modal.querySelector(".close_modal_window3").addEventListener('click', () => modal.style.display = "none");
        modal.querySelector(".ready_tasks1").addEventListener('click', () => modal.style.display = "none");
        modal.querySelector('.description').value = '';
        
    });
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("exitButton").addEventListener("click", function() {
        window.close();
    });
});