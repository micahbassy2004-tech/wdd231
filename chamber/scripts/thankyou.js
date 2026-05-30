const params = new URLSearchParams(window.location.search);

document.querySelector("#output").innerHTML = `
  <p><strong>First Name:</strong> ${params.get("firstname")}</p>
  <p><strong>Last Name:</strong> ${params.get("lastname")}</p>
  <p><strong>Email:</strong> ${params.get("email")}</p>
  <p><strong>Phone:</strong> ${params.get("phone")}</p>
  <p><strong>Business Name:</strong> ${params.get("business")}</p>
  <p><strong>Membership:</strong> ${params.get("membership")}</p>
  <p><strong>Timestamp:</strong> ${params.get("timestamp")}</p>
`;