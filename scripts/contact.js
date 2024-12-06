// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const contentArea = document.querySelector('.contact');

console.log(contentArea);
const subBtn = document.getElementById('submit-button');
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

subBtn.addEventListener('click', e => {
	e.preventDefault();
	contentArea.innerHTML = '<p>Thank you for your message</p>';
	contentArea.style.fontSize = '24px';
	contentArea.style.textAlign = 'center';
});
