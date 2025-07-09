let btn = document.querySelector(".add-button");
let input = document.querySelector(".to-do-input");
let unorderedList = document.querySelector("ul");
let removeButtons = document.getElementsByClassName("remove-button");

btn.addEventListener("click", () => {
  let newListItem = document.createElement("li");
  newListItem.innerHTML =
    '<input class="checkbox" type="checkbox"/> <label>' +
    input.value +
    '</label> <button type="button" class="remove-button">Remove</button>';

  unorderedList.appendChild(newListItem);

  for (let i = 0; i < removeButtons.length; i++) {
    let currentRemoveButton = removeButtons[i];

    currentRemoveButton.addEventListener("click", (event) => {
      event.target.parentElement.remove();
    });
  }
});
