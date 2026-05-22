async function loadSpotlights() {
  const response = await fetch("data/members.json");
  const members = await response.json();

  const filtered = members.filter(m =>
    m.membership === "gold" || m.membership === "silver"
  );

  const shuffled = filtered.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  const container = document.getElementById("spotlight-container");

  selected.forEach(member => {
    container.innerHTML += `
      <div class="card">
        <img src="${member.logo}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.membership}</p>
        <p>${member.phone}</p>
        <p>${member.address}</p>
        <a href="${member.website}" target="_blank">Visit</a>
      </div>
    `;
  });
}

loadSpotlights();