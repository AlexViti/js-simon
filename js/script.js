const inputContainer = document.querySelector('.input');
const outputContainer = document.querySelector('.output');
const main = document.querySelector('main');

const btnPlay = document.querySelector('button');
btnPlay.addEventListener('click', play);
document.addEventListener('keydown', play);

const outputNumbers = 5;
const timer = 30000; //30 seconds
outputContainer.innerHTML = `Premi il bottone gioca o qualsiasi tasto per giocare`

function play() {
	main.removeChild(btnPlay);
	outputContainer.innerHTML = '';
	document.removeEventListener('keydown', play);
	const randomNumberArr = randomArr(outputNumbers, 1, 99);
	const numbersContainer = document.createElement('div');

	for (let i = 0; i < randomNumberArr.length; i++) {
		const numberSpan = document.createElement('span');
		numberSpan.innerHTML = randomNumberArr[i];
		numbersContainer.append(numberSpan);
	}
	outputContainer.append(numbersContainer);
	const inputNumbers = [];
	setTimeout(function() {
		outputContainer.removeChild(numbersContainer);
		setTimeout(check, 250);
	}, timer)

	function check() {
		for (let i = 0; i < outputNumbers; i++) {
			let inputNumber;
			let message = `Inserisci ${i + 1}° numero`;
			do {
				inputNumber = parseInt(prompt(message));
				if (inputNumbers.includes(inputNumber)) message = 'Inserisci un numero diverso';
				else message = 'Inserisci un numero compreso fra 1 e 99';
			} while (inputNumbers.includes(inputNumber) || inputNumber < 1 || inputNumber > 99);
			inputNumbers.push(inputNumber);
		}
		const guessedNumbers = [];
		for (let i = 0; i < randomNumberArr.length; i++) {
			if (randomNumberArr[i] == inputNumbers[i]) {
				guessedNumbers.push(randomNumberArr[i]);
			}
		}
		let numbersString = guessedNumbers.toString().replace(/,/g, ', ');
		switch (guessedNumbers.length) {
			case 0:
				outputContainer.innerHTML = `Non hai indovinato nessun numero`;
				break;
			case 1:
				outputContainer.innerHTML = `Hai indovinato solo il numero ${numbersString}`;
				break;
			case outputNumbers:
				outputContainer.innerHTML = `Complimenti, hai indovinato tutti i numeri <br> ${numbersString}`;
				break;
			default:
				outputContainer.innerHTML = `Hai indovinato ${guessedNumbers.length} numeri: ovvero i numeri: ${numbersString}`;
		}
		main.append(btnPlay);
	}
}

function randomArr(length, min, max) {
	const randomArr = [];
	while (randomArr.length < length) {
		const randomNumber = randomInt(min, max);
		if (!randomArr.includes(randomNumber)) {
			randomArr.push(randomNumber);
		}
	}
	return randomArr;
}

// Math functions
function randomInt(min, max) {
	const randomNumber = Math.floor(Math.random() * max + min);
	return randomNumber;
}