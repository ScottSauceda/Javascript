button.addEventListener('click', function() {
	return multiply(4, 5);
});

// make multiply a click event listener of the button
// element

function multiply(a, b) {
	
}

function voteForPet() {
	// get the voted for pet by using the selected option element
	var selectedPet = event.target.value;

	// get an array-like node list of options to loop through
	var options = document.querySelectorAll('#pet > option');
	for (let i = 0; i < options.length; i++) {
		if (options[i].selected) {
        }
    }

	
}

// Use the String.replace method to switch back and forth between the images.
function swapImg() {
	var bgRule = event.target.style.backgroundImage.replace('-1','-2');
	event.target.style.backgroundImage = bgRule;	
}
function restoreImg() {
	var bgRule = event.target.style.backgroundImage.replace('-2','-1');
	event.target.style.backgroundImage = bgRule;	
}

