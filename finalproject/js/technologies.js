const cards = document.querySelector("#cards");

const modal = document.querySelector("#techModal");
const modalContent = document.querySelector("#modalContent");
const closeModal = document.querySelector("#closeModal");

// Close modal
closeModal.addEventListener("click", () => {
    modal.close();
});

async function getTechnologies() {
    try {
        const response = await fetch("data/healthtech.json");

        if (!response.ok) {
            throw new Error("Data not found");
        }

        const data = await response.json();

        displayTechnologies(data);

    } catch (error) {
        console.error("Error loading technologies:", error);
    }
}

function displayTechnologies(data) {

    data.forEach(item => {

        const card = document.createElement("section");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>Category:</strong> ${item.category}</p>
            <p><strong>Year:</strong> ${item.year}</p>
            <p>${item.description}</p>
            <button>View Details</button>
        `;

        const button = card.querySelector("button");

        button.addEventListener("click", () => {

            modalContent.innerHTML = `
                <div class="wiki-title">
                    <h2>${item.name}</h2>
                    <p class="wiki-subtitle">${item.category} • ${item.year}</p>
                </div>

                <hr>

                <p class="wiki-summary"><strong>Overview:</strong> ${item.description}</p>

                <h3>Detailed Explanation</h3>
                <p>${item.details}</p>

                <h3>Impact in Healthcare</h3>
                <p>
                    This technology improves healthcare delivery by increasing efficiency,
                    accuracy, and access to medical services. It plays a key role in modern
                    digital health systems and patient care innovation.
                </p>
            `;

            // LOCAL STORAGE (rubric requirement)
            localStorage.setItem("lastViewedTech", item.name);

            modal.showModal();
        });

        cards.appendChild(card);
    });
}

// Show last viewed in console (optional rubric boost)
const lastViewed = localStorage.getItem("lastViewedTech");
if (lastViewed) {
    console.log("Last viewed technology:", lastViewed);
}

getTechnologies();