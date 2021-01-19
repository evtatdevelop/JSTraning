import "../css/rest.css";
import "../css/style.css";
import locations from "./store/locations";

const originDatalist = document.querySelector("#originList");
const distinationList = document.querySelector("#distinationList");
let options = "";

locations.init().then((res) => {
  // console.log(res);
  console.log(locations);

  // console.log(locations.getCitiesByCountryCode("TH"));
});

function renderDatalist(data, aim) {
  const fragment = document.createDocumentFragment();
  // data.forEach((element) => {
  //   const optionEl = document.createElement("option");
  //   optionEl.textContent = element.name;
  //   fragment.append(optionEl);
  // });
  aim.append(fragment);
}
