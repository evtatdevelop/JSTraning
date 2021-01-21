class FormUI {
  constructor() {
    this._form = document.forms["locationControl"];
    this.origin = document.getElementById("origin");
    this.destination = document.getElementById("destination");
    this.departure = document.getElementById("departure");
    this.return = document.getElementById("return");
    this.originList = document.getElementById("originList");
    this.destinationList = document.getElementById("destinationList");
  }

  get form() {
    return this._form;
  }

  get originVal() {
    return this.origin.value;
  }
  get destinationVal() {
    return this.destination.value;
  }
  get departureVal() {
    return this.departure.value;
  }
  get returnVal() {
    return this.return.value;
  }

  setAutocomplitData(data) {
    autoComplitData(data, this.originList);
    autoComplitData(data, this.destinationList);
  }
}

function autoComplitData(data, aim) {
  const fragment = document.createDocumentFragment();
  data.forEach((element) => {
    const optionEl = document.createElement("option");
    optionEl.textContent = element;
    fragment.append(optionEl);
  });
  aim.append(fragment);
}

const formUI = new FormUI();

export default formUI;
