// Basic login and page switching logic
document.getElementById('login-form').onsubmit = function(e) {
  e.preventDefault();
  var username = document.getElementById('username').value.trim();
  var password = document.getElementById('password').value.trim();
  if (username === 'student1' && password === 'student1') {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('assessment-container').style.display = '';
  } else {
    document.getElementById('login-error').textContent = 'Invalid username or password.';
  }
};

// Assessment submission logic
document.getElementById('assessment-form').onsubmit = function(e) {
  e.preventDefault();
  document.getElementById('assessment-container').style.display = 'none';
  document.getElementById('result-container').style.display = '';
};