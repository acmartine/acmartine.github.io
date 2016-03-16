var date = new Date();
var weekday = date.getDay();

switch(weekday) {
	case 1:
		document.getElementById('locale').innerHTML = "City Hall Plaza, Fisher Park";
		break;
	case 2,4:
		document.getElementById('locale').innerHTML = "South End - Harrison Ave and East Concord St, by BMC";
		break;
	case 3,5:
		document.getElementById('locale').innerHTML = "Back Bay - Trinity Place";
		break;
	case 6:
		document.getElementById('locale').innerHTML = "Dudley Square at Dudley Street";
		break;
	case 0:
		document.getElementById('locale').innerHTML = "Closed on Sundays";
		break;
	default:
		document.getElementById('locale').innerHTML = "Visit our Twitter for today's location!";
}