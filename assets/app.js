// Her vælger jegknappen med querySelector for at lave den til en variabel jeg kan target længere nede
const accordionButton = document.querySelectorAll(
  ".sporgsmal-accordion-button"
);

// her looper den igennem hver knap (forEach da det evt kan tilføjet flere accordions senere) for at lave en eventlistener på button.
accordionButton.forEach((button) => {
  button.addEventListener("click", () => {
    // Her finder den den næste sibling til knappen der er content classen
    const content = button.nextElementSibling;

    //Her checker dne om knappen allerede er synlig
    if (content.style.display === "block") {
      //Hvis den er synlig, altså display block, så sæt display til none.
      content.style.display = "none";
      //og modsat, hvis den ikke er synlig, altså display none, så sæt diplay til block
    } else {
      content.style.display = "block";
    }
  });
});
