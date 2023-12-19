document.getElementById('newUserForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  let userData = {
    username: username,
    email: email,
    password: password
  };
  fetch('/register', { // update with actual path ....
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
});
  

});

