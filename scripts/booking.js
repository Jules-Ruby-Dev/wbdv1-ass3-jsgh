/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

//  Used to access rate values when calculating weekly costs
const rates = {
	full: 35,
	half: 20,
};

// Initialize currentRate
let currentRate = rates['full'];
console.log(currentRate);
// Create a set to hold days selected
// This will enforce unique values
const daysSelected = new Set();
// store NodeList of weekday button elements
const dayBtns = document.querySelectorAll('.day-selector li');
console.log(dayBtns);

// store half/full day button elements
const rateBtns = [
	document.getElementById('half'),
	document.getElementById('full'),
];
console.log(rateBtns);
console.log(rateBtns.length);

const clearBtn = document.getElementById('clear-button');
console.log(clearBtn);

const costEl = document.getElementById('calculated-cost');

// console.log(halfDayBtn, fullDayBtn);

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
const toggleClicked = eventTarget => {
	console.log(eventTarget.textContent);
	console.log(rateBtns.includes(eventTarget));

	if (rateBtns.includes(eventTarget)) {
		// if
	} else {
		eventTarget.classList.toggle('clicked');

		if (daysSelected.has(eventTarget.textContent)) {
			console.log(eventTarget.textContent);
			daysSelected.delete(eventTarget.textContent);
			console.log(daysSelected);
		} else {
			daysSelected.add(eventTarget.textContent);
			console.log(daysSelected);
		}
	}
};

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
const clearDays = () => {
	daysSelected.clear();
};

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

const calculate = () => {
	const days = daysSelected.size;
	const calculatedCost = days * currentRate;
	costEl.innerText = calculatedCost;
};

for (const btn of dayBtns) {
	btn.addEventListener('click', ({ target }) => {
		toggleClicked(target);
		calculate();
	});
}

rateBtns.forEach(btn => {
	console.log(btn);
	btn.addEventListener('click', ({ target }) => {
		toggleClicked(target);
		calculate();
	});
});

clearBtn.addEventListener('click', () => {
	clearDays();
	calculate();
});
