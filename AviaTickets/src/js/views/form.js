class FormUI {
  constructor() {
    this._form = document.forms["locationControl"];
    this.origin = document.getElementById("origin");
    this.distination = document.getElementById("distination");
    this.departure = document.getElementById("departure");
    this.retern = document.getElementById("retern");
    this.originList = document.getElementById("originList");
    this.distinationList = document.getElementById("distinationList");
  }

  get form() {
    return this.$form;
  }

  setAutocomplitData(data) {
    autoComplitData(data, this.originList);
    autoComplitData(data, this.distinationList);
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
