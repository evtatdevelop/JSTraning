import "../css/rest.css";
import "../css/style.css";
import locations from "./store/locations";
import formUI from "./views/form";

document.addEventListener("DOMContentLoaded", () => {
  async function initApp() {
    await locations.init();
    // console.log(locations.shortCitiesList);
    formUI.setAutocomplitData(locations.shortCitiesList);
  }

  initApp();
});
