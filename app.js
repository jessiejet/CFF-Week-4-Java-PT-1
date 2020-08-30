letsGoShopping();

function letsGoShopping() {
  var friendName;
  var shopping;
  var whatIsTheBudget;

  friendName = prompt("Welcome to my Text Game! Let's start of by taking your name");
  //   debugger
  document.getElementById("friendsName").innerHTML = friendName;

  var shopping = prompt("Would you like to go shopping?");

  if (shopping.toLowerCase() === "maybe") {
    alert(
      "Oh C'mon we would have soooo much fun!!"
    );

    document.getElementById("rsvpShopping").innerHTML = shopping;
    document.getElementById("spending").style.display = "none";
  } else if (shopping.toLowerCase() === "no") {
    alert("That's a shame I was really looking forward to shopping till we dropped!)");

    document.getElementById("rsvpShopping").innerHTML = shopping;
    document.getElementById("spending").style.display = "none";
  } else if (shopping.toLowerCase() === "yes") {
    document.getElementById("rsvpShopping").innerHTML = shopping;

    var whatIsTheBudget = prompt("Let's go! How much would you like to spend?");

    if (whatIsTheBudget >= 35) {
      alert("Show me the money$$$$");
      document.getElementById("budget").innerHTML = whatIsTheBudget;
    } else if (whatIsTheBudget < 35) {
      alert("Right! Let's stick to a tight budget");

      document.getElementById("budget").innerHTML = whatIsTheBudget;
    } else if (typeof whatIsTheBudget === "string") {
      whatIsTheBudget = prompt("Numbers only, please.");
    }

    console.log(friendName);
    console.log(shopping);
    console.log(whatIsTheBudget);
  }
}