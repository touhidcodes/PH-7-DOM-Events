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

// option 5: add event listener
const makePinkBtn = document.getElementById("make-pink");

makePinkBtn.addEventListener("click", makePinkColor);
function makePinkColor() {
	document.body.style.backgroundColor = "pink";
}

// option 6: add event listener with function
const makeGreenBtn = document.getElementById("make-green");

makeGreenBtn.addEventListener("click", function makeGreenColor() {
	document.body.style.backgroundColor = "green";
});

// Option 7: Shortcut of handle event
document.getElementById("make-grey").addEventListener("click", () => {
	document.body.style.backgroundColor = "grey";
});
