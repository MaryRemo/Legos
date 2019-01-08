const domBuilder = {
  appendInputForm () {
    let inputForm = `<article>
    <fieldset>
    <label for="lego__creator">Creator:</label>
    <input id="lego__creator" name="lego__creator" type="text" autofocus />
    </fieldset>
    <fieldset>
    <label for="lego__name">Name:</label>
    <input id="lego__name" name="lego__name" type="text" autofocus />
    </fieldset>
    <fieldset>
    <label for="lego__shape">Shape:</label>
    <input id="lego__shape" name="lego__shape" type="text" autofocus />
    </fieldset>
    <fieldset>
    <label for="lego__color">Color:</label>
    </fieldset>
    </article>`

    let button = document.createElement("button")
    button.classList.add("lego__save")
    let savelego = document.createTextNode("Save Lego")
    button.appendChild(savelego);
    button.addEventListener("click", eventlistener.handleFormSubmission);
    let displayContainer = document.querySelector("#display-container");
    displayContainer.innerHTML = inputForm;
    displayContainer.appendChild(button);
  },

  createColor() {
    data.getColor()
    .then (colors => {
      let colorHTML = "";
      colors.forEach(color => {
        colorHTML += `<option value = ${color.id}>${color.name}</option>`
      })
      let dropDown = document.querySelector(".lego__save");
      dropDown.innerHTML = colorHTML;
    })
  }
}

// How to create a button, add a class and attach an event listener using createElement.
// let newButton = document.createElement("button");
// newButton.classList.add("aclass");
// newButton.addEventListener("click", eventListeners.handleFormSubmission);
// console.log(newButton);
// displayContainer.appendChild(newButton);