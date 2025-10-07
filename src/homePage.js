export function loadPage() {
  const content = document.querySelector("#content");
  //image
  const img = document.createElement("img");
  img.src = "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg";
  img.alt = "pancakes with honey";
  img.style.width = "50%";

  //titre
  const titre = document.createElement("h1");
  titre.textContent = "The best Brunch of the world";

  //paragraphe
  const paragraphe = document.createElement("p");
  paragraphe.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et aliquam,
        voluptas veniam magnam officia ducimus reiciendis distinctio? Obcaecati
        impedit est suscipit eius excepturi aperiam deleniti optio
        exercitationem quaerat! Sit, eos?`;

  const button = document.createElement("button");

  button.textContent = "Enjoy";

  content.appendChild(img);
  content.appendChild(titre);
  content.appendChild(paragraphe);
  content.appendChild(button);
}
