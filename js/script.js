var launchpad = document.getElementsByTagName("table")[0];
var launchpadButtonRaw = document.getElementsByTagName("td");
var launchpadButton = []
for (var i = 0; i < 9; i++) {
  launchpadButton.push(launchpadButtonRaw[i]);
}
var audio = ["crash", "open_hihat", "close_hihat", "snare", "tomtom", "big_tomtom", "ride",
 "kick", "floor_tomtom"];
var keys = [36, 38, 33, 37, 12, 39, 35, 40, 34];

launchpad.addEventListener("click", e => {
  var sound = audio[launchpadButton.indexOf(e.target)];
  console.log(sound);
  new Audio("audio/" + sound + ".mp3").play();
  e.target.style.backgroundColor = "gray";
  setTimeout(function(){
    e.target.style.backgroundColor = "silver";
  }, 100)
});

addEventListener("keydown", e => {
  launchpadButton[keys.indexOf(e.keyCode)].click();
});
