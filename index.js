const MeoreFoto = document.getElementById("MeoreContFoto2.js");
// const MeorefotoHominternal = document.getElementById("hom-internal-foto-3.js");

MeoreFoto.addEventListener("click", () => {
  const SamizneFaili = window.location.origin + "/HomeInternal.html";
  window.postMessage("ChangeElement", SamizneFaili);
});
