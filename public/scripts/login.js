document.getElementById('loginForm').addEventListener('submit',function(e) {
  e.preventDefault();
  
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  const data = {
    username: username,
    password: password
  };

  document.getElementById('loginForm').addEventListener('submit',function(e) {
    e.preventDefault();
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
  
    const data = {
      username: username,
      password: password
    };
  
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  
      .then(response => response.json())
      .then(data => {
        console.log('Success', data);
      })
  
      .catch((error) => {
        console.error('Error', error);
      });
  
    console.log("Login form submitted", username);
  });
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

    .then(response => response.json())
    .then(data => {
      console.log('Success', data);
    })

    .catch((error) => {
      console.error('Error', error);
    });

  console.log("Login form submitted", username);
});