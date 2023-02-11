// option 1: directly in the HTML as attribute

// option 2: call function in attribute
function makeRed() {
	document.body.style.backgroundColor = "red";
}

// option 3: call function by id
const blue = document.getElementById("make-blue");
blue.onclick = makeBlue;

function makeBlue() {
	document.body.style.backgroundColor = "blue";
}

// option 4: call function by id shortcut
const purple = document.getElementById("make-purple");
purple.onclick = function purple() {
	document.body.style.backgroundColor = "purple";
};
