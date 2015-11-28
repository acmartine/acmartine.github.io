//Try switch statements instead of if else
function myFunction() {
	var date = new Date(); //creates a Date() object
	var weekday = date.getDay(); //getDay method for the Date() object. Tells you the index and assigns it to n
		if (weekday == 1) {
			document.getElementById('locale').innerHTML = "City Hall Plaza, Fisher Park";
	} //options of index of n
		else if (weekday == 2) {
			document.getElementById('locale').innerHTML = "South End - Harrison Ave and East Concord St, by BMC";
	}
		else if (weekday == 3) {
			document.getElementById('locale').innerHTML = "Back Bay - Trinity Place";
	}
		else if (weekday == 4) {
			document.getElementById('locale').innerHTML = "South End - Harrison Ave and East Concord St, by BMC";
	}
		else if (weekday == 5) {
			document.getElementById('locale').innerHTML = "Back Bay - Trinity Place";
	}
		else if (weekday == 6) {
			document.getElementById('locale').innerHTML = "Dudley Square at Dudley Street";
	}
		else if (weekday == 0) {
			document.getElementById('locale').innerHTML = "Closed on Sundays";
	}
		else {
			document.getElementById('locale').innerHTML = "What dimension are you even in?";
		}
}
//CALL THE DAMN FUNCTION AFTER YOU WRITE IT!!!
myFunction();