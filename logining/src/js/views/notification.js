function getNotifyContainer() {
  return document.getElementById("notifyContainer");
}

/**
 *
 * @param {Object} settings
 * @param {String} settings.msg
 * @param {String} settings.className
 * @param {Mumber} settings.timeout
 */
export function notify({
  msg = "",
  className = "msg-success",
  timeout = 2000,
} = {}) {
  if (!getNotifyContainer()) {
    createNotifyContainer();
  }

  const index = getAlertIndex();
  const notifyContainer = getNotifyContainer();
  const alert = renderAlert(msg, className, index);
  notifyContainer.insertAdjacentHTML("beforeend", alert);
  setTimeout(() => {
    removeAlert(index);
  }, timeout);
}

export function removeAlert(index) {
  let alert;
  if (index === undefined) {
    alert = document.querySelector(".notify-container .alert-notify");
  } else {
    alert = document.querySelector(
      `.notify-container .alert-notify[data-index="${index}"]`
    );
  }
  if (!alert) {
    console.warn("Alert not found");
    return;
  }
  const notifyContainer = getNotifyContainer();
  notifyContainer.removeChild(alert);
}

function templateNotifyContainer() {
  return `<section id="notifyContainer" class="notify-container"><section>`;
}

function createNotifyContainer() {
  const notifyContainer = templateNotifyContainer();
  document.body.insertAdjacentHTML("beforeend", notifyContainer);
}

function renderAlert(msg, className, index) {
  return `<div class="alert-notify ${className}" data-index="${index}">${msg}</div>`;
}

function getAlertIndex() {
  return document.querySelectorAll(".notify-container .alert-notify").length;
}
