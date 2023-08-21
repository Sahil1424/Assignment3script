document.addEventListener("DOMContentLoaded", function() {
    const orderButton = document.getElementById("orderButton");
    const orderOutput = document.getElementById("orderOutput");
    const smoothieForm = document.getElementById("smoothieForm");
  
    orderButton.addEventListener("click", function() {
      const flavor = smoothieForm.flavor.value;
      const ingredients = Array.from(smoothieForm.ingredients)
        .filter(ingredient => ingredient.checked)
        .map(ingredient => ingredient.value);
      const size = smoothieForm.size.value;
  
      const smoothie = new Smoothie(flavor, ingredients, size);
      orderOutput.innerHTML = smoothie.getDescription();
    });
  
    class Smoothie {
      constructor(flavor, ingredients, size) {
        this.flavor = flavor;
        this.ingredients = ingredients;
        this.size = size;
      }
  
      getDescription() {
        return `
          <h2>Your Smoothie Order:</h2>
          <p><strong>Flavor:</strong> ${this.flavor}</p>
          <p><strong>Ingredients:</strong> ${this.ingredients.join(", ")}</p>
          <p><strong>Size:</strong> ${this.size}</p>
        `;
      }
    }
  });
  