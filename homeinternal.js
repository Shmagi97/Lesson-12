// window.addEventListener("message", (event) => {
//   console.log("message");
//   if (event.data == "ChangeElement") {
//     const ElementToChange = document.querySelectorAll(
//       ".hom-internal-foto-3, .hom-internal-foto-2, .hom-internal-foto-1"
//     );
//   }
// });

// const ElementToChange = document.getElementById("hominternalfoto3.js");
// const cda = document.getElementById("had-line-end-element-3.js");

// cda.addEventListener("click", () => {
//   ElementToChange.style.visibility = "visible";
// });

window.addEventListener("DOMContentLoaded", () => {
  const ImageToChange = document.getElementById("hominternalfoto3.js");
  window.addEventListener("message", (event) => {
    if ((event.data = "ChangeElement")) {
      ImageToChange.style.zIndex = "1";
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const ImageToChange3 = document.getElementById("hominternalfoto2.js");
  window.addEventListener("message", (event) => {
    if ((event.data = "ChangeElement3")) {
      ImageToChange3.style.zIndex = "13";
      console.log("gamovida meore ");
    }
  });
});
