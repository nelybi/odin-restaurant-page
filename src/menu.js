export function menu() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const menus = [
    "Pankakes",
    "Waffles",
    "Porridge",
    "Granola",
    "Smoothies",
    "Les œufs Bénédicte",
  ];

  const titre = document.createElement("h1");
  titre.textContent = "Menus";

  const liste = document.createElement("ul");

  menus.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;

    liste.appendChild(li);
  });

  content.appendChild(titre);
  content.appendChild(liste);
}
