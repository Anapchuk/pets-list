var todos = [
    {
        name: 'женя',
        owner: 'кристина',
        date: '2018-10-25',
        time: '20:18',
        content: 'lorem ipsum'
    },
    {
        name: 'кристина',
        owner: 'кристина',
        date: '2018-10-25',
        time: '20:18',
        content: 'lorem ipsum'
    },
    {
        name: 'катя',
        owner: 'кристина',
        date: '2018-10-25',
        time: '20:18',
        content: 'lorem ipsum'
    },
    {
        name: 'юля',
        owner: 'кристина',
        date: '2018-10-25',
        time: '20:18',
        content: 'lorem ipsum'
    },
    {
        name: 'вика',
        owner: 'кристина',
        date: '2018-10-25',
        time: '20:18',
        content: 'lorem ipsum'
    }
];
var ul = document.querySelector("ul");
renderHtml(todos);

var form = document.querySelector("form");
form.onsubmit = function(e) {
    e.preventDefault();
    var input1 = document.querySelector("input[name='name']");
    var value1 = input1.value.trim();
    if (value1 == "") return;

    var input2 = document.querySelector("input[name='owner']");
    var value2 = input2.value;
    var input3 = document.querySelector("input[name='date']");
    var value3 = input3.value;
    var input4 = document.querySelector("input[name='time']");
    var value4 = input4.value;
    var input5 = document.querySelector("textarea[name='content']");
    var value5 = input5.value;
    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value = "";
    input5.value = "";

    var todo = {
        name: value1,
        owner: value2,
        date: value3,
        time: value4,
        content: value5
    };

    todos.push(todo);
    renderHtml(todos);
}

function renderHtml(array) {
    ul.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        var li = document.createElement("li");
        
        var h3 = document.createElement("h3");
        h3.textContent = array[i].name;
        
        var div = document.createElement("div");
        div.classList.add('float-right');
        div.textContent = array[i].date + " " + array[i].time;
        
        var button = document.createElement("button");
        button.classList.add("btn","btn-danger","btn-sm");
        button.textContent = "Удалить";
        
        var h5 = document.createElement("h5");
        h5.textContent = array[i].owner;

        var p = document.createElement("p");
        p.textContent = array[i].content;

        button.onclick = function() {
            array.splice(i,1);
            renderHtml(array)
        }

        h3.appendChild(button);
        li.appendChild(div);
        li.appendChild(h3);
        li.appendChild(h5);
        li.appendChild(p);
        ul.appendChild(li);
    }

}

var searchF = document.querySelector("[name='search']");
searchF.oninput = function () {
    var value = this.value;
    var new_array = todos.filter(function(todo){
        return todo.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
    })
    renderHtml(new_array);
}

var select = document.querySelector("select");
select.onchange = function () {
    var valueS = this.value;
    
    // клонирование массива 
    var clone = [].concat(todos);

    if (valueS == "az") {
        clone.sort(function(a,b) {
            return a.name > b .name ? 1 : -1; 
        });
    } else if (valueS == "za") {
        clone.sort(function(a,b) {
            return b.name > a.name ? 1 : -1; 
        });
    } 

    renderHtml(clone);
}