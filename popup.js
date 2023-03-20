document.addEventListener("DOMContentLoaded", function() {
  function generateSocialMediaUsername(keywords, year) {
    var adjectives = ["happy", "silly", "clever", "funny", "kind", "crazy", "friendly"];
    var nouns = ["user", "account", "profile", "person", "human", "buddy", "pal"];
    var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    var noun = nouns[Math.floor(Math.random() * nouns.length)];
    var username = adjective + "_" + noun;
    if (keywords !== "") {
      username = keywords + "_" + username;
    }
    if (year !== "") {
      username += "_" + year;
    }
    return username;
  }

  function generateGameUsername(name) {
    var adjectives = ["swift", "fierce", "brave", "mighty", "sneaky", "clever", "skillful"];
    var nouns = ["warrior", "mage", "ninja", "samurai", "archer", "knight", "sorcerer"];
    var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    var noun = nouns[Math.floor(Math.random() * nouns.length)];
    var username = adjective + "_" + noun;
    if (name !== "") {
      username += "_" + name;
    }
    return username;
  }

  function submitFeedback() {
    var rating = document.getElementById("rating").value;
    var comments = document.getElementById("comments").value;
    console.log("Rating: " + rating);
    console.log("Comments: " + comments);
    document.getElementById("feedback").style.display = "none";
  }

  document.getElementById("social-media").addEventListener("click", function() {
    document.getElementById("inputs").innerHTML = `
      <label for="keywords">Enter your desired keywords:</label>
      <input type="text" id="keywords" name="keywords"><br><br>
      <label for="year">Enter your year of birth:</label>
      <input type="text" id="year" name="year"><br><br>
    `;
  });

  document.getElementById("game").addEventListener("click", function() {
    document.getElementById("inputs").innerHTML = `
      <label for="name">Enter your gamer name:</label>
      <input type="text" id="name" name="name"><br><br>
    `;
  });

  document.getElementById("generate").addEventListener("click", function() {
    var platform = document.querySelector('input[name="platform"]:checked').value;
    var username = "";
    if (platform === "social-media") {
      var keywords = document.getElementById("keywords").value;
      var year = document.getElementById("year").value;
      username = generateSocialMediaUsername(keywords, year);
    } else if (platform === "game") {
      var name = document.getElementById("name").value;
      username = generateGameUsername(name);
    }
    document.getElementById("username").textContent = username;
    document.getElementById("feedback").style.display = "block";
  });

  document.getElementById("submit").addEventListener("click", function() {
    submitFeedback();
  });
});
