window.addEventListener("message", (event) => {
  if (event.data == "ChangeElement") {
    const ElementToChange = document.querySelectorAll(
      ".hom-internal-foto-3, .hom-internal-foto-2, .hom-internal-foto-1"
    );

    ElementToChange.forEach((elements) => {
      elements;
    });
  }
});

// const ElementToChange = document.getElementById("hominternalfoto3.js");
// const cda = document.getElementById("had-line-end-element-3.js");

// cda.addEventListener("click", () => {
//   ElementToChange.style.visibility = "visible";
// });
