// const MeoreFoto = document.getElementById("MeoreContFoto2.js");
// // const MeorefotoHominternal = document.getElementById("hom-internal-foto-3.js");

// MeoreFoto.addEventListener("click", () => {
//   const SamizneFaili = window.location.origin + "/HomeInternal.html";
//   window.postMessage("ChangeElement", SamizneFaili);
// });

const ImageLink = document.getElementById("MeoreContFoto2.js");
const ImageLink3 = document.getElementById("MesameContFoto2.js");

ImageLink.addEventListener("click", (event) => {
  event.preventDefault();
  const TargetWindow = window.open("HomeInternal.html");
  TargetWindow.onload = () => {
    TargetWindow.postMessage("ChangeElement", "*");
  };
});

ImageLink3.addEventListener("click", (event) => {
  event.preventDefault();
  const TargetWindow3 = window.open("HomeInternal.html");
  TargetWindow3.onload = () => {
    TargetWindow3.postMessage("ChangeElement3", "*");
  };
});
