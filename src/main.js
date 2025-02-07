document.addEventListener("DOMContentLoaded", () => {
  //Element
  const $ = document;

  //Elements
  const elm_call = $.querySelector("#call");

  //Variable

  //Functions

  //Events
  window.addEventListener("load", () => {
    console.log("ok");
  });

  elm_call.addEventListener("click", (e) => {
    Toastify({
      text: "This is a toast",
      duration: 30000,
      gravity: "bottom",
      position: "center",
    }).showToast();
  });
});
