import fontawesome from "@fortawesome/fontawesome-free/js/fontawesome.js";
import solid from "@fortawesome/fontawesome-free/js/solid.js";

import "../css/rest.css";
import "../css/style.css";
import locations from "./store/locations";
import formUI from "./views/form";
import currencyUI from "./views/currency";

document.addEventListener("DOMContentLoaded", () => {
  initApp();
  const form = formUI.form;

  // Events
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    onFormSubmit();
  });

  // Handlers
  async function initApp() {
    await locations.init();
    formUI.setAutocomplitData(locations.shortCitiesList);
  }

  async function onFormSubmit() {
    const origin = locations.getCityCodeByKey(formUI.originVal);
    const destination = locations.getCityCodeByKey(formUI.destinationVal);
    const depart_date = formUI.departureVal.slice(0, 7);
    const return_date = formUI.returnVal.slice(0, 7);
    const currency = currencyUI.currencyVal;
    await locations.fetchTickets({
      origin,
      destination,
      depart_date,
      return_date,
      currency,
    });
  }
});
