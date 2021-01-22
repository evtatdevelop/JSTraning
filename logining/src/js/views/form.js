/**
 * Add error to form field
 * @param {HTMLInputElement} el
 */
export function showInputErr(el) {
  const msg = el.dataset.invalidMessage || "Invalid data";
  const parentFormItem = el.parentElement;
  const error = parentFormItem.querySelector(".loginForm__error");
  error.textContent = msg;
}

/**
 * Hide error massage to form field
 * @param {HTMLInputElement} el
 */
export function hideInputErr(el) {
  const parentFormItem = el.parentElement;
  const error = parentFormItem.querySelector(".loginForm__error");
  error.textContent = "";
}
