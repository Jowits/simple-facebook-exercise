var databse = [{ username: "tom", password: "smith" }];
var newsFeed = [
  { username: "Bobby", timeline: "So tired of life" },
  { username: "Sally", timeline: "Sooo coool" }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
  if (user === databse[0].username && pass === databse[0].password) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password!");
  }
}

signIn(userNamePrompt, passwordPrompt);
