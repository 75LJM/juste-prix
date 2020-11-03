let number = Math.round(Math.random() * 100);
console.log(number);
let hits = 10;

document.addEventListener('DOMContentLoaded', function() {
	console.log('Page chargée !');
	document.getElementById('moreAlert').style.display = 'none';
	document.getElementById('lessAlert').style.display = 'none';
	document.getElementById('loseAlert').style.display = 'none';
	document.getElementById('winAlert').style.display = 'none';

	document.getElementById('hits').innerText = hits;

	document.getElementById('submitBtn')
	.addEventListener('click', onSubmitAnswer);

	document.getElementById('resetBtn')
	.addEventListener('click', () => {

		document.getElementById('submitBtn').disabled = false;
		number = Math.round(Math.random() * 100);
		console.log(number);

		hits = 10;
		document.getElementById('hits').innerText = hits;
		
		document.getElementById('reponseInput').value = '';
		document.getElementById('reponseInput').focus();
		document.getElementById('moreAlert').style.display = 'none';
		document.getElementById('lessAlert').style.display = 'none';
		document.getElementById('loseAlert').style.display = 'none';
		document.getElementById('winAlert').style.display = 'none';

	});

});

function onSubmitAnswer() {

	const reponse = document.getElementById('reponseInput').value;

	if (number > reponse) {

		document.getElementById('moreAlert').style.display = 'block';
		document.getElementById('lessAlert').style.display = 'none';
		document.getElementById('loseAlert').style.display = 'none';
		document.getElementById('winAlert').style.display = 'none';

	} else if (number < reponse) {

		document.getElementById('moreAlert').style.display = 'none';
		document.getElementById('lessAlert').style.display = 'block';
		document.getElementById('loseAlert').style.display = 'none';
		document.getElementById('winAlert').style.display = 'none';

	} else {

		document.getElementById('submitBtn').disabled = true;
		document.getElementById('moreAlert').style.display = 'none';
		document.getElementById('lessAlert').style.display = 'none';
		document.getElementById('loseAlert').style.display = 'none';
		document.getElementById('winAlert').style.display = 'block';

	}

	document.getElementById('reponseInput').value = '';
	document.getElementById('reponseInput').focus();

	hits--;
	document.getElementById('hits').innerText = hits;
	if (hits === 0) {
		document.getElementById('submitBtn').disabled = true;
		document.getElementById('moreAlert').style.display = 'none';
		document.getElementById('lessAlert').style.display = 'none';
		document.getElementById('loseAlert').style.display = 'block';
		document.getElementById('winAlert').style.display = 'none';
	}

}