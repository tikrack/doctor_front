document.addEventListener("DOMContentLoaded", () => {
  //Element
  const $ = document;

  //Elements
  const elm_call = $.querySelector("#call");
  const elm_number = $.querySelector("#number");

  //Variable

  //Functions
  const toast = (text) => {
    Toastify({
      avatar: "/images/success.svg",
      text: text,
      duration: 2000,
      gravity: "bottom",
      position: "center",
    }).showToast();
  };

  //Events
  window.addEventListener("load", () => {
    console.log("ok");
  });

  elm_call.addEventListener("click", (e) => {
    navigator.clipboard.writeText(elm_number.innerText).then(() => {
      toast("کپی شد");
    });
  });
});
