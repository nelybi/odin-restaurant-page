export function loadContact() {
  const content = document.querySelector("#content");
  content.textContent = ""; // vide le contenu précédent

  const title = document.createElement("h1");
  title.textContent = "Contactez-nous";

  const phone = document.createElement("p");
  phone.textContent = "📞 Téléphone : 06 12 34 56 78";

  const email = document.createElement("p");
  email.textContent = "✉️ Email : contact@restaurantjs.fr";

  const adresse = document.createElement("p");
  adresse.textContent = "📍 12 rue du Code, 75000 Paris";

  content.append(title, phone, email, adresse);
}
