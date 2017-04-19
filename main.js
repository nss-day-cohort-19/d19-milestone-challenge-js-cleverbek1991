console.log('hello!');
var char = document.getElementById('char');
var height = document.getElementById('height');
var grow = document.getElementById('grow');
var clear = document.getElementById('clear');
var heightValue;
var charValue;

/* Grow It Function */
function growIt () {
	heightValue = parseInt(height.value);
	charValue = char.value;
	console.log(heightValue);
	var treeObj = {height: heightValue, char: charValue};
	if ((isNaN(heightValue)) || (charValue == '')) {
		alert('Both Fields Must Have a Value')
	}
	for (var i = 1; i <= heightValue; i++) {
		console.log(((' ').repeat(heightValue - i)) + (treeObj.char).repeat(i - 1) + treeObj.char.repeat(i));
	}
}
grow.addEventListener('click', growIt);
height.addEventListener('keypress', growIt);

/* Clear Function */
function clearIt () {
	document.getElementById('char').value = '';
	document.getElementById('height').value = '';
}
clear.addEventListener('click', clearIt);