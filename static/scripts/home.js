function validateForm() {
	var name = document.getElementById('nameInput').value;
	var species = document.getElementById('speciesInput').value;
	var age = document.getElementById("ageInput").value;
	
	if (!name.length || !species.length || !age.length) {
		alert("Fieds must not be blank.");
		return false;
	}
	
	if (isNaN(parseInt(age)) || typeof parseInt(age) !== 'number') {
		alert('Age must be a number.');
		return false;
	}
	
	return true;
};

function onClickChangeColor() {
	var newColor = document.getElementById("newTextColor").value;
	var body = document.getElementById('body');
	body.style.color = newColor;
};