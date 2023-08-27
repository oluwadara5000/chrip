const openPanel = document.getElementById("open-panel")
const closePanel = document.getElementById("close-panel");
const panel = document.getElementById("panel");
const panelList = document.getElementById("panel-list");

closePanel.style.display = "none"

// OPEN HAMBURGER MENU 
openPanel.addEventListener("click", function () {
  document.getElementById("panel").style.width = "300px";
  document.getElementById("panel").style.padding = "35px";
  document.getElementById("panel-list").style.display = "flex";
  document.getElementById("close-panel").style.display = "block";
  document.getElementById("open-panel").style.display = "none";
});

// CLOSE HAMBURGER MENU
closePanel.addEventListener("click", function () {
  document.getElementById("panel").style.width = "0";
  document.getElementById("panel").style.padding = "0";
  document.getElementById("panel-list").style.display = "none";
  document.getElementById("close-panel").style.display = "none";
  document.getElementById("open-panel").style.display = "block";
});
