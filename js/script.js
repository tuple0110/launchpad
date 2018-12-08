var launchpad = document.getElementsByTagName("table")[0];
var launchpadButtonRaw = document.getElementsByTagName("td");
var launchpadButton = []
for (var i = 0; i < 9; i++) {
  launchpadButton.push(launchpadButtonRaw[i]);
}
var audio = ["big_tomtam", "close_hihat", "crash", "floor_tomtam", "kick", "open_hihat", "ride",
 "rim", "small_drum", "small_drum1", "tomtam"];

launchpad.addEventListener("click", e => {
  new Audio("audio/" + audio[launchpadButton.indexOf(e.target)] + ".mp3").play();
  e.target.style.backgroundColor = "gray";
  setTimeout(function(){
    e.target.style.backgroundColor = "silver";
  }, 100)
});

addEventListener("keydown", e => {
  switch (e.keyCode) {
    case 36:
      launchpadButton[0].click();
      break;
    case 38:
      launchpadButton[1].click();
      break;
    case 33:
      launchpadButton[2].click();
      break;
    case 37:
      launchpadButton[3].click();
      break;
    case 12:
      launchpadButton[4].click();
      break;
    case 39:
      launchpadButton[5].click();
      break;
    case 35:
      launchpadButton[6].click();
      break;
    case 40:
      launchpadButton[7].click();
      break;
    case 34:
      launchpadButton[8].click();
      break;
  }
});
