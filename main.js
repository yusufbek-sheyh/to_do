var elForm = document.querySelector("#form");
var elInput = document.querySelector("#text_input");
var elList = document.querySelector("#list");

var todos = [];

elForm.addEventListener("submit", function(evt){

    evt.preventDefault();

    var input = elInput.value.trim();

    todos.push(input);

    elInput.value = null;

    render(todos, elList);

});

function render(array, place){

    place.innerHTML = null;

    for (let i = 0; i < array.length; i++){

        var newLi = document.createElement("li");

        elList.appendChild(newLi);

        newLi.textContent = array[i];
    }
}
