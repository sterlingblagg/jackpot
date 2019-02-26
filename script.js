// el.src.match("images/lemon_slot.PNG")
// el.src = "images/orange_slot.PNG";
// el.src = "images/cherry_slot.PNG";
// document.getElementById('you-win').play();
// el.src.match("images/cherry_slot.PNG")
// el.src = "images/lemon_slot.PNG";
// el.src.match("images/orange_slot.PNG")

// cycle images in the following order: CHERRY --> LEMON --> ORANGE
a = document.getElementById("slot1");
b = document.getElementById("slot2");
c = document.getElementById("slot3");
var mySound = document.getElementById('you-win');

function nextImage(el){
	if (el.src.match("images/cherry_slot.PNG")){
		 el.src = "images/lemon_slot.PNG";
	} else if ( el.src.match("images/lemon_slot.PNG")){
		 el.src = "images/orange_slot.PNG";
	} else if (el.src.match("images/orange_slot.PNG")){
		 el.src = "images/cherry_slot.PNG";
	} else {
		// do nothing
	}
}
function nextImage2(el){
	if (el.src.match("images/lemon_slot.PNG")){
		 el.src = "images/bar_slot.PNG";
	} else if ( el.src.match("images/bar_slot.PNG")){
		 el.src = "images/cherry_slot.PNG";
	} else if (el.src.match("images/cherry_slot.PNG")){
		 el.src = "images/lemon_slot.PNG";
	} else {

	}
}
function nextImage3(el){
	if (el.src.match("images/orange_slot.PNG")){
		 el.src = "images/cherry_slot.PNG";
	} else if ( el.src.match("images/cherry_slot.PNG")){
		 el.src = "images/seven_slot.PNG";
	} else if (el.src.match("images/seven_slot.PNG")){
		 el.src = "images/watermelon_slot.PNG";
	} else if (el.src.match("images/watermelon_slot.PNG")){
		 el.src = "images/orange_slot.PNG";
	} else {

	}
}

function checkSlot(el){
	if (a.src.match("cherry_slot") && b.src.match("cherry_slot") && c.src.match("cherry_slot")){
		mySound.play();
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
		console.log("You win!");

	} else{
	}
}