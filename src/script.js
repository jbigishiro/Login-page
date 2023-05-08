let objPeople = [
  {
    name: "Samuel",
    email: "samuel@gmail.com",
    username: "sam",
    password: "password1",
  },
  {
    name: "Mattew",
    email: "mattew@gmail.com",
    username: "matt",
    password: "password2",
  },
  {
    name: "justin Big",
    email: "justin@gmail.com",
    username: "justin",
    password: "password3",
  },
  {
    name: "Jaden",
    email: "jaden@gmail.com",
    username: "jaden",
    password: "password4",
  },
  {
    name: "Janet",
    email: "janet@gmail.com",
    username: "janet",
    password: "password5",
  },
];

// login functionality
document.getElementById("loginForm").addEventListener("submit", login);
function login(e) {
  e.preventDefault();
  let username = e.target.username.value;
  let password = e.target.password.value;

  for (i = 0; i < objPeople.length; i++) {
    if (
      username === objPeople[i].username &&
      password === objPeople[i].password
    ) {
      alert(username + " is logged in!!!");
      return;
    }
  }
  alert("incorrect username or password");
}

// register functionality
document.getElementById("signupForm").addEventListener("submit", signup);
function signup(e) {
  e.preventDefault();
  let name = e.target.name.value;
  let email = e.target.email.value;
  let username = e.target.username.value;
  let password = e.target.password.value;
  let reenterPassword = e.target.reenterpassword.value;
  let newUser = {
    name: name,
    email: email,
    username: username,
    password: password,
  };
  for (let i = 0; i < objPeople.length; i++) {
    if (email === objPeople[i].email) {
      alert("That email is already in use, please choose another");
    } else if (username === objPeople[i].username) {
      alert("That username is already in use, please choose another");
    } else if (password !== reenterPassword) {
      alert("The password you entered doesn't match");
    } else {
      objPeople.push(newUser);
    }
    return;
  }
}
