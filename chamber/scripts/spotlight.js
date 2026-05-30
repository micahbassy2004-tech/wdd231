async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");

    if (!response.ok) {
      throw new Error("Failed to load members.json");
    }

    const members = await response.json();

    // Filter Gold (3) and Silver (2)
    const filtered = members.filter(member =>
      member.membership === 3 || member.membership === 2
    );

    // Better shuffle (Fisher-Yates algorithm)
    for (let i = filtered.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
    }

    const selected = filtered.slice(0, 3);

    const container = document.getElementById("spotlight-container");
    container.innerHTML = "";

    selected.forEach(member => {
      const level =
        member.membership === 3 ? "Gold" : "Silver";

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}" loading="lazy">
        <h3>${member.name}</h3>
        <p><strong>Level:</strong> ${level}</p>
        <p>${member.phone}</p>
        <p>${member.address}</p>
        <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error("Spotlight error:", error);
  }
}

loadSpotlights();