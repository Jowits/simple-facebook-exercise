var database = [
  { username: "tom", password: "smith" },
  { username: "sally", password: "123" },
  { username: "ingrid", password: "abc" }
];
var newsFeed = [
  { username: "Bobby", timeline: "So tired of life" },
  { username: "Sally", timeline: "Sooo coool" }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong username and password!");
  }
}

signIn(userNamePrompt, passwordPrompt);
