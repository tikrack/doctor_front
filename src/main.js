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
      avatar: "/images/success.svg",
      text: "کپی شد",
      duration: 2000,
      gravity: "bottom",
      position: "center",
    }).showToast();
  });
});
