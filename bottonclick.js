const searcClick = document.getElementById("search-iqon-cont.js");
const respomsiveFormElement = document.getElementById(
  "Responsive-form-element.js"
);
var searchClickNumber = 0;

searcClick.addEventListener("click", () => {
  if (searchClickNumber >= 2) {
    searchClickNumber = 1;
  } else {
    searchClickNumber++;
  }

  //   console.log(searchClickNumber);

  if (searchClickNumber == 1) {
    respomsiveFormElement.style.visibility = "visible";
  } else if (searchClickNumber == 2) {
    respomsiveFormElement.style.visibility = "hidden";
  }
});
