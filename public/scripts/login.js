document.getElementById('loginForm').addEventListener('submit',function(e){
  e.preventDefault();
  
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  // to do:::  AJAX request to server

console.log("Login form submitted", username);
});