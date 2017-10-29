var modal = document.getElementById('myModal');
var btn = document.getElementById("button");
var span = document.getElementsByClassName("close")[0];

// Display Modal
btn.onclick = function() {
	modal.style.display = "block";
}

// Remove Modal
span.onclick = function() {
    modal.style.display = "none";
}

// Remove Modal 
window.onclick = function(event) {
	// Check if modal's clicked
    if (event.target == modal) {
    	modal.style.display = "none";
    }
}