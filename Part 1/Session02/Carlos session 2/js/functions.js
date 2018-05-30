function getNum3() {
	return Number(document.getElementById('num3').value);
}

function calculate() {
	var num3 = getNum3();
	var result = Number(document.getElementById('numone').value)
	 + Number(document.getElementById('numtwo').value)
	 + Number(document.getElementById('num3').value)
	var a = function() {
		var numfour;
		// I can access result, num3, and numfour;
	};
	msg = document.createElement('p');
	msg.innerHTML = `The sum of ${numone} plus ${numtwo} plus ${num3} equals ${result}.`;
	document.getElementById('tape').appendChild(msg);
}
function calculate2() {
	var num3 = getNum3();
	numtwo = numtwo + num3;
	console.log(numtwo);
}
//calculate();
//console.log(num);
