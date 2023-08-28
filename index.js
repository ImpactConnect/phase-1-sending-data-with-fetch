// Add your code here
const id = document.getElementById(idValue);
const error = document.getElementById(errorMsg);
function submitData(name, email) {
  const userData = {
    name: name,
    email: email,
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (userData) {
      const id = userData.id;
      document.body.innerHTML += `<p>New user ID: ${id}</p>`;
    })
    .catch(function (error) {
      document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
}
