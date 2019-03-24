# Launchpad
## Code
* HTML
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <table>
      <tr>
        <td name="q">
          L
          <h2>crash</h2>
        </td>
        <td name="w">
          A
          <h2>open hihat</h2>
        </td>
        <td name="e">
          U
          <h2>close hihat</h2>
        </td>
      </tr>
      <tr>
        <td name="r">
          N
          <h2>snare</h2>
        </td>
        <td name="t">
          C
          <h2>tomtom</h2>
        </td>
        <td name="y">
          H
          <h2>big tomtom</h2>
        </td>
      </tr>
      <tr>
        <td name="u">
          P
          <h2>ride</h2>
        </td>
        <td name="i">
          A
          <h2>kick</h2>
        </td>
        <td name="o">
          D
          <h2>floor tomtom</h2>
        </td>
      </tr>
    </table>
    <script src="js/script.js" charset="utf-8"></script>
  </body>
</html>
```
* CSS <br>
[Eric Meyer's reset.css](https://meyerweb.com/eric/tools/css/reset/reset.css)
```css
td {
  width: 150px;
  height: 160px;
  border-radius: 15%;
  background-color: silver;
  color: gold;
  font-size: 5em;
  text-align: center;
  padding-top: 50px;
}
table,td {
  border: 1px solid black;
}
table {
  background-color: blue;
  border-radius: 5%;
  border-spacing: 30px;
  margin: auto;
}
h2 {
  font-size: 0.3em;
  color: black;
}

```
* JS
```js
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
```
## How To Use
* Play it with mouse click <br>
* Play it with numpad
### [Demo Here](https://tuple0110.github.io/launchpad) <br>
### Audio File From: [Entry](https://playentry.org)
