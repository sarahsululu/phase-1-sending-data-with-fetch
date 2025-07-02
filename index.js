// Add your code here
function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  })
  .then(response => response.json())
  .then(data => {
    // Append the returned id to the DOM
    const body = document.querySelector("body");
    const idElement = document.createElement("p");
    idElement.textContent = `ID: ${data.id}`;
    body.appendChild(idElement);
  })
  .catch(error => {
    // Append the error message to the DOM
    const body = document.querySelector("body");
    const errorElement = document.createElement("p");
    errorElement.textContent = error.message;
    body.appendChild(errorElement);
  });
}
