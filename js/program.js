let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");
let switchButton = document.getElementById("switchButton");
let forwards = document.getElementById("forwards");
let array1 = ["hi", "hi", "hi"];
let array2 = ["bye", "bye", "bye"];
let list1 = document.getElementById("list1");
let list2 = document.getElementById("list2");


window.onloadend = AskQuestions();

function AskQuestions() {
	let temp = "";
	for(i = 0; i < 3; i++) {
		array1[i] = window.prompt("enter a word: ");
	}
	
	for(i = 0; i < array1.length; i++) {
		let thing = document.createElement("li");
		thing.innerHTML = array1[i];
		list1.appendChild(thing);
	}

	array2 = array1.map(FlipLetters);
}

function Switch() {
	page1.style.display = "none";
	page2.style.display = "block";

	for(i = 0; i < array2.length; i++) {
		let thing = document.createElement("li");
		thing.innerHTML = array2[i];
		list2.appendChild(thing);
	}

}

function FlipLetters(string) {
	let cake = [];
	let j = "";
	let k = [];
	let output = "";

	j = string;
	cake = j.split("");
	k = cake[0]
	cake[0] = cake[(cake.length)-1]
	cake[((cake.length)-1)] = k;
	output = cake.join("");

	return output;
}

switchButton.addEventListener("click", Switch);


