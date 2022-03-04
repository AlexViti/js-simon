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
	btnPlay.style.display = 'none';
	outputContainer.innerHTML = '';
	document.removeEventListener('keydown', play);
	const randomNumberArr = randomArr(outputNumbers, 1, 20);
	console.log(randomNumberArr);
	const numbersContainer = document.createElement('div');
	for (let i = 0; i < randomNumberArr.length; i++) {
		const numberSpan = document.createElement('span');
		numberSpan.innerHTML = randomNumberArr[i];
		numbersContainer.append(numberSpan);
	}
	outputContainer.append(numbersContainer);
	const inputNumbers = [];
	setTimeout(function() {
		numbersContainer.style.display = 'none';
		setTimeout(check, 500);
	}, timer)

	function check() {
		for (let i = 0; i < outputNumbers; i++) {
			const inputNumber = parseInt(prompt(`Inserisci ${i + 1}° numero`));
			inputNumbers.push(inputNumber);
		}
		const guessedNumbers = [];
		for (let i = 0; i < randomNumberArr.length; i++) {
			if (randomNumberArr[i] == inputNumbers[i]) {
				guessedNumbers.push(randomNumberArr[i]);
			}
		}
		outputContainer.innerHTML = `Hai indovinato ${guessedNumbers.length} numeri: ovvero i numeri ${guessedNumbers}`;
		
		btnPlay.style.display = 'initial';
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