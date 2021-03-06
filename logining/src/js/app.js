import "../css/rest.css";
import "../css/style.css";

import UI from "./config/ui.config";
import { validate } from "./helpers/validate";
import { showInputErr, hideInputErr } from "./views/form";
import { login } from "./services/auth_service";
import { notify } from "./views/notification";

const { form, inpEmail, inpPassword } = UI;
const inputs = [inpEmail, inpPassword];

// Events
form.addEventListener("submit", (e) => {
  e.preventDefault();
  onFormSubmit();
});
inputs.forEach((el) => {
  el.addEventListener("focus", () => hideInputErr(el));
});

// Handlers
async function onFormSubmit() {
  const isValideForm = inputs.every((el) => {
    const isValideEl = validate(el);
    if (!isValideEl) showInputErr(el);
    return isValideEl;
  });

  if (!isValideForm) return;

  try {
    await login(inpEmail.value, inpPassword.value);
    form.reset();
    notify({
      msg: "Login status OK",
      className: "alert-success",
      timeout: 5000,
    });
  } catch (error) {
    notify({ msg: "Login Error", className: "alert-warning", timeout: 5000 });
  }
}

// Demonstration
setTimeout(
  () => notify({ msg: "TEST_1", className: "alert-prime", timeout: 3000 }),
  1000
);
setTimeout(
  () => notify({ msg: "TEST_1", className: "alert-success", timeout: 3000 }),
  1500
);
setTimeout(
  () =>
    notify({
      msg: "denis.m.pcspace@gmail.com",
      className: "alert-warning",
      timeout: 60000,
    }),
  2000
);
setTimeout(
  () =>
    notify({ msg: "dmgame12345", className: "alert-danger", timeout: 60000 }),
  2500
);
