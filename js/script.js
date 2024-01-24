console.log("Dzień dobry  !");

let button = document.querySelector(".button");
let header = document.querySelector(".headerPentatonix");

button.addEventListener("click", () => {
  const defaultText = "PTX";
  const alternativeText = "PENTATONIX";

  header.innerText =
    header.innerText === defaultText ? alternativeText : defaultText;
});
